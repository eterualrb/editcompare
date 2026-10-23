import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Is CapCut Ultra Worth $79/Month? Pro vs Ultra (2026)",
  description:
    "CapCut Ultra costs $79/mo but has the same editor and templates as Pro. What the extra $59 buys, and when Pro at $19.99 is already enough.",
  path: "/capcut-ultra-worth-it",
});

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CapCut Ultra include editing features that Pro does not?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. CapCut's US pricing page lists the same editor, the same premium templates, and the same Pro features on both plans. The difference is the monthly AI credit allowance: 8,645 on Ultra versus 1,200 on Pro. Storage is 1 TB on both.",
      },
    },
    {
      "@type": "Question",
      name: "Is CapCut Ultra worth $79 a month for occasional AI video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. Pro already unlocks watermark-free exports and 4K, and the pricing page lists credit top-ups on Pro, so you can add capacity in the months you need it instead of paying $59 more every month. Ultra makes sense only if you burn through credits consistently.",
      },
    },
    {
      "@type": "Question",
      name: "How many AI credits do CapCut Pro and Ultra include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On the US pricing page checked October 22, 2026: Pro includes 1,200 monthly AI credits, Ultra includes 8,645, and Teams includes 1,200 per seat. Ultra costs roughly four times Pro for roughly seven times the credits.",
      },
    },
  ],
};

export default function CapcutUltraPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <JsonLd data={FAQ} />

      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Pricing · CapCut Ultra
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Is CapCut Ultra worth $79 a month?
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          For most editors, no. Ultra is the same CapCut as Pro, with a larger
          monthly AI credit allowance. If you edit video rather than generate it,
          the extra $59 buys nothing you will use.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Short answer</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
          <li>
            <strong>Editing:</strong> Pro already removes the watermark, unlocks
            4K and 60fps, and includes every premium template.
          </li>
          <li>
            <strong>What Ultra adds:</strong> 8,645 monthly AI credits instead of
            1,200. Storage stays at 1 TB.
          </li>
          <li>
            <strong>Who it fits:</strong> people generating AI video or image
            assets every day, not people cutting clips.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Pro vs Ultra, line by line
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="sr-only">
              CapCut Pro and Ultra compared by price, AI credits, storage, and
              editing features
            </caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th scope="col" className="px-4 py-3 font-semibold">Item</th>
                <th scope="col" className="px-4 py-3 font-semibold">Pro</th>
                <th scope="col" className="px-4 py-3 font-semibold">Ultra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Price (US, monthly)", "US$19.99/mo", "US$79/mo"],
                ["Monthly AI credits", "1,200", "8,645"],
                ["Storage", "1 TB", "1 TB"],
                ["Premium templates", "Included", "Included"],
                ["Watermark-free export", "Included", "Included"],
                ["4K / 60fps", "Included", "Included"],
                ["Credit top-ups", "Available", "Available"],
              ].map(([item, pro, ultra]) => (
                <tr key={item}>
                  <th scope="row" className="px-4 py-3 font-medium text-slate-700">
                    {item}
                  </th>
                  <td className="px-4 py-3 text-slate-600">{pro}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{ultra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Source: CapCut&apos;s US pricing page, checked 2026-10-22. Prices vary
          by region and promotions.
        </p>
      </section>

      <section className="mt-12 space-y-4 text-sm leading-7 text-slate-600">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          When Ultra is the right plan
        </h2>
        <p>
          Ultra is a capacity plan. It makes sense if you hit the 1,200-credit
          ceiling before the month ends — for example, generating AI B-roll or
          images for client videos, or running a channel that publishes daily
          AI-assisted content.
        </p>
        <p>
          It is also the simpler choice for a team that would otherwise manage
          top-ups: one predictable line item at $79 instead of a subscription
          plus credit purchases.
        </p>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          When Pro is enough
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            You export ordinary 1080p or 4K edits and only occasionally generate
            assets.
          </li>
          <li>
            You need watermark removal and premium templates — Pro already has
            both.
          </li>
          <li>
            Your credit use is spiky: CapCut lists credit top-ups on Pro, so you
            can buy capacity in the months you need it.
          </li>
        </ul>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          The cheaper way to get more credits
        </h2>
        <p>
          If you run out of credits, compare two costs before upgrading: the
          price of a credit top-up versus the $59 monthly difference between Pro
          and Ultra. For occasional spikes, top-ups usually win. Upgrade only
          when you would buy top-ups every month anyway.
        </p>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          If you are on the free plan
        </h2>
        <p>
          Ultra does not change the free plan&apos;s limits — 1080p exports, free
          templates, and a watermark on Pro assets. If the watermark is your
          problem, the fix is Pro (or a different editor), not Ultra. See{" "}
          <Link
            href="/guides/capcut-free-limits"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            what CapCut&apos;s free plan actually includes
          </Link>{" "}
          or compare{" "}
          <Link
            href="/no-watermark"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            editors that export without a watermark
          </Link>
          .
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/guides/capcut-free-limits", label: "What CapCut's plans include" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/for-pc", label: "Alternatives for PC" },
          { href: "/", label: "Compare all alternatives" },
        ]}
      />
    </div>
  );
}
