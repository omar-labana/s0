import type { OpenAPIV3 } from "openapi-types";
import {
  analyzeSchemaUsage,
  generateInterfaceCode,
  determineInterfaceName,
  generateHeaderComment,
  writeInterfacesToFile,
  logGenerationResults,
} from "./generators/index.ts";

export function generateInterfaces(
  components: Partial<OpenAPIV3.ComponentsObject>,
  paths: OpenAPIV3.PathsObject
) {
  const schemas = components.schemas;

  if (!schemas) {
    console.log("No schemas found in components");
    return;
  }

  // Analyze schema usage in API paths to determine interface types
  const schemaUsage = analyzeSchemaUsage(paths);

  let interfacesOutput = "";
  const foundInterfaces: string[] = [];
  const processedSchemas = new Set<string>();

  // First pass: collect all potential interfaces (including base classes)
  const interfaceSchemas: Array<{ name: string; schema: any; usage: any }> = [];

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    // Skip $ref objects and pure enums
    if (
      "$ref" in schema ||
      (schema.enum &&
        Array.isArray(schema.enum) &&
        !schema.properties &&
        !schema.allOf)
    ) {
      return;
    }

    // Include interfaces that have:
    // 1. Properties
    // 2. Inheritance (allOf, oneOf, anyOf)
    // 3. Are object types
    // 4. Are abstract/base classes (even without direct properties)
    // 5. Are referenced by other schemas (base classes)
    if (
      schema.properties ||
      schema.allOf ||
      schema.oneOf ||
      schema.anyOf ||
      (schema.type === "object" && !schema.enum) ||
      (schema as any)["x-abstract"] === true ||
      isReferencedByOtherSchemas(schemaName, schemas) ||
      // Additional check: if the schema name suggests it's a base class
      schemaName.includes("Base") ||
      schemaName.includes("Entity") ||
      schemaName.includes("Audited")
    ) {
      const usage = schemaUsage.get(schemaName) || {
        name: schemaName,
        isRequest: false,
        isResponse: false,
        isQuery: false,
        httpMethods: [],
      };

      interfaceSchemas.push({ name: schemaName, schema, usage });
    }
  });

  // Sort interfaces to ensure base classes are generated first
  interfaceSchemas.sort((a, b) => {
    const aIsBase = isBaseInterface(a.schema, schemas);
    const bIsBase = isBaseInterface(b.schema, schemas);

    if (aIsBase && !bIsBase) return -1;
    if (!aIsBase && bIsBase) return 1;
    return 0;
  });

  // Generate interfaces
  interfaceSchemas.forEach(({ name: schemaName, schema, usage }) => {
    // Determine interface type based on usage analysis and schema structure
    const interfaceName = determineInterfaceName(schemaName, usage, schema);

    // Generate TypeScript interface
    const interfaceCode = generateInterfaceCode(interfaceName, schema, schemas);
    interfacesOutput += interfaceCode + "\n\n";
    foundInterfaces.push(interfaceName);
    processedSchemas.add(schemaName);
  });

  if (foundInterfaces.length === 0) {
    console.log("No interfaces found in the swagger file");
    return;
  }

  // Add header comment
  const header = generateHeaderComment(foundInterfaces, new Date());
  const finalOutput = header + interfacesOutput;

  // Write to file
  writeInterfacesToFile(finalOutput);

  // Log results
  logGenerationResults(foundInterfaces);

  return finalOutput;
}

/**
 * Checks if a schema is referenced by other schemas (indicating it's a base class)
 */
function isReferencedByOtherSchemas(
  schemaName: string,
  schemas: Record<string, any>
): boolean {
  // Check for direct $ref references
  const refPattern = `#/components/schemas/${schemaName}`;

  // Check if any schema references this one
  const isReferenced = Object.values(schemas).some((schema) => {
    if (!schema || typeof schema !== "object") return false;

    const schemaStr = JSON.stringify(schema);

    // Check for direct $ref
    if (schemaStr.includes(refPattern)) {
      return true;
    }

    // Check for usage in extends clauses (when other interfaces extend this one)
    if (schemaStr.includes(`"extends":`) && schemaStr.includes(schemaName)) {
      return true;
    }

    return false;
  });

  return isReferenced;
}

/**
 * Determines if a schema is a base interface (should be generated first)
 */
function isBaseInterface(schema: any, schemas: Record<string, any>): boolean {
  // Abstract classes
  if (schema["x-abstract"] === true) {
    return true;
  }

  // Schemas that only have allOf with $ref (base entity pattern)
  if (schema.allOf && schema.allOf.length > 0) {
    const hasOnlyRefAndMinimalProperties =
      schema.allOf.some((item: any) => item.$ref) &&
      (!schema.properties || Object.keys(schema.properties).length === 0);
    if (hasOnlyRefAndMinimalProperties) {
      return true;
    }
  }

  // Check if it's referenced by many other schemas
  const schemaString = JSON.stringify(schemas);
  const refCount = (
    schemaString.match(new RegExp(`#/components/schemas/[^"]*`, "g")) || []
  ).filter((ref) => ref.includes(schema.title || "")).length;

  return refCount > 2; // If referenced by multiple schemas, likely a base class
}
