import Link from "next/link";

import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "Apps Like CapCut: 11 Similar Editors Compared (2026)",
  description:
    "Eleven apps like CapCut compared by watermark, platform, and free-tier limits. See which replacement fits your phone, desktop, or browser workflow.",
  path: "/apps-like-capcut",
});

export default function AppsLikeCapCutPage() {
  const topPick = getTool("clipchamp");
  const candidates = getToolsBySlugs(["canva", "kapwing", "opencut", "filmora"]);

  if (!topPick) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Similar editors · 11 alternatives
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Apps like CapCut, ranked by what you actually need
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          &ldquo;Apps like CapCut&rdquo; lists usually stop at a logo wall. The
          real question is narrower: do you need a free export without a
          watermark, a phone-first app, or a real timeline? Start with the
          trade-off, then pick the tool.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="The closest free replacement for basic CapCut edits: browser or Windows app, 1080p exports, and no watermark on the free tier. If your workflow is trim, add text and music, then export, Clipchamp covers the job without a subscription."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          The other four worth considering
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Each of these is a different answer to &ldquo;I want CapCut without
          CapCut.&rdquo; The badge shows the free-tier watermark situation at a
          glance; the details below it come from the official page linked on the
          card.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {candidates.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Want the full list?{" "}
          <Link
            href="/#compare"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            Compare all 11 alternatives
          </Link>{" "}
          with free limits, watermark status, and platform support.
        </p>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            How to choose
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Watermark first.</strong> A
              free editor that brands every export is not a replacement for
              free CapCut with free assets.
            </li>
            <li>
              <strong className="text-slate-900">Device second.</strong> Canva
              and Clipchamp cover phones and browsers; Descript and DaVinci
              Resolve are desktop-first.
            </li>
            <li>
              <strong className="text-slate-900">Templates third.</strong> If
              your workflow is CapCut templates rather than a timeline, Canva is
              the closer switch. If it is cuts and captions, Clipchamp is.
            </li>
            <li>
              <strong className="text-slate-900">Export length last.</strong>{" "}
              Free plans differ on maximum project length and resolution. Check
              the limits line before you commit a long project.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            What to watch for
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              Kapwing, VEED, Descript, and InVideo put a watermark on free
              exports. Their paid tiers are reasonable, but they are not direct
              free replacements.
            </li>
            <li>
              OpenCut is genuinely open source and free, but it is early beta.
              Do not move a client project onto it without a test export.
            </li>
            <li>
              CapCut Online is CapCut. It is a useful browser fallback, but the
              same Pro-asset rules apply.
            </li>
            <li>
              &ldquo;Unlimited exports&rdquo; and &ldquo;unlimited
              storage&rdquo; rarely appear together on a free plan. Read both.
            </li>
          </ul>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/for-tiktok", label: "Best alternative for TikTok" },
          { href: "/for-pc", label: "Best alternative for PC" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/guides/remove-capcut-watermark", label: "Remove the CapCut watermark" },
        ]}
      />
    </div>
  );
}
