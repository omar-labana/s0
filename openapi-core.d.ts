export type HttpMethods =
  | "get"
  | "put"
  | "post"
  | "delete"
  | "options"
  | "head"
  | "patch"
  | "trace";

export namespace OpenAPIV3 {
  export interface Document extends SpecificationExtensions {
    openapi: "3.0.0" | "3.0.1" | "3.0.2" | "3.0.3";
    info: InfoObject;
    servers?: ServerObject[];
    paths: PathsObject;
    components?: ComponentsObject;
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
  }

  export interface InfoObject extends SpecificationExtensions {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    version: string;
  }

  export interface ContactObject extends SpecificationExtensions {
    name?: string;
    url?: string;
    email?: string;
  }

  export interface LicenseObject extends SpecificationExtensions {
    name: string;
    url?: string;
  }

  export interface ServerObject extends SpecificationExtensions {
    url: string;
    description?: string;
    variables?: Record<string, ServerVariableObject>;
  }

  export interface ServerVariableObject extends SpecificationExtensions {
    enum?: string[];
    default: string;
    description?: string;
  }

  export type PathsObject = Record<string, PathItemObject | undefined> &
    SpecificationExtensions;

  export type PathItemObject = SpecificationExtensions & {
    $ref?: string;
    summary?: string;
    description?: string;
    servers?: ServerObject[];
    parameters?: (ParameterObject | ReferenceObject)[];
  } & Partial<Record<HttpMethods, OperationObject>>;

  export interface OperationObject extends SpecificationExtensions {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    parameters?: (ParameterObject | ReferenceObject)[];
    requestBody?: RequestBodyObject | ReferenceObject;
    responses: ResponsesObject;
    callbacks?: Record<string, CallbackObject | ReferenceObject>;
    deprecated?: boolean;
    security?: SecurityRequirementObject[];
    servers?: ServerObject[];
  }

  export interface ExternalDocumentationObject extends SpecificationExtensions {
    description?: string;
    url: string;
  }

  export interface TagObject extends SpecificationExtensions {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
  }

  export type ParameterLocation = "query" | "header" | "path" | "cookie";
  export type ParameterStyle =
    | "matrix"
    | "label"
    | "form"
    | "simple"
    | "spaceDelimited"
    | "pipeDelimited"
    | "deepObject";

  export interface BaseParameterObject extends SpecificationExtensions {
    name: string;
    in: ParameterLocation;
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: ParameterStyle;
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject | ReferenceObject;
    example?: unknown;
    examples?: Record<string, ExampleObject | ReferenceObject>;
    content?: Record<string, MediaTypeObject>;
  }

  export type ParameterObject = BaseParameterObject;

  export interface RequestBodyObject extends SpecificationExtensions {
    description?: string;
    content: Record<string, MediaTypeObject>;
    required?: boolean;
  }

  export interface MediaTypeObject extends SpecificationExtensions {
    schema?: SchemaObject | ReferenceObject;
    example?: unknown;
    examples?: Record<string, ExampleObject | ReferenceObject>;
    encoding?: Record<string, EncodingObject>;
  }

  export interface EncodingObject extends SpecificationExtensions {
    contentType?: string;
    headers?: Record<string, HeaderObject | ReferenceObject>;
    style?: ParameterStyle;
    explode?: boolean;
    allowReserved?: boolean;
  }

  export type ResponsesObject = Record<
    string,
    ResponseObject | ReferenceObject
  > &
    SpecificationExtensions;

  export interface ResponseObject extends SpecificationExtensions {
    description: string;
    headers?: Record<string, HeaderObject | ReferenceObject>;
    content?: Record<string, MediaTypeObject>;
    links?: Record<string, LinkObject | ReferenceObject>;
  }

  export type CallbackObject = Record<string, PathItemObject>;

  export interface ExampleObject extends SpecificationExtensions {
    summary?: string;
    description?: string;
    value?: unknown;
    externalValue?: string;
  }

  export type HeaderObject = Omit<BaseParameterObject, "name" | "in">;

  export interface LinkObject extends SpecificationExtensions {
    operationRef?: string;
    operationId?: string;
    parameters?: Record<string, unknown>;
    requestBody?: unknown;
    description?: string;
    server?: ServerObject;
  }

  export interface ComponentsObject extends SpecificationExtensions {
    schemas?: Record<string, SchemaObject | ReferenceObject>;
    responses?: Record<string, ResponseObject | ReferenceObject>;
    parameters?: Record<string, ParameterObject | ReferenceObject>;
    examples?: Record<string, ExampleObject | ReferenceObject>;
    requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;
    headers?: Record<string, HeaderObject | ReferenceObject>;
    securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>;
    links?: Record<string, LinkObject | ReferenceObject>;
    callbacks?: Record<string, CallbackObject | ReferenceObject>;
  }

  export interface SecurityRequirementObject {
    [name: string]: string[];
  }

  export type SecuritySchemeObject =
    | HttpSecurityScheme
    | ApiKeySecurityScheme
    | OAuth2SecurityScheme
    | OpenIdConnectSecurityScheme;

  export interface HttpSecurityScheme extends SpecificationExtensions {
    type: "http";
    description?: string;
    scheme: string;
    bearerFormat?: string;
  }

  export interface ApiKeySecurityScheme extends SpecificationExtensions {
    type: "apiKey";
    description?: string;
    name: string;
    in: "query" | "header" | "cookie";
  }

  export interface OAuth2SecurityScheme extends SpecificationExtensions {
    type: "oauth2";
    description?: string;
    flows: OAuthFlowsObject;
  }

  export interface OpenIdConnectSecurityScheme extends SpecificationExtensions {
    type: "openIdConnect";
    description?: string;
    openIdConnectUrl: string;
  }

  export interface OAuthFlowsObject extends SpecificationExtensions {
    implicit?: OAuthFlowObject;
    password?: OAuthFlowObject;
    clientCredentials?: OAuthFlowObject;
    authorizationCode?: OAuthFlowObject;
  }

  export interface OAuthFlowObject extends SpecificationExtensions {
    authorizationUrl?: string;
    tokenUrl?: string;
    refreshUrl?: string;
    scopes: Record<string, string>;
  }

  export type SchemaObject = (ArraySchemaObject | NonArraySchemaObject) &
    SpecificationExtensions;

  export interface BaseSchemaObject {
    title?: string;
    description?: string;
    default?: unknown;
    nullable?: boolean;
    readOnly?: boolean;
    writeOnly?: boolean;
    deprecated?: boolean;
    externalDocs?: ExternalDocumentationObject;
    example?: unknown;
    discriminator?: DiscriminatorObject;
    xml?: XMLObject;
    enum?: unknown[];
  }

  export interface NonArraySchemaObject extends BaseSchemaObject {
    type?: "boolean" | "object" | "number" | "string" | "integer";
    format?: string;
    allOf?: (SchemaObject | ReferenceObject)[];
    oneOf?: (SchemaObject | ReferenceObject)[];
    anyOf?: (SchemaObject | ReferenceObject)[];
    not?: SchemaObject | ReferenceObject;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    properties?: Record<string, SchemaObject | ReferenceObject>;
    additionalProperties?: boolean | SchemaObject | ReferenceObject;
  }

  export interface ArraySchemaObject extends BaseSchemaObject {
    type: "array";
    items: SchemaObject | ReferenceObject;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
  }

  export interface DiscriminatorObject {
    propertyName: string;
    mapping?: Record<string, string>;
  }

  export interface XMLObject extends SpecificationExtensions {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
  }

  export interface ReferenceObject {
    $ref: string;
  }

  export interface SpecificationExtensions {
    [extension: `x-${string}`]: unknown;
  }
}
