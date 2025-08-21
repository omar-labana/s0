import type { OpenAPIV3 } from "openapi-types";
import { getPropertyType, handleInheritance } from "./typeResolver.ts";
import type { SchemaUsage } from "./schemaAnalyzer.ts";

export function generateInterfaceCode(
  interfaceName: string,
  schema: OpenAPIV3.SchemaObject,
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): string {
  let interfaceCode = `export interface ${interfaceName} {\n`;

  // Handle inheritance (allOf, oneOf, anyOf)
  if (schema.allOf && Array.isArray(schema.allOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "allOf"
    );
    return interfaceCode;
  }

  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "oneOf"
    );
    return interfaceCode;
  }

  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    interfaceCode = handleInheritance(
      interfaceName,
      schema,
      allSchemas,
      "anyOf"
    );
    return interfaceCode;
  }

  // Generate regular interface
  if (schema.properties) {
    Object.entries(schema.properties).forEach(([propName, propSchema]) => {
      if ("$ref" in propSchema) {
        const refName = propSchema.$ref.split("/").pop() || "unknown";

        const isEnum =
          allSchemas[refName] &&
          !("$ref" in allSchemas[refName]) &&
          (allSchemas[refName] as OpenAPIV3.SchemaObject).enum &&
          Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);

        if (isEnum) {
          interfaceCode += `  ${propName}?: Enums.E_${refName};\n`;
        } else {
          // This is an interface reference, prefix it with I_
          interfaceCode += `  ${propName}?: I_${refName};\n`;
        }
      } else {
        const propType = getPropertyType(propSchema, allSchemas);
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

export function determineInterfaceName(
  schemaName: string,
  usage: SchemaUsage
): string {
  if (usage.isRequest) {
    return `P_${schemaName}`; // Payload
  } else if (usage.isQuery) {
    return `Q_${schemaName}`; // Query
  } else {
    return `I_${schemaName}`; // DTO (default)
  }
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
