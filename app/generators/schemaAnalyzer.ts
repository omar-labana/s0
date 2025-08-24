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
    if (!schema || typeof schema !== "object") return [];

    const schemaObj = schema as Record<string, unknown>;
    const refs: string[] = [];

    // Direct $ref
    if ("$ref" in schemaObj && typeof schemaObj.$ref === "string") {
      const refName = schemaObj.$ref.split("/").pop();
      if (refName) refs.push(refName);
    }

    // allOf, oneOf, anyOf
    ["allOf", "oneOf", "anyOf"].forEach((key) => {
      if (key in schemaObj && Array.isArray(schemaObj[key])) {
        (schemaObj[key] as unknown[]).forEach((subSchema) => {
          refs.push(...extractSchemaRefs(subSchema));
        });
      }
    });

    // Array items
    if ("items" in schemaObj) {
      refs.push(...extractSchemaRefs(schemaObj.items));
    }

    // Object properties
    if ("properties" in schemaObj && typeof schemaObj.properties === "object") {
      Object.values(schemaObj.properties as Record<string, unknown>).forEach(
        (prop) => {
          refs.push(...extractSchemaRefs(prop));
        }
      );
    }

    // additionalProperties
    if (
      "additionalProperties" in schemaObj &&
      typeof schemaObj.additionalProperties === "object"
    ) {
      refs.push(...extractSchemaRefs(schemaObj.additionalProperties));
    }

    return refs;
  }

  // Enhanced function to extract schema references from response objects
  function extractResponseSchemaRefs(response: unknown): string[] {
    if (!response || typeof response !== "object") return [];

    const responseObj = response as Record<string, unknown>;
    const refs: string[] = [];

    // Check for content in response
    if (responseObj.content && typeof responseObj.content === "object") {
      Object.values(responseObj.content as Record<string, unknown>).forEach(
        (mediaType) => {
          if (
            mediaType &&
            typeof mediaType === "object" &&
            "schema" in mediaType
          ) {
            // Use the helper function to extract all schema references
            const schemaRefs = extractSchemaRefs(mediaType.schema);
            refs.push(...schemaRefs);
          }
        }
      );
    }

    // Also check for direct schema reference (some APIs use this)
    if ("schema" in responseObj) {
      const schemaRefs = extractSchemaRefs(responseObj.schema);
      refs.push(...schemaRefs);
    }

    return refs;
  }

  Object.entries(paths).forEach(([pathUrl, pathItem]) => {
    if (!pathItem || typeof pathItem !== "object") return;

    const pathItemObj = pathItem as Record<string, unknown>;

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

    methods.forEach((method) => {
      const operation = pathItemObj[method];
      if (!operation || typeof operation !== "object") return;

      const operationObj = operation as Record<string, unknown>;

      // Check request body (POST/PUT/PATCH)
      if (
        operationObj.requestBody &&
        ["post", "put", "patch"].includes(method)
      ) {
        const requestBody = operationObj.requestBody as Record<string, unknown>;
        if (requestBody.content && typeof requestBody.content === "object") {
          Object.values(requestBody.content as Record<string, unknown>).forEach(
            (mediaType) => {
              if (
                mediaType &&
                typeof mediaType === "object" &&
                "schema" in mediaType
              ) {
                // Use the helper function to extract all schema references
                const schemaRefs = extractSchemaRefs(mediaType.schema);
                schemaRefs.forEach((refName) => {
                  const existing =
                    usage.get(refName) || createDefaultUsage(refName);
                  existing.isRequest = true;
                  existing.httpMethods.push(method.toUpperCase());
                  usage.set(refName, existing);
                });
              }
            }
          );
        }
      }

      // Enhanced response schema analysis
      if (
        operationObj.responses &&
        typeof operationObj.responses === "object"
      ) {
        Object.entries(
          operationObj.responses as Record<string, unknown>
        ).forEach(([statusCode, response]) => {
          // Focus on successful responses (2xx) and common response codes
          if (
            statusCode.startsWith("2") ||
            ["200", "201", "204"].includes(statusCode)
          ) {
            const schemaRefs = extractResponseSchemaRefs(response);
            schemaRefs.forEach((refName) => {
              const existing =
                usage.get(refName) || createDefaultUsage(refName);
              existing.isResponse = true;
              existing.httpMethods.push(method.toUpperCase());
              usage.set(refName, existing);
            });
          }
        });
      }

      // Check query parameters - create synthetic schema names for GET endpoints
      if (
        method === "get" &&
        operationObj.parameters &&
        Array.isArray(operationObj.parameters)
      ) {
        const queryParams = operationObj.parameters.filter(
          (param: Record<string, unknown>) =>
            param && typeof param === "object" && param.in === "query"
        );

        if (queryParams.length > 0) {
          // Create a synthetic schema name based on the endpoint
          const operationId = operationObj.operationId as string;
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
              usage.get(querySchemaName) || createDefaultUsage(querySchemaName);
            existing.isQuery = true;
            existing.httpMethods.push("GET");
            usage.set(querySchemaName, existing);
          }
        }
      }
    });
  });

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
