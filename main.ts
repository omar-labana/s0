import { defineCommand, runMain } from "npm:citty@0.1.6";
import consola from "npm:consola@3.4.2";
import { $fetch } from "npm:ofetch@1.4.1";
import { generateEnum } from "./app/generateEnums.ts";
import { generateInterfaces } from "./app/generateInterfaces.ts";
import { generateRepositories } from "./app/generators/repositoryOrchestrator.ts";
import type { OpenAPIV3 } from "npm:openapi-types@12.1.3";

const main = defineCommand({
  meta: {
    name: "swagger-generator",
    version: "1.0.0",
    description:
      "Generate TypeScript types and repositories from OpenAPI/Swagger specifications",
  },
  subCommands: {
    generate: {
      meta: {
        description:
          "Generate TypeScript types and repositories from a swagger.json file",
      },
      args: {
        source: {
          type: "positional",
          description: "Path or URL to swagger.json file",
          required: true,
        },
        output: {
          type: "string",
          alias: "o",
          description:
            "Output directory for generated files (default: ./generated)",
          default: "./generated",
        },
        types: {
          type: "flag",
          alias: "t",
          description: "Generate only TypeScript types (enums and interfaces)",
        },
        repositories: {
          type: "flag",
          alias: "r",
          description: "Generate only repository classes",
        },
        force: {
          type: "flag",
          alias: "f",
          description: "Force overwrite existing generated files",
        },
        verbose: {
          type: "flag",
          alias: "v",
          description: "Enable verbose logging",
        },
      },
      async run({ args }) {
        try {
          consola.start("🚀 Starting Swagger Generator...");

          // Load swagger specification
          const swagger = await loadSwaggerSpec(args.source);

          if (args.verbose) {
            consola.info(
              `📋 Loaded OpenAPI specification version: ${swagger.openapi}`
            );
            consola.info(
              `🔗 Info: ${swagger.info?.title || "Unknown"} - ${
                swagger.info?.version || "Unknown"
              }`
            );
          }

          // Set output directory
          const outputDir = args.output;

          // Generate types if requested or if no specific type is specified
          if (args.types || (!args.types && !args.repositories)) {
            consola.info("🔍 Generating enums...");
            generateEnum(
              swagger.components as Partial<OpenAPIV3.ComponentsObject>
            );

            consola.info("🔍 Generating interfaces...");
            generateInterfaces(
              swagger.components as Partial<OpenAPIV3.ComponentsObject>,
              swagger.paths
            );
          }

          // Generate repositories if requested or if no specific type is specified
          if (args.repositories || (!args.types && !args.repositories)) {
            consola.info("🔍 Generating repositories...");
            generateRepositories(swagger as OpenAPIV3.Document);
          }

          consola.success("✅ All types generated successfully!");
          consola.info(`📁 Output directory: ${outputDir}`);
        } catch (error) {
          consola.error("❌ Generation failed!");
          if (args.verbose) {
            consola.error(error);
          } else {
            consola.error((error as Error).message || "Unknown error occurred");
          }
          Deno.exit(1);
        }
      },
    },
    validate: {
      meta: {
        description: "Validate a swagger.json file without generating code",
      },
      args: {
        source: {
          type: "positional",
          description: "Path or URL to swagger.json file",
          required: true,
        },
      },
      async run({ args }) {
        try {
          consola.start("🔍 Validating Swagger specification...");

          const swagger = await loadSwaggerSpec(args.source);

          consola.success("✅ Swagger specification is valid!");
          consola.info(`📋 OpenAPI version: ${swagger.openapi}`);
          consola.info(`📚 Title: ${swagger.info?.title || "Unknown"}`);
          consola.info(`🔢 Version: ${swagger.info?.version || "Unknown"}`);
          consola.info(
            `🔗 Description: ${swagger.info?.description || "No description"}`
          );

          // Count components
          const schemasCount = Object.keys(
            swagger.components?.schemas || {}
          ).length;
          const pathsCount = Object.keys(swagger.paths || {}).length;

          consola.info(`📊 Schemas: ${schemasCount}`);
          consola.info(`🛣️  Paths: ${pathsCount}`);
        } catch (error) {
          consola.error("❌ Validation failed!");
          consola.error((error as Error).message || "Unknown error occurred");
          Deno.exit(1);
        }
      },
    },
    info: {
      meta: {
        description: "Show information about a swagger.json file",
      },
      args: {
        source: {
          type: "positional",
          description: "Path or URL to swagger.json file",
          required: true,
        },
      },
      async run({ args }) {
        try {
          const swagger = await loadSwaggerSpec(args.source);

          consola.info("📋 Swagger Specification Information:");
          consola.info(`   OpenAPI Version: ${swagger.openapi}`);
          consola.info(`   Title: ${swagger.info?.title || "Unknown"}`);
          consola.info(`   Version: ${swagger.info?.version || "Unknown"}`);
          consola.info(
            `   Description: ${swagger.info?.description || "No description"}`
          );

          if (swagger.info?.contact) {
            consola.info(
              `   Contact: ${swagger.info.contact.name || "Unknown"} (${
                swagger.info.contact.email || "No email"
              })`
            );
          }

          if (swagger.info?.license) {
            consola.info(
              `   License: ${swagger.info.license.name || "Unknown"}`
            );
          }

          // Analyze components
          const schemas = swagger.components?.schemas || {};
          const paths = swagger.paths || {};

          consola.info(`\n📊 Components:`);
          consola.info(`   Schemas: ${Object.keys(schemas).length}`);
          consola.info(`   Paths: ${Object.keys(paths).length}`);

          // Count HTTP methods
          const httpMethods = new Set<string>();
          Object.values(paths).forEach((pathItem: any) => {
            if (pathItem && typeof pathItem === "object") {
              Object.keys(pathItem).forEach((method) => {
                if (
                  [
                    "get",
                    "post",
                    "put",
                    "patch",
                    "delete",
                    "head",
                    "options",
                    "trace",
                  ].includes(method)
                ) {
                  httpMethods.add(method.toUpperCase());
                }
              });
            }
          });

          consola.info(
            `   HTTP Methods: ${Array.from(httpMethods).sort().join(", ")}`
          );

          // Show some example schemas
          const schemaNames = Object.keys(schemas).slice(0, 5);
          if (schemaNames.length > 0) {
            consola.info(`\n📝 Example Schemas (first 5):`);
            schemaNames.forEach((name) => {
              const schema = schemas[name] as any;
              if (schema && typeof schema === "object" && !schema.$ref) {
                const type = schema.type || "object";
                const hasProps = schema.properties
                  ? Object.keys(schema.properties).length
                  : 0;
                consola.info(
                  `   ${name}: ${type}${
                    hasProps > 0 ? ` (${hasProps} properties)` : ""
                  }`
                );
              }
            });
          }
        } catch (error) {
          consola.error("❌ Failed to read swagger specification!");
          consola.error((error as Error).message || "Unknown error occurred");
          Deno.exit(1);
        }
      },
    },
  },
});

async function loadSwaggerSpec(source: string): Promise<OpenAPIV3.Document> {
  try {
    let swaggerData: OpenAPIV3.Document;

    if (source.startsWith("http://") || source.startsWith("https://")) {
      // Load from URL
      consola.info(`🌐 Loading swagger specification from URL: ${source}`);
      swaggerData = await $fetch(source);
    } else {
      // Load from local file
      consola.info(`📁 Loading swagger specification from file: ${source}`);

      try {
        const fileContent = await Deno.readTextFile(source);
        swaggerData = JSON.parse(fileContent);
      } catch (fileError) {
        throw new Error(
          `Failed to read file '${source}': ${(fileError as Error).message}`
        );
      }
    }

    // Basic validation
    if (!swaggerData || typeof swaggerData !== "object") {
      throw new Error("Invalid swagger specification: not a valid JSON object");
    }

    if (!swaggerData.openapi && !(swaggerData as any).swagger) {
      throw new Error(
        "Invalid swagger specification: missing openapi or swagger version"
      );
    }

    if (!swaggerData.paths) {
      throw new Error("Invalid swagger specification: missing paths");
    }

    return swaggerData;
  } catch (error) {
    if ((error as Error).message.includes("Failed to fetch")) {
      throw new Error(
        `Failed to fetch from URL '${source}': ${(error as Error).message}`
      );
    }
    throw error;
  }
}

runMain(main);
