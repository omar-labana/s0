// Type definitions for the repository generator

export interface ParameterInfo {
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

export interface EndpointInfo {
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

export interface RepositoryFile {
  tag: string;
  endpoints: EndpointInfo[];
}
