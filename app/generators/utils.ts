import { ParameterInfo } from "./types.ts";

// Utility functions for the repository generator

// Global swagger schema context - set once at the start of generation
let swaggerSchemaContext: any = null;

// Set the swagger schema context for the current generation session
export function setSwaggerSchemaContext(schema: any) {
  swaggerSchemaContext = schema;
}

// Check if a schema exists as an enum or interface by examining the Swagger schema directly
function resolveSchemaReference(schemaName: string): string {
  if (!swaggerSchemaContext) {
    console.warn("Swagger schema context not set, falling back to unknown");
    return "unknown";
  }

  const schema = swaggerSchemaContext.components?.schemas?.[schemaName];

  if (!schema) {
    return "unknown";
  }

  // Check if it's an enum based on schema properties
  if (schema.enum || schema["x-enumNames"]) {
    return `Enums.E_${schemaName}`;
  }

  // Check if it's an interface based on schema properties
  if (schema.properties || schema.type === "object") {
    return `Interfaces.I_${schemaName}`;
  }

  // For primitive types, fall back to unknown
  return "unknown";
}

export function parseParameters(parameters: unknown[]): ParameterInfo[] {
  return parameters
    .map((param) => {
      if (typeof param === "object" && param !== null) {
        const paramObj = param as Record<string, unknown>;
        return {
          name: (paramObj.name as string) || "",
          in: (paramObj.in as string) || "",
          required: (paramObj.required as boolean) || false,
          type: paramObj.type as string,
          format: paramObj.format as string,
          description: paramObj.description as string,
          schema: paramObj.schema as {
            type?: string;
            format?: string;
            $ref?: string;
            oneOf?: Array<{ $ref?: string }>;
            allOf?: Array<{ $ref?: string }>;
            items?: {
              type?: string;
              format?: string;
              $ref?: string;
            };
          },
        };
      }
      return {
        name: "",
        in: "",
        required: false,
      };
    })
    .filter((param) => param.name && param.in);
}

export function getParameterType(param: ParameterInfo): string {
  // Check schema first, then fall back to type
  if (param.schema?.$ref) {
    // Handle schema reference - extract the schema name from the $ref
    const refName = param.schema.$ref.split("/").pop() || "unknown";
    // Convert schema name to interface name (e.g., "TableOrder" -> "I_TableOrder")
    return `Interfaces.I_${refName}`;
  }

  // Handle oneOf schemas (like tableOrder: { oneOf: [{ $ref: "#/components/schemas/TableOrder" }] })
  if (param.schema?.oneOf && Array.isArray(param.schema.oneOf)) {
    const oneOfSchema = param.schema.oneOf[0]; // Take the first one
    if (
      oneOfSchema &&
      typeof oneOfSchema === "object" &&
      "$ref" in oneOfSchema
    ) {
      const refName =
        (oneOfSchema as Record<string, unknown>).$ref
          ?.toString()
          .split("/")
          .pop() || "unknown";
      return `Interfaces.I_${refName}`;
    }
  }

  // Handle allOf schemas (like durationTypeCode: { allOf: [{ $ref: "#/components/schemas/DurationTypeCodes" }] })
  if (param.schema?.allOf && Array.isArray(param.schema.allOf)) {
    const allOfSchema = param.schema.allOf[0]; // Take the first one
    if (
      allOfSchema &&
      typeof allOfSchema === "object" &&
      "$ref" in allOfSchema
    ) {
      const refName =
        (allOfSchema as Record<string, unknown>).$ref
          ?.toString()
          .split("/")
          .pop() || "unknown";

      // Use the intelligent schema resolution function
      return resolveSchemaReference(refName);
    }
  }

  if (param.schema?.type) {
    return mapSwaggerTypeToTypeScript(
      param.schema.type,
      param.schema.format,
      param.schema.items
    );
  }

  if (param.type) {
    return mapSwaggerTypeToTypeScript(param.type, param.format);
  }

  return "unknown";
}

export function mapSwaggerTypeToTypeScript(
  swaggerType: string,
  format?: string,
  items?: { type?: string; format?: string }
): string {
  switch (swaggerType) {
    case "string":
      if (format === "date" || format === "date-time") {
        return "string";
      }
      return "string";
    case "integer":
      return "number";
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

export function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
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
