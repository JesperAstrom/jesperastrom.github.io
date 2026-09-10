const cheerio = require("cheerio");
const fs = require("fs");

const HEADERS = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36", "Accept-Language": "sv-SE,sv;q=0.9" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const csvCell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;

async function scrapePage(url) {
  const res = await fetch(url, { headers: HEADERS, cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const $ = cheerio.load(await res.text());
  const rows = [];
  $(".SearchResultCard-card").each((i, card) => {
    const c = $(card);
    const name = c.find("h2 a").first().text().trim();
    const orgnr = c.find(".CardHeader-propertyList").filter((i, el) => $(el).text().includes("Org.nr")).first().text().replace("Org.nr", "").trim();
    const phone = c.find(".CardHeader-phone").first().text().replace("Telefon", "").trim();
    const address = c.find(".CardHeader-propertyList").filter((i, el) => !$(el).hasClass("CardHeader-phone") && !$(el).text().includes("Org.nr")).first().text().trim();
    rows.push({ name, orgnr, phone, address });
  });
  return rows;
}

(async () => {
  const base = "https://www.allabolag.se/bransch-s%C3%B6k?q=Arkitekter";
  const urls = [1, 2, 3].map((p) => (p === 1 ? base : `${base}&page=${p}`));
  const all = [];
  for (const url of urls) {
    const rows = await scrapePage(url);
    console.log(`${url} -> ${rows.length} objekt`);
    all.push(...rows);
    await sleep(500);
  }
  const header = "name,orgnr,phone,address";
  const lines = all.map((r) => [r.name, r.orgnr, r.phone, r.address].map(csvCell).join(","));
  fs.writeFileSync("companies.csv", [header, ...lines].join("\n"), "utf8");
  console.log(`Sparade ${all.length} rader till companies.csv`);
})();
