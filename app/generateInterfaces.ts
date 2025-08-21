import swagger from "../swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

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
        interfaceName = `P_${schemaName}`; // Payload
      } else if (usage.isQuery) {
        interfaceName = `Q_${schemaName}`; // Query
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
import * as Enums from '@/enums';

`;

  const finalOutput = header + interfacesOutput;
  
  // Create generated directory if it doesn't exist
  const generatedDir = join(process.cwd(), "generated");
  mkdirSync(generatedDir, { recursive: true });
  
  // Write to file
  writeFileSync("./generated/interfaces.ts", finalOutput);
  
  console.log(`✅ Generated ${foundInterfaces.length} interfaces:`);
  foundInterfaces.forEach(name => console.log(`  - ${name}`));
  console.log("📝 Output saved to: generated/interfaces.ts");
  
  return finalOutput;
}


function analyzeSchemaUsage(paths: Record<string, unknown>): Map<string, SchemaUsage> {
  const usage = new Map<string, SchemaUsage>();
  
  Object.entries(paths).forEach(([pathUrl, pathItem]) => {
    if (!pathItem || typeof pathItem !== 'object') return;
    
    const pathItemObj = pathItem as Record<string, unknown>;
    
    // Check all HTTP methods
    const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'] as const;
    
    methods.forEach(method => {
      const operation = pathItemObj[method];
      if (!operation || typeof operation !== 'object') return;
      
      const operationObj = operation as Record<string, unknown>;
      
      // Check request body (POST/PUT/PATCH)
      if (operationObj.requestBody && ['post', 'put', 'patch'].includes(method)) {
        const requestBody = operationObj.requestBody as Record<string, unknown>;
        if (requestBody.content && typeof requestBody.content === 'object') {
          Object.values(requestBody.content as Record<string, unknown>).forEach((mediaType) => {
            if (mediaType && typeof mediaType === 'object' && 'schema' in mediaType) {
              const schema = mediaType.schema as Record<string, unknown>;
              if (schema && '$ref' in schema && typeof schema.$ref === 'string') {
                const refName = schema.$ref.split('/').pop() || '';
                if (refName) {
                  const existing = usage.get(refName) || createDefaultUsage(refName);
                  existing.isRequest = true;
                  existing.httpMethods.push(method.toUpperCase());
                  usage.set(refName, existing);
                }
              }
            }
          });
        }
      }
      
      // Check response schemas
      if (operationObj.responses && typeof operationObj.responses === 'object') {
        Object.values(operationObj.responses as Record<string, unknown>).forEach((response) => {
          if (response && typeof response === 'object' && 'content' in response) {
            const responseObj = response as Record<string, unknown>;
            if (responseObj.content && typeof responseObj.content === 'object') {
              Object.values(responseObj.content as Record<string, unknown>).forEach((mediaType) => {
                if (mediaType && typeof mediaType === 'object' && 'schema' in mediaType) {
                  const schema = mediaType.schema as Record<string, unknown>;
                  if (schema && '$ref' in schema && typeof schema.$ref === 'string') {
                    const refName = schema.$ref.split('/').pop() || '';
                    if (refName) {
                      const existing = usage.get(refName) || createDefaultUsage(refName);
                      existing.isResponse = true;
                      existing.httpMethods.push(method.toUpperCase());
                      usage.set(refName, existing);
                    }
                  }
                }
              });
            }
          }
        });
      }
      
      // FIXED: Check query parameters - create synthetic schema names for GET endpoints
      if (method === 'get' && operationObj.parameters && Array.isArray(operationObj.parameters)) {
        const queryParams = operationObj.parameters.filter((param: any) => 
          param && typeof param === 'object' && param.in === 'query'
        );
        
        if (queryParams.length > 0) {
          // Create a synthetic schema name based on the endpoint
          const operationId = operationObj.operationId as string;
          let querySchemaName = '';
          
          if (operationId) {
            // Extract meaningful name from operationId
            // e.g., "eTendringWebFeaturesAccountCombinationsBudgetGetListGetListEndpoint" 
            // -> "GetAccountCombinationsBudgetList"
            const parts = operationId.split(/(?=[A-Z])/);
            const meaningfulParts = parts.filter(part => 
              !part.toLowerCase().includes('web') &&
              !part.toLowerCase().includes('features') &&
              !part.toLowerCase().includes('endpoint') &&
              part.length > 1
            );
            querySchemaName = meaningfulParts.join('') + 'Query';
          } else {
            // Fallback: use path-based naming
            const pathParts = pathUrl.split('/').filter(p => p && !p.startsWith('{'));
            querySchemaName = pathParts.map(p => 
              p.charAt(0).toUpperCase() + p.slice(1)
            ).join('') + 'Query';
          }
          
          if (querySchemaName) {
            const existing = usage.get(querySchemaName) || createDefaultUsage(querySchemaName);
            existing.isQuery = true;
            existing.httpMethods.push('GET');
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
        
        const isEnum = allSchemas[refName] && !('$ref' in allSchemas[refName]) && (allSchemas[refName] as OpenAPIV3.SchemaObject).enum && Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);
        
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
        
        const isEnum = allSchemas[refName] && !('$ref' in allSchemas[refName]) && (allSchemas[refName] as OpenAPIV3.SchemaObject).enum && Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);
        
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
          
          const isEnum = allSchemas[refName] && !('$ref' in allSchemas[refName]) && (allSchemas[refName] as OpenAPIV3.SchemaObject).enum && Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);
          
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
        
        const isEnum = allSchemas[refName] && !('$ref' in allSchemas[refName]) && (allSchemas[refName] as OpenAPIV3.SchemaObject).enum && Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);
        
        if (isEnum) {
          unionTypes.push(`Enums.E_${refName}`);
        } else {
          unionTypes.push(`I_${refName}`);
        }
      } else {
        const inlineInterfaceName = `${interfaceName}Inline${unionTypes.length}`;
        unionTypes.push(inlineInterfaceName);
      }
    });
    
    return `export type ${interfaceName} = ${unionTypes.join(' | ')};`;
  }
}

function getPropertyType(
  propSchema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject, 
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): string {
  // If it's a reference, we need to resolve it first
  if ('$ref' in propSchema) {
    const refName = propSchema.$ref.split('/').pop() || 'unknown';
    const resolvedSchema = allSchemas[refName];
    if (resolvedSchema) {
      return getPropertyType(resolvedSchema, allSchemas);
    }
    return 'unknown';
  }
  
  // Now we know it's a SchemaObject
  const schema = propSchema as OpenAPIV3.SchemaObject;
  
  if (schema.enum && Array.isArray(schema.enum)) {
    let enumName = schema.title || ((schema as Record<string, unknown>)['x-enumNames'] as string[])?.[0] || 'Unknown';
    
    if (!enumName.startsWith('E_')) {
      enumName = `E_${enumName}`;
    }
    
    return `Enums.${enumName}`;
  }
  
  if (schema.type === 'array') {
    const itemType = schema.items ? getPropertyType(schema.items, allSchemas) : 'unknown';
    return `${itemType}[]`;
  }
  
  if (schema.type === 'object') {
    if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
      const valueType = getPropertyType(schema.additionalProperties, allSchemas);
      return `Record<string, ${valueType}>`;
    }
    return 'object';
  }
  
  if (schema.type === 'integer') {
    return 'number';
  }
  
  if (schema.type === 'number') {
    return 'number';
  }
  
  if (schema.type === 'boolean') {
    return 'boolean';
  }
  
  if (schema.type === 'string') {
    return 'string';
  }
  
  if (schema.nullable) {
    const baseType = getPropertyType({ ...schema, nullable: false }, allSchemas);
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
