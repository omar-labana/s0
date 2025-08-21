import type { OpenAPIV3 } from "openapi-types";

// Type for schemas with custom properties
export type SchemaWithCustomProps = OpenAPIV3.SchemaObject & {
  "x-enumNames"?: string[];
  "x-enum-varnames"?: string[];
};

export function getPropertyType(
  propSchema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  allSchemas: Record<string, OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject>
): string {
  // If it's a reference, we need to resolve it first
  if ("$ref" in propSchema) {
    const refName = propSchema.$ref.split("/").pop() || "unknown";
    const resolvedSchema = allSchemas[refName];
    if (resolvedSchema) {
      // Check if this is an enum schema
      if (
        !("$ref" in resolvedSchema) &&
        (resolvedSchema as OpenAPIV3.SchemaObject).enum &&
        Array.isArray((resolvedSchema as OpenAPIV3.SchemaObject).enum)
      ) {
        // This is an enum schema, return the correct enum reference
        return `Enums.E_${refName}`;
      }
      return getPropertyType(resolvedSchema, allSchemas);
    }
    return "unknown";
  }

  // Now we know it's a SchemaObject
  const schema = propSchema as OpenAPIV3.SchemaObject;

  // Handle oneOf schemas
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    const oneOfTypes: string[] = [];
    schema.oneOf.forEach((oneOfSchema) => {
      if ("$ref" in oneOfSchema) {
        const refName = oneOfSchema.$ref.split("/").pop() || "unknown";
        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema) {
          if ("$ref" in resolvedSchema) {
            oneOfTypes.push(getPropertyType(resolvedSchema, allSchemas));
          } else {
            const schemaObj = resolvedSchema as OpenAPIV3.SchemaObject;
            if (schemaObj.enum && Array.isArray(schemaObj.enum)) {
              // This is an enum schema
              oneOfTypes.push(`Enums.E_${refName}`);
            } else if (schemaObj.type === "object" || schemaObj.properties) {
              // This is an object schema
              oneOfTypes.push(`I_${refName}`);
            } else {
              oneOfTypes.push(getPropertyType(resolvedSchema, allSchemas));
            }
          }
        }
      } else {
        oneOfTypes.push(getPropertyType(oneOfSchema, allSchemas));
      }
    });

    if (oneOfTypes.length === 1) {
      return oneOfTypes[0];
    } else if (oneOfTypes.length > 1) {
      return oneOfTypes.join(" | ");
    }
  }

  if (schema.enum && Array.isArray(schema.enum)) {
    let enumName =
      schema.title ||
      ((schema as Record<string, unknown>)["x-enumNames"] as string[])?.[0] ||
      "Unknown";

    if (!enumName.startsWith("E_")) {
      enumName = `E_${enumName}`;
    }

    return `Enums.${enumName}`;
  }

  if (schema.type === "array") {
    const itemType = schema.items
      ? getPropertyType(schema.items, allSchemas)
      : "unknown";
    return `${itemType}[]`;
  }

  if (schema.type === "object") {
    if (
      schema.additionalProperties &&
      typeof schema.additionalProperties === "object"
    ) {
      const valueType = getPropertyType(
        schema.additionalProperties,
        allSchemas
      );
      return `Record<string, ${valueType}>`;
    }
    return "object";
  }

  if (schema.type === "integer") {
    return "number";
  }

  if (schema.type === "number") {
    return "number";
  }

  if (schema.type === "boolean") {
    return "boolean";
  }

  if (schema.type === "string") {
    return "string";
  }

  if (schema.nullable) {
    const baseType = getPropertyType(
      { ...schema, nullable: false },
      allSchemas
    );
    return `${baseType} | null`;
  }

  return "unknown";
}

export function handleInheritance(
  interfaceName: string,
  schema: OpenAPIV3.SchemaObject,
  allSchemas: Record<
    string,
    OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
  >,
  inheritanceType: "allOf" | "oneOf" | "anyOf"
): string {
  const inheritanceSchemas = schema[inheritanceType] || [];

  if (inheritanceType === "allOf") {
    let interfaceCode = `export interface ${interfaceName}`;
    const extendsList: string[] = [];
    const properties: string[] = [];

    inheritanceSchemas.forEach((inheritedSchema, index) => {
      if ("$ref" in inheritedSchema) {
        const refName = inheritedSchema.$ref.split("/").pop() || `Base${index}`;

        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema && !("$ref" in resolvedSchema)) {
          const schemaObj = resolvedSchema as OpenAPIV3.SchemaObject;
          const isEnum = schemaObj.enum && Array.isArray(schemaObj.enum);

          if (isEnum) {
            extendsList.push(`Enums.E_${refName}`);
          } else {
            extendsList.push(`I_${refName}`);
          }
        } else {
          extendsList.push(`I_${refName}`);
        }
      } else if (inheritedSchema.properties) {
        Object.entries(inheritedSchema.properties).forEach(
          ([propName, propSchema]) => {
            const propType = getPropertyType(propSchema, allSchemas);
            const isRequired =
              inheritedSchema.required?.includes(propName) || false;
            const optionalMarker = isRequired ? "" : "?";
            properties.push(`  ${propName}${optionalMarker}: ${propType};`);
          }
        );
      }
    });

    if (extendsList.length > 0) {
      interfaceCode += ` extends ${extendsList.join(", ")}`;
    }

    interfaceCode += " {\n";

    if (schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        if ("$ref" in propSchema) {
          const refName = propSchema.$ref.split("/").pop() || "unknown";
          const resolvedSchema = allSchemas[refName];

          if (resolvedSchema && !("$ref" in resolvedSchema)) {
            const schemaObj = resolvedSchema as OpenAPIV3.SchemaObject;
            const isEnum = schemaObj.enum && Array.isArray(schemaObj.enum);

            if (isEnum) {
              properties.push(`  ${propName}: Enums.E_${refName};`);
            } else {
              properties.push(`  ${propName}: I_${refName};`);
            }
          } else {
            properties.push(`  ${propName}: I_${refName};`);
          }
        } else {
          const propType = getPropertyType(propSchema, allSchemas);
          const isRequired = schema.required?.includes(propName) || false;
          const optionalMarker = isRequired ? "" : "?";
          properties.push(`  ${propName}${optionalMarker}: ${propType};`);
        }
      });
    }

    interfaceCode += properties.join("\n") + "\n}";
    return interfaceCode;
  } else {
    const unionTypes: string[] = [];

    inheritanceSchemas.forEach((inheritedSchema) => {
      if ("$ref" in inheritedSchema) {
        const refName = inheritedSchema.$ref.split("/").pop() || "unknown";

        const isEnum =
          allSchemas[refName] &&
          !("$ref" in allSchemas[refName]) &&
          (allSchemas[refName] as OpenAPIV3.SchemaObject).enum &&
          Array.isArray((allSchemas[refName] as OpenAPIV3.SchemaObject).enum);

        if (isEnum) {
          unionTypes.push(`Enums.E_${refName}`);
        } else {
          unionTypes.push(`I_${refName}`);
        }
      } else {
        const inlineInterfaceName = `${interfaceName}Inline${unionTypes.length}`;
        unionTypes.push(inlineInterfaceName);
      }
    });

    return `export type ${interfaceName} = ${unionTypes.join(" | ")};`;
  }
}
