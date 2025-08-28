// genInterfaces.ts
import { promises as fs } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import * as Effect from "effect/Effect";
import type { OpenAPIV3 } from "../index.d.ts";
import {
  analyzeSchemaUsage,
  generateInterfaceCode,
  determineInterfaceName,
  generateHeaderComment,
  logGenerationResults,
  type SchemaUsage,
} from "./generators/index.ts";

const isPlainObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null && !Array.isArray(x);

const OPENAPI_30_VERSIONS = ["3.0.0", "3.0.1", "3.0.2", "3.0.3"] as const;

const isOpenApi30 = (s: unknown): s is OpenAPIV3.Document["openapi"] =>
  typeof s === "string" &&
  (OPENAPI_30_VERSIONS as readonly string[]).includes(s);

const isComponentsObject = (x: unknown): x is OpenAPIV3.ComponentsObject =>
  isPlainObject(x);

const isPathsObject = (x: unknown): x is OpenAPIV3.PathsObject =>
  isPlainObject(x);

const toError = (e: unknown): Error =>
  e instanceof Error ? e : new Error(String(e));

const readFileE = (p: string) =>
  Effect.tryPromise<string, Error>({
    try: () => fs.readFile(p, "utf8"),
    catch: toError,
  });

const writeFileE = (p: string, d: string) =>
  Effect.tryPromise<void, Error>({
    try: () => fs.writeFile(p, d, "utf8"),
    catch: toError,
  });

const mkdirE = (p: string) =>
  Effect.tryPromise<void, Error>({
    try: () => fs.mkdir(p, { recursive: true }).then(() => undefined),
    catch: toError,
  });

const decodeOpenApiE = (
  u: unknown
): Effect.Effect<
  Pick<OpenAPIV3.Document, "openapi" | "components" | "paths">,
  Error,
  never
> =>
  Effect.try({
    try: () => {
      if (!isPlainObject(u)) throw new Error("Root must be an object");
      const openapiUnknown = u["openapi"];
      if (!isOpenApi30(openapiUnknown))
        throw new Error(
          "`openapi` must be one of: " + OPENAPI_30_VERSIONS.join(", ")
        );
      const componentsUnknown: OpenAPIV3.ComponentsObject | unknown =
        u["components"];
      if (
        componentsUnknown !== undefined &&
        !isComponentsObject(componentsUnknown)
      )
        throw new Error("`components` must be an object when present");
      const pathsUnknown = u["paths"];
      if (!isPathsObject(pathsUnknown))
        throw new Error("`paths` must be an object");
      return {
        openapi: openapiUnknown,
        components: componentsUnknown,
        paths: pathsUnknown,
      };
    },
    catch: toError,
  });

const isRefObject = (
  v: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): v is OpenAPIV3.ReferenceObject =>
  typeof v === "object" && v !== null && "$ref" in v;

const isReferencedByOtherSchemas = (
  schemaName: string,
  schemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): boolean => {
  const refPattern = `#/components/schemas/${schemaName}`;
  for (const schema of Object.values(schemas)) {
    if (typeof schema !== "object" || schema === null) continue;
    const s = JSON.stringify(schema);
    if (s.includes(refPattern)) return true;
    if (s.includes('"extends":') && s.includes(schemaName)) return true;
  }
  return false;
};

const isBaseInterface = (
  schema: OpenAPIV3.SchemaObject,
  schemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): boolean => {
  const json = JSON.stringify(schema);
  if (json.includes('"x-abstract":true')) return true;
  if ("allOf" in schema && schema.allOf && schema.allOf.length > 0) {
    const hasRef = schema.allOf.some(
      (i) => typeof i === "object" && i !== null && "$ref" in i
    );
    const minimalProps =
      !("properties" in schema) ||
      !schema.properties ||
      Object.keys(schema.properties).length === 0;
    if (hasRef && minimalProps) return true;
  }
  const allStr = JSON.stringify(schemas);
  const title = typeof schema.title === "string" ? schema.title : "";
  if (title.length > 0) {
    const refCount = (
      allStr.match(/#\/components\/schemas\/[^"]*/g) || []
    ).filter((r) => r.includes(title)).length;
    if (refCount > 2) return true;
  }
  return false;
};

const generateInterfacesFrom = (
  components: Partial<OpenAPIV3.ComponentsObject>,
  paths: OpenAPIV3.PathsObject
): string | undefined => {
  const schemas = components.schemas;
  if (!schemas) {
    console.log("No schemas found in components");
    return undefined;
  }
  const schemaUsage = analyzeSchemaUsage(paths);
  let interfacesOutput = "";
  const foundInterfaces: string[] = [];
  const processedSchemas = new Set<string>();
  const interfaceSchemas: Array<{
    name: string;
    schema: OpenAPIV3.SchemaObject;
    usage: SchemaUsage;
  }> = [];

  for (const [schemaName, schema] of Object.entries(schemas)) {
    if (
      isRefObject(schema) ||
      (Array.isArray(schema.enum) &&
        !("properties" in schema) &&
        !("allOf" in schema))
    ) {
      continue;
    }
    const isObjectType =
      schema.type === "object" ||
      ("properties" in schema && typeof schema.properties === "object") ||
      ("allOf" in schema && Array.isArray(schema.allOf)) ||
      ("oneOf" in schema && Array.isArray(schema.oneOf)) ||
      ("anyOf" in schema && Array.isArray(schema.anyOf));

    const looksBaseByName =
      schemaName.includes("Base") ||
      schemaName.includes("Entity") ||
      schemaName.includes("Audited");

    if (
      isObjectType ||
      JSON.stringify(schema).includes('"x-abstract":true') ||
      isReferencedByOtherSchemas(schemaName, schemas) ||
      looksBaseByName
    ) {
      const usage = schemaUsage.get(schemaName) ?? {
        name: schemaName,
        isRequest: false,
        isResponse: false,
        isQuery: false,
        httpMethods: [],
      };
      interfaceSchemas.push({ name: schemaName, schema, usage });
    }
  }

  interfaceSchemas.sort((a, b) => {
    const aIsBase = isBaseInterface(a.schema, schemas);
    const bIsBase = isBaseInterface(b.schema, schemas);
    if (aIsBase && !bIsBase) return -1;
    if (!aIsBase && bIsBase) return 1;
    return 0;
  });

  const interfaceNameLookup = new Map<string, string>();
  for (const { name: schemaName, schema, usage } of interfaceSchemas) {
    const interfaceName = determineInterfaceName(schemaName, usage, schema);
    interfaceNameLookup.set(schemaName, interfaceName);
  }

  for (const { name: schemaName, schema, usage } of interfaceSchemas) {
    const interfaceName = determineInterfaceName(schemaName, usage, schema);
    const interfaceCode = generateInterfaceCode(
      interfaceName,
      schema,
      schemas,
      interfaceNameLookup
    );
    interfacesOutput += interfaceCode + "\n\n";
    foundInterfaces.push(interfaceName);
    processedSchemas.add(schemaName);
  }

  if (foundInterfaces.length === 0) {
    console.log("No interfaces found in the swagger file");
    return undefined;
  }

  const header = generateHeaderComment(foundInterfaces, new Date());
  const finalOutput = header + interfacesOutput;
  logGenerationResults(foundInterfaces);
  return finalOutput;
};

const main = Effect.gen(function* () {
  const swaggerPath = process.argv[2] ?? "./swagger.json";
  const outDir = join(process.cwd(), "generated");
  const outFile = join(outDir, "interfaces.ts");

  const raw = yield* readFileE(swaggerPath);
  const json: unknown = JSON.parse(raw);
  const doc = yield* decodeOpenApiE(json);

  const output = generateInterfacesFrom(doc.components ?? {}, doc.paths);
  if (!output) {
    console.log("Nothing to write");
    return;
  }

  yield* mkdirE(outDir);
  yield* writeFileE(outFile, output);

  console.log("✅ Interfaces generated");
  console.log(`📝 Output saved to: ${outFile}`);
});

Effect.runPromise(main).catch((e) => {
  console.error(e);
  process.exit(1);
});
