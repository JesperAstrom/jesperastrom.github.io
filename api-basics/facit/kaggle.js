// Step 17 of the lecture "APIs: request, key, response".
// Downloads one file from a Kaggle dataset and counts the customers
// who accepted the last marketing campaign (Response = 1).
//
// 1. Replace YOUR_TOKEN with the token from kaggle-token.txt (it starts with KGAT_).
// 2. Run:  node kaggle.js
// Needs Node 18 or later (fetch is built in).

const token = "YOUR_TOKEN";
const url = "https://www.kaggle.com/api/v1/datasets/download/rodsaldanha/arketing-campaign/marketing_campaign.csv";

async function main() {
  const response = await fetch(url, {
    headers: { Authorization: "Bearer " + token }
  });
  console.log("Status:", response.status);

  const text = await response.text();
  const rows = text.trim().split("\n").slice(1);
  const accepted = rows.filter(row => row.trim().split(";").at(-1) === "1").length;

  console.log("Customers:", rows.length);
  console.log("Accepted the last campaign:", accepted);
}
main();
