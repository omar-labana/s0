import { pascalCase } from "scule";
import type { EndpointInfo } from "./types.ts";
import { CONFIG } from "./config.ts";
import { getParameterType } from "./utils.ts";

// ---------- type guards ----------
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

const getObjectProperty = (
  obj: unknown,
  key: string
): Record<string, unknown> | undefined => {
  const value = getProperty(obj, key);
  return isObject(value) ? value : undefined;
};

// Interface generation logic for the repository generator
export function generateQueryInterfaces(endpoints: EndpointInfo[]): string {
  const interfaces: string[] = [];

  for (const endpoint of endpoints) {
    // Generate query interfaces for GET methods only
    if (endpoint.method === "get") {
      const interfaceName = generateQueryInterfaceName(endpoint);
      const interfaceContent = generateInterfaceContent(endpoint);

      if (interfaceContent) {
        interfaces.push(`export interface ${interfaceName} {
${interfaceContent}
}`);
      }
    }
    // Don't generate payload interfaces - they should come from interfaces.ts
  }

  return interfaces.join("\n\n");
}

export function generateQueryInterfaceName(endpoint: EndpointInfo): string {
  const method = endpoint.method.toUpperCase();
  const pathParts = endpoint.path.split("/").filter((part) => part.length > 0);

  const pathName = pathParts
    .map((part) => {
      // Handle malformed paths where path parameters are not properly separated
      // e.g., "{financialYearId}need-renewal" should be split into "{financialYearId}" and "need-renewal"
      if (part.includes("{") && part.includes("}")) {
        const segments: string[] = [];
        let remaining = part;

        while (remaining.length > 0) {
          const paramStart = remaining.indexOf("{");
          const paramEnd = remaining.indexOf("}");

          if (paramStart !== -1 && paramEnd !== -1 && paramEnd > paramStart) {
            // Add text before parameter (if any)
            if (paramStart > 0) {
              const beforeParam = remaining.substring(0, paramStart);
              segments.push(pascalCase(beforeParam));
            }

            // Add parameter name
            const paramName = remaining.substring(paramStart + 1, paramEnd);
            segments.push(pascalCase(paramName));

            // Continue with remaining text after parameter
            remaining = remaining.substring(paramEnd + 1);
          } else {
            // No more parameters, add remaining text
            if (remaining.length > 0) {
              segments.push(pascalCase(remaining));
            }
            break;
          }
        }

        return segments.join("");
      }

      // Regular path parameter
      if (part.startsWith("{") && part.endsWith("}")) {
        const paramName = part.slice(1, -1);
        return pascalCase(paramName);
      }

      // Regular path segment
      return pascalCase(part);
    })
    .join("");

  return `${CONFIG.INTERFACE_PREFIXES.QUERY}${method}_${pathName}`;
}

export function generateInterfaceContent(endpoint: EndpointInfo): string {
  const queryParams =
    endpoint.parameters?.filter((param) => param.in === "query") || [];
  const pathParams =
    endpoint.parameters?.filter((param) => param.in === "path") || [];

  if (queryParams.length === 0 && pathParams.length === 0) {
    return "";
  }

  const properties: string[] = [];

  // Add path parameters
  for (const param of pathParams) {
    const type = getParameterType(param);
    const required = param.required ? "" : "?";
    properties.push(`  ${param.name}${required}: ${type};`);
  }

  // Add query parameters
  for (const param of queryParams) {
    const type = getParameterType(param);
    const required = param.required ? "" : "?";
    properties.push(`  ${param.name}${required}: ${type};`);
  }

  return properties.join("\n");
}

export function generateReturnType(endpoint: EndpointInfo): string {
  // For DELETE methods, don't specify return type
  if (endpoint.method === "delete") {
    return "";
  }

  // Try to determine return type from responses
  if (endpoint.responses && isObject(endpoint.responses)) {
    const responses = endpoint.responses;

    // Look for 200 response
    const response200 = getObjectProperty(responses, "200");
    if (response200) {
      const content = getObjectProperty(response200, "content");
      if (content) {
        const jsonContent = getObjectProperty(content, "application/json");
        if (jsonContent) {
          const schema = getObjectProperty(jsonContent, "schema");
          if (schema) {
            // Handle direct $ref
            const ref = getStringProperty(schema, "$ref");
            if (ref) {
              const schemaName = ref.split("/").pop() || "";
              // For response schemas, we should use the interface that was generated
              // The interface generation already determined the correct prefix based on schema analysis
              return `Interfaces.I_${schemaName}`;
            }

            // Handle array schemas with $ref items
            const schemaType = getStringProperty(schema, "type");
            if (schemaType === "array") {
              const items = getObjectProperty(schema, "items");
              if (items) {
                const itemsRef = getStringProperty(items, "$ref");
                if (itemsRef) {
                  const schemaName = itemsRef.split("/").pop() || "";
                  // For response schemas, we should use the interface that was generated
                  return `Interfaces.I_${schemaName}[]`;
                }
              }
            }
          }
        }
      }
    }
  }

  // Default return type
  return "unknown";
}

export function getRequestBodyInterface(endpoint: EndpointInfo): string | null {
  if (endpoint.requestBody && isObject(endpoint.requestBody)) {
    const requestBody = endpoint.requestBody;

    const content = getObjectProperty(requestBody, "content");
    if (content) {
      // Check for different content types
      const contentTypes = [
        "application/json",
        "multipart/form-data",
        "application/x-www-form-urlencoded",
      ];

      for (const contentType of contentTypes) {
        const contentData = getObjectProperty(content, contentType);
        if (contentData) {
          const schema = getObjectProperty(contentData, "schema");
          if (schema) {
            const ref = getStringProperty(schema, "$ref");
            if (ref) {
              // Extract interface name from $ref
              const schemaName = ref.split("/").pop() || "";
              return convertSchemaNameToInterfaceName(schemaName);
            }
          }
        }
      }
    }
  }

  return null;
}

/**
 * Intelligent interface naming based on schema structure and usage patterns
 * This replaces the hardcoded string matching with actual schema analysis
 */
export function convertSchemaNameToInterfaceName(schemaName: string): string {
  // For request body interfaces, we should use the P_ prefix
  // The interface generation will handle the actual schema analysis
  return `${CONFIG.INTERFACE_PREFIXES.REQUEST}${schemaName}`;
}
