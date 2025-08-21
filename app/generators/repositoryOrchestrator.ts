import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import type { OpenAPIV3 } from "npm:openapi-types";
import { RepositoryFile } from "./types.ts";
import { CONFIG } from "./config.ts";
import { parseParameters } from "./utils.ts";
import {
  generateRepositoryContent,
  normalizeTagName,
} from "./repositoryContentGenerator.ts";

// Main orchestrator for repository generation

export function generateRepositories(swagger: OpenAPIV3.Document) {
  const paths = swagger.paths;
  const repositories = new Map<string, RepositoryFile>();

  // Extract all endpoints and group them by tags
  Object.entries(paths).forEach(([path, pathItem]) => {
    if (!pathItem || typeof pathItem !== "object") return;

    const pathItemObj = pathItem as Record<string, unknown>;

    CONFIG.HTTP_METHODS.forEach((method) => {
      const operation = pathItemObj[method];
      if (!operation || typeof operation !== "object") return;

      const operationObj = operation as Record<string, unknown>;
      const tags = (operationObj.tags as string[]) || [];
      const operationId = (operationObj.operationId as string) || "";
      const summary = (operationObj.summary as string) || "";
      const description = (operationObj.description as string) || "";
      const parameters = parseParameters(
        (operationObj.parameters as unknown[]) || []
      );
      const requestBody = operationObj.requestBody;
      const responses = operationObj.responses;

      // Extract x-name from request body if available
      let xName: string | undefined;
      if (requestBody && typeof requestBody === "object") {
        const requestBodyObj = requestBody as Record<string, unknown>;
        xName = requestBodyObj["x-name"] as string;
        if (xName && path.includes("/Users/")) {
          console.log(`🔍 Users endpoint ${path}: x-name = ${xName}`);
        }
      }

      if (tags.length > 0) {
        tags.forEach((tag) => {
          if (!repositories.has(tag)) {
            repositories.set(tag, { tag, endpoints: [] });
          }

          const repository = repositories.get(tag)!;
          repository.endpoints.push({
            path,
            method,
            operationId,
            tags,
            summary,
            description,
            parameters,
            requestBody,
            responses,
            xName,
          });
        });
      }
    });
  });

  // Create repositories directory
  const repositoriesDir = join(process.cwd(), CONFIG.OUTPUT.DIRECTORY);
  mkdirSync(repositoriesDir, { recursive: true });

  // Generate repository files
  repositories.forEach((repository, tag) => {
    const content = generateRepositoryContent(repository);
    const fileName = `Repository${normalizeTagName(tag)}${
      CONFIG.OUTPUT.FILE_EXTENSION
    }`;
    const filePath = join(repositoriesDir, fileName);

    writeFileSync(filePath, content);
    console.log(`✅ Generated: ${fileName}`);
  });

  console.log(
    `\n📁 Generated ${repositories.size} repository files in: ${repositoriesDir}`
  );

  return repositories;
}
