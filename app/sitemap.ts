import type { MetadataRoute } from "next";

import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";
import { getLastCheckedAt } from "@/lib/tools";

const STATIC_ROUTES = [
  "/",
  "/apps-like-capcut",
  "/free",
  "/for-tiktok",
  "/for-iphone",
  "/for-pc",
  "/no-watermark",
  "/opencut",
  "/guides",
  "/disclosure",
  "/about",
  "/privacy",
  "/capcut-ultra-worth-it",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${getLastCheckedAt()}T00:00:00Z`);

  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const guides: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.slug}`,
    lastModified: new Date(`${guide.updated}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...guides];
}
