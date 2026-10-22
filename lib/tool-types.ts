/**
 * Client-safe tool types and formatters.
 *
 * This module must never import node:fs — client components (the comparison
 * table) import from here, and Turbopack cannot bundle node built-ins into the
 * browser chunk.
 */

export const PLATFORMS = [
  "web",
  "windows",
  "mac",
  "linux",
  "ios",
  "android",
] as const;

export type Platform = (typeof PLATFORMS)[number];

export type Tool = {
  slug: string;
  name: string;
  /** Must come from the official site and state what the free tier allows. */
  price: string;
  /** "No watermark", "Watermarked on free", or "Unconfirmed". */
  watermark: string;
  platforms: Platform[];
  bestFor: string;
  notFor?: string;
  /** Concrete free-tier limits: export length, resolution, storage, credits. */
  limits: string;
  /** Empty string means no affiliate link is configured yet. */
  affiliate: string;
  sourceUrl: string;
  /** YYYY-MM-DD */
  checkedAt: string;
};

export function formatPlatform(platform: Platform): string {
  switch (platform) {
    case "web":
      return "Web";
    case "windows":
      return "Windows";
    case "mac":
      return "macOS";
    case "linux":
      return "Linux";
    case "ios":
      return "iOS";
    case "android":
      return "Android";
  }
}
