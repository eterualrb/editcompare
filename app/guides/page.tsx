import Link from "next/link";

import { LastUpdated } from "@/components/LastUpdated";
import { pageMetadata } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

export const metadata = pageMetadata({
  title: "CapCut Migration Guides: Watermarks, Sync, Limits",
  description:
    "Practical guides for leaving CapCut: remove the watermark, move projects between devices, and understand what the free plan actually includes.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Guides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          CapCut migration guides
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Three practical problems: the watermark you did not expect, the
          project that will not open on another device, and the free plan that
          is not as free as it looked. Each guide is based on CapCut&apos;s
          official documentation, with the check date shown.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8 space-y-4">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-300"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-emerald-700">
              {guide.h1} →
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {guide.description}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Updated {guide.updated}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
