import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "CapCut Ultra vs Pro: What's Actually Different (2026)",
  description:
    "Ultra is $79/mo, Pro is $19.99. Same editor and templates — the gap is 8,645 AI credits versus 1,200. Compare cost per credit and pick.",
  path: "/capcut-ultra-vs-pro",
});

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between CapCut Pro and Ultra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The editor, premium templates, watermark-free export, and 4K are the same on both. Ultra adds a larger monthly AI credit allowance: 8,645 versus 1,200, with 1 TB of storage on both plans. Ultra costs $79/mo against $19.99/mo for Pro on the US pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ultra cheaper per AI credit than Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at list price. Pro works out to roughly $0.017 per credit ($19.99 for 1,200) and Ultra to roughly $0.009 per credit ($79 for 8,645). Ultra is about 45% cheaper per credit, but you have to use the credits for that to matter.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start on Pro and upgrade to Ultra later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both are monthly subscriptions on CapCut's pricing page, so you can move up in a month when your credit use grows. Check the current terms at checkout, since promotions and regional prices differ.",
      },
    },
  ],
};

const ROWS: [string, string, string][] = [
  ["Price (US, monthly)", "US$19.99", "US$79"],
  ["Monthly AI credits", "1,200", "8,645"],
  ["Cost per credit (list)", "≈ $0.017", "≈ $0.009"],
  ["Storage", "1 TB", "1 TB"],
  ["Premium templates", "Included", "Included"],
  ["Watermark-free export", "Included", "Included"],
  ["4K / 60fps", "Included", "Included"],
  ["Credit top-ups", "Available", "Available"],
];

export default function VsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <JsonLd data={FAQ} />

      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Comparison · CapCut plans
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          CapCut Ultra vs Pro: what is actually different?
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          One thing: the monthly AI credit allowance. The editor, the templates,
          the watermark-free export, and 4K are identical. Ultra is a capacity
          plan, not a better editor.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <section className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <caption className="sr-only">
            CapCut Pro and Ultra compared by price, credits, and features
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <th scope="col" className="px-4 py-3 font-semibold">Item</th>
              <th scope="col" className="px-4 py-3 font-semibold">Pro</th>
              <th scope="col" className="px-4 py-3 font-semibold">Ultra</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ROWS.map(([item, pro, ultra]) => (
              <tr key={item}>
                <th scope="row" className="px-4 py-3 font-medium text-slate-700">{item}</th>
                <td className="px-4 py-3 text-slate-600">{pro}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{ultra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="mt-3 text-xs text-slate-500">
        Source: CapCut US pricing page, checked 2026-10-22. Cost per credit is
        list price divided by the monthly allowance; regional prices differ.
      </p>

      <section className="mt-12 space-y-4 text-sm leading-7 text-slate-600">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          The only real difference: credits per dollar
        </h2>
        <p>
          Pro gives 1,200 credits for $19.99, about $0.017 each. Ultra gives
          8,645 for $79, about $0.009 each — roughly 45% cheaper per credit.
          That is the entire pitch. If you generate AI video or image assets
          regularly, Ultra is the cheaper way to buy the same credits. If you
          edit clips, you are paying $59 more for credits you will not spend.
        </p>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          Pick Pro if…
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>You need watermark-free exports, 4K, and premium templates.</li>
          <li>Your AI use is occasional — a few assets per project.</li>
          <li>You would rather buy a credit top-up in a busy month than pay $59 every month.</li>
        </ul>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          Pick Ultra if…
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>You hit 1,200 credits before the month ends, consistently.</li>
          <li>You produce AI-heavy content daily — B-roll, images, voice.</li>
          <li>You want one predictable line item instead of subscription plus top-ups.</li>
        </ul>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          What about Teams?
        </h2>
        <p>
          Teams is $12.49 per seat per month with 1,200 credits per seat. It is
          cheaper per person than Pro if several people edit, but it does not
          change the credit math — it is Pro capacity, shared.
        </p>

        <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900">
          Still on the free plan?
        </h2>
        <p>
          Neither Pro nor Ultra changes the free tier: standard 1080p exports
          are watermark-free, but Pro assets add a watermark. If the watermark is
          your issue, the fix is Pro (or another editor), not Ultra. See{" "}
          <Link
            href="/guides/capcut-free-limits"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            CapCut&apos;s free plan limits
          </Link>{" "}
          or the{" "}
          <Link
            href="/capcut-ultra-worth-it"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            full Ultra verdict
          </Link>
          .
        </p>
      </section>

      <RelatedLinks
        links={[
          { href: "/capcut-ultra-worth-it", label: "Is Ultra worth $79/mo?" },
          { href: "/guides/capcut-free-limits", label: "CapCut free plan limits" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/", label: "Compare all alternatives" },
        ]}
      />
    </div>
  );
}
