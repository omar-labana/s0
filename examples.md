# Swagger Generator CLI Examples

This file contains practical examples of how to use the Swagger Generator CLI in different scenarios.

## Basic Usage Examples

### 1. Generate from Local File

```bash
# Generate everything from a local swagger.json file
deno task generate ./swagger.json

# Generate with verbose output
deno task generate ./swagger.json --verbose

# Generate with custom output directory
deno task generate ./swagger.json --output ./src/api-types
```

### 2. Generate from Remote URL

```bash
# Generate from a public API
deno task generate https://petstore.swagger.io/v2/swagger.json

# Generate from your company's internal API
deno task generate https://api.company.com/swagger/v1/swagger.json

# Generate with verbose logging for debugging
deno task generate https://api.example.com/swagger.json --verbose
```

### 3. Selective Generation

```bash
# Generate only TypeScript types (enums and interfaces)
deno task generate ./swagger.json --types

# Generate only repository classes
deno task generate ./swagger.json --repositories

# Generate both (default behavior)
deno task generate ./swagger.json
```

### 4. Validation and Information

```bash
# Validate a swagger file before generation
deno task validate ./swagger.json

# Get detailed information about a swagger file
deno task info ./swagger.json

# Validate a remote swagger specification
deno task validate https://api.example.com/swagger.json
```

## Real-World Scenarios

### Scenario 1: New Project Setup

```bash
# 1. Validate the swagger file first
deno task validate ./swagger.json

# 2. Generate all types and repositories
deno task generate ./swagger.json --verbose

# 3. Check what was generated
ls -la generated/
```

### Scenario 2: API Updates

```bash
# 1. Get info about the current swagger file
deno task info ./swagger.json

# 2. Generate only types (faster for schema changes)
deno task generate ./swagger.json --types

# 3. Generate repositories if endpoints changed
deno task generate ./swagger.json --repositories
```

### Scenario 3: Multiple Environments

```bash
# Generate from development API
deno task generate https://dev-api.company.com/swagger.json --output ./generated/dev

# Generate from staging API
deno task generate https://staging-api.company.com/swagger.json --output ./generated/staging

# Generate from production API
deno task generate https://api.company.com/swagger.json --output ./generated/prod
```

### Scenario 4: CI/CD Pipeline

```bash
# In your CI script
#!/bin/bash

# Validate swagger file
deno task validate ./swagger.json

if [ $? -eq 0 ]; then
    echo "Swagger validation passed"

    # Generate types and repositories
    deno task generate ./swagger.json --output ./src/generated

    # Check if generation was successful
    if [ $? -eq 0 ]; then
        echo "Code generation successful"
        # Continue with build process
    else
        echo "Code generation failed"
        exit 1
    fi
else
    echo "Swagger validation failed"
    exit 1
fi
```

## Advanced Usage

### Custom Output Directory Structure

```bash
# Generate with organized output structure
deno task generate ./swagger.json --output ./src/api

# This creates:
# ./src/api/
# ├── enums.ts
# ├── interfaces.ts
# └── repositories/
#     ├── RepositoryUsers.ts
#     └── RepositoryProducts.ts
```

### Force Overwrite

```bash
# Force overwrite existing generated files
deno task generate ./swagger.json --force

# Useful when you want to ensure clean generation
```

### Verbose Logging for Debugging

```bash
# Get detailed information about the generation process
deno task generate ./swagger.json --verbose

# Output includes:
# - Swagger file details
# - Schema analysis
# - Generation progress
# - File creation details
```

## Troubleshooting Examples

### Common Issues and Solutions

#### Issue: Permission Denied

```bash
# Error: Permission denied (os error 13)
# Solution: Add --allow-write flag
deno run --allow-env --allow-read --allow-net --allow-write main.ts generate ./swagger.json
```

#### Issue: Network Error for Remote URLs

```bash
# Error: Failed to fetch from URL
# Solution: Check network connectivity and URL validity
deno task validate https://api.example.com/swagger.json

# If validation fails, the URL might be incorrect or require authentication
```

#### Issue: Invalid JSON

```bash
# Error: Invalid swagger specification: not a valid JSON object
# Solution: Validate your swagger file first
deno task validate ./swagger.json

# Fix any JSON syntax errors in your swagger file
```

#### Issue: Missing Components

```bash
# Error: Invalid swagger specification: missing paths
# Solution: Ensure your swagger file has the required sections
deno task info ./swagger.json

# Check if paths, components, or schemas are missing
```

## Integration Examples

### With TypeScript Projects

```bash
# 1. Generate types
deno task generate ./swagger.json

# 2. Import in your TypeScript files
import { I_User, Enums } from './generated/interfaces';
import { RepositoryUsers } from './generated/repositories/RepositoryUsers';

# 3. Use in your code
const user: I_User = {
    name: "John Doe",
    status: Enums.E_UserStatus.active
};
```

### With React/Next.js Projects

```bash
# 1. Generate API types
deno task generate ./swagger.json --output ./src/types/api

# 2. Use in your React components
import { I_Product } from '@/types/api/interfaces';
import { RepositoryProducts } from '@/types/api/repositories/RepositoryProducts';

# 3. Create API hooks
const useProducts = () => {
    const [products, setProducts] = useState<I_Product[]>([]);
    // ... implementation
};
```

### With Node.js Projects

```bash
# 1. Generate types
deno task generate ./swagger.json

# 2. Use in your Node.js application
const { I_Order } = require('./generated/interfaces');
const { RepositoryOrders } = require('./generated/repositories/RepositoryOrders');

# 3. Implement your business logic
async function processOrder(orderData: I_Order) {
    // ... implementation
}
```

## Performance Tips

### For Large Swagger Files

```bash
# Generate only what you need
deno task generate ./swagger.json --types --verbose

# Use selective generation to avoid unnecessary processing
deno task generate ./swagger.json --repositories --verbose
```

### For Development Workflow

```bash
# Watch mode for development (if you have a local swagger file)
deno task dev

# Quick validation before commits
deno task validate ./swagger.json
```

These examples should help you get started with the Swagger Generator CLI in various scenarios. Remember to always validate your swagger files first and use the `--verbose` flag when you need more detailed information about the generation process.
