import { readFile } from "node:fs/promises";
import YAML from "yaml";
import type { WatchConfig } from "./models.js";

export async function loadConfig(path = "config/searches.yaml"): Promise<WatchConfig> {
  const source = await readFile(path, "utf8");
  const config = YAML.parse(source) as WatchConfig;

  if (!config?.searches?.length) {
    throw new Error(`No searches found in ${path}`);
  }

  return config;
}
