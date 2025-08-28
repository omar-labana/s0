// ---------- type guards ----------
const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

const isString = (x: unknown): x is string => typeof x === "string";

const isUnknownArray = (x: unknown): x is unknown[] => Array.isArray(x);

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

const getArrayProperty = (obj: unknown, key: string): unknown[] | undefined => {
  const value = getProperty(obj, key);
  return isUnknownArray(value) ? value : undefined;
};

// Interface to track schema usage in API paths
export interface SchemaUsage {
  name: string;
  isRequest: boolean;
  isResponse: boolean;
  isQuery: boolean;
  httpMethods: string[];
}

export function analyzeSchemaUsage(
  paths: Record<string, unknown>
): Map<string, SchemaUsage> {
  const usage = new Map<string, SchemaUsage>();

  // Helper function to recursively extract schema references
  function extractSchemaRefs(schema: unknown): string[] {
    if (!isObject(schema)) return [];

    const refs: string[] = [];

    // Direct $ref
    const ref = getStringProperty(schema, "$ref");
    if (ref) {
      const refName = ref.split("/").pop();
      if (refName) refs.push(refName);
    }

    // allOf, oneOf, anyOf
    for (const key of ["allOf", "oneOf", "anyOf"] as const) {
      const array = getArrayProperty(schema, key);
      if (array) {
        for (const subSchema of array) {
          refs.push(...extractSchemaRefs(subSchema));
        }
      }
    }

    // Array items
    const items = getProperty(schema, "items");
    if (items) {
      refs.push(...extractSchemaRefs(items));
    }

    // Object properties
    const properties = getObjectProperty(schema, "properties");
    if (properties) {
      for (const prop of Object.values(properties)) {
        refs.push(...extractSchemaRefs(prop));
      }
    }

    // additionalProperties
    const additionalProps = getProperty(schema, "additionalProperties");
    if (additionalProps) {
      refs.push(...extractSchemaRefs(additionalProps));
    }

    return refs;
  }

  // Enhanced function to extract schema references from response objects
  function extractResponseSchemaRefs(response: unknown): string[] {
    if (!isObject(response)) return [];

    const refs: string[] = [];

    // Check for content in response
    const content = getObjectProperty(response, "content");
    if (content) {
      for (const mediaType of Object.values(content)) {
        if (isObject(mediaType) && "schema" in mediaType) {
          // Use the helper function to extract all schema references
          const schemaRefs = extractSchemaRefs(mediaType.schema);
          refs.push(...schemaRefs);
        }
      }
    }

    // Also check for direct schema reference (some APIs use this)
    if ("schema" in response) {
      const schemaRefs = extractSchemaRefs(response.schema);
      refs.push(...schemaRefs);
    }

    return refs;
  }

  for (const [pathUrl, pathItem] of Object.entries(paths)) {
    if (!isObject(pathItem)) continue;

    // Check all HTTP methods
    const methods = [
      "get",
      "post",
      "put",
      "patch",
      "delete",
      "head",
      "options",
      "trace",
    ] as const;

    for (const method of methods) {
      const operation = getObjectProperty(pathItem, method);
      if (!operation) continue;

      // Check request body (POST/PUT/PATCH)
      if (operation.requestBody && ["post", "put", "patch"].includes(method)) {
        const requestBody = operation.requestBody;
        if (isObject(requestBody)) {
          const content = getObjectProperty(requestBody, "content");
          if (content) {
            for (const mediaType of Object.values(content)) {
              if (isObject(mediaType) && "schema" in mediaType) {
                // Use the helper function to extract all schema references
                const schemaRefs = extractSchemaRefs(mediaType.schema);
                for (const refName of schemaRefs) {
                  const existing =
                    usage.get(refName) || createDefaultUsage(refName);
                  existing.isRequest = true;
                  existing.httpMethods.push(method.toUpperCase());
                  usage.set(refName, existing);
                }
              }
            }
          }
        }
      }

      // Enhanced response schema analysis
      const responses = getObjectProperty(operation, "responses");
      if (responses) {
        for (const [statusCode, response] of Object.entries(responses)) {
          // Focus on successful responses (2xx) and common response codes
          if (
            statusCode.startsWith("2") ||
            ["200", "201", "204"].includes(statusCode)
          ) {
            const schemaRefs = extractResponseSchemaRefs(response);
            for (const refName of schemaRefs) {
              const existing =
                usage.get(refName) || createDefaultUsage(refName);
              existing.isResponse = true;
              existing.httpMethods.push(method.toUpperCase());
              usage.set(refName, existing);
            }
          }
        }
      }

      // Check query parameters - create synthetic schema names for GET endpoints
      if (method === "get") {
        const parameters = getArrayProperty(operation, "parameters");
        if (parameters) {
          const queryParams = parameters.filter(
            (param) => isObject(param) && param.in === "query"
          );

          if (queryParams.length > 0) {
            // Create a synthetic schema name based on the endpoint
            const operationId = getStringProperty(operation, "operationId");
            let querySchemaName = "";

            if (operationId) {
              // Extract meaningful name from operationId
              // e.g., "eTendringWebFeaturesAccountCombinationsBudgetGetListGetListEndpoint"
              // -> "GetAccountCombinationsBudgetList"
              const parts = operationId.split(/(?=[A-Z])/);
              const meaningfulParts = parts.filter(
                (part) =>
                  !part.toLowerCase().includes("web") &&
                  !part.toLowerCase().includes("features") &&
                  !part.toLowerCase().includes("endpoint") &&
                  part.length > 1
              );
              querySchemaName = meaningfulParts.join("") + "Query";
            } else {
              // Fallback: use path-based naming
              const pathParts = pathUrl
                .split("/")
                .filter((p) => p && !p.startsWith("{"));
              querySchemaName =
                pathParts
                  .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
                  .join("") + "Query";
            }

            if (querySchemaName) {
              const existing =
                usage.get(querySchemaName) ||
                createDefaultUsage(querySchemaName);
              existing.isQuery = true;
              existing.httpMethods.push("GET");
              usage.set(querySchemaName, existing);
            }
          }
        }
      }
    }
  }

  return usage;
}

function createDefaultUsage(name: string): SchemaUsage {
  return {
    name,
    isRequest: false,
    isResponse: false,
    isQuery: false,
    httpMethods: [],
  };
}
