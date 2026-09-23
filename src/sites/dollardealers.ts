import type { RawListing, ScrapeResult, SearchConfig } from "../models.js";
import { parsePrice } from "../normalise.js";
import type { SiteAdapter, SiteAdapterContext } from "./base.js";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface RawProductCard {
  id: string;
  title: string;
  url: string;
  priceText: string;
  seller: string;
  imageUrl: string;
}

export class DollarDealersAdapter implements SiteAdapter {
  readonly siteId = "dollardealers";

  async scrape(search: SearchConfig, context: SiteAdapterContext): Promise<ScrapeResult> {
    const fetchedAt = new Date().toISOString();
    const page = await context.browser.newPage({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    });

    try {
      const url = `https://dollardealers.co.nz${search.path}`;
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });

      if (!response || response.status() >= 400) {
        return {
          siteId: this.siteId,
          fetchedAt,
          diagnostics: { resultCount: 0, blocked: response?.status() === 403, error: `HTTP ${response?.status()}` },
          listings: []
        };
      }

      await page.waitForTimeout(2000);

      // Extract products from WooCommerce listing grid
      const rawCards = await page.$$eval("li.product, div.product-small, .products .product", (elements: Element[]) => {
        return elements.map((el: Element): RawProductCard => {
          const link = el.querySelector("a.woocommerce-LoopProduct-link") as HTMLAnchorElement | null;
          const title = el.querySelector(".woocommerce-loop-product__title, h2, h3")?.textContent?.trim() || "";
          const href = link?.href || "";
          const priceText = el.querySelector(".price")?.textContent?.trim() || "";
          const img = el.querySelector("img") as HTMLImageElement | null;
          const imageSrc = img?.getAttribute("src") || img?.getAttribute("data-src") || "";
          const storeElem = el.querySelector(".store-name, .sold-by, .vendor-name") || Array.from(el.querySelectorAll("span, p")).find((p: Element) => p.textContent?.includes("DollarDealers"));
          const seller = storeElem?.textContent?.trim() || "";

          let id = "";
          const classAttr = el.getAttribute("class") || "";
          const postMatch = classAttr.match(/post-(\d+)/);
          if (postMatch) {
            id = postMatch[1];
          } else if (href) {
            const slug = href.replace(/\/$/, "").split("/").pop();
            id = slug || "";
          }

          return { id, title, url: href, priceText, seller, imageUrl: imageSrc };
        });
      });

      const initialListings: RawListing[] = rawCards
        .filter((c: RawProductCard) => c.title && c.url)
        .map((c: RawProductCard) => ({
          id: c.id || c.url,
          title: c.title,
          url: c.url,
          priceText: c.priceText,
          price: parsePrice(c.priceText),
          seller: c.seller.replace(/^by\s+/i, ""),
          imageUrl: c.imageUrl
        }));

      // Selective deep-scrape: inspect product pages for potential target matches to extract Model, Condition, Accessories
      const candidateListings = initialListings.filter((l) => {
        const text = l.title.toLowerCase();
        return text.includes("oled") || text.includes("65") || text.includes("77") || text.includes("ego") || text.includes("56v");
      });

      for (const item of candidateListings.slice(0, 5)) {
        try {
          await sleep(1500);
          await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 25000 });

          const details = await page.evaluate(() => {
            const specs: Record<string, string> = {};
            const rows = document.querySelectorAll("table tr, .woocommerce-product-attributes tr, .specifications tr");
            rows.forEach((r) => {
              const cells = r.querySelectorAll("th, td");
              if (cells.length >= 2) {
                const key = cells[0].textContent?.trim().toLowerCase() || "";
                const val = cells[1].textContent?.trim() || "";
                if (key && val) specs[key] = val;
              }
            });

            const store = document.querySelector(".store-name, a[href*='/store/']")?.textContent?.trim();
            return {
              brand: specs["brand"],
              model: specs["model"],
              condition: specs["condition"],
              accessories: specs["accessories"],
              store
            };
          });

          if (details.model) item.modelNumber = details.model;
          if (details.condition) item.condition = details.condition;
          if (details.accessories) item.accessories = details.accessories;
          if (details.store && !item.seller) item.seller = details.store;
        } catch {
          // Continue gracefully if single detail page load times out
        }
      }

      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: { resultCount: initialListings.length, blocked: false },
        listings: initialListings
      };
    } catch (err: any) {
      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: { resultCount: 0, blocked: false, error: err.message },
        listings: []
      };
    } finally {
      await page.close();
    }
  }
}
