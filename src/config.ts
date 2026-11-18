import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import yaml from "yaml";
import type { SearchConfig } from "./models.js";

const DEFAULT_CONFIG_DIR = "config";

function withDroneSearches(searches: SearchConfig[], configDirectory: string): SearchConfig[] {
  const dronePath = path.join(configDirectory, "searches.drones.json");
  if (!existsSync(dronePath)) return searches;
  const drones = JSON.parse(readFileSync(dronePath, "utf8")) as SearchConfig[];
  const existingIds = new Set(searches.map((search) => search.id));
  return [...searches, ...drones.filter((search) => !existingIds.has(search.id))];
}

export function loadConfig(configDirectory = DEFAULT_CONFIG_DIR): SearchConfig[] {
  const jsonPath = path.join(configDirectory, "searches.json");
  const yamlPath = path.join(configDirectory, "searches.yaml");

  if (existsSync(jsonPath)) {
    const raw = readFileSync(jsonPath, "utf8");
    const parsed = JSON.parse(raw);
    return withDroneSearches(Array.isArray(parsed) ? parsed : (parsed.searches ?? []), configDirectory);
  }

  if (existsSync(yamlPath)) {
    const raw = readFileSync(yamlPath, "utf8");
    const parsed = yaml.parse(raw) as any;
    return withDroneSearches(Array.isArray(parsed) ? parsed : (parsed?.searches ?? []), configDirectory);
  }

  throw new Error(`Neither searches.json nor searches.yaml found in ${configDirectory}`);
}
