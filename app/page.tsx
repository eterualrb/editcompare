import Link from "next/link";

import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { getAlternatives } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "CapCut Alternative: 11 Best Alternatives Compared (2026)",
  description:
    "Compare 11 CapCut alternatives by free limits, watermarks, and platforms. Find the best pick for TikTok, iPhone, PC, or watermark-free exports.",
  path: "/",
});

const SCENES = [
  {
    href: "/free",
    title: "Free alternatives",
    copy: "Editors that stay usable without a subscription, and what each one gives away.",
  },
  {
    href: "/for-tiktok",
    title: "For TikTok",
    copy: "Vertical video, fast captions, and exports that survive a 9:16 crop.",
  },
  {
    href: "/for-iphone",
    title: "For iPhone",
    copy: "Apps that replace the CapCut mobile workflow without a watermark.",
  },
  {
    href: "/for-pc",
    title: "For PC",
    copy: "Windows, macOS, Linux, and browser options for desktop editors.",
  },
  {
    href: "/no-watermark",
    title: "No watermark",
    copy: "Free exports with no logo, and which “free” editors still brand your video.",
  },
  {
    href: "/opencut",
    title: "Open source",
    copy: "OpenCut is MIT-licensed and free. Here is what it can and cannot do yet.",
  },
];

const GUIDE_LINKS = [
  {
    href: "/guides/remove-capcut-watermark",
    title: "Remove the CapCut watermark",
    copy: "Find the Pro asset causing it, delete template outros, and export clean 1080p.",
  },
  {
    href: "/guides/transfer-capcut-projects",
    title: "Move projects between devices",
    copy: "The official cloud-sync flow, plus what to do when a project is local-only.",
  },
  {
    href: "/guides/capcut-free-limits",
    title: "What CapCut's free plan includes",
    copy: "The exact gates: Pro assets, 4K, 60fps, mobile length, and the Pro price.",
  },
];

export default function HomePage() {
  const alternatives = getAlternatives();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CapCut alternatives compared",
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: `${SITE_URL}/#${tool.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd data={itemList} />

      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          CapCut alternatives · official sources only
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The CapCut alternative that fits how you edit
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          CapCut&apos;s free plan still covers basic 1080p edits. The problems
          start with Pro templates, 4K, and 60fps. This page narrows eleven
          alternatives to the one you should try first — by device, watermark,
          and workflow, not by feature count.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#compare"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Compare all {alternatives.length}
          </Link>
          <Link
            href="/no-watermark"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            I need no watermark
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Quick answer
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Most people should start with Clipchamp
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
            It exports 1080p without a watermark on the free tier, works in a
            browser or as a Windows app, and needs only a Microsoft account.
            It is the closest thing to “CapCut, but the free export is clean.”
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- /go is a redirect route; Link prefetch would log a fake click */}
            <a
              href="/go/clipchamp"
              className="rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Visit Clipchamp →
            </a>
            <Link
              href="/free"
              className="rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-medium text-emerald-800 hover:border-emerald-400"
            >
              See the free shortlist
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Still deciding about CapCut?
          </p>
          <h2 className="mt-2 text-xl font-bold">
            The free plan is fine. The top tier is $79/month.
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            CapCut now sells four plans: Free, Pro at US$19.99/mo, Ultra at
            US$79/mo, and Teams from US$12.49 per seat. Ultra buys AI credits
            and storage, not a better editor — the same 4K and Pro assets are
            already unlocked on Pro.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/capcut-ultra-worth-it"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Is Ultra worth $79/mo? →
            </Link>
            <Link
              href="/guides/capcut-free-limits"
              className="text-sm font-medium text-slate-300 hover:text-slate-200"
            >
              What each plan gives you
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Pick by scenario
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Every page gives one first pick with a reason and 3–5 alternatives.
          It is a decision, not a directory.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCENES.map((scene) => (
            <Link
              key={scene.href}
              href={scene.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-300"
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-emerald-700">
                {scene.title} →
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {scene.copy}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="compare" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          CapCut alternatives compared
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Free-tier facts are taken from each vendor&apos;s official pricing or
          help page on the date shown. “Unconfirmed” means the official page did
          not state it; we do not fill gaps with guesses.
        </p>
        <div className="mt-6">
          <ComparisonTable tools={alternatives} />
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why people leave CapCut — and what they actually need
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              The most common complaint is not that CapCut costs money. It is
              that a project suddenly needs Pro because one template, font, or
              effect is Pro-badged. CapCut&apos;s help center confirms that a
              single Pro asset requires a subscription for a clean export.
            </p>
            <p>
              The second is export quality. On desktop, 4K and 60fps are
              Pro-only, so a free account tops out at 1080p. For TikTok and
              Reels that is usually enough; for client work it often is not.
            </p>
            <p>
              The third is trust. CapCut has changed its pricing and free-tier
              limits more than once, and regional pricing varies. If your
              workflow depends on a specific free feature, keep a second editor
              installed.
            </p>
            <p>
              What most people actually need is narrower than a full CapCut
              clone: 9:16 output, captions, a music track, and a clean 1080p
              export. Clipchamp, Canva, and OpenCut cover that without a
              subscription. Editors who need 4K or professional color should go
              to DaVinci Resolve instead of paying for CapCut Pro.
            </p>
          </div>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold text-slate-900">
            How this page is built
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>Prices and limits come from official pages.</li>
            <li>Every tool shows its source and check date.</li>
            <li>No fabricated hands-on testing or star ratings.</li>
            <li>Affiliate links are disclosed, never hidden.</li>
            <li>
              Unverified details are labeled “unconfirmed” instead of guessed.
            </li>
          </ul>
        </aside>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Guides for the migration
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {GUIDE_LINKS.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-300"
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-emerald-700">
                {guide.title} →
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {guide.copy}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <LastUpdated />
      </div>
    </div>
  );
}
