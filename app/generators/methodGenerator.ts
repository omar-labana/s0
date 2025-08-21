import { EndpointInfo } from "./types.ts";
import {
  generateReturnType,
  getRequestBodyInterface,
  generateQueryInterfaceName,
} from "./interfaceGenerator.ts";
import { getParameterType } from "./utils.ts";

// Method generation logic for the repository generator

export function generateMethodSignature(endpoint: EndpointInfo): string {
  const params: string[] = [];

  // Add query parameters interface for GET methods
  if (endpoint.method === "get") {
    const queryParams =
      endpoint.parameters?.filter((param) => param.in === "query") || [];
    if (queryParams.length > 0) {
      const queryInterface = generateQueryInterfaceName(endpoint);
      params.push(`params: ${queryInterface}`);
    }
  }

  // Add request body for POST/PUT/PATCH methods
  if (["post", "put", "patch"].includes(endpoint.method)) {
    const payloadInterface = getRequestBodyInterface(endpoint);
    if (payloadInterface) {
      params.push(`payload: Interfaces.${payloadInterface}`);
    }
  }

  // Add path parameters
  const pathParams =
    endpoint.parameters?.filter((param) => param.in === "path") || [];
  pathParams.forEach((param) => {
    const type = getParameterType(param);
    params.push(`${param.name}: ${type}`);
  });

  // Return Promise<unknown> since return type is now handled in fetchInstance
  if (params.length === 0) {
    return `()`;
  }

  return `(${params.join(", ")})`;
}

export function generateMethodBody(endpoint: EndpointInfo): string {
  const method = endpoint.method.toUpperCase();
  let path = endpoint.path;

  // Build the request options
  const options: string[] = [];

  // Add method
  options.push(`method: '${method}'`);

  // Add query parameters for GET methods
  if (endpoint.method === "get") {
    const queryParams =
      endpoint.parameters?.filter((param) => param.in === "query") || [];
    if (queryParams.length > 0) {
      options.push(`query: params`);
    }
  }

  // Add body for POST/PUT/PATCH methods
  if (["post", "put", "patch"].includes(endpoint.method)) {
    options.push(`body: payload`);
  }

  // Add path parameters
  const pathParams =
    endpoint.parameters?.filter((param) => param.in === "path") || [];
  if (pathParams.length > 0) {
    pathParams.forEach((param) => {
      path = path.replace(`{${param.name}}`, `\${${param.name}}`);
    });
  }

  // Generate return type for fetchInstance
  const returnType = generateReturnType(endpoint);

  // For DELETE methods, don't specify generic type
  if (endpoint.method === "delete") {
    return `return this.fetchInstance(\`${path}\`, {
      ${options.join(",\n      ")}
    });`;
  }

  return `return this.fetchInstance<${returnType}>(\`${path}\`, {
      ${options.join(",\n      ")}
    });`;
}
