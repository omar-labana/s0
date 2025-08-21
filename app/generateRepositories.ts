import swagger from "../swagger.json" with { type: "json" };
import { generateRepositories } from "./generators/repositoryOrchestrator.ts";
import type { OpenAPIV3 } from "npm:openapi-types";

// Main entry point for repository generation

// Run the generator
generateRepositories(swagger as OpenAPIV3.Document);
