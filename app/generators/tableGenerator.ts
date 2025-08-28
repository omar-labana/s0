import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import process from "node:process";
import type { OpenAPIV3 } from "../../index.d.ts";
import { formatTimestamp } from "./utils.ts";
import { normalizeTagName } from "./repositoryContentGenerator.ts";
import { generateMethodName } from "./methodNaming.ts";
import { pascalCase } from "scule";
import { detectPaginationForGet } from "./paginationDetection.ts";

const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

function emitTableModule(params: {
  outPath: string;
  tagName: string;
  methodName: string;
  itemType: string;
}) {
  const { outPath, tagName, methodName, itemType } = params;

  const header = `// Auto-generated table helpers for ${tagName}.${methodName}\n// Generated on: ${formatTimestamp(
    new Date()
  )}\n\n`;

  const body = `import type * as Interfaces from '../interfaces.ts';
import type { TableColumn } from '@nuxt/ui';
import { Repository${tagName} } from '../repositories/Repository${tagName}.ts';

export type Row = ${itemType};

export type RowColumn = TableColumn<Row>;
`;

  const contents = header + body;
  mkdirSync(join(process.cwd(), "generated", "tables"), { recursive: true });
  writeFileSync(outPath, contents, "utf8");
}

export function generateTables(swagger: OpenAPIV3.Document) {
  const outDir = join(process.cwd(), "generated", "tables");
  mkdirSync(outDir, { recursive: true });

  const paths: OpenAPIV3.PathsObject = swagger.paths as OpenAPIV3.PathsObject;
  const components = swagger.components;

  for (const [pathUrl, pathItem] of Object.entries(paths)) {
    if (!isObject(pathItem)) continue;
    const getOp = (pathItem as OpenAPIV3.PathItemObject).get;
    if (!getOp) continue;
    const op: OpenAPIV3.OperationObject = getOp as OpenAPIV3.OperationObject;
    const det = detectPaginationForGet(op, components);
    if (!det.isPaginated) continue;

    const opTags = Array.isArray(op.tags) ? op.tags : [];
    const tags: string[] = opTags.filter(
      (t): t is string => typeof t === "string"
    );
    if (tags.length === 0) continue;
    const tagName = normalizeTagName(tags[0]);

    const endpointInfo = {
      path: pathUrl,
      method: "get",
      operationId: typeof op.operationId === "string" ? op.operationId : "",
      tags,
    } as { path: string; method: string; operationId: string; tags: string[] };
    const methodName = pascalCase(generateMethodName(endpointInfo));

    // item type
    const itemType = det.itemRefName
      ? `Interfaces.I_${det.itemRefName}`
      : "unknown";

    const fileName = `${tagName}${methodName}Table.ts`;
    const outPath = join(outDir, fileName);
    emitTableModule({ outPath, tagName, methodName, itemType });
    console.log(`✅ Generated table helper: ${fileName}`);
  }

  console.log(`\n📁 Table helpers written to: ${outDir}`);
}
