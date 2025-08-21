import { pascalCase } from "npm:scule";
import { RepositoryFile, EndpointInfo } from "./types.ts";
import { formatTimestamp } from "./utils.ts";
import { generateQueryInterfaces } from "./interfaceGenerator.ts";
import { generateMethodName } from "./methodNaming.ts";
import {
  generateMethodSignature,
  generateMethodBody,
} from "./methodGenerator.ts";

// Repository content generation logic

export function generateRepositoryContent(repository: RepositoryFile): string {
  const { tag, endpoints } = repository;

  // Generate IQ_ interfaces for GET and PUT methods
  const queryInterfaces = generateQueryInterfaces(endpoints);

  // Normalize tag name for consistent formatting
  const normalizedTagName = normalizeTagName(tag);

  const content = `// Auto-generated repository for ${normalizedTagName} endpoints
// Generated on: ${formatTimestamp(new Date())}
// Found ${endpoints.length} endpoint(s)

import { $Fetch } from "npm:ofetch";
import * as Interfaces from "@/interfaces";

${queryInterfaces}

export class Repository${normalizedTagName} {
  private fetchInstance: $Fetch;

  constructor(instance: $Fetch) {
    this.fetchInstance = instance;
  }

${generateRepositoryMethods(endpoints)}

}`;

  return content;
}

export function normalizeTagName(tag: string): string {
  // First clean the string, then apply scule.pascalCase
  const cleanedTag = tag
    .replace(/\s+/g, "") // Remove all whitespace
    .replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters

  return pascalCase(cleanedTag);
}
export function generateRepositoryMethods(endpoints: EndpointInfo[]): string {
  const methods: string[] = [];

  endpoints.forEach((endpoint) => {
    const methodName = generateMethodName(endpoint);
    const methodSignature = generateMethodSignature(endpoint);
    const methodBody = generateMethodBody(endpoint);

    if (methodSignature && methodBody) {
      methods.push(`  ${methodName}${methodSignature} {
    ${methodBody}
  }`);
    }
  });

  return methods.join("\n\n");
}
