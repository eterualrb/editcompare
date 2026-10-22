import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "CapCut Alternatives With No Watermark (Free Options)",
  description:
    "Free CapCut alternatives that export without a watermark. Compare Clipchamp, Canva, DaVinci Resolve, and others, plus free plans that still brand video.",
  path: "/no-watermark",
});

export default function NoWatermarkPage() {
  const topPick = getTool("clipchamp");
  const candidates = getToolsBySlugs([
    "canva",
    "davinci-resolve",
    "opencut",
  ]);
  const watermarked = getToolsBySlugs(["kapwing", "veed", "descript", "invideo", "filmora"]);

  if (!topPick) return null;

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does CapCut watermark every free export?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A 1080p export from a free account using only free material exports without a watermark according to CapCut's export help page. The logo appears when the project uses any Pro asset, or on mobile when you decline the Pro prompt for a project that exceeds the free limits.",
        },
      },
      {
        "@type": "Question",
        name: "Which free editors export 1080p without a watermark?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clipchamp includes watermark-free 1080p exports on its free plan, Canva does not watermark standard free exports (premium assets still need Pro), DaVinci Resolve is free and does not brand exports, and OpenCut is MIT-licensed and watermark-free. Always confirm on the vendor's current pricing page before relying on it.",
        },
      },
      {
        "@type": "Question",
        name: "Is a free 720p export better than a watermarked 1080p one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually not for social platforms, which re-encode aggressively. A clean 720p file can look softer than a 1080p file with a small corner logo. Check the export settings screen: some editors make the watermark toggle visible but keep the resolution capped on the free tier.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Clean exports · free tier
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          CapCut alternatives with no watermark
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          A watermark makes a free editor unusable for brand accounts. These
          editors export without one on the free tier — and the rest of this
          page lists the popular &ldquo;free&rdquo; editors that do not. No
          guessing: each claim links to the vendor&apos;s official page.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="Clipchamp explicitly includes watermark-free video exports on the free plan, at up to 1080p, with no cap on export count. It is the safest free pick when the logo is the dealbreaker."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Three more clean free exports
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Canva is the template option; DaVinci Resolve is the professional
          desktop option. OpenCut is the open-source option: MIT-licensed and
          watermark-free, but still early compared with the other two.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {candidates.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Popular free plans that still add a watermark
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
          If a clean export is the requirement, these are paid tools with a free
          trial, not free alternatives.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {watermarked.map((tool) => (
            <li
              key={tool.slug}
              className="rounded-xl border border-amber-200 bg-white p-4"
            >
              <p className="text-sm font-semibold text-slate-900">{tool.name}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                {tool.watermark}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <JsonLd data={faq} />
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Three different things people call a watermark
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          The fix depends on which one you have. Removing the wrong one wastes
          an afternoon.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              1 · Export logo
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-900">
              Burned into the picture
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A corner mark added by the free tier at export time. No setting
              removes it while the plan is free; you either upgrade or switch to
              an editor whose free tier exports clean.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              2 · Asset branding
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-900">
              Built into a template or caption style
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The logo is part of the Pro template, animated caption style, or
              sticker. Swap the style for a free one and the mark disappears with
              it — no upgrade needed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              3 · Template outro
            </p>
            <h3 className="mt-2 text-base font-semibold text-slate-900">
              An ending card that ships with the template
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              It is a clip at the end of the timeline, not an overlay. Delete the
              last clip and re-export. This is the cheapest fix and the most
              commonly missed one.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          The 60-second watermark test
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Run this before you commit a project to a new editor, so you find out
          on a five-second clip instead of a finished video.
        </p>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
          <li>
            <strong className="text-slate-900">1.</strong> Create a five-second
            timeline with one free clip and one free transition.
          </li>
          <li>
            <strong className="text-slate-900">2.</strong> Export at 1080p using
            only the free options.
          </li>
          <li>
            <strong className="text-slate-900">3.</strong> Check all four corners
            and the last two seconds — that is where end cards live.
          </li>
          <li>
            <strong className="text-slate-900">4.</strong> Open the file
            properties and confirm the resolution was not silently reduced.
          </li>
        </ol>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            How to verify a “no watermark” claim
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              Look for the exact phrase &ldquo;watermark-free exports&rdquo; on
              the pricing page, not just &ldquo;free.&rdquo;
            </li>
            <li>
              Check whether the free tier caps resolution or duration. A clean
              720p export may be worse than a watermarked 1080p one.
            </li>
            <li>
              Read the export settings screen. Some editors make the
              &ldquo;remove watermark&rdquo; toggle visible but locked.
            </li>
            <li>
              Re-check after any vendor pricing update. Free-tier limits change;
              the check date on each card is the date we last verified.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Removing a CapCut watermark you already have
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            If the logo came from a Pro asset, removing that asset and
            re-exporting is the legitimate fix. If it came from a template
            outro, delete the ending clip. Third-party watermark removers are
            not recommended: they often install unknown software and may violate
            the platform&apos;s terms.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Our{" "}
            <Link
              href="/guides/remove-capcut-watermark"
              className="font-medium text-emerald-700 underline underline-offset-2"
            >
              step-by-step guide
            </Link>{" "}
            covers the official fixes, including the mobile Pro-prompt case.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/for-pc", label: "Editors for PC" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
          { href: "/guides/remove-capcut-watermark", label: "Remove the CapCut watermark" },
          { href: "/opencut", label: "OpenCut: the open-source option" },
        ]}
      />
    </div>
  );
}
