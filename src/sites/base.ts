import type { Browser } from "playwright";
import type { ScrapeResult, SearchConfig } from "../models.js";

export interface ScrapeContext {
  browser: Browser;
  debugDirectory: string;
}

export interface SiteAdapter {
  readonly siteId: string;
  scrape(search: SearchConfig, context: ScrapeContext): Promise<ScrapeResult>;
}
