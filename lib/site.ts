import type { Metadata } from "next";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL in production (Vercel env vars)
 * to the real domain before launch. The fallback keeps local builds working
 * without ever emitting localhost canonicals.
 */
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "[site] NEXT_PUBLIC_SITE_URL is not set; canonicals fall back to https://capcut-alternatives.vercel.app",
  );
}

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://capcut-alternatives.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "CapCut Alternatives";
export const SITE_DESCRIPTION =
  "Compare CapCut alternatives by free limits, watermarks, platforms, and best fit. Clear picks for TikTok, iPhone, PC, and watermark-free editing.";

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = options;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
