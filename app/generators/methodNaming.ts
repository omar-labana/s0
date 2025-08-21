import { camelCase, pascalCase } from "npm:scule";
import { EndpointInfo } from "./types.ts";
import { CONFIG } from "./config.ts";

// Method naming logic for the repository generator

export function generateMethodName(endpoint: EndpointInfo): string {
  let methodName: string;

  // Use operationId if available and meaningful, otherwise generate from path
  if (endpoint.operationId && isValidOperationId(endpoint.operationId)) {
    methodName = convertOperationIdToMethodName(endpoint.operationId);
  } else {
    // Fallback to path-based naming
    methodName = generateMethodNameFromPath(endpoint);
  }

  // Ensure the method has the correct prefix based on HTTP method
  return ensureMethodPrefix(methodName, endpoint.method);
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
  // Remove common prefixes and suffixes, but be careful with "get" for GET methods
  const cleanName = operationId
    .replace(/Endpoint$/, "") // Remove "Endpoint" suffix
    .replace(/Features$/, "") // Remove "Features" suffix
    .replace(/^(Paged|List|Create|Update|Delete)/, ""); // Remove common action prefixes

  // Clean the name by removing spaces and special characters
  const cleanedName = cleanName
    .replace(/\s+/g, "") // Remove all whitespace
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters

  // If we have a meaningful name left, use it
  if (cleanedName.length > 0) {
    return camelCase(cleanedName);
  }

  // Fallback to original operationId (cleaned)
  const cleanedOperationId = operationId
    .replace(/\s+/g, "") // Remove all whitespace
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters

  return camelCase(cleanedOperationId);
}

export function generateMethodNameFromPath(endpoint: EndpointInfo): string {
  const pathParts = endpoint.path.split("/").filter((part) => part.length > 0);
  const method = endpoint.method.toLowerCase();

  const prefix = getMethodPrefix(method);

  // Smart handling of path parameters
  const pathName = buildPathName(pathParts);

  return `${prefix}${pathName}`;
}

// New function to ensure consistent method naming
export function ensureMethodPrefix(
  methodName: string,
  httpMethod: string
): string {
  const method = httpMethod.toLowerCase();

  // For GET methods, ensure they start with "get"
  if (method === "get" && !methodName.startsWith("get")) {
    return `get${methodName.charAt(0).toUpperCase() + methodName.slice(1)}`;
  }

  // For other methods, ensure they have the correct prefix
  const prefix = getMethodPrefix(method);
  if (!methodName.startsWith(prefix)) {
    return `${prefix}${
      methodName.charAt(0).toUpperCase() + methodName.slice(1)
    }`;
  }

  return methodName;
}

function buildPathName(pathParts: string[]): string {
  const result: string[] = [];
  const parameters: string[] = [];

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];

    if (part.startsWith("{") && part.endsWith("}")) {
      // This is a path parameter like {id}, {accountId}, {userId}, etc.
      const paramName = part.slice(1, -1); // Remove { and }
      parameters.push(paramName);

      // Check if this is the last part
      const hasMoreParts = i < pathParts.length - 1;

      if (!hasMoreParts) {
        // If this parameter is at the end, add "By" + parameter name
        // e.g., /accounts/{id} -> getAccountsById
        // e.g., /users/{userId} -> getUsersByUserId
        // e.g., /posts/{slug} -> getPostsBySlug
        result.push("By" + pascalCase(paramName));
      }
      // If there are more parts after the parameter, we don't add the parameter
      // to the method name, but we continue processing the remaining parts
      // e.g., /accounts/{id}/parents -> getAccountsParents
    } else {
      // Regular path part, clean it and apply PascalCase
      const cleanedPart = part
        .replace(/\s+/g, "") // Remove all whitespace
        .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters

      if (cleanedPart.length > 0) {
        result.push(pascalCase(cleanedPart));
      }
    }
  }

  return result.join("");
}

function getMethodPrefix(method: string): string {
  switch (method) {
    case "get":
      return "get";
    case "post":
      return "create";
    case "put":
      return "update";
    case "patch":
      return "patch";
    case "delete":
      return "delete";
    default:
      return method;
  }
}
