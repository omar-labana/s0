# Swagger Generator CLI

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

## Usage

### Basic Commands

```bash
# Generate everything from a local swagger.json file
deno run --allow-env --allow-read --allow-net --allow-write main.ts generate ./swagger.json

# Generate from a remote URL
deno run --allow-env --allow-read --allow-net --allow-write main.ts generate https://api.example.com/swagger.json

# Validate a swagger file
deno run --allow-env --allow-read --allow-net main.ts validate ./swagger.json

# Get information about a swagger file
deno run --allow-env --allow-read --allow-net main.ts info ./swagger.json
```

### Using Deno Tasks (Recommended)

```bash
# Generate everything
deno task generate ./swagger.json

# Generate from URL
deno task generate https://api.example.com/swagger.json

# Validate
deno task validate ./swagger.json

# Get info
deno task info ./swagger.json
```

### Command Options

#### Generate Command

```bash
deno task generate [source] [options]

Options:
  -o, --output <dir>     Output directory (default: ./generated)
  -t, --types           Generate only TypeScript types
  -r, --repositories    Generate only repository classes
  -f, --force          Force overwrite existing files
  -v, --verbose        Enable verbose logging
```

#### Examples

```bash
# Generate only types
deno task generate ./swagger.json --types

# Generate only repositories
deno task generate ./swagger.json --repositories

# Generate with custom output directory
deno task generate ./swagger.json --output ./src/types

# Generate with verbose logging
deno task generate ./swagger.json --verbose
```

## What Gets Generated

### 1. Enums (`generated/enums.ts`)

- Automatically detects enum schemas in your swagger file
- Generates TypeScript enums with proper naming conventions
- Handles both string and numeric enums
- Supports custom enum names via `x-enumNames` extension

### 2. Interfaces (`generated/interfaces.ts`)

- Generates TypeScript interfaces for all schemas
- Automatically determines interface types based on usage:
  - `I_` prefix for DTOs and response objects
  - `P_` prefix for payload/request objects
  - `Q_` prefix for query parameter objects
- Handles inheritance (`allOf`, `oneOf`, `anyOf`)
- Supports nested object references

### 3. Repositories (`generated/repositories/`)

- Creates repository classes grouped by API tags
- Generates typed methods for each endpoint
- Automatically handles:
  - Path parameters
  - Query parameters
  - Request bodies
  - Response types
- Uses proper HTTP method naming conventions

## File Structure

```
generated/
├── enums.ts                    # Generated enums
├── interfaces.ts               # Generated interfaces
└── repositories/               # Generated repository classes
    ├── RepositoryUsers.ts
    ├── RepositoryProducts.ts
    └── ...
```

## Configuration

The generator uses intelligent defaults but can be customized:

- **Interface Naming**: Automatically detects request/response patterns
- **Method Naming**: Uses operationId when available, falls back to path-based naming
- **Type Resolution**: Automatically resolves `$ref` references
- **Output Format**: Clean, readable TypeScript code with JSDoc comments

## Examples

### Input: Swagger Schema

```json
{
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": { "type": "integer" },
          "name": { "type": "string" },
          "status": {
            "type": "string",
            "enum": ["active", "inactive"]
          }
        }
      }
    }
  }
}
```

### Generated Output

#### Enums

```typescript
export enum E_UserStatus {
  active = "active",
  inactive = "inactive",
}
```

#### Interfaces

```typescript
export interface I_User {
  id?: number;
  name?: string;
  status?: Enums.E_UserStatus;
}
```

#### Repository Methods

```typescript
export class RepositoryUsers {
  // ... constructor and fetchInstance

  getUser(params: IQ_GET_Users) {
    return this.fetchInstance<I_User>(`/users`, {
      method: "GET",
      query: params,
    });
  }
}
```

## Error Handling

The CLI provides clear error messages for common issues:

- Invalid swagger specification
- File not found
- Network errors for remote URLs
- JSON parsing errors
- Missing required fields

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the error messages for guidance
2. Use the `--verbose` flag for detailed logging
3. Validate your swagger file first using the `validate` command
4. Open an issue on GitHub with your swagger file and error details
