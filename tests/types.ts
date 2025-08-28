// Use "deno check tests/types.ts" to test

import type { OpenAPIV3 } from "../index.d.ts";

const doc: OpenAPIV3.Document = {
  openapi: "3.0.3",
  info: { title: "x", version: "1.0.0" },
  paths: {},
};

console.log(doc);
