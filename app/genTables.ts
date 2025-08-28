import { promises as fs } from "node:fs";
import process from "node:process";
import * as Effect from "effect/Effect";
import type { OpenAPIV3 } from "../index.d.ts";
import { generateTables } from "./generators/index.ts";

const toError = (e: unknown): Error =>
  e instanceof Error ? e : new Error(String(e));

const readFileE = (p: string) =>
  Effect.tryPromise<string, Error>({
    try: () => fs.readFile(p, "utf8"),
    catch: toError,
  });

const main = Effect.gen(function* () {
  const swaggerPath = process.argv[2] ?? "./swagger.json";
  const raw = yield* readFileE(swaggerPath);
  const json: unknown = JSON.parse(raw);
  const doc = json as OpenAPIV3.Document;
  generateTables(doc);
});

Effect.runPromise(main).catch((e) => {
  console.error(e);
  process.exit(1);
});
