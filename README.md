# Elegant Swagger CodeGen

A powerful CLI tool to generate TypeScript types and repository classes from OpenAPI/Swagger specifications. Built with Deno and TypeScript.

## Features

- 🚀 Generate TypeScript enums from swagger schemas
- 📝 Generate TypeScript interfaces for DTOs, requests, and responses
- 🏗️ Generate repository classes with typed API methods
- 🌐 Support for both local files and remote URLs
- ✅ Validate swagger specifications
- 📊 Get detailed information about swagger files
- 🎯 Selective generation (types only, repositories only, or both)

## Installation

This project uses Deno. Make sure you have Deno installed:

```bash
# Install Deno (if not already installed)
curl -fsSL https://deno.land/x/install/install.sh | sh

# Or using PowerShell on Windows
irm https://deno.land/x/install/install.ps1 | iex
```

### Install Elegant Swagger CodeGen

```bash
# Global installation (recommended)
deno install --global --allow-net --allow-read --allow-write --name elegant-swagger jsr:@devex/elegant-swagger-codegen
```

### Run Without Installing

```bash
# Run directly without installation
deno run --allow-net --allow-read --allow-write jsr:@devex/elegant-swagger-codegen generate ./swagger.json
```

## Usage

### After Global Installation

```bash
# Generate everything from a local swagger.json file
elegant-swagger generate ./swagger.json

# Generate from a remote URL
elegant-swagger generate https://api.example.com/swagger.json

# Generate with custom output directory
elegant-swagger generate ./swagger.json --output ./src/api

# Generate only types
elegant-swagger generate ./swagger.json --types

# Generate only repositories
elegant-swagger generate ./swagger.json --repositories

# Validate a swagger file
elegant-swagger validate ./swagger.json

# Get information about a swagger file
elegant-swagger info ./swagger.json
```

### Direct Execution (Without Installation)

```bash
# Generate everything
deno run --allow-net --allow-read --allow-write jsr:@devex/elegant-swagger-codegen generate ./swagger.json

# Generate from URL
deno run --allow-net --allow-read --allow-write jsr:@devex/elegant-swagger-codegen generate https://api.example.com/swagger.json

# Validate
deno run --allow-net --allow-read --allow-write jsr:@devex/elegant-swagger-codegen validate ./swagger.json

# Get info
deno run --allow-net --allow-read --allow-write jsr:@devex/elegant-swagger-codegen info ./swagger.json
```

### Command Options

#### Generate Command

```bash
elegant-swagger generate [source] [options]

Arguments:
  source                 Path to swagger.json file or URL

Options:
  -o, --output <dir>     Output directory (default: ./generated)
  -t, --types           Generate only TypeScript types (enums and interfaces)
  -r, --repositories    Generate only repository classes
  -f, --force          Force overwrite existing files
  -v, --verbose        Enable verbose logging
```

#### Examples

```bash
# Generate everything with default settings
elegant-swagger generate ./swagger.json

# Generate only types with custom output
elegant-swagger generate ./swagger.json --types --output ./src/types

# Generate only repositories with verbose logging
elegant-swagger generate ./swagger.json --repositories --verbose

# Generate from URL and force overwrite
elegant-swagger generate https://api.example.com/swagger.json --force --output ./api-client

# Validate before generating
elegant-swagger validate ./swagger.json
elegant-swagger generate ./swagger.json
```

## What Gets Generated

### 1. Enums (`generated/enums.ts`)

- Automatically detects enum schemas in your swagger file
- Generates TypeScript enums with proper naming conventions
- Handles both string and numeric enums
- Supports custom enum names via `x-enumNames` extension

```typescript
export enum E_UserStatus {
  active = "active",
  inactive = "inactive",
  pending = "pending",
}
```

### 2. Interfaces (`generated/interfaces.ts`)

- Generates TypeScript interfaces for all schemas
- Automatically determines interface types based on usage:
  - `I_` prefix for DTOs and response objects
  - `P_` prefix for payload/request objects
  - `Q_` prefix for query parameter objects
- Handles inheritance (`allOf`, `oneOf`, `anyOf`)
- Supports nested object references

```typescript
export interface I_User {
  id?: number;
  name?: string;
  email?: string;
  status?: E_UserStatus;
  createdAt?: string;
}

export interface P_CreateUser {
  name: string;
  email: string;
  status?: E_UserStatus;
}
```

### 3. Repositories (`generated/repositories/`)

- Creates repository classes grouped by API tags
- Generates typed methods for each endpoint
- Automatically handles:
  - Path parameters
  - Query parameters
  - Request bodies
  - Response types
- Uses proper HTTP method naming conventions

```typescript
export class RepositoryUsers {
  constructor(private fetchInstance: any) {}

  /**
   * Get all users
   */
  getUsers(params?: IQ_GetUsers): Promise<I_User[]> {
    return this.fetchInstance<I_User[]>(`/users`, {
      method: "GET",
      query: params,
    });
  }

  /**
   * Create a new user
   */
  createUser(payload: P_CreateUser): Promise<I_User> {
    return this.fetchInstance<I_User>(`/users`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
  }
}
```

## File Structure

```
generated/
├── enums.ts                    # Generated enums
├── interfaces.ts               # Generated interfaces
└── repositories/               # Generated repository classes
    ├── RepositoryUsers.ts
    ├── RepositoryProducts.ts
    ├── RepositoryOrders.ts
    └── index.ts                # Barrel exports
```

## Configuration

The generator uses intelligent defaults but can be customized:

- **Interface Naming**: Automatically detects request/response patterns
- **Method Naming**: Uses operationId when available, falls back to path-based naming
- **Type Resolution**: Automatically resolves `$ref` references
- **Output Format**: Clean, readable TypeScript code with JSDoc comments

## Validation and Info Commands

### Validate Command

```bash
# Validate a swagger specification
elegant-swagger validate ./swagger.json
elegant-swagger validate https://api.example.com/swagger.json
```

Output:

```
✅ Swagger specification is valid!
📋 OpenAPI version: 3.0.1
📚 Title: My API
🔢 Version: 1.0.0
📊 Schemas: 25
🛣️  Paths: 15
```

### Info Command

```bash
# Get detailed information about a swagger file
elegant-swagger info ./swagger.json
```

Output:

```
📋 Swagger Specification Information:
   OpenAPI Version: 3.0.1
   Title: My API
   Version: 1.0.0
   Description: A comprehensive API for managing users and products

📊 Components:
   Schemas: 25
   Paths: 15
   HTTP Methods: GET, POST, PUT, DELETE

📝 Example Schemas (first 5):
   User: object (5 properties)
   Product: object (8 properties)
   Order: object (6 properties)
```

## Real-World Example

### Input: Swagger Schema

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "E-commerce API",
    "version": "1.0.0"
  },
  "paths": {
    "/users": {
      "get": {
        "tags": ["Users"],
        "summary": "Get all users",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": { "$ref": "#/components/schemas/User" }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": { "type": "integer" },
          "name": { "type": "string" },
          "status": {
            "type": "string",
            "enum": ["active", "inactive", "pending"]
          }
        }
      }
    }
  }
}
```

### Generated Output

Running:

```bash
elegant-swagger generate ./swagger.json --output ./src/api
```

Creates:

**`src/api/enums.ts`**

```typescript
export enum E_UserStatus {
  active = "active",
  inactive = "inactive",
  pending = "pending",
}
```

**`src/api/interfaces.ts`**

```typescript
export interface I_User {
  id?: number;
  name?: string;
  status?: E_UserStatus;
}
```

**`src/api/repositories/RepositoryUsers.ts`**

```typescript
export class RepositoryUsers {
  constructor(private fetchInstance: any) {}

  /**
   * Get all users
   */
  getUsers(): Promise<I_User[]> {
    return this.fetchInstance<I_User[]>(`/users`, {
      method: "GET",
    });
  }
}
```

## Error Handling

The CLI provides clear error messages for common issues:

- ❌ Invalid swagger specification format
- 📁 File not found errors
- 🌐 Network errors for remote URLs
- 📄 JSON parsing errors
- ⚠️ Missing required fields or malformed schemas

Use the `--verbose` flag for detailed error information:

```bash
elegant-swagger generate ./swagger.json --verbose
```

## Programmatic Usage

You can also use this package programmatically in your Deno projects:

```typescript
import {
  generateEnum,
  generateInterfaces,
  generateRepositories,
} from "jsr:@devex/elegant-swagger-codegen";

// Load your swagger spec
const swaggerSpec = await fetch("https://api.example.com/swagger.json").then(
  (r) => r.json()
);

// Generate types
await generateEnum(swaggerSpec.components);
await generateInterfaces(swaggerSpec.components, swaggerSpec.paths);
await generateRepositories(swaggerSpec);
```

## Package Information

- **Package**: `jsr:@devex/elegant-swagger-codegen`
- **Version**: 0.1.0
- **JSR Score**: 62%
- **Registry**: [JSR (JavaScript Registry)](https://jsr.io/@devex/elegant-swagger-codegen)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development

```bash
# Clone the repository
git clone https://github.com/devex/elegant-swagger-codegen.git
cd elegant-swagger-codegen

# Run in development mode
deno task dev

# Test with your swagger file
deno task generate ./swagger.json
```

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the error messages for guidance
2. Use the `--verbose` flag for detailed logging
3. Validate your swagger file first: `elegant-swagger validate ./swagger.json`
4. Check our [JSR package page](https://jsr.io/@devex/elegant-swagger-codegen) for examples
5. Open an issue on GitHub with your swagger file and error details

## Changelog

### 0.1.0 (Latest)

- 🎉 Initial release
- ✅ Support for OpenAPI 3.0+ specifications
- 🚀 Generate TypeScript enums, interfaces, and repositories
- 🌐 Support for both local files and remote URLs
- 📊 Validation and info commands
- 🎯 Selective generation options
