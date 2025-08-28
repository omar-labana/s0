import type { $Fetch } from "ofetch";
import { $fetch } from "ofetch";
import { normalizeTagName } from "./generators/repositoryContentGenerator.ts";
import type { RepositoryMap } from "../generated/RepositoryMap.d.ts";

// Type for repository constructor
export type RepositoryConstructor<T> = new (instance: $Fetch) => T;

/**
 * Strongly-typed repository creation using the auto-generated RepositoryMap.
 * Provides full IntelliSense and type safety for each specific repository.
 * Uses default $fetch instance if no instance is provided.
 *
 * Example:
 *   const repo = await createRepository('ai'); // Uses default $fetch
 *   const repo = await createRepository('ai', customInstance); // Uses custom instance
 */
export async function createRepository<
  Tag extends keyof RepositoryMap & string
>(tag: Tag, instance?: $Fetch): Promise<RepositoryMap[Tag]> {
  const normalized = normalizeTagName(tag);
  const className = `Repository${normalized}`;
  const modulePath = `../generated/repositories/${className}.ts`;

  // Use provided instance or default $fetch
  const fetchInstance = instance || $fetch;

  try {
    const mod = await import(modulePath);
    const RepositoryCtor = mod?.[className] as
      | RepositoryConstructor<RepositoryMap[Tag]>
      | undefined;
    if (!RepositoryCtor) {
      throw new Error(
        `Repository class not found in module: ${modulePath} (expected export: ${className})`
      );
    }
    return new RepositoryCtor(fetchInstance) as RepositoryMap[Tag];
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    throw new Error(
      `Failed to load repository for tag "${tag}": ${err.message}`
    );
  }
}
