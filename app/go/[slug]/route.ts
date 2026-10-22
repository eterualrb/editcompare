import { NextResponse } from "next/server";

import { affiliateDestination, isAffiliateConfigured } from "@/lib/affiliate";
import { getTool } from "@/lib/tools";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return new NextResponse("Unknown tool", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const destination = affiliateDestination(tool);

  // Server-side click log. Visible in `vercel logs` / the local dev console.
  console.info(
    JSON.stringify({
      event: "affiliate_click",
      slug: tool.slug,
      destination,
      affiliate: isAffiliateConfigured(tool),
      referer: request.headers.get("referer"),
      timestamp: new Date().toISOString(),
    }),
  );

  const response = NextResponse.redirect(destination, 302);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("X-Robots-Tag", "noindex");
  return response;
}
