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
            items?: {
              type?: string;
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
  if (param.schema?.type) {
    return mapSwaggerTypeToTypeScript(param.schema.type, param.schema.format);
  }

  if (param.type) {
    return mapSwaggerTypeToTypeScript(param.type, param.format);
  }

  return "unknown";
}

export function mapSwaggerTypeToTypeScript(
  swaggerType: string,
  format?: string
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
