import swagger from "./swagger.json" with { type: "json" };


import type { OpenAPIV3 } from "openapi-types";


function generateEnum(components: OpenAPIV3.ComponentsObject) {
  const schemas = components.schemas;


}

generateEnum(swagger.components);