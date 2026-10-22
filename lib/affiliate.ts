import type { Tool } from "./tool-types";

/**
 * Destination for /go/[slug].
 *
 * Affiliate programs are applied for per vendor. Until an affiliate URL is
 * configured (content/tools/<slug>.json or the AFFILIATE_<SLUG> env var), the
 * redirect falls back to the official source page with UTM parameters so
 * outbound interest is still measurable.
 */
export function affiliateDestination(tool: Tool): string {
  const envKey = `AFFILIATE_${tool.slug.toUpperCase().replace(/-/g, "_")}`;
  const configured = process.env[envKey] || tool.affiliate;

  if (configured) {
    return configured;
  }

  const url = new URL(tool.sourceUrl);
  url.searchParams.set("utm_source", "capcut-alternatives");
  url.searchParams.set("utm_medium", "referral");
  return url.toString();
}

export function isAffiliateConfigured(tool: Tool): boolean {
  const envKey = `AFFILIATE_${tool.slug.toUpperCase().replace(/-/g, "_")}`;
  return Boolean(process.env[envKey] || tool.affiliate);
}
