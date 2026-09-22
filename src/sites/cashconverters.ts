import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Page } from "playwright";
import type { RawListing, ScrapeResult, SearchConfig } from "../models.js";
import type { ScrapeContext, SiteAdapter } from "./base.js";

const BASE_URL = "https://shop.cashconverters.co.nz";
const CARD_SELECTOR = "article, [data-product-id], .product-card, .product-item";

function absoluteUrl(value: string | null): string {
  return new URL(value ?? "", BASE_URL).toString();
}

function safeName(value: string): string {
  return value.replace(/[^a-z0-9_-]+/gi, "-").toLowerCase();
}

async function writeDebug(page: Page, directory: string, searchId: string): Promise<{ screenshotPath: string; htmlPath: string }> {
  await mkdir(directory, { recursive: true });
  const prefix = `${new Date().toISOString().replace(/[:.]/g, "-")}-${safeName(searchId)}`;
  const screenshotPath = join(directory, `${prefix}.png`);
  const htmlPath = join(directory, `${prefix}.html`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await writeFile(htmlPath, await page.content(), "utf8");
  return { screenshotPath, htmlPath };
}

export class CashConvertersAdapter implements SiteAdapter {
  readonly siteId = "cashconverters";

  async scrape(search: SearchConfig, context: ScrapeContext): Promise<ScrapeResult> {
    const page = await context.browser.newPage({
      viewport: { width: 1440, height: 1600 },
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
    });

    try {
      await page.goto(search.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      const cards = page.locator(CARD_SELECTOR);
      await cards.first().waitFor({ state: "visible", timeout: 30000 });

      const listings: RawListing[] = await cards.evaluateAll((elements) => {
        return elements.map((card) => {
          const text = (card.textContent ?? "").replace(/\s+/g, " ").trim();
          const link = card.querySelector("a[href]")?.getAttribute("href") ?? "";
          const image = card.querySelector("img")?.getAttribute("src") ?? "";
          const titleNode = card.querySelector("h1,h2,h3,h4,.title,.product-title,[data-testid='product-title']");
          const title = (titleNode?.textContent ?? text.split("$")[0] ?? "").replace(/\s+/g, " ").trim();
          const priceMatch = text.match(/(?:NZ\$|\$)\s*[\d,]+(?:\.\d{1,2})?/i);
          const id = card.getAttribute("data-product-id") ?? undefined;

          return {
            sourceListingId: id,
            url: link,
            title,
            priceText: priceMatch?.[0],
            imageUrl: image,
            rawText: text,
            availability: "available" as const
          };
        });
      });

      const validListings = listings
        .filter((listing) => listing.url && listing.title)
        .map((listing) => ({
          ...listing,
          url: absoluteUrl(listing.url),
          imageUrl: listing.imageUrl ? absoluteUrl(listing.imageUrl) : undefined
        }));

      if (!validListings.length) {
        const debug = await writeDebug(page, context.debugDirectory, search.id);
        return {
          searchId: search.id,
          siteId: this.siteId,
          fetchedAt: new Date().toISOString(),
          listings: [],
          diagnostics: {
            resultCount: 0,
            blocked: true,
            error: "No product cards matched the current selector.",
            ...debug
          }
        };
      }

      return {
        searchId: search.id,
        siteId: this.siteId,
        fetchedAt: new Date().toISOString(),
        listings: validListings,
        diagnostics: { resultCount: validListings.length, blocked: false }
      };
    } catch (error) {
      const debug = await writeDebug(page, context.debugDirectory, search.id);
      return {
        searchId: search.id,
        siteId: this.siteId,
        fetchedAt: new Date().toISOString(),
        listings: [],
        diagnostics: {
          resultCount: 0,
          blocked: true,
          error: error instanceof Error ? error.message : String(error),
          ...debug
        }
      };
    } finally {
      await page.close();
    }
  }
}
