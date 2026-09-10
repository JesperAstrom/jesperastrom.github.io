# Facit: scraper.js

En färdig scraper för alla tre stegen i övningen (rubriker, fyra fält per företag, flera sidor).

Kör så här i en tom mapp:

```
npm init -y
npm install cheerio
node scraper.js
```

Resultatet hamnar i `companies.csv`. Kräver Node 18 eller senare (fetch är inbyggt).
