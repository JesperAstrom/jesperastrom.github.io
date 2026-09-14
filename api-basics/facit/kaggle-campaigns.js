// Step 19 of the lecture: the same script, extended to count
// the accepted offers per campaign (AcceptedCmp1 to AcceptedCmp5).
//
// 1. Replace YOUR_TOKEN with the token from kaggle-token.txt (it starts with KGAT_).
// 2. Run:  node kaggle-campaigns.js

const token = "YOUR_TOKEN";
const url = "https://www.kaggle.com/api/v1/datasets/download/rodsaldanha/arketing-campaign/marketing_campaign.csv";

async function main() {
  const response = await fetch(url, {
    headers: { Authorization: "Bearer " + token }
  });
  console.log("Status:", response.status);

  const text = await response.text();
  const lines = text.trim().split("\n").map(line => line.trim().split(";"));
  const header = lines[0].map(name => name.replace("﻿", "")); // remove the byte order mark
  const rows = lines.slice(1);

  const accepted = rows.filter(row => row.at(-1) === "1").length;
  console.log("Customers:", rows.length);
  console.log("Accepted the last campaign:", accepted);

  for (let n = 1; n <= 5; n++) {
    const column = header.indexOf("AcceptedCmp" + n);
    const count = rows.filter(row => row[column] === "1").length;
    console.log("Accepted campaign " + n + ":", count);
  }
}
main();
