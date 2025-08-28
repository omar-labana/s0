// use-my-types-effect.ts
import { promises as fs } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import * as Effect from "effect/Effect";
import type { OpenAPIV3 } from "../index.d.ts";

// ——— tiny runtime type helpers ——— //
const isPlainObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null && !Array.isArray(x);

const OPENAPI_30_VERSIONS = ["3.0.0", "3.0.1", "3.0.2", "3.0.3"] as const;

const isOpenApi30 = (s: unknown): s is OpenAPIV3.Document["openapi"] =>
  typeof s === "string" &&
  (OPENAPI_30_VERSIONS as readonly string[]).includes(s);

const isComponentsObject = (x: unknown): x is OpenAPIV3.ComponentsObject => {
  if (!isPlainObject(x)) return false;
  const schemas = (x as Record<string, unknown>)["schemas"];
  if (schemas !== undefined && !isPlainObject(schemas)) return false;
  return true;
};

// Proper type guard that narrows to ReferenceObject
const isRefObject = (
  v: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): v is OpenAPIV3.ReferenceObject =>
  typeof v === "object" && v !== null && "$ref" in v;

// ——— IO helpers as Effects ——— //
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
  Effect.tryPromise({
    try: () => fs.mkdir(p, { recursive: true }).then(() => undefined),
    catch: toError,
  });

// ——— Minimal runtime check for the parts we use ——— //
const decodeOpenApiE = (
  u: unknown
): Effect.Effect<
  Pick<OpenAPIV3.Document, "openapi" | "components">,
  Error,
  never
> =>
  Effect.try({
    try: () => {
      if (!isPlainObject(u)) {
        throw new Error("Invalid OpenAPI document: root must be an object");
      }

      const openapiUnknown = u["openapi"];
      if (!isOpenApi30(openapiUnknown)) {
        throw new Error(
          "`openapi` must be one of: " + OPENAPI_30_VERSIONS.join(", ")
        );
      }

      const componentsUnknown = u["components"];
      let components: OpenAPIV3.ComponentsObject | undefined = undefined;

      if (componentsUnknown !== undefined) {
        if (!isComponentsObject(componentsUnknown)) {
          throw new Error("`components` must be an object when present");
        }
        components = componentsUnknown;
      }

      return { openapi: openapiUnknown, components };
    },
    catch: toError,
  });

// ——— Enum collection ——— //
type EnumSpec = {
  name: string;
  values: (string | number)[];
  description?: string;
  names?: string[];
};

const isStringOrNumberArray = (a: unknown): a is (string | number)[] =>
  Array.isArray(a) &&
  a.every((v) => typeof v === "string" || typeof v === "number");

const getEnumValues = (
  schema: OpenAPIV3.SchemaObject
): (string | number)[] | undefined => {
  if (!Array.isArray(schema.enum)) return undefined;
  return isStringOrNumberArray(schema.enum) ? schema.enum : undefined;
};

const getStringArrayExtension = (
  s: OpenAPIV3.SchemaObject,
  key: `x-${string}`
): string[] | undefined => {
  const v = (s as Record<string, unknown>)[key];
  return Array.isArray(v) && v.every((x) => typeof x === "string")
    ? (v as string[])
    : undefined;
};

const collectEnums = (
  doc: Pick<OpenAPIV3.Document, "components">
): EnumSpec[] => {
  const out: EnumSpec[] = [];
  const schemas = doc.components?.schemas ?? {};

  for (const [schemaName, schema] of Object.entries(schemas)) {
    if (isRefObject(schema)) continue;

    const topEnum = getEnumValues(schema);
    if (topEnum) {
      out.push({
        name: `E_${schemaName}`,
        values: topEnum,
        description: schema.description,
        names:
          getStringArrayExtension(schema, "x-enumNames") ??
          getStringArrayExtension(schema, "x-enum-varnames"),
      });
    }

    if ("properties" in schema && schema.properties) {
      for (const [propName, propSchema] of Object.entries(schema.properties)) {
        if (isRefObject(propSchema)) continue;
        const enumVals = getEnumValues(propSchema);
        if (!enumVals) continue;
        out.push({
          name: `E_${schemaName}${propName[0].toUpperCase()}${propName.slice(
            1
          )}`,
          values: enumVals,
          description: propSchema.description,
          names:
            getStringArrayExtension(propSchema, "x-enumNames") ??
            getStringArrayExtension(propSchema, "x-enum-varnames"),
        });
      }
    }
  }
  return out;
};

// ——— codegen helpers  ——— //
const sanitizeKey = (v: string) =>
  v
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^(\d)/, "_$1")
    .replace(/^_+/, "_");

const makeNeutralNumericKey = (n: number) => `VALUE_${n}`;

// Read flags once
const FLAGS = (() => {
  const args = new Set(process.argv.slice(2));
  return { strict: args.has("--strict") || args.has("--require-names") };
})();

const generateEnumCode = (spec: EnumSpec) => {
  const { strict } = FLAGS;
  const isStringEnum = typeof spec.values[0] === "string";
  const lines: string[] = [];
  if (spec.description) lines.push(`/**\n * ${spec.description}\n */`);
  lines.push(`export enum ${spec.name} {`);
  spec.values.forEach((value, i) => {
    let key: string;
    if (spec.names?.[i]) key = sanitizeKey(String(spec.names[i]));
    else if (isStringEnum) key = sanitizeKey(String(value));
    else {
      if (strict) {
        throw new Error(
          `Numeric enum "${spec.name}" is missing x-enumNames/x-enum-varnames (index ${i}, value ${value}).`
        );
      }
      key = makeNeutralNumericKey(Number(value));
    }
    const rhs = isStringEnum ? `"${String(value)}"` : String(value);
    lines.push(`  ${key} = ${rhs}${i < spec.values.length - 1 ? "," : ""}`);
  });
  lines.push("}");
  return lines.join("\n");
};

const formatTimestamp = (d: Date) => {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const day = d.getDate();
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const year = d.getFullYear();
  const dn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][d.getDay()];
  return `${hh}:${mm} ${dn} ${day} ${month} ${year}`;
};

// ——— main ——— //
const main = Effect.gen(function* () {
  const swaggerPath = process.argv[2] ?? "./swagger.json";
  const outDir = join(process.cwd(), "generated");
  const outFile = join(outDir, "enums.ts");

  const raw = yield* readFileE(swaggerPath);
  const json: unknown = JSON.parse(raw);

  const doc = yield* decodeOpenApiE(json);
  const enums = collectEnums({ components: doc.components });

  if (enums.length === 0) {
    console.log("No enums found");
    return;
  }

  const header = `// Generated on: ${formatTimestamp(new Date())}\n\n`;
  const body = enums.map(generateEnumCode).join("\n\n");

  yield* mkdirE(outDir);
  yield* writeFileE(outFile, header + body);

  console.log(`✅ Generated ${enums.length} enums`);
  enums.forEach((e) => console.log(`  - ${e.name}`));
  console.log(`📝 Output saved to: ${outFile}`);
});

Effect.runPromise(main).catch((e) => {
  console.error(e);
  process.exit(1);
});
