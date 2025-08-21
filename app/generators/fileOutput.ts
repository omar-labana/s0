import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

export function writeInterfacesToFile(
  content: string,
  filename: string = "interfaces.ts"
): void {
  // Create generated directory if it doesn't exist
  const generatedDir = join(process.cwd(), "generated");
  mkdirSync(generatedDir, { recursive: true });

  // Write to file
  const filePath = join(generatedDir, filename);
  writeFileSync(filePath, content);

  console.log(`📝 Output saved to: ${filePath}`);
}

export function logGenerationResults(foundInterfaces: string[]): void {
  console.log(`✅ Generated ${foundInterfaces.length} interfaces:`);
  foundInterfaces.forEach((name) => console.log(`  - ${name}`));
}
