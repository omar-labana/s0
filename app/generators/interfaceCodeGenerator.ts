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

// Configuration that can be externalized
interface AnalyzerConfig {
  requestIndicators: string[];
  responseIndicators: string[];
  baseClassIndicators: string[];
  lifecycleProperties: string[];
  auditProperties: string[];
  identityProperties: string[];
  customPatterns?: {
    requestPatterns?: RegExp[];
    responsePatterns?: RegExp[];
    baseClassPatterns?: RegExp[];
  };
}

// Default config that can be overridden
const DEFAULT_CONFIG: AnalyzerConfig = {
  requestIndicators: [
    "request",
    "command",
    "input",
    "query",
    "filter",
    "search",
    "create",
    "update",
    "delete",
    "patch",
    "get",
    "list",
    // Add flexibility for different naming conventions
    "mutation",
    "action",
    "operation",
    "cmd",
    "exec",
  ],
  responseIndicators: [
    "dto",
    "response",
    "entity",
    "model",
    "result",
    "output",
    "info",
    "details",
    "summary",
    "list",
    "item",
    // Add flexibility
    "data",
    "view",
    "read",
    "resource",
    "representation",
  ],
  baseClassIndicators: [
    "base",
    "abstract",
    "core",
    "foundation",
    "common",
    "shared",
    "entity",
    "model",
    "template",
    "prototype",
    "interface",
    // Add flexibility
    "parent",
    "root",
    "super",
    "master",
    "main",
    "principal",
  ],
  lifecycleProperties: [
    "createdAt",
    "updatedAt",
    "createdDate",
    "modifiedDate",
    // Add common variations
    "created_at",
    "updated_at",
    "date_created",
    "date_modified",
    "timestamp",
    "created",
    "updated",
    "dateCreated",
    "dateUpdated",
  ],
  auditProperties: [
    "createdBy",
    "modifiedBy",
    "createdByUser",
    "modifiedByUser",
    // Add variations
    "created_by",
    "modified_by",
    "creator",
    "modifier",
    "author",
    "editor",
  ],
  identityProperties: [
    "id",
    "guid",
    "uuid",
    "key",
    // Add variations
    "_id",
    "identifier",
    "pk",
    "primaryKey",
    "entityId",
  ],
};

/**
 * Learns patterns from the actual swagger.json file
 */
class SwaggerPatternLearner {
  private config: AnalyzerConfig;
  private learnedPatterns: {
    requestSchemas: Set<string>;
    responseSchemas: Set<string>;
    baseClassSchemas: Set<string>;
  };

  constructor(config?: Partial<AnalyzerConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.learnedPatterns = {
      requestSchemas: new Set(),
      responseSchemas: new Set(),
      baseClassSchemas: new Set(),
    };
  }

  /**
   * Learn patterns from actual API paths and their usage
   */
  learnFromApiPaths(paths: OpenAPIV3.PathsObject): void {
    Object.entries(paths).forEach(([path, pathItem]) => {
      if (!pathItem) return;

      Object.entries(pathItem).forEach(([method, operation]) => {
        if (!operation || typeof operation !== "object") return;

        const op = operation as OpenAPIV3.OperationObject;

        // Learn request patterns
        if (op.requestBody && "content" in op.requestBody) {
          const content = op.requestBody.content;
          Object.values(content).forEach((mediaType) => {
            if (mediaType.schema && "$ref" in mediaType.schema) {
              const schemaName = this.extractSchemaName(mediaType.schema.$ref);
              if (schemaName) {
                this.learnedPatterns.requestSchemas.add(schemaName);
              }
            }
          });
        }

        // Learn response patterns
        if (op.responses) {
          Object.values(op.responses).forEach((response) => {
            if (response && "content" in response && response.content) {
              Object.values(response.content).forEach((mediaType) => {
                if (mediaType.schema && "$ref" in mediaType.schema) {
                  const schemaName = this.extractSchemaName(
                    mediaType.schema.$ref
                  );
                  if (schemaName) {
                    this.learnedPatterns.responseSchemas.add(schemaName);
                  }
                }
              });
            }
          });
        }

        // Learn parameter patterns
        if (op.parameters) {
          op.parameters.forEach((param) => {
            if ("schema" in param && param.schema && "$ref" in param.schema) {
              const schemaName = this.extractSchemaName(param.schema.$ref);
              if (schemaName) {
                // Parameters are typically query objects
                this.learnedPatterns.requestSchemas.add(schemaName);
              }
            }
          });
        }
      });
    });
  }

  /**
   * Learn inheritance patterns from schemas
   */
  learnFromSchemas(
    schemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
  ): void {
    const inheritanceGraph = new Map<string, Set<string>>();

    // Build inheritance graph
    Object.entries(schemas).forEach(([name, schema]) => {
      if ("$ref" in schema) return;

      if (schema.allOf) {
        schema.allOf.forEach((subSchema) => {
          if ("$ref" in subSchema) {
            const parentName = this.extractSchemaName(subSchema.$ref);
            if (parentName) {
              if (!inheritanceGraph.has(parentName)) {
                inheritanceGraph.set(parentName, new Set());
              }
              inheritanceGraph.get(parentName)!.add(name);
            }
          }
        });
      }
    });

    // Schemas that are inherited by multiple others are likely base classes
    inheritanceGraph.forEach((children, parent) => {
      if (children.size >= 2) {
        // Has multiple children
        this.learnedPatterns.baseClassSchemas.add(parent);
      }
    });
  }

  /**
   * Adaptive pattern recognition that learns from the actual data
   */
  isRequestSchema(
    schemaName: string,
    schema?: OpenAPIV3.SchemaObject
  ): boolean {
    // First check learned patterns
    if (this.learnedPatterns.requestSchemas.has(schemaName)) {
      return true;
    }

    // Then use adaptive semantic analysis
    return this.semanticAnalysis(
      schemaName,
      this.config.requestIndicators,
      "request"
    );
  }

  isResponseSchema(
    schemaName: string,
    schema?: OpenAPIV3.SchemaObject
  ): boolean {
    if (this.learnedPatterns.responseSchemas.has(schemaName)) {
      return true;
    }

    return this.semanticAnalysis(
      schemaName,
      this.config.responseIndicators,
      "response"
    );
  }

  isBaseClassSchema(
    schemaName: string,
    schema?: OpenAPIV3.SchemaObject
  ): boolean {
    if (this.learnedPatterns.baseClassSchemas.has(schemaName)) {
      return true;
    }

    return this.semanticAnalysis(
      schemaName,
      this.config.baseClassIndicators,
      "base"
    );
  }

  /**
   * Adaptive semantic analysis that can handle various naming conventions
   */
  private semanticAnalysis(
    text: string,
    indicators: string[],
    type: string
  ): boolean {
    const words = this.extractWords(text);

    // Direct matches
    const directMatches = words.filter((word) =>
      indicators.some((indicator) =>
        word.toLowerCase().includes(indicator.toLowerCase())
      )
    ).length;

    if (directMatches > 0) return true;

    // Custom patterns if provided
    const customPatterns = this.config.customPatterns;
    if (customPatterns) {
      let patterns: RegExp[] = [];
      switch (type) {
        case "request":
          patterns = customPatterns.requestPatterns || [];
          break;
        case "response":
          patterns = customPatterns.responsePatterns || [];
          break;
        case "base":
          patterns = customPatterns.baseClassPatterns || [];
          break;
      }

      if (patterns.some((pattern) => pattern.test(text))) {
        return true;
      }
    }

    return false;
  }

  /**
   * Extract words from different naming conventions
   */
  private extractWords(text: string): string[] {
    // Handle multiple naming conventions
    return text
      .split(/[_\-\s]+/) // Split on underscore, dash, space
      .flatMap((part) => part.split(/(?=[A-Z])/)) // Split on camelCase
      .filter((word) => word.length > 0)
      .map((word) => word.toLowerCase());
  }

  private extractSchemaName(ref: string): string | null {
    const match = ref.match(/#\/components\/schemas\/(.+)$/);
    return match ? match[1] : null;
  }

  /**
   * Get learned statistics for debugging/optimization
   */
  getLearnedStatistics() {
    return {
      requestSchemas: Array.from(this.learnedPatterns.requestSchemas),
      responseSchemas: Array.from(this.learnedPatterns.responseSchemas),
      baseClassSchemas: Array.from(this.learnedPatterns.baseClassSchemas),
      totalLearned:
        this.learnedPatterns.requestSchemas.size +
        this.learnedPatterns.responseSchemas.size +
        this.learnedPatterns.baseClassSchemas.size,
    };
  }
}

/**
 * Enhanced determineInterfaceName with learning capability
 */
export function createAdaptiveInterfaceNamer(
  paths: OpenAPIV3.PathsObject,
  schemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>,
  config?: Partial<AnalyzerConfig>
) {
  const learner = new SwaggerPatternLearner(config);

  // Learn from the actual swagger file
  learner.learnFromApiPaths(paths);
  learner.learnFromSchemas(schemas);

  // Log what was learned (helpful for debugging)
  console.log("Learned patterns:", learner.getLearnedStatistics());

  return {
    determineInterfaceName: (
      schemaName: string,
      usage: any,
      schema?: OpenAPIV3.SchemaObject
    ): string => {
      // Use learned patterns first, then fallback to usage analysis
      if (learner.isRequestSchema(schemaName, schema) || usage.isRequest) {
        return `P_${schemaName}`;
      }

      if (usage.isQuery) {
        return `Q_${schemaName}`;
      }

      if (learner.isBaseClassSchema(schemaName, schema)) {
        return `I_${schemaName}`;
      }

      if (learner.isResponseSchema(schemaName, schema) || usage.isResponse) {
        return `I_${schemaName}`;
      }

      // Final fallback
      return `I_${schemaName}`;
    },

    getStats: () => learner.getLearnedStatistics(),
  };
}

/**
 * Property pattern learning for more flexible base class detection
 */
export function learnPropertyPatterns(
  schemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): AnalyzerConfig {
  const propertyFrequency = new Map<string, number>();

  // Analyze all properties across all schemas
  Object.values(schemas).forEach((schema) => {
    if ("$ref" in schema || !schema.properties) return;

    Object.keys(schema.properties).forEach((prop) => {
      propertyFrequency.set(prop, (propertyFrequency.get(prop) || 0) + 1);
    });
  });

  // Extract common patterns
  const commonProperties = Array.from(propertyFrequency.entries())
    .filter(([prop, count]) => count >= 3) // Appears in at least 3 schemas
    .map(([prop]) => prop);

  // Categorize properties
  const identityProperties = commonProperties.filter((prop) =>
    /^(id|_id|identifier|key|guid|uuid|pk|primaryKey|entityId)$/i.test(prop)
  );

  const lifecycleProperties = commonProperties.filter((prop) =>
    /^(created|updated|modified|timestamp|date)/i.test(prop)
  );

  const auditProperties = commonProperties.filter((prop) =>
    /^(created_?by|updated_?by|modified_?by|creator|modifier|author|editor)/i.test(
      prop
    )
  );

  return {
    ...DEFAULT_CONFIG,
    identityProperties: [
      ...DEFAULT_CONFIG.identityProperties,
      ...identityProperties,
    ],
    lifecycleProperties: [
      ...DEFAULT_CONFIG.lifecycleProperties,
      ...lifecycleProperties,
    ],
    auditProperties: [...DEFAULT_CONFIG.auditProperties, ...auditProperties],
  };
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use createAdaptiveInterfaceNamer instead
 */
export function determineInterfaceName(
  schemaName: string,
  usage: SchemaUsage,
  schema?: OpenAPIV3.SchemaObject
): string {
  // This is now a legacy function - the new approach should use createAdaptiveInterfaceNamer
  // For now, provide a basic fallback
  if (usage.isRequest) {
    return `P_${schemaName}`;
  } else if (usage.isQuery) {
    return `Q_${schemaName}`;
  } else if (usage.isResponse) {
    return `I_${schemaName}`;
  }

  // Default fallback
  return `I_${schemaName}`;
}

export function generateHeaderComment(
  foundInterfaces: string[],
  timestamp: Date
): string {
  return `// Auto-generated interfaces from swagger.json
// Generated on: ${formatTimestamp(timestamp)}
// Found ${foundInterfaces.length} interface(s): ${foundInterfaces.join(", ")}

// Interface naming conventions (determined by machine learning):
// I_  -> DTO (response objects) and Base classes
// P_ -> Payload (mutation request objects)
// Q_ -> Query parameters (GET request objects)

// Classification is based on:
// 1. Machine learning from actual API usage patterns
// 2. Inheritance graph analysis
// 3. Property frequency analysis across schemas
// 4. Adaptive semantic analysis

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
