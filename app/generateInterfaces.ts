import swagger from "../swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { writeFileSync } from "node:fs";

// Type for schemas with custom properties
type SchemaWithCustomProps = OpenAPIV3.SchemaObject & {
  'x-enumNames'?: string[];
  'x-enum-varnames'?: string[];
};

// Interface to track schema usage in API paths
interface SchemaUsage {
  name: string;
  isRequest: boolean;
  isResponse: boolean;
  isQuery: boolean;
  httpMethods: string[];
}

export function generateInterfaces(components: Partial<OpenAPIV3.ComponentsObject>) {
  const schemas = components.schemas;
  
  if (!schemas) {
    console.log("No schemas found in components");
    return;
  }

  // Analyze schema usage in API paths to determine interface types
  const schemaUsage = analyzeSchemaUsage(swagger.paths);
  
  let interfacesOutput = "";
  const foundInterfaces: string[] = [];
  const processedSchemas = new Set<string>();

  // Iterate through all schemas
  Object.entries(schemas).forEach(([schemaName, schema]) => {
    // Skip $ref objects and enums (handled by generateEnums.ts)
    if ('$ref' in schema || (schema.enum && Array.isArray(schema.enum))) {
      return;
    }

    // Check if schema has properties - this is an INTERFACE
    if (schema.properties && Object.keys(schema.properties).length > 0) {
      const usage = schemaUsage.get(schemaName) || {
        name: schemaName,
        isRequest: false,
        isResponse: false,
        isQuery: false,
        httpMethods: []
      };

      // Determine interface type based on usage analysis
      let interfaceName: string;
      if (usage.isRequest) {
        interfaceName = `IP_${schemaName}`; // Payload
      } else if (usage.isQuery) {
        interfaceName = `IQ_${schemaName}`; // Query
      } else {
        interfaceName = `I_${schemaName}`; // DTO (default)
      }

      // Generate TypeScript interface
      const interfaceCode = generateInterfaceCode(interfaceName, schema, schemas);
      interfacesOutput += interfaceCode + "\n\n";
      foundInterfaces.push(interfaceName);
      processedSchemas.add(schemaName);
    }
  });

  if (foundInterfaces.length === 0) {
    console.log("No interfaces found in the swagger file");
    return;
  }

  // Add header comment
  const header = `// Auto-generated interfaces from swagger.json
// Generated on: ${formatTimestamp(new Date())}
// Found ${foundInterfaces.length} interface(s): ${foundInterfaces.join(', ')}

// Interface naming conventions:
// I_  -> DTO (response objects)
// IP_ -> Payload (mutation request objects)
// IQ_ -> Query parameters (GET request objects)

// Import all generated enums
import * as Enums from './generated-enums.ts';

`;

  const finalOutput = header + interfacesOutput;
  
  // Write to file
  writeFileSync("./generated-interfaces.ts", finalOutput);
  
  console.log(`✅ Generated ${foundInterfaces.length} interfaces:`);
  foundInterfaces.forEach(name => console.log(`  - ${name}`));
  console.log("📝 Output saved to: generated-interfaces.ts");
  
  return finalOutput;
}

function analyzeSchemaUsage(paths: any): Map<string, SchemaUsage> {
  const usage = new Map<string, SchemaUsage>();
  
  Object.entries(paths).forEach(([path, pathItem]: [string, any]) => {
    if (!pathItem) return;
    
    // Check all HTTP methods
    const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'];
    
    methods.forEach(method => {
      const operation = pathItem[method];
      if (!operation) return;
      
      // Check request body (POST/PUT/PATCH)
      if (operation.requestBody && ['post', 'put', 'patch'].includes(method)) {
        const requestBody = operation.requestBody;
        if (requestBody.content) {
          Object.values(requestBody.content).forEach((mediaType: any) => {
            if (mediaType.schema && '$ref' in mediaType.schema) {
              const refName = mediaType.schema.$ref.split('/').pop() || '';
              if (refName) {
                const existing = usage.get(refName) || createDefaultUsage(refName);
                existing.isRequest = true;
                existing.httpMethods.push(method.toUpperCase());
                usage.set(refName, existing);
              }
            }
          });
        }
      }
      
      // Check response schemas
      if (operation.responses) {
        Object.values(operation.responses).forEach((response: any) => {
          if (response && 'content' in response && response.content) {
            Object.values(response.content).forEach((mediaType: any) => {
              if (mediaType.schema && '$ref' in mediaType.schema) {
                const refName = mediaType.schema.$ref.split('/').pop() || '';
                if (refName) {
                  const existing = usage.get(refName) || createDefaultUsage(refName);
                  existing.isResponse = true;
                  existing.httpMethods.push(method.toUpperCase());
                  usage.set(refName, existing);
                }
              }
            });
          }
        });
      }
      
      // Check query parameters (GET requests)
      if (method === 'get' && operation.parameters) {
        operation.parameters.forEach((param: any) => {
          if (param && 'schema' in param && param.schema && '$ref' in param.schema) {
            const refName = param.schema.$ref.split('/').pop() || '';
            if (refName) {
              const existing = usage.get(refName) || createDefaultUsage(refName);
              existing.isQuery = true;
              existing.httpMethods.push('GET');
              usage.set(refName, existing);
            }
          }
        });
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
    httpMethods: []
  };
}

function generateInterfaceCode(
  interfaceName: string, 
  schema: OpenAPIV3.SchemaObject, 
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): string {
  let interfaceCode = `export interface ${interfaceName} {\n`;
  
  // Handle inheritance (allOf, oneOf, anyOf)
  if (schema.allOf && Array.isArray(schema.allOf)) {
    interfaceCode = handleInheritance(interfaceName, schema, allSchemas, 'allOf');
    return interfaceCode;
  }
  
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    interfaceCode = handleInheritance(interfaceName, schema, allSchemas, 'oneOf');
    return interfaceCode;
  }
  
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    interfaceCode = handleInheritance(interfaceName, schema, allSchemas, 'anyOf');
    return interfaceCode;
  }
  
  // Generate regular interface
  if (schema.properties) {
    Object.entries(schema.properties).forEach(([propName, propSchema]) => {
      if ('$ref' in propSchema) {
        const refName = propSchema.$ref.split('/').pop() || 'unknown';
        
        const isEnum = allSchemas[refName] && (allSchemas[refName] as any).enum && Array.isArray((allSchemas[refName] as any).enum);
        
        if (isEnum) {
          interfaceCode += `  ${propName}: Enums.E_${refName};\n`;
        } else {
          // This is an interface reference, prefix it with I_
          interfaceCode += `  ${propName}: I_${refName};\n`;
        }
      } else {
        const propType = getPropertyType(propSchema, allSchemas);
        const isRequired = schema.required?.includes(propName) || false;
        const optionalMarker = isRequired ? '' : '?';
        
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

function handleInheritance(
  interfaceName: string,
  schema: OpenAPIV3.SchemaObject,
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>,
  inheritanceType: 'allOf' | 'oneOf' | 'anyOf'
): string {
  const inheritanceSchemas = schema[inheritanceType] || [];
  
  if (inheritanceType === 'allOf') {
    let interfaceCode = `export interface ${interfaceName}`;
    const extendsList: string[] = [];
    const properties: string[] = [];
    
    inheritanceSchemas.forEach((inheritedSchema, index) => {
      if ('$ref' in inheritedSchema) {
        const refName = inheritedSchema.$ref.split('/').pop() || `Base${index}`;
        
        const isEnum = allSchemas[refName] && (allSchemas[refName] as any).enum && Array.isArray((allSchemas[refName] as any).enum);
        
        if (isEnum) {
          extendsList.push(`Enums.E_${refName}`);
        } else {
          extendsList.push(`I_${refName}`);
        }
      } else if (inheritedSchema.properties) {
        Object.entries(inheritedSchema.properties).forEach(([propName, propSchema]) => {
          const propType = getPropertyType(propSchema, allSchemas);
          const isRequired = inheritedSchema.required?.includes(propName) || false;
          const optionalMarker = isRequired ? '' : '?';
          properties.push(`  ${propName}${optionalMarker}: ${propType};`);
        });
      }
    });
    
    if (extendsList.length > 0) {
      interfaceCode += ` extends ${extendsList.join(', ')}`;
    }
    
    interfaceCode += " {\n";
    
    if (schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        if ('$ref' in propSchema) {
          const refName = propSchema.$ref.split('/').pop() || 'unknown';
          
          const isEnum = allSchemas[refName] && (allSchemas[refName] as any).enum && Array.isArray((allSchemas[refName] as any).enum);
          
          if (isEnum) {
            properties.push(`  ${propName}: Enums.E_${refName};`);
          } else {
            properties.push(`  ${propName}: I_${refName};`);
          }
        } else {
          const propType = getPropertyType(propSchema, allSchemas);
          const isRequired = schema.required?.includes(propName) || false;
          const optionalMarker = isRequired ? '' : '?';
          properties.push(`  ${propName}${optionalMarker}: ${propType};`);
        }
      });
    }
    
    interfaceCode += properties.join('\n') + '\n}';
    return interfaceCode;
  } else {
    const unionTypes: string[] = [];
    
    inheritanceSchemas.forEach((inheritedSchema) => {
      if ('$ref' in inheritedSchema) {
        const refName = inheritedSchema.$ref.split('/').pop() || 'unknown';
        
        const isEnum = allSchemas[refName] && (allSchemas[refName] as any).enum && Array.isArray((allSchemas[refName] as any).enum);
        
        if (isEnum) {
          unionTypes.push(`Enums.E_${refName}`);
        } else {
          unionTypes.push(`I_${refName}`);
        }
      } else {
        const inlineInterfaceName = `${interfaceName}Inline${unionTypes.length}`;
        const inlineCode = generateInterfaceCode(inlineInterfaceName, inheritedSchema, allSchemas);
        unionTypes.push(inlineInterfaceName);
      }
    });
    
    return `export type ${interfaceName} = ${unionTypes.join(' | ')};`;
  }
}

function getPropertyType(
  propSchema: any, 
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): string {
  if (propSchema.enum && Array.isArray(propSchema.enum)) {
    let enumName = propSchema.title || propSchema['x-enumNames']?.[0] || 'Unknown';
    
    if (!enumName.startsWith('E_')) {
      enumName = `E_${enumName}`;
    }
    
    return `Enums.${enumName}`;
  }
  
  if (propSchema.type === 'array') {
    const itemType = propSchema.items ? getPropertyType(propSchema.items, allSchemas) : 'unknown';
    return `${itemType}[]`;
  }
  
  if (propSchema.type === 'object') {
    if (propSchema.additionalProperties) {
      const valueType = getPropertyType(propSchema.additionalProperties, allSchemas);
      return `Record<string, ${valueType}>`;
    }
    return 'object';
  }
  
  if (propSchema.type === 'integer') {
    return 'number';
  }
  
  if (propSchema.type === 'number') {
    return 'number';
  }
  
  if (propSchema.type === 'boolean') {
    return 'boolean';
  }
  
  if (propSchema.type === 'string') {
    return 'string';
  }
  
  if (propSchema.nullable) {
    const baseType = getPropertyType({ ...propSchema, nullable: false }, allSchemas);
    return `${baseType} | null`;
  }
  
  return 'unknown';
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
generateInterfaces(swagger.components as Partial<OpenAPIV3.ComponentsObject>);
