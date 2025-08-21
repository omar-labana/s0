import swagger from "../swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { 
  analyzeSchemaUsage, 
  generateInterfaceCode, 
  determineInterfaceName, 
  generateHeaderComment,
  writeInterfacesToFile, 
  logGenerationResults 
} from "./generators/index.ts";

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

    // Check if schema has properties OR uses inheritance (allOf, oneOf, anyOf) OR is an empty object - this is an INTERFACE
    if (schema.properties || schema.allOf || schema.oneOf || schema.anyOf || 
        (schema.type === 'object' && !schema.enum)) {
      const usage = schemaUsage.get(schemaName) || {
        name: schemaName,
        isRequest: false,
        isResponse: false,
        isQuery: false,
        httpMethods: []
      };

      // Determine interface type based on usage analysis
      const interfaceName = determineInterfaceName(schemaName, usage);

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
  const header = generateHeaderComment(foundInterfaces, new Date());
  const finalOutput = header + interfacesOutput;
  
  // Write to file
  writeInterfacesToFile(finalOutput);
  
  // Log results
  logGenerationResults(foundInterfaces);
  
  return finalOutput;
}

// Run the generator
generateInterfaces(swagger.components as Partial<OpenAPIV3.ComponentsObject>);
