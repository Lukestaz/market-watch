import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Page } from "playwright";
import type { RawListing, ScrapeResult, SearchConfig } from "../models.js";
import type { ScrapeContext, SiteAdapter } from "./base.js";

const BASE_URL = "https://shop.cashconverters.co.nz";
const LISTING_SELECTOR = "section[id^='LID'][data-listingid]";

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
      const listings = page.locator(LISTING_SELECTOR);
      await listings.first().waitFor({ state: "visible", timeout: 30000 });

      const extracted: RawListing[] = await listings.evaluateAll((elements) => {
        const textOf = (element: Element | null): string => (element?.textContent ?? "").replace(/\s+/g, " ").trim();

        return elements.map((listing) => {
          const text = textOf(listing);
          const detailLink = listing.querySelector("h2.title a[href], a.btn[href*='ListingDetails']")?.getAttribute("href") ?? "";
          const image = listing.querySelector(".img-container img")?.getAttribute("src") ?? "";
          const title = textOf(listing.querySelector("h2.title"));
          const seller = textOf(listing.querySelector(".seller a"));
          const quickBidPrice = textOf(listing.querySelector(".awe-rt-MinimumBid .NumberPart"));
          const currentPrice = textOf(listing.querySelector(".awe-rt-CurrentPrice .NumberPart"));
          const fallbackPrice = text.match(/(?:Quick Bid|Sold)?\s*\$?\s*([\d,]+(?:\.\d{1,2})?)/i)?.[1] ?? "";
          const listingId = listing.getAttribute("data-listingid") ?? undefined;

          return {
            sourceListingId: listingId,
            url: detailLink,
            title,
            priceText: quickBidPrice || currentPrice || fallbackPrice,
            imageUrl: image,
            seller,
            rawText: text,
            availability: "available" as const
          };
        });
      });

      const validListings = extracted
        .filter((listing) => listing.sourceListingId && listing.url && listing.title)
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
            error: "Cash Converters listing sections were present but no valid listing records were extracted.",
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
