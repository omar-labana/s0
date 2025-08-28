import type { ParameterInfo } from "./types.ts";

// ---------- tiny runtime guards ----------
const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

const isString = (x: unknown): x is string => typeof x === "string";

const isArray = (x: unknown): x is unknown[] => Array.isArray(x);

// ---------- swagger context (typed, no any) ----------
type DocLike = {
  components?: {
    schemas?: Record<string, unknown>;
  };
};

let swaggerSchemaContext: DocLike | undefined = undefined;

export function setSwaggerSchemaContext(schema: unknown) {
  if (!isObject(schema)) {
    console.warn("Swagger schema context must be an object; ignoring value.");
    return;
  }
  // store a minimal doc-shape only
  const maybeDoc: DocLike = {
    components: isObject(schema.components)
      ? {
          schemas: isObject(schema.components.schemas)
            ? (schema.components.schemas as Record<string, unknown>)
            : undefined,
        }
      : undefined,
  };
  swaggerSchemaContext = maybeDoc;
}

// ---------- schema lookup & $ref helpers ----------
const getSchemasTable = (): Record<string, unknown> | undefined =>
  swaggerSchemaContext?.components?.schemas;

const getSchemaByName = (name: string): unknown => {
  const table = getSchemasTable();
  return table ? table[name] : undefined;
};

const getRefName = (ref: string): string | undefined => {
  const parts = ref.split("/");
  return parts.length ? parts[parts.length - 1] : undefined;
};

const deref = (node: unknown): unknown => {
  if (isObject(node) && isString(node["$ref"])) {
    const name = getRefName(node["$ref"]);
    return name ? getSchemaByName(name) : undefined;
  }
  return node;
};

// ---------- enum vs interface detection (recursive, no assertions) ----------
const isStringArray = (u: unknown): u is string[] =>
  isArray(u) && u.every(isString);

const hasEnum = (schema: unknown): boolean => {
  if (!isObject(schema)) return false;
  // direct enum
  if (isArray(schema["enum"])) return true;
  // vendor extension commonly used for enums
  if (isStringArray(schema["x-enumNames"])) return true;
  return false;
};

const collectCompositions = (schema: unknown): unknown[] => {
  if (!isObject(schema)) return [];
  const out: unknown[] = [];
  if (isArray(schema["allOf"])) out.push(...(schema["allOf"] as unknown[]));
  if (isArray(schema["oneOf"])) out.push(...(schema["oneOf"] as unknown[]));
  if (isArray(schema["anyOf"])) out.push(...(schema["anyOf"] as unknown[]));
  return out;
};

const isObjectLike = (schema: unknown): boolean => {
  if (!isObject(schema)) return false;
  // explicit object
  if (schema["type"] === "object") return true;
  // properties present
  if (isObject(schema["properties"])) return true;
  return false;
};

const schemaIsEnum = (schema: unknown, seen = new Set<unknown>()): boolean => {
  if (schema == null || seen.has(schema)) return false;
  seen.add(schema);

  const target = deref(schema);
  if (target == null) return false;

  if (hasEnum(target)) return true;

  // Walk into compositions
  for (const part of collectCompositions(target)) {
    const res = schemaIsEnum(part, seen);
    if (res) return true;
  }
  return false;
};

const schemaIsInterface = (
  schema: unknown,
  seen = new Set<unknown>()
): boolean => {
  if (schema == null || seen.has(schema)) return false;
  seen.add(schema);

  const target = deref(schema);
  if (target == null) return false;

  if (isObjectLike(target)) return true;

  for (const part of collectCompositions(target)) {
    const res = schemaIsInterface(part, seen);
    if (res) return true;
  }
  return false;
};

// ---------- classify a schema name to Enums.* or Interfaces.* ----------
function resolveSchemaReference(schemaName: string): string {
  const table = getSchemasTable();
  if (!table) {
    console.warn("Swagger schema context not set, falling back to unknown");
    return "unknown";
  }

  const schema = table[schemaName];
  if (schema === undefined) return "unknown";

  // Prefer enum classification
  if (schemaIsEnum(schema)) return `Enums.E_${schemaName}`;
  if (schemaIsInterface(schema)) return `Interfaces.I_${schemaName}`;
  return "unknown";
}

// ---------- parameters parsing (no assertions) ----------
export function parseParameters(parameters: unknown[]): ParameterInfo[] {
  const out: ParameterInfo[] = [];
  for (const p of parameters) {
    if (!isObject(p)) continue;

    const name = isString(p["name"]) ? p["name"] : "";
    const location = isString(p["in"]) ? p["in"] : "";
    if (!name || !location) continue;

    const required =
      typeof p["required"] === "boolean" ? (p["required"] as boolean) : false;
    const type = isString(p["type"]) ? p["type"] : undefined;
    const format = isString(p["format"]) ? p["format"] : undefined;
    const description = isString(p["description"])
      ? p["description"]
      : undefined;

    let schema: ParameterInfo["schema"] | undefined;

    if (isObject(p["schema"])) {
      const s = p["schema"];

      const items = isObject(s["items"])
        ? {
            type: isString(s["items"]["type"])
              ? (s["items"]["type"] as string)
              : undefined,
            format: isString(s["items"]["format"])
              ? (s["items"]["format"] as string)
              : undefined,
            $ref: isString(s["items"]["$ref"])
              ? (s["items"]["$ref"] as string)
              : undefined,
          }
        : undefined;

      type RefObj = { $ref?: string };
      schema = {
        type: isString(s["type"]) ? (s["type"] as string) : undefined,
        format: isString(s["format"]) ? (s["format"] as string) : undefined,
        $ref: isString(s["$ref"]) ? (s["$ref"] as string) : undefined,
        oneOf: isArray(s["oneOf"])
          ? s["oneOf"].filter(isObject).map<RefObj>((x) => {
              const v = (x as Record<string, unknown>)["$ref"];
              return typeof v === "string" ? { $ref: v } : {};
            })
          : undefined,
        allOf: isArray(s["allOf"])
          ? s["allOf"].filter(isObject).map<RefObj>((x) => {
              const v = (x as Record<string, unknown>)["$ref"];
              return typeof v === "string" ? { $ref: v } : {};
            })
          : undefined,
        items,
      };
    }

    out.push({
      name,
      in: location,
      required,
      type,
      format,
      description,
      schema,
    });
  }
  return out;
}

// ---------- parameter type resolution ----------
export function getParameterType(param: ParameterInfo): string {
  // $ref directly on schema
  if (param.schema && isString(param.schema.$ref)) {
    const refName = getRefName(param.schema.$ref) ?? "unknown";
    return resolveSchemaReference(refName);
  }

  // oneOf
  if (
    param.schema &&
    isArray(param.schema.oneOf) &&
    param.schema.oneOf.length > 0
  ) {
    const first = param.schema.oneOf[0];
    if (isObject(first) && isString(first["$ref"])) {
      const refName = getRefName(first["$ref"]) ?? "unknown";
      return resolveSchemaReference(refName);
    }
  }

  // allOf
  if (
    param.schema &&
    isArray(param.schema.allOf) &&
    param.schema.allOf.length > 0
  ) {
    const first = param.schema.allOf[0];
    if (isObject(first) && isString(first["$ref"])) {
      const refName = getRefName(first["$ref"]) ?? "unknown";
      return resolveSchemaReference(refName);
    }
  }

  // arrays
  if (param.schema && param.schema.type === "array") {
    const items = param.schema.items;
    if (items && isString(items.$ref)) {
      const refName = getRefName(items.$ref) ?? "unknown";
      const resolved = resolveSchemaReference(refName);
      return resolved === "unknown" ? "unknown[]" : `${resolved}[]`;
    }
    if (items && isString(items.type)) {
      const itemTs = mapSwaggerTypeToTypeScript(items.type, items.format);
      return `${itemTs}[]`;
    }
    return "unknown[]";
  }

  // primitive schema.type
  if (param.schema && isString(param.schema.type)) {
    return mapSwaggerTypeToTypeScript(param.schema.type, param.schema.format);
  }

  // legacy fields
  if (isString(param.type)) {
    return mapSwaggerTypeToTypeScript(param.type, param.format);
  }

  return "unknown";
}

// ---------- primitives mapping ----------
export function mapSwaggerTypeToTypeScript(
  swaggerType: string,
  format?: string,
  items?: { type?: string; format?: string }
): string {
  switch (swaggerType) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      if (items?.type) {
        const itemType = mapSwaggerTypeToTypeScript(items.type, items.format);
        return `${itemType}[]`;
      }
      return "unknown[]";
    case "object":
      return "Record<string, unknown>";
    default:
      return "unknown";
  }
}

// ---------- timestamp formatting ----------
export function formatTimestamp(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[date.getDay()];
  return `${hours}:${minutes} ${dayName} ${day} ${month} ${year}`;
}
