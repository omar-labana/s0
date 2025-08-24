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
 * Pure data-driven interface naming based on actual API usage
 * No assumptions, no naming conventions, just facts from the swagger.json
 */
export function determineInterfaceName(
  schemaName: string,
  usage: SchemaUsage,
  _schema?: OpenAPIV3.SchemaObject
): string {
  // Use ONLY actual API usage data - no assumptions
  if (usage.isRequest) {
    return `P_${schemaName}`; // Payload/Request
  }

  if (usage.isQuery) {
    return `Q_${schemaName}`; // Query parameters
  }

  if (usage.isResponse) {
    return `I_${schemaName}`; // Response DTO
  }

  // For schemas not used in API paths, use I_ prefix (default)
  // This avoids making assumptions about what the schema represents
  return `I_${schemaName}`;
}

export function generateHeaderComment(
  foundInterfaces: string[],
  timestamp: Date
): string {
  return `// Auto-generated interfaces from swagger.json
// Generated on: ${formatTimestamp(timestamp)}
// Found ${foundInterfaces.length} interface(s): ${foundInterfaces.join(", ")}

// Interface naming conventions (data-driven, no assumptions):
// I_  -> DTO (response objects) and default for unused schemas
// P_ -> Payload (mutation request objects) - based on actual API usage
// Q_ -> Query parameters (GET request objects) - based on actual API usage

// Classification is based on:
// 1. Actual API usage analysis (request/response/query from paths)
// 2. No naming conventions or assumptions
// 3. Default to I_ for schemas not used in API paths

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
