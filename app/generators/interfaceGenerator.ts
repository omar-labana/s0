import { pascalCase } from "npm:scule";
import { EndpointInfo } from "./types.ts";
import { CONFIG } from "./config.ts";
import { getParameterType } from "./utils.ts";

// Interface generation logic for the repository generator

export function generateQueryInterfaces(endpoints: EndpointInfo[]): string {
  const interfaces: string[] = [];

  endpoints.forEach((endpoint) => {
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
  });

  return interfaces.join("\n\n");
}

export function generateQueryInterfaceName(endpoint: EndpointInfo): string {
  const method = endpoint.method.toUpperCase();
  const pathParts = endpoint.path.split("/").filter((part) => part.length > 0);

  const pathName = pathParts
    .map((part) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const paramName = part.slice(1, -1);
        return pascalCase(paramName);
      }
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
  pathParams.forEach((param) => {
    const type = getParameterType(param);
    const required = param.required ? "" : "?";
    properties.push(`  ${param.name}${required}: ${type};`);
  });

  // Add query parameters
  queryParams.forEach((param) => {
    const type = getParameterType(param);
    const required = param.required ? "" : "?";
    properties.push(`  ${param.name}${required}: ${type};`);
  });

  return properties.join("\n");
}

export function generateReturnType(endpoint: EndpointInfo): string {
  // Try to determine return type from responses
  if (endpoint.responses && typeof endpoint.responses === "object") {
    const responses = endpoint.responses as Record<string, unknown>;

    // Look for 200 response
    if (responses["200"]) {
      const response200 = responses["200"] as Record<string, unknown>;
      if (response200.content && typeof response200.content === "object") {
        const content = response200.content as Record<string, unknown>;
        if (
          content["application/json"] &&
          typeof content["application/json"] === "object"
        ) {
          const jsonContent = content["application/json"] as Record<
            string,
            unknown
          >;
          if (jsonContent.schema && typeof jsonContent.schema === "object") {
            const schema = jsonContent.schema as Record<string, unknown>;
            if (schema.$ref) {
              // Extract interface name from $ref
              const ref = schema.$ref as string;
              const schemaName = ref.split("/").pop() || "";
              const interfaceName =
                convertSchemaNameToInterfaceName(schemaName);
              return `Interfaces.${interfaceName}`;
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
  if (endpoint.requestBody && typeof endpoint.requestBody === "object") {
    const requestBody = endpoint.requestBody as Record<string, unknown>;
    if (requestBody.content && typeof requestBody.content === "object") {
      const content = requestBody.content as Record<string, unknown>;
      if (
        content["application/json"] &&
        typeof content["application/json"] === "object"
      ) {
        const jsonContent = content["application/json"] as Record<
          string,
          unknown
        >;
        if (jsonContent.schema && typeof jsonContent.schema === "object") {
          const schema = jsonContent.schema as Record<string, unknown>;
          if (schema.$ref) {
            // Extract interface name from $ref
            const ref = schema.$ref as string;
            const schemaName = ref.split("/").pop() || "";
            return convertSchemaNameToInterfaceName(schemaName);
          }
        }
      }
    }
  }
  return null;
}

export function convertSchemaNameToInterfaceName(schemaName: string): string {
  // Convert schema names using configurable prefixes
  if (schemaName.endsWith("Request") || schemaName.endsWith("Command")) {
    return `${CONFIG.INTERFACE_PREFIXES.REQUEST}${schemaName}`;
  } else if (schemaName.endsWith("Dto") || schemaName.endsWith("Response")) {
    return `${CONFIG.INTERFACE_PREFIXES.RESPONSE}${schemaName}`;
  } else {
    // Default to response prefix for other types
    return `${CONFIG.INTERFACE_PREFIXES.RESPONSE}${schemaName}`;
  }
}
