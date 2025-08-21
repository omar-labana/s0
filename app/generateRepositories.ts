import swagger from "../swagger.json" with { type: "json" };
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

// Interface for parameter information
interface ParameterInfo {
  name: string;
  in: string;
  required: boolean;
  type?: string;
  format?: string;
  description?: string;
  schema?: {
    type?: string;
    format?: string;
    items?: {
      type?: string;
    };
  };
}

// Interface for endpoint information
interface EndpointInfo {
  path: string;
  method: string;
  operationId: string;
  tags: string[];
  summary?: string;
  description?: string;
  parameters?: ParameterInfo[];
  requestBody?: unknown;
  responses?: unknown;
}

// Interface for repository file content
interface RepositoryFile {
  tag: string;
  endpoints: EndpointInfo[];
}

export function generateRepositories() {
  const paths = swagger.paths;
  const repositories = new Map<string, RepositoryFile>();

  // Extract all endpoints and group them by tags
  Object.entries(paths).forEach(([path, pathItem]) => {
    if (!pathItem || typeof pathItem !== 'object') return;

    const pathItemObj = pathItem as Record<string, unknown>;
    const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options', 'trace'] as const;

    methods.forEach(method => {
      const operation = pathItemObj[method];
      if (!operation || typeof operation !== 'object') return;

      const operationObj = operation as Record<string, unknown>;
      const tags = operationObj.tags as string[] || [];
      const operationId = operationObj.operationId as string || '';
      const summary = operationObj.summary as string || '';
      const description = operationObj.description as string || '';
      const parameters = parseParameters(operationObj.parameters as unknown[] || []);
      const requestBody = operationObj.requestBody;
      const responses = operationObj.responses;

      if (tags.length > 0) {
        tags.forEach(tag => {
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
            responses
          });
        });
      }
    });
  });

  // Create repositories directory
  const repositoriesDir = join(process.cwd(), 'generated/repositories');
    mkdirSync(repositoriesDir, { recursive: true });


  // Generate repository files
  repositories.forEach((repository, tag) => {
    const normalizedTag = normalizeTagName(tag);
    const fileName = `Repository${normalizedTag}.ts`;
    const filePath = join(repositoriesDir, fileName);
    const content = generateRepositoryContent(repository);
    
    writeFileSync(filePath, content);
    console.log(`✅ Generated: ${fileName}`);
  });

  console.log(`\n📁 Generated ${repositories.size} repository files in: ${repositoriesDir}`);
  
  return repositories;
}

function parseParameters(parameters: unknown[]): ParameterInfo[] {
  return parameters.map(param => {
    if (typeof param === 'object' && param !== null) {
      const paramObj = param as Record<string, unknown>;
      return {
        name: paramObj.name as string || '',
        in: paramObj.in as string || '',
        required: paramObj.required as boolean || false,
        type: paramObj.type as string,
        format: paramObj.format as string,
        description: paramObj.description as string,
        schema: paramObj.schema as {
          type?: string;
          format?: string;
          items?: {
            type?: string;
          };
        }
      };
    }
    return {
      name: '',
      in: '',
      required: false
    };
  }).filter(param => param.name && param.in);
}

function normalizeTagName(tag: string): string {
  // If the tag is already in PascalCase, return as-is
  if (/^[A-Z][a-zA-Z0-9]*$/.test(tag)) {
    return tag;
  }
  
  // Handle kebab-case, snake_case, or space-separated tags
  return tag
    .split(/[-_ ]/) // Split by hyphen, underscore, or space
    .filter(part => part.length > 0) // Remove empty parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

function generateRepositoryContent(repository: RepositoryFile): string {
  const { tag, endpoints } = repository;
  
  // Generate IQ_ interfaces for GET and PUT methods
  const queryInterfaces = generateQueryInterfaces(endpoints);
  
  const content = `// Auto-generated repository for ${tag} endpoints
// Generated on: ${formatTimestamp(new Date())}
// Found ${endpoints.length} endpoint(s)

${queryInterfaces}

export class Repository${normalizeTagName(tag)} {
  // TODO: Implement repository methods for ${endpoints.length} endpoint(s)
  // Endpoints:
${endpoints.map(endpoint => `  // ${endpoint.method.toUpperCase()} ${endpoint.path}`).join('\n')}

}

`;

  return content;
}

function generateQueryInterfaces(endpoints: EndpointInfo[]): string {
  const interfaces: string[] = [];
  
  endpoints.forEach(endpoint => {
    if (endpoint.method === 'get' || endpoint.method === 'put') {
      const interfaceName = generateInterfaceName(endpoint);
      const interfaceContent = generateInterfaceContent(endpoint);
      
      if (interfaceContent) {
        interfaces.push(`export interface ${interfaceName} {
${interfaceContent}
}`);
      }
    }
  });
  
  return interfaces.join('\n\n');
}

function generateInterfaceName(endpoint: EndpointInfo): string {
  const method = endpoint.method.toUpperCase();
  const pathParts = endpoint.path.split('/').filter(part => part.length > 0);
  
  // Convert path to PascalCase, handling path parameters and special characters
  const pathName = pathParts
    .map(part => {
      // Handle path parameters like {id} or {accountId}
      if (part.startsWith('{') && part.endsWith('}')) {
        const paramName = part.slice(1, -1);
        return paramName.charAt(0).toUpperCase() + paramName.slice(1);
      }
      // Convert to PascalCase and handle special characters
      return convertToPascalCase(part);
    })
    .join('');
  
  return `IQ_${method}_${pathName}`;
}

function convertToPascalCase(str: string): string {
  // Handle path parameters
  if (str.startsWith('{') && str.endsWith('}')) {
    const paramName = str.slice(1, -1);
    return paramName.charAt(0).toUpperCase() + paramName.slice(1);
  }
  
  // Convert kebab-case, snake_case, or other separators to PascalCase
  return str
    .split(/[-_ ]/) // Split by hyphen, underscore, or space
    .filter(part => part.length > 0) // Remove empty parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

function generateInterfaceContent(endpoint: EndpointInfo): string {
  const queryParams = endpoint.parameters?.filter(param => param.in === 'query') || [];
  const pathParams = endpoint.parameters?.filter(param => param.in === 'path') || [];
  
  if (queryParams.length === 0 && pathParams.length === 0) {
    return '';
  }
  
  const properties: string[] = [];
  
  // Add path parameters
  pathParams.forEach(param => {
    const type = getParameterType(param);
    const required = param.required ? '' : '?';
    properties.push(`  ${param.name}${required}: ${type};`);
  });
  
  // Add query parameters
  queryParams.forEach(param => {
    const type = getParameterType(param);
    const required = param.required ? '' : '?';
    properties.push(`  ${param.name}${required}: ${type};`);
  });
  
  return properties.join('\n');
}

function getParameterType(param: ParameterInfo): string {
  // Check schema first, then fall back to type
  if (param.schema?.type) {
    return mapSwaggerTypeToTypeScript(param.schema.type, param.schema.format);
  }
  
  if (param.type) {
    return mapSwaggerTypeToTypeScript(param.type, param.format);
  }
  
  return 'unknown';
}

function mapSwaggerTypeToTypeScript(swaggerType: string, format?: string): string {
  switch (swaggerType) {
    case 'string':
      if (format === 'date' || format === 'date-time') {
        return 'string';
      }
      return 'string';
    case 'integer':
      return 'number';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return 'unknown[]';
    case 'object':
      return 'Record<string, unknown>';
    default:
      return 'unknown';
  }
}


function formatTimestamp(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[date.getDay()];
  
  return `${hours}:${minutes} ${dayName} ${day} ${month} ${year}`;
}

// Run the generator
generateRepositories();
