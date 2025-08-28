import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import type { OpenAPIV3 } from "../../index.d.ts";
import type { RepositoryFile } from "./types.ts";
import { CONFIG } from "./config.ts";
import { parseParameters, setSwaggerSchemaContext } from "./utils.ts";
import {
  generateRepositoryContent,
  normalizeTagName,
} from "./repositoryContentGenerator.ts";

// ----- tiny guards -----
const isObject = (x: unknown): x is Record<string, unknown> =>
  typeof x === "object" && x !== null;

const isString = (x: unknown): x is string => typeof x === "string";

const isStringArray = (xs: unknown): xs is string[] =>
  Array.isArray(xs) && xs.every(isString);

const isParamArray = (
  x: unknown
): x is (OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject)[] =>
  Array.isArray(x);

// read x-name from SpecificationExtensions safely
const readXName = (rb: unknown): string | undefined =>
  isObject(rb) && isString(rb["x-name"]) ? rb["x-name"] : undefined;

// Safe accessor for operations by method (no dynamic index, no assertions)
const getOperationFromPathItem = (
  item: OpenAPIV3.PathItemObject,
  method: unknown
): OpenAPIV3.OperationObject | undefined => {
  if (!isString(method)) return undefined;
  switch (method) {
    case "get":
      return item.get;
    case "put":
      return item.put;
    case "post":
      return item.post;
    case "delete":
      return item.delete;
    case "options":
      return item.options;
    case "head":
      return item.head;
    case "patch":
      return item.patch;
    case "trace":
      return item.trace;
    default:
      return undefined;
  }
};

// ----- main -----
export function generateRepositories(swagger: OpenAPIV3.Document) {
  // expose components/schemas to utils (for enum/interface resolution)
  setSwaggerSchemaContext(swagger);

  const repositories = new Map<string, RepositoryFile>();
  const paths: OpenAPIV3.PathsObject = swagger.paths;

  // iterate without assertions
  for (const pathKey in paths) {
    const pathItem = paths[pathKey];
    if (!pathItem || !isObject(pathItem)) continue;

    const item = pathItem;

    for (const method of CONFIG.HTTP_METHODS) {
      const operation = getOperationFromPathItem(item, method);
      if (!operation || !isObject(operation)) continue;

      const tags = isStringArray(operation.tags) ? operation.tags : [];
      const operationId = isString(operation.operationId)
        ? operation.operationId
        : "";
      const summary = isString(operation.summary) ? operation.summary : "";
      const description = isString(operation.description)
        ? operation.description
        : "";

      const parameters = parseParameters(
        isParamArray(operation.parameters) ? operation.parameters : []
      );

      const requestBody = operation.requestBody;
      const responses = operation.responses;

      const xName = readXName(requestBody);
      if (xName && pathKey.includes("/Users/")) {
        console.log(`🔍 Users endpoint ${pathKey}: x-name = ${xName}`);
      }

      if (tags.length === 0) continue;

      for (const tag of tags) {
        const repo: RepositoryFile =
          repositories.get(tag) ??
          ((): RepositoryFile => {
            const r: RepositoryFile = { tag, endpoints: [] };
            repositories.set(tag, r);
            return r;
          })();

        repo.endpoints.push({
          path: pathKey,
          method, // keep original method string
          operationId,
          tags,
          summary,
          description,
          parameters,
          requestBody,
          responses,
          xName,
        });
      }
    }
  }

  // output dir
  const repositoriesDir = join(process.cwd(), CONFIG.OUTPUT.DIRECTORY);
  mkdirSync(repositoriesDir, { recursive: true });

  // write files
  for (const [tag, repository] of repositories) {
    const content = generateRepositoryContent(repository);
    const fileName = `Repository${normalizeTagName(tag)}${
      CONFIG.OUTPUT.FILE_EXTENSION
    }`;
    const filePath = join(repositoriesDir, fileName);
    writeFileSync(filePath, content);
    console.log(`✅ Generated: ${fileName}`);
  }

  console.log(
    `\n📁 Generated ${repositories.size} repository files in: ${repositoriesDir}`
  );
  return repositories;
}
