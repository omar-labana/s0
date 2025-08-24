import { ParameterInfo } from "./types.ts";

// Utility functions for the repository generator

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
    console.log(
      `🔍 Resolving $ref for ${param.name}: ${param.schema.$ref} -> ${refName}`
    );
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
      console.log(
        `🔍 Resolving oneOf $ref for ${param.name}: ${
          (oneOfSchema as Record<string, unknown>).$ref
        } -> ${refName}`
      );
      return `Interfaces.I_${refName}`;
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

  console.log(`🔍 Falling back to unknown for parameter: ${param.name}`);
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
