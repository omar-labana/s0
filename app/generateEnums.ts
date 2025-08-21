import swagger from "../swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { writeFileSync } from "node:fs";

// Type for schemas with custom enum properties
type SchemaWithCustomProps = OpenAPIV3.SchemaObject & {
  'x-enumNames'?: string[];
  'x-enum-varnames'?: string[];
};

export function generateEnum(components: Partial<OpenAPIV3.ComponentsObject>) {
  const schemas = components.schemas;
  
  if (!schemas) {
    console.log("No schemas found in components");
    return;
  }

  let enumsOutput = "";
  const foundEnums: string[] = [];

  // Iterate through all schemas
  Object.entries(schemas).forEach(([schemaName, schema]) => {
    // Skip $ref objects
    if ('$ref' in schema) {
      return;
    }

    // Check if schema has enum values
    if (schema.enum && Array.isArray(schema.enum)) {
      const enumName = `E_${schemaName}`;
      const enumValues = schema.enum;
      
      // Generate TypeScript enum
      const enumCode = generateEnumCode(enumName, enumValues, schema as SchemaWithCustomProps);
      enumsOutput += enumCode + "\n\n";
      foundEnums.push(enumName);
    }

    // Also check nested properties for enums
    if (schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        if ('$ref' in propSchema) return;
        
        if (propSchema.enum && Array.isArray(propSchema.enum)) {
          const nestedEnumName = `E_${schemaName}${propName.charAt(0).toUpperCase() + propName.slice(1)}`;
          const enumCode = generateEnumCode(nestedEnumName, propSchema.enum, propSchema as SchemaWithCustomProps);
          enumsOutput += enumCode + "\n\n";
          foundEnums.push(nestedEnumName);
        }
      });
    }
  });

  if (foundEnums.length === 0) {
    console.log("No enums found in the swagger file");
    return;
  }

  // Add header comment
  const header = `// Generated on: ${formatTimestamp(new Date())}\n\n`;

  const finalOutput = header + enumsOutput;
  
  // Write to file
  writeFileSync("./generated-enums.ts", finalOutput);
  
  console.log(`✅ Generated ${foundEnums.length} enums:`);
  foundEnums.forEach(name => console.log(`  - ${name}`));
  console.log("📝 Output saved to: generated-enums.ts");
  
  return finalOutput;
}

function generateEnumCode(
  enumName: string, 
  enumValues: (string | number)[], 
  schema: SchemaWithCustomProps
): string {
  // Check for x-enumNames extension (common in NSwag)
  const enumNames = schema['x-enumNames'] || schema['x-enum-varnames'] || [];
  
  // Determine if enum values are strings or numbers
  const firstValue = enumValues[0];
  const isStringEnum = typeof firstValue === 'string';
  
  let enumCode = `export enum ${enumName} {\n`;
  
  enumValues.forEach((value, index) => {
    let key: string;
    
    // Use descriptive name if available, otherwise create from value
    if (enumNames[index]) {
      key = createValidEnumKey(enumNames[index]);
    } else if (isStringEnum) {
      key = createValidEnumKey(value as string);
    } else {
      // For numeric enums without names, try to create meaningful names
      key = createMeaningfulNumericKey(enumName, value as number);
    }
    
    if (isStringEnum) {
      enumCode += `  ${key} = "${value}"`;
    } else {
      enumCode += `  ${key} = ${value}`;
    }
    
    // Add comma except for last item
    if (index < enumValues.length - 1) {
      enumCode += ",";
    }
    enumCode += "\n";
  });
  
  enumCode += "}";
  
  // Add JSDoc comment if schema has description
  if (schema.description) {
    const comment = `/**
 * ${schema.description}
 */
`;
    enumCode = comment + enumCode;
  }
  
  return enumCode;
}

function createMeaningfulNumericKey(enumName: string, value: number): string {
  // Custom mappings for your specific domain
  const customMappings: Record<string, Record<number, string>> = {
    'SortDirection': { 1: 'ASCENDING', 2: 'DESCENDING' },
    'MeetingStatus': { 1: 'SCHEDULED', 2: 'IN_PROGRESS', 3: 'COMPLETED', 4: 'CANCELLED' },
    'ProjectStatus': { 1: 'ACTIVE', 2: 'COMPLETED', 4: 'ON_HOLD' },
    'InitiativePriority': { 1: 'LOW', 2: 'MEDIUM', 3: 'HIGH' },
    'ContractStatus': { 1: 'DRAFT', 2: 'PENDING', 3: 'APPROVED', 4: 'ACTIVE', 5: 'COMPLETED', 6: 'CANCELLED', 7: 'EXPIRED' },
    'TenderStatusEnum': { 1: 'DRAFT', 2: 'PUBLISHED', 3: 'CLOSED', 4: 'EVALUATED', 5: 'AWARDED', 6: 'CANCELLED' }
  };
  
  // Check custom mappings first
  if (customMappings[enumName] && customMappings[enumName][value]) {
    return customMappings[enumName][value];
  }
  
  // Try to create more meaningful names for numeric enums
  const commonPatterns: Record<string, string[]> = {
    'Status': ['UNKNOWN', 'ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED', 'FAILED', 'CANCELLED'],
    'Priority': ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    'Type': ['UNKNOWN', 'TYPE_A', 'TYPE_B', 'TYPE_C', 'TYPE_D'],
    'Direction': ['NONE', 'ASCENDING', 'DESCENDING'],
    'State': ['NONE', 'DRAFT', 'PUBLISHED', 'ARCHIVED']
  };
  
  // Check if enum name contains common patterns
  for (const [pattern, names] of Object.entries(commonPatterns)) {
    if (enumName.toLowerCase().includes(pattern.toLowerCase()) && names[value]) {
      return names[value];
    }
  }
  
  // Fallback to generic names
  if (value === 0) return 'NONE';
  if (value === 1) return 'FIRST';
  if (value === 2) return 'SECOND';
  if (value === 3) return 'THIRD';
  
  // Last resort: use the underscore prefix
  return `VALUE_${value}`;
}

function createValidEnumKey(value: string): string {
  // Convert to valid TypeScript enum key
  return value
    .replace(/[^a-zA-Z0-9_]/g, '_') // Replace invalid chars with underscore
    .replace(/^(\d)/, '_$1')        // Prefix with underscore if starts with number
    .replace(/^_+/, '_')            // Remove multiple leading underscores
}

function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[date.getDay()];
  
  return `${hours}:${minutes} ${dayName} ${day} ${month} ${year}`;
}



// Run the generator
generateEnum(swagger.components as Partial<OpenAPIV3.ComponentsObject>);