import swagger from "./swagger.json" with { type: "json" };
import type { OpenAPIV3 } from "openapi-types";
import { generateEnum } from "./app/generateEnums.ts"; 
import { generateInterfaces } from "./app/generateInterfaces.ts";

// Run the generators
console.log("🔍 Generating enums...");
generateEnum(swagger.components as Partial<OpenAPIV3.ComponentsObject>);

console.log("\n🔍 Generating interfaces...");
generateInterfaces(swagger.components as Partial<OpenAPIV3.ComponentsObject>);

console.log("\n✅ All types generated successfully!");