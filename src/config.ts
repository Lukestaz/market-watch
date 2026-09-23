import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import yaml from "yaml";
import type { SearchConfig, SiteConfig, WatchConfig } from "./models.js";

const DEFAULT_CONFIG_DIR = "config";

interface RawSitesFile {
  defaults?: {
    minimumDelayBetweenSearchesMs?: number;
  };
  sites: Record<string, SiteConfig>;
}

interface RawSearchesFile {
  searches: SearchConfig[];
}

export async function loadConfig(configDirectory = DEFAULT_CONFIG_DIR): Promise<WatchConfig> {
  const sitesPath = path.join(configDirectory, "sites.yaml");
  const searchesPath = path.join(configDirectory, "searches.yaml");

  const [sitesRaw, searchesRaw] = await Promise.all([
    readFile(sitesPath, "utf8"),
    readFile(searchesPath, "utf8")
  ]);

  const parsedSites = yaml.parse(sitesRaw) as RawSitesFile;
  const parsedSearches = yaml.parse(searchesRaw) as RawSearchesFile;

  return {
    defaults: {
      minimumDelayBetweenSearchesMs:
        parsedSites.defaults?.minimumDelayBetweenSearchesMs ?? 1500
    },
    sites: parsedSites.sites ?? {},
    searches: parsedSearches.searches ?? []
  };
}

export async function saveConfig(config: WatchConfig, configDirectory = DEFAULT_CONFIG_DIR): Promise<void> {
  const sitesPath = path.join(configDirectory, "sites.yaml");
  const searchesPath = path.join(configDirectory, "searches.yaml");

  const sitesFile: RawSitesFile = {
    defaults: config.defaults,
    sites: config.sites
  };

  const searchesFile: RawSearchesFile = {
    searches: config.searches
  };

  await Promise.all([
    writeFile(sitesPath, yaml.stringify(sitesFile), "utf8"),
    writeFile(searchesPath, yaml.stringify(searchesFile), "utf8")
  ]);
}
