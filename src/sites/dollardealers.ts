import * as cheerio from "cheerio";
import type { RawListing, ScrapeResult, SearchConfig } from "../models.js";
import type { SiteAdapter, SiteAdapterContext } from "./base.js";

const BASE_URL = "https://dollardealers.co.nz";

function parsePrice(text: string): number | undefined {
  const num = parseFloat(text.replace(/[^0-9.]/g, ""));
  return isNaN(num) ? undefined : num;
}

export class DollarDealersAdapter implements SiteAdapter {
  readonly siteId = "dollardealers";

  async scrape(search: SearchConfig, context: SiteAdapterContext): Promise<ScrapeResult> {
    const fetchedAt = new Date().toISOString();
    const url = `${BASE_URL}${search.path}`;
    console.log(`[DollarDealers] Fetching: ${url}`);

    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-NZ,en;q=0.9"
        },
        signal: context.signal
      });

      if (!res.ok) {
        console.warn(`[DollarDealers] HTTP ${res.status} for ${url}`);
        return {
          siteId: this.siteId,
          fetchedAt,
          diagnostics: { resultCount: 0, blocked: res.status === 403, error: `HTTP ${res.status}` },
          listings: []
        };
      }

      const html = await res.text();
      const $ = cheerio.load(html);
      const listings: RawListing[] = [];

      $("li.product, div.product-small, .products .product").each((_, el) => {
        const $el = $(el);
        const link = $el.find("a.woocommerce-LoopProduct-link, a[href*='/product/']").first();
        const href = link.attr("href") || "";
        const title = $el.find(".woocommerce-loop-product__title, h2, h3").first().text().trim();
        if (!title || !href) return;

        const priceText = $el.find(".price").first().text().trim();
        const seller = $el.find(".store-name, .sold-by, .vendor-name").first().text().trim();
        const img = $el.find("img").first();
        const imageUrl = img.attr("src") || img.attr("data-src") || "";

        let id = "";
        const classAttr = $el.attr("class") || "";
        const postMatch = classAttr.match(/post-(\d+)/);
        if (postMatch) {
          id = `dd-${postMatch[1]}`;
        } else {
          const slug = href.replace(/\/$/, "").split("/").pop();
          id = slug ? `dd-${slug}` : `dd-${Buffer.from(href).toString("base64url").slice(0, 16)}`;
        }

        listings.push({
          id,
          title,
          url: href.startsWith("http") ? href : `${BASE_URL}${href}`,
          priceText,
          price: parsePrice(priceText),
          seller: seller.replace(/^by\s+/i, ""),
          imageUrl,
          rawText: $el.text().replace(/\s+/g, " ").trim()
        });
      });

      const seen = new Set<string>();
      const unique = listings.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });

      console.log(`[DollarDealers] Found ${unique.length} listings for ${search.path}`);

      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: { resultCount: unique.length, blocked: false },
        listings: unique
      };
    } catch (err: any) {
      return {
        siteId: this.siteId,
        fetchedAt,
        diagnostics: { resultCount: 0, blocked: false, error: err.message },
        listings: []
      };
    }
  }
}
