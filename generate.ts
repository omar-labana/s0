import swagger from "./swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { generateEnum } from "./app/generateEnums.ts"; 
import { generateInterfaces } from "./app/generateInterfaces.ts";
import { generateRepositories } from "./app/generators/repositoryOrchestrator.ts";

// Run the generators
console.log("🔍 Generating enums...");
generateEnum(swagger.components as Partial<OpenAPIV3.ComponentsObject>);

console.log("\n🔍 Generating interfaces...");
generateInterfaces(swagger.components as Partial<OpenAPIV3.ComponentsObject>);

console.log("\n🔍 Generating repositories...");
generateRepositories(swagger as OpenAPIV3.Document);

console.log("\n✅ All types generated successfully!");