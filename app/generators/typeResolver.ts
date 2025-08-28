import type { OpenAPIV3 } from "../../index.d.ts";

// Type for schemas with custom properties
export type SchemaWithCustomProps = OpenAPIV3.SchemaObject & {
  "x-enumNames"?: string[];
  "x-enum-varnames"?: string[];
};

export function getPropertyType(
  schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
  allSchemas: Record<
    string,
    OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject
  >,
  interfaceNameLookup?: Map<string, string>
): string {
  // Handle $ref schemas
  if ("$ref" in schema) {
    const refName = schema.$ref.split("/").pop() || "unknown";
    const resolvedSchema = allSchemas[refName];
    if (resolvedSchema) {
      if ("$ref" in resolvedSchema) {
        return getPropertyType(resolvedSchema, allSchemas, interfaceNameLookup);
      } else {
        const schemaObj = resolvedSchema; // narrowed to SchemaObject by '$ref' check
        if (schemaObj.enum && Array.isArray(schemaObj.enum)) {
          return `Enums.E_${refName}`;
        } else if (
          schemaObj.type === "object" ||
          ("properties" in schemaObj &&
            typeof schemaObj.properties === "object")
        ) {
          // Use the lookup table to get the correct interface name, or fallback to I_ if not found
          const correctInterfaceName =
            interfaceNameLookup?.get(refName) || `I_${refName}`;
          return correctInterfaceName;
        } else {
          return getPropertyType(
            resolvedSchema,
            allSchemas,
            interfaceNameLookup
          );
        }
      }
    }
    return `I_${refName}`;
  }

  // Handle oneOf schemas
  if ("oneOf" in schema && Array.isArray(schema.oneOf)) {
    const oneOfTypes: string[] = [];
    schema.oneOf.forEach((oneOfSchema) => {
      if ("$ref" in oneOfSchema) {
        const refName = oneOfSchema.$ref.split("/").pop() || "unknown";
        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema) {
          if ("$ref" in resolvedSchema) {
            oneOfTypes.push(
              getPropertyType(resolvedSchema, allSchemas, interfaceNameLookup)
            );
          } else {
            const schemaObj = resolvedSchema;
            if (schemaObj.enum && Array.isArray(schemaObj.enum)) {
              oneOfTypes.push(`Enums.E_${refName}`);
            } else if (
              schemaObj.type === "object" ||
              ("properties" in schemaObj &&
                typeof schemaObj.properties === "object")
            ) {
              // Use the lookup table to get the correct interface name, or fallback to I_ if not found
              const correctInterfaceName =
                interfaceNameLookup?.get(refName) || `I_${refName}`;
              oneOfTypes.push(correctInterfaceName);
            } else {
              oneOfTypes.push(
                getPropertyType(resolvedSchema, allSchemas, interfaceNameLookup)
              );
            }
          }
        }
      } else {
        oneOfTypes.push(
          getPropertyType(oneOfSchema, allSchemas, interfaceNameLookup)
        );
      }
    });

    if (oneOfTypes.length === 1) {
      return oneOfTypes[0];
    } else if (oneOfTypes.length > 1) {
      return oneOfTypes.join(" | ");
    }
  }

  // Handle anyOf schemas
  if ("anyOf" in schema && Array.isArray(schema.anyOf)) {
    const anyOfTypes: string[] = [];
    schema.anyOf.forEach((anyOfSchema) => {
      if ("$ref" in anyOfSchema) {
        const refName = anyOfSchema.$ref.split("/").pop() || "unknown";
        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema) {
          if ("$ref" in resolvedSchema) {
            anyOfTypes.push(
              getPropertyType(resolvedSchema, allSchemas, interfaceNameLookup)
            );
          } else {
            const schemaObj = resolvedSchema;
            if (schemaObj.enum && Array.isArray(schemaObj.enum)) {
              anyOfTypes.push(`Enums.E_${refName}`);
            } else if (
              schemaObj.type === "object" ||
              ("properties" in schemaObj &&
                typeof schemaObj.properties === "object")
            ) {
              // Use the lookup table to get the correct interface name, or fallback to I_ if not found
              const correctInterfaceName =
                interfaceNameLookup?.get(refName) || `I_${refName}`;
              anyOfTypes.push(correctInterfaceName);
            } else {
              anyOfTypes.push(
                getPropertyType(resolvedSchema, allSchemas, interfaceNameLookup)
              );
            }
          }
        }
      } else {
        anyOfTypes.push(
          getPropertyType(anyOfSchema, allSchemas, interfaceNameLookup)
        );
      }
    });

    if (anyOfTypes.length === 1) {
      return anyOfTypes[0];
    } else if (anyOfTypes.length > 1) {
      return anyOfTypes.join(" | ");
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
    if ("items" in schema && schema.items) {
      // Handle $ref in items
      if ("$ref" in schema.items) {
        const refName = schema.items.$ref.split("/").pop() || "unknown";
        const resolvedSchema = allSchemas[refName];
        if (resolvedSchema) {
          // Check if this is an enum schema
          if (
            !("$ref" in resolvedSchema) &&
            resolvedSchema.enum &&
            Array.isArray(resolvedSchema.enum)
          ) {
            return `Enums.E_${refName}[]`;
          } else {
            // Use the lookup table to get the correct interface name, or fallback to I_ if not found
            const correctInterfaceName =
              interfaceNameLookup?.get(refName) || `I_${refName}`;
            return `${correctInterfaceName}[]`;
          }
        }
        // Use the lookup table to get the correct interface name, or fallback to I_ if not found
        const correctInterfaceName =
          interfaceNameLookup?.get(refName) || `I_${refName}`;
        return `${correctInterfaceName}[]`;
      }
      // Handle other item types
      const itemType = getPropertyType(
        schema.items,
        allSchemas,
        interfaceNameLookup
      );
      return `${itemType}[]`;
    }
    return "unknown[]";
  }

  if (schema.type === "object") {
    if (
      "additionalProperties" in schema &&
      schema.additionalProperties &&
      typeof schema.additionalProperties === "object"
    ) {
      const valueType = getPropertyType(
        schema.additionalProperties,
        allSchemas
      );
      return `Record<string, ${valueType}>`;
    }

    // If it has properties, it's a proper object type
    if (
      "properties" in schema &&
      schema.properties &&
      Object.keys(schema.properties).length > 0
    ) {
      return "object";
    }

    // If it's an empty object but has allOf/oneOf/anyOf, it's likely an interface
    if (
      ("allOf" in schema && schema.allOf) ||
      ("oneOf" in schema && schema.oneOf) ||
      ("anyOf" in schema && schema.anyOf)
    ) {
      return "object";
    }

    // For truly empty objects, return any
    return "any";
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
  inheritanceType: "allOf" | "oneOf" | "anyOf",
  interfaceNameLookup?: Map<string, string>
): string {
  function hasAllOf(s: OpenAPIV3.SchemaObject): s is OpenAPIV3.SchemaObject & {
    allOf: (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[];
  } {
    return (
      "allOf" in s && Array.isArray((s as unknown as { allOf?: unknown }).allOf)
    );
  }

  function hasOneOf(s: OpenAPIV3.SchemaObject): s is OpenAPIV3.SchemaObject & {
    oneOf: (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[];
  } {
    return (
      "oneOf" in s && Array.isArray((s as unknown as { oneOf?: unknown }).oneOf)
    );
  }

  function hasAnyOf(s: OpenAPIV3.SchemaObject): s is OpenAPIV3.SchemaObject & {
    anyOf: (OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject)[];
  } {
    return (
      "anyOf" in s && Array.isArray((s as unknown as { anyOf?: unknown }).anyOf)
    );
  }

  let inheritanceSchemas: (
    | OpenAPIV3.ReferenceObject
    | OpenAPIV3.SchemaObject
  )[] = [];
  if (inheritanceType === "allOf" && hasAllOf(schema)) {
    inheritanceSchemas = schema.allOf;
  } else if (inheritanceType === "oneOf" && hasOneOf(schema)) {
    inheritanceSchemas = schema.oneOf;
  } else if (inheritanceType === "anyOf" && hasAnyOf(schema)) {
    inheritanceSchemas = schema.anyOf;
  }

  if (inheritanceType === "allOf") {
    let interfaceCode = `export interface ${interfaceName}`;
    const extendsList: string[] = [];
    const properties: string[] = [];

    inheritanceSchemas.forEach(
      (
        inheritedSchema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject,
        index: number
      ) => {
        if ("$ref" in inheritedSchema) {
          const refName =
            inheritedSchema.$ref.split("/").pop() || `Base${index}`;

          const resolvedSchema = allSchemas[refName];
          if (resolvedSchema && !("$ref" in resolvedSchema)) {
            const schemaObj = resolvedSchema;
            const isEnum = schemaObj.enum && Array.isArray(schemaObj.enum);

            if (isEnum) {
              extendsList.push(`Enums.E_${refName}`);
            } else {
              // Use the lookup table to get the correct interface name, or fallback to I_ if not found
              const correctInterfaceName =
                interfaceNameLookup?.get(refName) || `I_${refName}`;
              extendsList.push(correctInterfaceName);
            }
          } else {
            // Use the lookup table to get the correct interface name, or fallback to I_ if not found
            const correctInterfaceName =
              interfaceNameLookup?.get(refName) || `I_${refName}`;
            extendsList.push(correctInterfaceName);
          }
        } else if (
          "properties" in inheritedSchema &&
          inheritedSchema.properties
        ) {
          for (const propName of Object.keys(inheritedSchema.properties)) {
            const propSchema = inheritedSchema.properties[propName];
            const propType = getPropertyType(
              propSchema,
              allSchemas,
              interfaceNameLookup
            );
            const isRequired =
              ("required" in inheritedSchema &&
                Array.isArray(inheritedSchema.required) &&
                inheritedSchema.required.includes(propName)) ||
              false;
            const optionalMarker = isRequired ? "" : "?";
            properties.push(`  ${propName}${optionalMarker}: ${propType};`);
          }
        }
      }
    );

    if (extendsList.length > 0) {
      interfaceCode += ` extends ${extendsList.join(", ")}`;
    }

    interfaceCode += " {\n";

    if ("properties" in schema && schema.properties) {
      for (const propName of Object.keys(schema.properties)) {
        const propSchema = schema.properties[propName];
        if ("$ref" in propSchema) {
          const refName = propSchema.$ref.split("/").pop() || "unknown";
          const resolvedSchema = allSchemas[refName];

          if (resolvedSchema && !("$ref" in resolvedSchema)) {
            const schemaObj = resolvedSchema;
            const isEnum = schemaObj.enum && Array.isArray(schemaObj.enum);

            if (isEnum) {
              properties.push(`  ${propName}: Enums.E_${refName};`);
            } else {
              // Use the lookup table to get the correct interface name, or fallback to I_ if not found
              const correctInterfaceName =
                interfaceNameLookup?.get(refName) || `I_${refName}`;
              properties.push(`  ${propName}: ${correctInterfaceName};`);
            }
          } else {
            // Use the lookup table to get the correct interface name, or fallback to I_ if not found
            const correctInterfaceName =
              interfaceNameLookup?.get(refName) || `I_${refName}`;
            properties.push(`  ${propName}: ${correctInterfaceName};`);
          }
        } else {
          const propType = getPropertyType(
            propSchema,
            allSchemas,
            interfaceNameLookup
          );
          const isRequired =
            ("required" in schema &&
              Array.isArray(schema.required) &&
              schema.required.includes(propName)) ||
            false;
          const optionalMarker = isRequired ? "" : "?";
          properties.push(`  ${propName}${optionalMarker}: ${propType};`);
        }
      }
    }

    interfaceCode += properties.join("\n") + "\n}";
    return interfaceCode;
  } else {
    const unionTypes: string[] = [];

    inheritanceSchemas.forEach(
      (inheritedSchema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject) => {
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
            // Use the lookup table to get the correct interface name, or fallback to I_ if not found
            const correctInterfaceName =
              interfaceNameLookup?.get(refName) || `I_${refName}`;
            unionTypes.push(correctInterfaceName);
          }
        } else {
          const propType = getPropertyType(
            inheritedSchema,
            allSchemas,
            interfaceNameLookup
          );
          unionTypes.push(propType);
        }
      }
    );

    return unionTypes.join(" | ");
  }
}
