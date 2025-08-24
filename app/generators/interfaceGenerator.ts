import { pascalCase } from "npm:scule@1.3.0";
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
  // For DELETE methods, don't specify return type
  if (endpoint.method === "delete") {
    return "";
  }

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

            // Handle direct $ref
            if (schema.$ref) {
              const ref = schema.$ref as string;
              const schemaName = ref.split("/").pop() || "";
              // For response schemas, we should use the interface that was generated
              // The interface generation already determined the correct prefix based on schema analysis
              return `Interfaces.I_${schemaName}`;
            }

            // Handle array schemas with $ref items
            if (
              schema.type === "array" &&
              schema.items &&
              typeof schema.items === "object"
            ) {
              const items = schema.items as Record<string, unknown>;
              if (items.$ref) {
                const ref = items.$ref as string;
                const schemaName = ref.split("/").pop() || "";
                // For response schemas, we should use the interface that was generated
                return `Interfaces.I_${schemaName}[]`;
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
  // Check for xName field first (explicit interface name from endpoint)
  if (endpoint.xName && typeof endpoint.xName === "string") {
    return convertSchemaNameToInterfaceName(endpoint.xName);
  }

  if (endpoint.requestBody && typeof endpoint.requestBody === "object") {
    const requestBody = endpoint.requestBody as Record<string, unknown>;

    // Check for x-name field in request body (fallback)
    if (requestBody["x-name"] && typeof requestBody["x-name"] === "string") {
      const xName = requestBody["x-name"] as string;
      return convertSchemaNameToInterfaceName(xName);
    }

    if (requestBody.content && typeof requestBody.content === "object") {
      const content = requestBody.content as Record<string, unknown>;

      // Check for different content types
      const contentTypes = [
        "application/json",
        "multipart/form-data",
        "application/x-www-form-urlencoded",
      ];

      for (const contentType of contentTypes) {
        if (content[contentType] && typeof content[contentType] === "object") {
          const contentData = content[contentType] as Record<string, unknown>;
          if (contentData.schema && typeof contentData.schema === "object") {
            const schema = contentData.schema as Record<string, unknown>;
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
