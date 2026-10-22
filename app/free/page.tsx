import Link from "next/link";

import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "Free CapCut Alternatives: 5 Editors Without a Subscription",
  description:
    "Five CapCut alternatives with usable free tiers. Compare watermarks, export limits, and platforms, plus which free editors still brand your video.",
  path: "/free",
});

export default function FreePage() {
  const topPick = getTool("clipchamp");
  const candidates = getToolsBySlugs([
    "opencut",
    "canva",
    "adobe-express",
    "davinci-resolve",
  ]);

  if (!topPick) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Free tier · no subscription
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Free CapCut alternatives that stay free
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          &ldquo;Free&rdquo; on a pricing page can mean free to start, free with
          a watermark, or free only until you need to export. These five have a
          usable free tier in 2026, and each card states exactly where the free
          tier stops.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="Clipchamp is the most straightforward free replacement: 1080p exports, no watermark, unlimited export count, and a browser or Windows app. It does not need a credit card. The main trade-off is 4K, which requires Microsoft 365."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Four more free tiers, with the catch attached
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          None of these is &ldquo;CapCut Pro for free.&rdquo; They are free
          because they limit something: export quality, templates, storage, or
          maturity. Pick the limitation you can live with.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {candidates.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            What &ldquo;free&rdquo; means here
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">No watermark</strong> means the
              free export is usable without upgrading. Clipchamp and Canva meet
              that bar for standard projects.
            </li>
            <li>
              <strong className="text-slate-900">Open source</strong> means the
              code is free and inspectable. OpenCut is MIT-licensed, but still
              early beta.
            </li>
            <li>
              <strong className="text-slate-900">Free tier</strong> means the
              vendor controls the limits. They can change; the check date on each
              card tells you when we last looked.
            </li>
            <li>
              <strong className="text-slate-900">Free trial</strong> is not a
              free plan. We do not count 7- or 30-day trials as alternatives.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Free editors that still watermark
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Kapwing, VEED, Descript, and InVideo all put a watermark on
            free-plan exports. That does not make them bad tools; it makes them
            paid tools with a trial. If a clean export is the requirement, skip
            them.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            CapCut itself is still free for basic 1080p edits with free assets.
            The trap is a single Pro template or effect, which forces a
            subscription for a clean export. Our{" "}
            <Link
              href="/guides/capcut-free-limits"
              className="font-medium text-emerald-700 underline underline-offset-2"
            >
              free-plan breakdown
            </Link>{" "}
            covers the exact triggers.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/no-watermark", label: "CapCut alternatives with no watermark" },
          { href: "/for-pc", label: "Free editors for PC" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
          { href: "/opencut", label: "OpenCut: the open-source option" },
          { href: "/guides/capcut-free-limits", label: "What CapCut's free plan includes" },
        ]}
      />
    </div>
  );
}
