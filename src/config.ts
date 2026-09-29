import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import yaml from "yaml";
import type { SearchConfig } from "./models.js";

const DEFAULT_CONFIG_DIR = "config";

export function loadConfig(configDirectory = DEFAULT_CONFIG_DIR): SearchConfig[] {
  const jsonPath = path.join(configDirectory, "searches.json");
  const yamlPath = path.join(configDirectory, "searches.yaml");

  if (existsSync(jsonPath)) {
    const raw = readFileSync(jsonPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : (parsed.searches ?? []);
  }

  if (existsSync(yamlPath)) {
    const raw = readFileSync(yamlPath, "utf8");
    const parsed = yaml.parse(raw) as any;
    return Array.isArray(parsed) ? parsed : (parsed?.searches ?? []);
  }

  throw new Error(`Neither searches.json nor searches.yaml found in ${configDirectory}`);
}
