// Export all generator modules for clean imports

// Schema analysis
export { analyzeSchemaUsage, type SchemaUsage } from "./schemaAnalyzer.ts";

// Interface generation
export {
  generateInterfaceCode,
  determineInterfaceName,
  generateHeaderComment,
} from "./interfaceCodeGenerator.ts";

// Type resolution
export {
  getPropertyType,
  handleInheritance,
  type SchemaWithCustomProps,
} from "./typeResolver.ts";

// File output
export { writeInterfacesToFile, logGenerationResults } from "./fileOutput.ts";

// Existing modules
export * from "./interfaceGenerator.ts";
export * from "./methodGenerator.ts";
export * from "./methodNaming.ts";
export * from "./repositoryContentGenerator.ts";
export * from "./repositoryOrchestrator.ts";
export * from "./utils.ts";
export * from "./types.ts";
export * from "./config.ts";
