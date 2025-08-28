import type { OpenAPIV3 } from "../../index.d.ts";

type PaginationKind = "page-index" | "offset-limit" | "cursor" | "unknown";

export type PaginationDetection = {
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

const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;
const isString = (x: unknown): x is string => typeof x === "string";

const PAGE_PARAMS = [/^page(number|index)?$/i, /^pageSize$/i, /^perPage$/i];
const OFFSET_PARAMS = [/^offset$/i, /^limit$/i];
const CURSOR_PARAMS = [
  /^cursor$/i,
  /^next(cursor|token)$/i,
  /^(page|next)Token$/i,
  /^continuationToken$/i,
];
const ARRAY_KEYS = ["data", "items", "result", "records"] as const;
const META_KEYS = ["meta", "page", "pagination", "_meta"] as const;
const TOTAL_KEY =
  /^(total|totalCount|count|recordsTotal|totalItems|total_elements)$/i;

function derefSchema(
  schema: unknown,
  components?: OpenAPIV3.ComponentsObject
): unknown {
  if (!isObject(schema)) return schema;
  const ref = schema["$ref"];
  if (isString(ref) && components?.schemas) {
    const refName = ref.split("/").pop();
    if (refName) {
      const target = components.schemas[refName];
      if (target !== undefined) return target as unknown;
    }
  }
  return schema;
}

function firstArray(
  schema: unknown,
  components?: OpenAPIV3.ComponentsObject,
  path: string[] = []
): { path: string[]; items: unknown } | undefined {
  const u = derefSchema(schema, components);
  if (!isObject(u)) return undefined;
  const type = u["type"];
  if (type === "array" && "items" in u) {
    return { path, items: (u as Record<string, unknown>)["items"] };
  }
  const props = u["properties"];
  if (isObject(props)) {
    for (const k of ARRAY_KEYS) {
      if (k in props) {
        const sub = firstArray(props[k] as unknown, components, [...path, k]);
        if (sub) return sub;
      }
    }
    for (const k of Object.keys(props)) {
      const sub = firstArray(props[k] as unknown, components, [...path, k]);
      if (sub) return sub;
    }
  }
  return undefined;
}

function detectTotalExpr(root: unknown, arrPath: string[]): string | undefined {
  if (isObject(root)) {
    const props = root["properties"];
    if (isObject(props)) {
      for (const k of Object.keys(props)) {
        if (TOTAL_KEY.test(k)) return `raw.${k}`;
      }
      for (const m of META_KEYS) {
        const meta = props[m];
        if (isObject(meta) && isObject(meta["properties"])) {
          const mp = meta["properties"] as Record<string, unknown>;
          for (const k of Object.keys(mp)) {
            if (TOTAL_KEY.test(k)) return `raw.${m}?.${k}`;
          }
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
    if (!isObject(p)) continue;
    if (isString(p["$ref"])) continue;
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

export function detectPaginationForGet(
  op: OpenAPIV3.OperationObject,
  components?: OpenAPIV3.ComponentsObject
): PaginationDetection {
  const reasons: string[] = [];

  const params = Array.isArray(op.parameters) ? op.parameters : [];
  const paramInfo = classifyByParams(params);
  if (paramInfo.kind) reasons.push(`query params suggest ${paramInfo.kind}`);

  let schema: unknown | undefined;
  if (isObject(op.responses)) {
    for (const code of Object.keys(op.responses)) {
      if (!/^(2\d\d|default)$/.test(code)) continue;
      const resp = op.responses[code];
      if (!isObject(resp)) continue;
      const content = resp["content"];
      if (!isObject(content)) continue;
      for (const mt of Object.keys(content)) {
        const entry = content[mt];
        if (isObject(entry) && "schema" in entry) {
          schema = (entry as Record<string, unknown>)["schema"];
          if (schema) break;
        }
      }
      if (schema) break;
    }
  }

  let itemsPath: string[] | undefined;
  let totalExpr: string | undefined;
  let itemRefName: string | undefined;

  if (schema) {
    if (isObject(schema) && isString(schema["$ref"])) {
      const refName = String(schema["$ref"]).split("/").pop() || "";
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
      if (isObject(arr.items) && isString(arr.items["$ref"])) {
        itemRefName = String(arr.items["$ref"]).split("/").pop() || undefined;
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
