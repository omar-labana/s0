import type { OpenAPIV3 } from "openapi-types";
import { getPropertyType, handleInheritance } from "./typeResolver.ts";
import type { SchemaUsage } from "./schemaAnalyzer.ts";

export function generateInterfaceCode(
  interfaceName: string,
  schema: OpenAPIV3.SchemaObject,
  allSchemas: Record<
    string,
    OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
  >,
  interfaceNameLookup?: Map<string, string>
): string {
  let interfaceCode = `export interface ${interfaceName} {\n`;

  // Handle inheritance (allOf, oneOf, anyOf)
  if (schema.allOf && Array.isArray(schema.allOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "allOf",
      interfaceNameLookup
    );
    return interfaceCode;
  }

  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "oneOf",
      interfaceNameLookup
    );
    return interfaceCode;
  }

  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "anyOf",
      interfaceNameLookup
    );
    return interfaceCode;
  }

  // Generate regular interface
  if (schema.properties) {
    Object.entries(schema.properties).forEach(([propName, propSchema]) => {
      if ("$ref" in propSchema) {
        const refName = propSchema.$ref.split("/").pop() || "unknown";

        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema && !("$ref" in resolvedSchema)) {
          const schemaObj = resolvedSchema as OpenAPIV3.SchemaObject;
          const isEnum = schemaObj.enum && Array.isArray(schemaObj.enum);

          if (isEnum) {
            interfaceCode += `  ${propName}?: Enums.E_${refName};\n`;
          } else {
            // Use the lookup table to get the correct interface name, or fallback to I_ if not found
            const correctInterfaceName =
              interfaceNameLookup?.get(refName) || `I_${refName}`;
            interfaceCode += `  ${propName}?: ${correctInterfaceName};\n`;
          }
        } else {
          // Use the lookup table to get the correct interface name, or fallback to I_ if not found
          const correctInterfaceName =
            interfaceNameLookup?.get(refName) || `I_${refName}`;
          interfaceCode += `  ${propName}?: ${correctInterfaceName};\n`;
        }
      } else {
        const propType = getPropertyType(
          propSchema,
          allSchemas,
          interfaceNameLookup
        );
        const isRequired = schema.required?.includes(propName) || false;
        const optionalMarker = isRequired ? "" : "?";

        interfaceCode += `  ${propName}${optionalMarker}: ${propType};\n`;
      }
    });
  }

  interfaceCode += "}";

  if (schema.description) {
    const comment = `/**
 * ${schema.description}
 */
`;
    interfaceCode = comment + interfaceCode;
  }

  return interfaceCode;
}

/**
 * Intelligent interface naming based on actual schema structure and usage patterns
 * This replaces hardcoded string matching with real analysis
 */
export function determineInterfaceName(
  schemaName: string,
  usage: SchemaUsage,
  schema?: OpenAPIV3.SchemaObject
): string {
  // Special case: Base interfaces should always be prefixed with I_
  if (isBaseInterface(schemaName, schema)) {
    return `I_${schemaName}`;
  }

  // If we have schema usage information, use it as the primary indicator
  if (usage.isRequest) {
    return `P_${schemaName}`; // Payload
  } else if (usage.isQuery) {
    return `Q_${schemaName}`; // Query
  } else if (usage.isResponse) {
    return `I_${schemaName}`; // Response DTO
  }

  // If no usage info, analyze the schema structure itself
  if (schema) {
    const interfaceType = analyzeSchemaStructure(schema, schemaName);
    if (interfaceType) {
      return `${interfaceType}_${schemaName}`;
    }
  }

  // Fallback: analyze the schema name for common patterns
  const fallbackType = analyzeSchemaName(schemaName);
  return `${fallbackType}_${schemaName}`;
}

/**
 * Determines if a schema is a base interface that should always be prefixed with I_
 */
function isBaseInterface(
  schemaName: string,
  schema?: OpenAPIV3.SchemaObject
): boolean {
  // FIRST: Check if this is a request schema (should NOT be classified as base)
  if (
    schemaName.includes("Request") ||
    schemaName.includes("Command") ||
    schemaName.includes("Input") ||
    schemaName.includes("Create") ||
    schemaName.includes("Update") ||
    schemaName.includes("Delete") ||
    schemaName.includes("Patch")
  ) {
    return false; // This is a request schema, not a base interface
  }

  // Check if the name suggests it's a base class
  if (
    schemaName.includes("Base") ||
    schemaName.includes("Entity") ||
    schemaName.includes("Audited") ||
    schemaName.includes("Modification")
  ) {
    return true;
  }

  // Check if the schema structure suggests it's a base class
  if (schema) {
    // Abstract classes
    if ((schema as Record<string, unknown>)["x-abstract"] === true) {
      return true;
    }

    // Schemas that only have allOf with $ref (base entity pattern)
    if (schema.allOf && schema.allOf.length > 0) {
      const hasOnlyRefAndMinimalProperties =
        schema.allOf.some(
          (item: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) =>
            "$ref" in item && item.$ref
        ) &&
        (!schema.properties || Object.keys(schema.properties).length === 0);
      if (hasOnlyRefAndMinimalProperties) {
        return true;
      }
    }

    // Empty schemas that are likely base classes - but exclude request schemas
    if (!schema.properties || Object.keys(schema.properties).length === 0) {
      // Check if this is a request schema (should not be classified as base)
      if (schema.allOf && Array.isArray(schema.allOf)) {
        const baseSchemas = schema.allOf.filter(
          (s) =>
            !("$ref" in s) ||
            s.$ref.includes("Request") ||
            s.$ref.includes("Command") ||
            s.$ref.includes("Input")
        );
        if (baseSchemas.length > 0) {
          return false; // This is a request schema, not a base interface
        }
      }

      // Check description for clues
      if (schema.description?.toLowerCase().includes("request")) {
        return false; // This is a request schema, not a base interface
      }

      // Check for OpenAPI extensions that might indicate purpose
      if (
        (schema as Record<string, unknown>)["x-purpose"] === "request" ||
        (schema as Record<string, unknown>)["x-type"] === "request"
      ) {
        return false; // This is a request schema, not a base interface
      }

      // Only classify as base if it has inheritance and no request indicators
      if (schema.allOf || schema.oneOf || schema.anyOf) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Analyze schema structure to determine interface type
 */
function analyzeSchemaStructure(
  schema: OpenAPIV3.SchemaObject,
  schemaName: string
): string | null {
  // Check if this is an empty schema (likely a request wrapper)
  if (!schema.properties || Object.keys(schema.properties).length === 0) {
    // Check if it extends from a base request schema
    if (schema.allOf && Array.isArray(schema.allOf)) {
      const baseSchemas = schema.allOf.filter(
        (s) =>
          !("$ref" in s) ||
          s.$ref.includes("Request") ||
          s.$ref.includes("Command") ||
          s.$ref.includes("Input")
      );
      if (baseSchemas.length > 0) {
        return "P"; // Request
      }
    }

    // Check description for clues
    if (schema.description?.toLowerCase().includes("request")) {
      return "P"; // Request
    }

    // Check for OpenAPI extensions that might indicate purpose
    if (
      (schema as Record<string, unknown>)["x-purpose"] === "request" ||
      (schema as Record<string, unknown>)["x-type"] === "request"
    ) {
      return "P"; // Request
    }

    // Check if the schema name itself suggests it's a request
    if (schemaName.includes("Request") && !schemaName.includes("Dto")) {
      return "P"; // Request
    }

    if (schemaName.includes("Command") || schemaName.includes("Input")) {
      return "P"; // Request
    }
  }

  // Check if this is a data transfer object (has meaningful properties)
  if (schema.properties && Object.keys(schema.properties).length > 0) {
    // Check if it extends from a base entity
    if (schema.allOf && Array.isArray(schema.allOf)) {
      const baseSchemas = schema.allOf.filter(
        (s) =>
          !("$ref" in s) ||
          s.$ref.includes("Entity") ||
          s.$ref.includes("Dto") ||
          s.$ref.includes("Model")
      );
      if (baseSchemas.length > 0) {
        return "I"; // Response DTO
      }
    }

    // Check if it has typical DTO properties
    const hasId = "id" in schema.properties;
    const hasTimestamps =
      "createdAt" in schema.properties || "updatedAt" in schema.properties;
    const hasAuditFields =
      "createdBy" in schema.properties || "modifiedBy" in schema.properties;

    if (hasId || hasTimestamps || hasAuditFields) {
      return "I"; // Response DTO
    }

    // Check description for clues
    if (
      schema.description?.toLowerCase().includes("dto") ||
      schema.description?.toLowerCase().includes("response") ||
      schema.description?.toLowerCase().includes("entity")
    ) {
      return "I"; // Response DTO
    }
  }

  // Check for inheritance patterns
  if (schema.allOf && Array.isArray(schema.allOf)) {
    const baseSchemaNames = schema.allOf
      .filter((s) => "$ref" in s)
      .map((s) => (s as OpenAPIV3.ReferenceObject).$ref.split("/").pop() || "")
      .filter((name) => name.length > 0);

    // If it extends from request-like schemas
    if (
      baseSchemaNames.some(
        (name) =>
          name.includes("Request") ||
          name.includes("Command") ||
          name.includes("Input")
      )
    ) {
      return "P"; // Request
    }

    // If it extends from response-like schemas
    if (
      baseSchemaNames.some(
        (name) =>
          name.includes("Dto") ||
          name.includes("Response") ||
          name.includes("Entity") ||
          name.includes("Model")
      )
    ) {
      return "I"; // Response DTO
    }
  }

  return null; // Could not determine from structure
}

/**
 * Analyze schema name for common patterns (fallback method)
 */
function analyzeSchemaName(schemaName: string): string {
  // Check for explicit type indicators in the name
  if (schemaName.includes("Request") && !schemaName.includes("Dto")) {
    return "P"; // Request
  }

  if (schemaName.includes("Command") || schemaName.includes("Input")) {
    return "P"; // Request
  }

  if (
    schemaName.includes("Dto") ||
    schemaName.includes("Response") ||
    schemaName.includes("Entity") ||
    schemaName.includes("Model")
  ) {
    return "I"; // Response DTO
  }

  // Check for common suffixes
  if (
    schemaName.endsWith("Request") ||
    schemaName.endsWith("Command") ||
    schemaName.endsWith("Input")
  ) {
    return "P"; // Request
  }

  if (
    schemaName.endsWith("Dto") ||
    schemaName.endsWith("Response") ||
    schemaName.endsWith("Entity") ||
    schemaName.endsWith("Model")
  ) {
    return "I"; // Response DTO
  }

  // Default to response DTO for unknown types
  return "I";
}

export function generateHeaderComment(
  foundInterfaces: string[],
  timestamp: Date
): string {
  return `// Auto-generated interfaces from swagger.json
// Generated on: ${formatTimestamp(timestamp)}
// Found ${foundInterfaces.length} interface(s): ${foundInterfaces.join(", ")}

// Interface naming conventions:
// I_  -> DTO (response objects)
// P_ -> Payload (mutation request objects)
// Q_ -> Query parameters (GET request objects)

// Import all generated enums
import * as Enums from '@/enums';

`;
}

function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[date.getDay()];

  return `${hours}:${minutes} ${dayName} ${day} ${month} ${year}`;
}
