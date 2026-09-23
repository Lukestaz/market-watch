import { writeFile } from "node:fs/promises";
import path from "node:path";
import type { RawListing, ScrapeResult, SearchConfig } from "../models.js";
import { parsePrice } from "../normalise.js";
import type { SiteAdapter, SiteAdapterContext } from "./base.js";

const DEFAULT_BASE_URL = "https://shop.cashconverters.co.nz";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class CashConvertersAdapter implements SiteAdapter {
  readonly siteId = "cashconverters";

  async scrape(search: SearchConfig, context: SiteAdapterContext): Promise<ScrapeResult> {
    const fetchedAt = new Date().toISOString();
    const page = await context.browser.newPage({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    });

    try {
      const targetUrl = new URL(search.path, DEFAULT_BASE_URL).toString();
      const response = await page.goto(targetUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

      if (!response || response.status() >= 400) {
        return {
          siteId: this.siteId,
          fetchedAt,
          diagnostics: {
            resultCount: 0,
            blocked: response?.status() === 403,
            error: `HTTP ${response?.status()}`
          },
          listings: []
        };
      }

      const listingGridSelector = [
        "a[href*='/Listing/Details/']",
        "a[href*='/product/']",
        "a[href*='/shop/']",
        ".product-item",
        ".product-card"
      ].join(", ");

      try {
        await page.waitForSelector(listingGridSelector, { timeout: 12000 });
      } catch {
        // Proceed with snapshot parsing if timeout triggers
      }

      const rawListings = await page.evaluate((baseUrl: string) => {
        const anchors = Array.from(document.querySelectorAll("a[href]")) as HTMLAnchorElement[];
        const candidateAnchors = anchors.filter((anchor) => {
          const href = anchor.getAttribute("href") || "";
          return (
            href.includes("/Listing/Details/") ||
            href.includes("/shop/") ||
            href.includes("/product/") ||
            href.includes("/item/")
          );
        });

        function cleanText(text: string | null | undefined): string {
          return (text || "").replace(/\s+/g, " ").trim();
        }

        const listings: Array<{
          id: string;
          title: string;
          url: string;
          priceText?: string;
          seller?: string;
          imageUrl?: string;
          rawText?: string;
        }> = [];

        for (const anchor of candidateAnchors) {
          const href = anchor.getAttribute("href");
          if (!href) continue;

          const card = anchor.closest("article, li, [class*='card'], [class*='item'], div") || anchor;
          const cardText = cleanText(card.textContent);
          const titleElement = card.querySelector("h1, h2, h3, h4, [class*='title'], [class*='name']");
          const title = cleanText(titleElement?.textContent) || cleanText(anchor.textContent);

          if (!title || title.length < 5) continue;
          if (title.toLowerCase().includes("view all") || title.toLowerCase().includes("browse")) continue;

          const priceMatch = cardText.match(/\$\s*([0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})?)/);
          const priceText = priceMatch ? priceMatch[0] : undefined;

          const img = card.querySelector("img") as HTMLImageElement | null;
          const imageUrl = img?.getAttribute("src") || img?.getAttribute("data-src") || undefined;

          const locationElement = card.querySelector(
            "[class*='store'], [class*='location'], [class*='seller'], [class*='branch']"
          );
          const seller = cleanText(locationElement?.textContent);

          const absoluteUrl = new URL(href, baseUrl).toString();
          const idCandidate = href.split("?")[0].replace(/\/+$/, "").split("/").pop() || absoluteUrl;

          listings.push({
            id: idCandidate,
            title,
            url: absoluteUrl,
            priceText,
            seller: seller || undefined,
            imageUrl: imageUrl ? new URL(imageUrl, baseUrl).toString() : undefined,
            rawText: cardText
          });
        }

        const deduped = new Map<string, (typeof listings)[0]>();
        for (const item of listings) {
          if (!deduped.has(item.url)) {
            deduped.set(item.url, item);
          }
        }

        return Array.from(deduped.values());
      }, DEFAULT_BASE_URL);

      const parsedListings: RawListing[] = rawListings.map((raw: (typeof rawListings)[0]) => ({
        ...raw,
        price: parsePrice(raw.priceText)
      }));

      // Selective deep scrape for target matches
      const candidates = parsedListings.filter((l) => {
        const text = (l.title + " " + (l.rawText || "")).toLowerCase();
        return (
          text.includes("oled") ||
          text.includes("65") ||
          text.includes("77") ||
          text.includes("ego") ||
          text.includes("56v") ||
          text.includes("g6") ||
          text.includes("e6") ||
          text.includes("c6")
        );
      });

      for (const item of candidates.slice(0, 5)) {
        try {
          await sleep(1500);
          await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 25000 });

          const details = await page.evaluate(() => {
            const bodyText = document.body.innerText || "";
            let model: string | undefined;
            let condition: string | undefined;
            let accessories: string | undefined;
            let store: string | undefined;

            const modelMatch = bodyText.match(/Model:\s*([^\r\n,]+)/i);
            if (modelMatch) model = modelMatch[1].trim();

            const condMatch = bodyText.match(/Condition:\s*([^\r\n,]+)/i);
            if (condMatch) condition = condMatch[1].trim();

            const incMatch = bodyText.match(/(?:Includes|Accesories|Accessories):\s*([^\r\n]+)/i);
            if (incMatch) accessories = incMatch[1].trim();

            const storeMatch = bodyText.match(/(?:Pickup Address|Store|Sold by):\s*([^\r\n]+)/i);
            if (storeMatch) store = storeMatch[1].trim();

            const rows = document.querySelectorAll("table tr, dl");
            rows.forEach((row) => {
              const text = row.textContent || "";
              if (/condition/i.test(text) && !condition) {
                const parts = text.split(/condition/i);
                if (parts[1]) condition = parts[1].replace(/[:\s]+/, " ").trim();
              }
              if (/model/i.test(text) && !model) {
                const parts = text.split(/model/i);
                if (parts[1]) model = parts[1].replace(/[:\s]+/, " ").trim();
              }
            });

            return { model, condition, accessories, store };
          });

          if (details.model) item.modelNumber = details.model;
          if (details.condition) item.condition = details.condition;
          if (details.accessories) item.accessories = details.accessories;
          if (details.store && !item.seller) item.seller = details.store;
        } catch {
          // Continue gracefully if single detail page load times out
        }
      }

      if (!parsedListings.length && context.debugDirectory) {
        const timestamp = Date.now();
        await page.screenshot({
          path: path.join(context.debugDirectory, `${search.id}-${timestamp}.png`),
          fullPage: true
        });
        await writeFile(
          path.join(context.debugDirectory, `${search.id}-${timestamp}.html`),
          await page.content(),
          "utf8"
        );
      }

      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: {
          resultCount: parsedListings.length,
          blocked: false
        },
        listings: parsedListings
      };
    } catch (error: any) {
      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: {
          resultCount: 0,
          blocked: false,
          error: error.message
        },
        listings: []
      };
    } finally {
      await page.close();
    }
  }
}
