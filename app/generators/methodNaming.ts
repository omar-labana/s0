import { camelCase, pascalCase } from "npm:scule";
import { EndpointInfo } from "./types.ts";
import { CONFIG } from "./config.ts";

// Method naming logic for the repository generator

export function generateMethodName(endpoint: EndpointInfo): string {
  // Use operationId if available and meaningful, otherwise generate from path
  if (endpoint.operationId && isValidOperationId(endpoint.operationId)) {
    return convertOperationIdToMethodName(endpoint.operationId);
  }

  // Fallback to path-based naming
  return generateMethodNameFromPath(endpoint);
}

export function isValidOperationId(operationId: string): boolean {
  // Check if operationId is meaningful using configurable rules
  return (
    operationId.length > 0 &&
    operationId.length < CONFIG.OPERATION_ID.MAX_LENGTH &&
    !CONFIG.OPERATION_ID.EXCLUDED_SUBSTRINGS.some((substring) =>
      operationId.includes(substring)
    )
  );
}

export function convertOperationIdToMethodName(operationId: string): string {
  // Remove common prefixes and suffixes
  const cleanName = operationId
    .replace(/^(get|post|put|patch|delete)/i, "") // Remove HTTP method prefix
    .replace(/Endpoint$/, "") // Remove "Endpoint" suffix
    .replace(/Features$/, "") // Remove "Features" suffix
    .replace(/^[A-Z][a-z]+/, "") // Remove first word if it's capitalized
    .replace(/^[a-z]+/, "") // Remove first word if it's lowercase
    .replace(/^[A-Z]+/, ""); // Remove first word if it's all caps

  // If we have a meaningful name left, use it
  if (cleanName.length > 0) {
    return camelCase(cleanName);
  }

  // Fallback to original operationId
  return camelCase(operationId);
}

export function generateMethodNameFromPath(endpoint: EndpointInfo): string {
  const pathParts = endpoint.path.split("/").filter((part) => part.length > 0);
  const method = endpoint.method.toLowerCase();

  // Simple, flexible naming based on actual endpoint structure
  const resource = pathParts[0];
  const action = pathParts[1];
  const subResource = pathParts[2];

  // Handle common cases without hardcoding patterns
  switch (method) {
    case "get":
      if (pathParts.length === 1) {
        return `get${pascalCase(resource)}`;
      } else if (pathParts.length === 2) {
        if (action === "paged") {
          return `get${pascalCase(resource)}Paged`;
        } else if (action.startsWith("{") && action.endsWith("}")) {
          return `get${pascalCase(resource)}ById`;
        } else {
          return `get${pascalCase(resource)}${pascalCase(action)}`;
        }
      } else if (pathParts.length >= 3) {
        if (subResource && !subResource.startsWith("{")) {
          return `get${pascalCase(subResource)}`;
        } else {
          return `get${pathParts.map((part) => pascalCase(part)).join("")}`;
        }
      }
      return `get${pathParts.map((part) => pascalCase(part)).join("")}`;

    case "post":
      if (pathParts.length === 1) {
        return `create${pascalCase(resource.replace(/s$/, ""))}`;
      } else if (pathParts.length === 2 && !action.startsWith("{")) {
        return `${action}${pascalCase(resource.replace(/s$/, ""))}`;
      } else {
        return `create${pathParts.map((part) => pascalCase(part)).join("")}`;
      }

    case "put":
      if (pathParts.length === 1) {
        return `update${pascalCase(resource.replace(/s$/, ""))}`;
      } else if (pathParts.length === 2 && !action.startsWith("{")) {
        return `${action}${pascalCase(resource.replace(/s$/, ""))}`;
      } else if (pathParts.length === 2 && action.startsWith("{")) {
        return `update${pascalCase(resource)}`;
      } else {
        return `update${pathParts.map((part) => pascalCase(part)).join("")}`;
      }

    case "patch":
      if (pathParts.length === 1) {
        return `patch${pascalCase(resource.replace(/s$/, ""))}`;
      } else if (pathParts.length === 2 && action.startsWith("{")) {
        return `patch${pascalCase(resource)}`;
      } else {
        return `patch${pathParts.map((part) => pascalCase(part)).join("")}`;
      }

    case "delete":
      if (pathParts.length === 1) {
        return `delete${pascalCase(resource.replace(/s$/, ""))}`;
      } else if (pathParts.length === 2 && action.startsWith("{")) {
        return `delete${pascalCase(resource)}`;
      } else {
        return `delete${pathParts.map((part) => pascalCase(part)).join("")}`;
      }

    default:
      return `${method}${pathParts.map((part) => pascalCase(part)).join("")}`;
  }
}
