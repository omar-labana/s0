import { camelCase, pascalCase } from "npm:scule";
import { EndpointInfo } from "./types.ts";
import { CONFIG } from "./config.ts";

// Method naming logic for the repository generator

export function generateMethodName(endpoint: EndpointInfo): string {
  // Use operationId if available and meaningful, otherwise generate from path
  if (endpoint.operationId && isValidOperationId(endpoint.operationId)) {
    const operationIdName = convertOperationIdToMethodName(
      endpoint.operationId
    );

    // Check if this operationId would create a duplicate method name
    // If it's a common pattern like "ProjectContracts", use path-based naming instead
    if (
      operationIdName === "projectContracts" ||
      operationIdName === "projectContract"
    ) {
      return generateMethodNameFromPath(endpoint);
    }

    return operationIdName;
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
    .replace(/^(Paged|List|Create|Update|Delete|Get)/, ""); // Remove common action prefixes

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

  const prefix = getMethodPrefix(method);

  // Smart handling of path parameters
  const pathName = buildPathName(pathParts);

  return `${prefix}${pathName}`;
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
      // Regular path part, add it normally
      result.push(pascalCase(part));
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
