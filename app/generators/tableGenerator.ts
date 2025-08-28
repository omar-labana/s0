import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import process from "node:process";
import type { OpenAPIV3 } from "../../index.d.ts";
import { formatTimestamp } from "./utils.ts";
import { normalizeTagName } from "./repositoryContentGenerator.ts";
import { generateMethodName } from "./methodNaming.ts";
import { pascalCase } from "scule";

// ---------- tiny runtime guards ----------
const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

const isString = (x: unknown): x is string => typeof x === "string";

// ---------- safe property accessors ----------
const getProperty = <K extends string>(obj: unknown, key: K): unknown => {
  if (!isObject(obj)) return undefined;
  return obj[key];
};

const getStringProperty = (obj: unknown, key: string): string | undefined => {
  const value = getProperty(obj, key);
  return isString(value) ? value : undefined;
};

// ---------- helpers ----------
type PaginationKind = "page-index" | "offset-limit" | "cursor" | "unknown";

type PaginationDetection = {
  isPaginated: boolean;
  kind?: PaginationKind;
  reasons: string[];
  itemsPath?: string[];
  totalExpr?: string;
  pageParam?: string;
  sizeParam?: string;
  offsetParam?: string;
  limitParam?: string;
  cursorParam?: string;
  itemRefName?: string;
};

const PAGE_PARAMS = [/^page(number|index)?$/i, /^pageSize$/i, /^perPage$/i];
const OFFSET_PARAMS = [/^offset$/i, /^limit$/i];
const CURSOR_PARAMS = [
  /^cursor$/i,
  /^next(cursor|token)$/i,
  /^(page|next)Token$/i,
  /^continuationToken$/i,
];
const ARRAY_KEYS = ["data", "items", "result", "records"];
const META_KEYS = ["meta", "page", "pagination", "_meta"];
const TOTAL_KEY =
  /^(total|totalCount|count|recordsTotal|totalItems|total_elements)$/i;

function derefSchema(
  schema: unknown,
  components?: OpenAPIV3.ComponentsObject
): unknown {
  if (!isObject(schema)) return schema;
  const ref = getStringProperty(schema, "$ref");
  if (ref && components?.schemas) {
    const refName = ref.split("/").pop();
    if (refName && components.schemas[refName])
      return components.schemas[refName] as unknown;
  }
  return schema;
}

function firstArray(
  s: unknown,
  components?: OpenAPIV3.ComponentsObject,
  path: string[] = []
): { path: string[]; items: unknown } | undefined {
  const u = derefSchema(s, components);
  if (!isObject(u)) return;
  if (u["type"] === "array" && "items" in u) {
    return { path, items: (u as Record<string, unknown>)["items"] };
  }
  const props = (u as Record<string, unknown>)["properties"];
  if (isObject(props)) {
    for (const k of ARRAY_KEYS) {
      if (k in props) {
        const sub = firstArray(
          (props as Record<string, unknown>)[k],
          components,
          [...path, k]
        );
        if (sub) return sub;
      }
    }
    for (const k of Object.keys(props)) {
      const sub = firstArray(
        (props as Record<string, unknown>)[k],
        components,
        [...path, k]
      );
      if (sub) return sub;
    }
  }
  return;
}

function detectTotalExpr(root: unknown, arrPath: string[]): string | undefined {
  if (!isObject(root)) return;
  const props = (root as Record<string, unknown>)["properties"];
  if (isObject(props)) {
    for (const k of Object.keys(props)) {
      if (TOTAL_KEY.test(k)) return `raw.${k}`;
    }
    for (const m of META_KEYS) {
      const meta = isObject((props as Record<string, unknown>)[m])
        ? ((props as Record<string, unknown>)[m] as Record<string, unknown>)
        : undefined;
      const mp =
        meta && isObject(meta["properties"])
          ? (meta["properties"] as Record<string, unknown>)
          : undefined;
      if (mp) {
        for (const k of Object.keys(mp)) {
          if (TOTAL_KEY.test(k)) return `raw.${m}?.${k}`;
        }
      }
    }
  }
  const arrProp = arrPath.join(".");
  return `Array.isArray(raw?.${arrProp}) ? raw.${arrProp}.length : 0`;
}

function classifyByParams(
  params: (OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject)[]
) {
  let pageParam: string | undefined;
  let sizeParam: string | undefined;
  let offsetParam: string | undefined;
  let limitParam: string | undefined;
  let cursorParam: string | undefined;

  for (const p of params) {
    if (isObject(p) && isString((p as Record<string, unknown>)["$ref"]))
      continue;
    const po = p as OpenAPIV3.ParameterObject;
    if (po.in !== "query") continue;
    const name = po.name;

    if (PAGE_PARAMS.some((rx) => rx.test(name))) {
      if (/^page(number|index)?$/i.test(name)) pageParam = name;
      if (/^(pageSize|perPage)$/i.test(name)) sizeParam = name;
    }
    if (OFFSET_PARAMS.some((rx) => rx.test(name))) {
      if (/^offset$/i.test(name)) offsetParam = name;
      if (/^limit$/i.test(name)) limitParam = name;
    }
    if (CURSOR_PARAMS.some((rx) => rx.test(name))) {
      cursorParam = name;
    }
  }

  let kind: PaginationKind | undefined;
  if (pageParam && (sizeParam || limitParam)) kind = "page-index";
  else if (offsetParam && (limitParam || sizeParam)) kind = "offset-limit";
  else if (cursorParam) kind = "cursor";

  return { kind, pageParam, sizeParam, offsetParam, limitParam, cursorParam };
}

function detectPaginationForGet(
  op: OpenAPIV3.OperationObject,
  components?: OpenAPIV3.ComponentsObject
): PaginationDetection {
  const reasons: string[] = [];

  const params = Array.isArray(op.parameters) ? op.parameters : [];
  const paramInfo = classifyByParams(
    params as (OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject)[]
  );
  if (paramInfo.kind) reasons.push(`query params suggest ${paramInfo.kind}`);

  const responses = op.responses as Record<string, unknown>;
  let schema: unknown | undefined;
  if (isObject(responses)) {
    for (const code of Object.keys(responses)) {
      if (!/^(2\d\d|default)$/.test(code)) continue;
      const resp = responses[code] as Record<string, unknown>;
      const content = resp?.["content"];
      if (!isObject(content)) continue;
      for (const mt of Object.keys(content)) {
        const entry = (content as Record<string, unknown>)[mt];
        const s = isObject(entry)
          ? (entry as Record<string, unknown>)["schema"]
          : undefined;
        if (s) {
          schema = s;
          break;
        }
      }
      if (schema) break;
    }
  }

  let itemsPath: string[] | undefined;
  let totalExpr: string | undefined;
  let itemRefName: string | undefined;

  if (schema) {
    if (
      isObject(schema) &&
      isString((schema as Record<string, unknown>)["$ref"])
    ) {
      const refName =
        String((schema as Record<string, unknown>)["$ref"])
          .split("/")
          .pop() || "";
      if (/(Page|Paged|Paginated)/i.test(refName)) {
        reasons.push(`ref name "${refName}" indicates pagination`);
      }
    }

    const u = derefSchema(schema, components);
    const arr = firstArray(u, components, []);
    if (arr) {
      itemsPath = arr.path;
      const root = derefSchema(schema, components);
      totalExpr = detectTotalExpr(root, arr.path);
      reasons.push(
        `response contains an array at path: ${itemsPath.join(".")}`
      );
      if (
        isObject(arr.items) &&
        isString((arr.items as Record<string, unknown>)["$ref"])
      ) {
        itemRefName =
          String((arr.items as Record<string, unknown>)["$ref"])
            .split("/")
            .pop() || undefined;
      }
      if (totalExpr) reasons.push(`detected total via: ${totalExpr}`);
    }
  }

  const isPaginated = !!(paramInfo.kind || itemsPath || reasons.length > 0);
  const kind: PaginationKind = paramInfo.kind ?? "unknown";

  return {
    isPaginated,
    kind,
    reasons,
    itemsPath,
    totalExpr,
    pageParam: paramInfo.pageParam,
    sizeParam: paramInfo.sizeParam,
    offsetParam: paramInfo.offsetParam,
    limitParam: paramInfo.limitParam,
    cursorParam: paramInfo.cursorParam,
    itemRefName,
  };
}

// ---------- code emitters ----------
function emitTableModule(params: {
  outPath: string;
  tagName: string;
  methodName: string;
  itemType: string; // Interfaces.I_X | unknown
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
