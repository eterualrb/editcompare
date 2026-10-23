import Link from "next/link";

import { pageMetadata, SITE_NAME } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About EditCompare: How These Comparisons Are Made",
  description:
    "Who runs EditCompare, how picks are chosen, where the pricing facts come from, and how to report an outdated number.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        About
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        How these comparisons are made
      </h1>

      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
        <p>
          {SITE_NAME} is an independent comparison site for people leaving
          CapCut. It is run by one editor, not a media company, and it is not
          affiliated with CapCut, ByteDance, or any tool listed on the site.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Where the facts come from
        </h2>
        <p>
          Prices, free-tier limits, and watermark rules are taken from each
          vendor&apos;s own pricing or help page. Each tool card shows the source
          URL and the date the page was last checked. Where a vendor does not
          state something, the card says &ldquo;unconfirmed&rdquo; instead of
          guessing.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          How a pick is chosen
        </h2>
        <p>
          Picks are based on what the free tier actually allows: export
          resolution, watermark, platform support, and the specific job the page
          is about. Commission rates do not decide the order. Some outbound
          links are affiliate links, and that is disclosed on every page and
          explained in the{" "}
          <Link
            href="/disclosure"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            disclosure
          </Link>
          .
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          What this site does not do
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>It does not claim hands-on testing it has not done.</li>
          <li>It does not rank tools by commission.</li>
          <li>It does not host or redistribute any editor&apos;s software.</li>
        </ul>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Report an outdated number
        </h2>
        <p>
          Vendor pricing changes often, especially with regional pricing. If a
          number here is wrong, email{" "}
          <a
            href="mailto:hello@editcompare.com"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            hello@editcompare.com
          </a>{" "}
          with the tool name and the page you checked. Corrections are usually
          applied within a few days.
        </p>

        <p className="pt-4 text-xs text-slate-500">
          Last updated: 2026-10-22
        </p>
      </div>
    </div>
  );
}
