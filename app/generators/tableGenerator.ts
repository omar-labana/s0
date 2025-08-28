import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import process from "node:process";
import type { OpenAPIV3 } from "../../index.d.ts";
import type { EndpointInfo } from "./types.ts";
import { formatTimestamp } from "./utils.ts";
import { normalizeTagName } from "./repositoryContentGenerator.ts";
import { generateMethodName } from "./methodNaming.ts";
import { pascalCase } from "scule";
import { detectPaginationForGet } from "./paginationDetection.ts";

const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

const isReferenceObject = (x: unknown): x is OpenAPIV3.ReferenceObject =>
  isObject(x) && typeof x.$ref === "string";

const hasSchemaProperties = (
  schema: OpenAPIV3.SchemaObject
): schema is (OpenAPIV3.NonArraySchemaObject &
  OpenAPIV3.SpecificationExtensions) & {
  properties: Record<
    string,
    OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
  >;
} =>
  "properties" in schema &&
  isObject((schema as { properties?: unknown }).properties);

function emitTableModule(params: {
  outPath: string;
  tagName: string;
  methodName: string;
  itemType: string;
  itemProps: string[];
}) {
  const { outPath, tagName, methodName, itemType, itemProps } = params;

  const header = `// Auto-generated table helpers for ${tagName}.${methodName}\n// Generated on: ${formatTimestamp(
    new Date()
  )}\n\n`;

  const body = `import type * as Interfaces from '../interfaces.ts';
import type { TableColumn } from 'npm:@nuxt/ui';
import { Repository${tagName} } from '../repositories/Repository${tagName}.ts';

export type Row = ${itemType};

export const columns: TableColumn<Row>[] = [
${itemProps
  .slice(0, 6)
  .map((prop) => {
    const header = prop
      .replace(/_/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\s+/g, " ")
      .replace(/^\w/, (c) => c.toUpperCase());
    return `  { accessorKey: '${prop}', header: '${header}' }`;
  })
  .join(",\n")}
];
`;

  const contents = header + body;
  mkdirSync(join(process.cwd(), "generated", "tables"), { recursive: true });
  writeFileSync(outPath, contents, "utf8");
}

export function generateTables(swagger: OpenAPIV3.Document) {
  const outDir = join(process.cwd(), "generated", "tables");
  mkdirSync(outDir, { recursive: true });

  const paths: OpenAPIV3.PathsObject = swagger.paths;
  const components = swagger.components;

  for (const [pathUrl, pathItem] of Object.entries(paths)) {
    if (!pathItem) continue;
    const getOp = pathItem.get;
    if (!getOp) continue;
    const op: OpenAPIV3.OperationObject = getOp;
    const det = detectPaginationForGet(op, components);
    if (!det.isPaginated) continue;

    const opTags = Array.isArray(op.tags) ? op.tags : [];
    const tags: string[] = opTags.filter(
      (t): t is string => typeof t === "string"
    );
    if (tags.length === 0) continue;
    const tagName = normalizeTagName(tags[0]);

    const endpointInfo: EndpointInfo = {
      path: pathUrl,
      method: "get",
      operationId: typeof op.operationId === "string" ? op.operationId : "",
      tags,
    };
    const methodName = pascalCase(generateMethodName(endpointInfo));

    // item type
    const itemType = det.itemRefName
      ? `Interfaces.I_${det.itemRefName}`
      : "unknown";

    // infer columns from schema properties when possible
    let itemProps: string[] = [];
    if (det.itemRefName && components && components.schemas) {
      const sch = components.schemas[det.itemRefName];
      if (sch && !isReferenceObject(sch)) {
        const obj: OpenAPIV3.SchemaObject = sch;
        if (hasSchemaProperties(obj)) {
          itemProps = Object.keys(obj.properties);
        }
      }
    }

    const fileName = `${tagName}${methodName}Table.ts`;
    const outPath = join(outDir, fileName);
    emitTableModule({ outPath, tagName, methodName, itemType, itemProps });
    console.log(`✅ Generated table helper: ${fileName}`);
  }

  console.log(`\n📁 Table helpers written to: ${outDir}`);
}
