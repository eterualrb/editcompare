#!/usr/bin/env node
/**
 * Submit every URL in the deployed sitemap to IndexNow (Bing, Yandex, and
 * partners). Run after deployment:
 *
 *   SITE_URL=https://your-domain.com INDEXNOW_KEY=abc123 node scripts/indexnow.mjs
 *
 * The key file must be reachable at https://your-domain.com/<key>.txt.
 */

import { access } from "node:fs/promises";
import path from "node:path";

const siteUrl = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  ""
).replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;

if (!siteUrl || !key) {
  console.error(
    "Usage: SITE_URL=https://your-domain.com INDEXNOW_KEY=abc123 node scripts/indexnow.mjs",
  );
  process.exit(1);
}

const keyFile = path.join(process.cwd(), "public", `${key}.txt`);
try {
  await access(keyFile);
} catch {
  console.warn(
    `Warning: ${keyFile} does not exist. Create it with the key as its only content and deploy it before submitting.`,
  );
}

const sitemapUrl = `${siteUrl}/sitemap.xml`;
const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  console.error(`Could not fetch ${sitemapUrl}: HTTP ${sitemapResponse.status}`);
  process.exit(1);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);

if (urls.length === 0) {
  console.error("No URLs found in the sitemap.");
  process.exit(1);
}

const payload = {
  host: new URL(siteUrl).host,
  key,
  keyLocation: `${siteUrl}/${key}.txt`,
  urlList: urls,
};

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(
  `Submitted ${urls.length} URLs to IndexNow (HTTP ${response.status}).`,
);

if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
