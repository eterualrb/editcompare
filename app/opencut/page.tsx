import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "OpenCut Review: The Open-Source CapCut Alternative",
  description:
    "OpenCut is a free, MIT-licensed video editor for web, desktop, and mobile. What works today, what is still beta, and when to choose something else.",
  path: "/opencut",
});

const FAQS = [
  {
    question: "Is OpenCut free?",
    answer:
      "Yes. OpenCut's GitHub repository uses the MIT license and the README describes it as a free and open source video editor. There is no subscription listed.",
  },
  {
    question: "Does OpenCut work on mobile and desktop?",
    answer:
      "The README targets web, desktop, and mobile. The project is being rewritten, and the README points users to opencut-classic as the build to use today.",
  },
  {
    question: "Is OpenCut stable enough for client work?",
    answer:
      "Treat it as early beta. The architecture is being rewritten and detailed export limits are not documented. Test a full project end to end before moving paid work onto it.",
  },
  {
    question: "Does OpenCut add a watermark to exports?",
    answer:
      "Unconfirmed. Neither the official site nor the README states export watermark behavior. Check with a test export before relying on it.",
  },
];

export default function OpenCutPage() {
  const opencut = getTool("opencut");
  const alternatives = getToolsBySlugs([
    "clipchamp",
    "davinci-resolve",
    "filmora",
  ]);

  if (!opencut) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "OpenCut: the open-source CapCut alternative, explained",
    description:
      "A source-based review of OpenCut: license, platforms, beta status, and when to choose a different editor.",
    dateModified: opencut.checkedAt,
    mainEntityOfPage: `${SITE_URL}/opencut`,
    publisher: {
      "@type": "Organization",
      name: "CapCut Alternatives",
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <header className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800">
            Home
          </Link>{" "}
          / <span className="text-slate-700">OpenCut</span>
        </nav>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Open-source alternative · MIT
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          OpenCut: the open-source CapCut alternative, explained
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          OpenCut is a free, MIT-licensed video editor for web, desktop, and
          mobile. It is also an early-beta project being rewritten from the
          ground up. This page separates what you can use today from what is
          still a promise.
        </p>
        <div className="mt-4">
          <LastUpdated date={opencut.checkedAt} />
        </div>
      </header>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          What OpenCut is
        </h2>
        <div className="mt-4 grid gap-6 text-sm leading-7 text-slate-600 md:grid-cols-2">
          <div className="space-y-3">
            <p>
              The official site calls OpenCut &ldquo;the open source video
              editor&rdquo; and &ldquo;a simple but powerful video editor that
              gets the job done.&rdquo; The GitHub README describes it as
              &ldquo;a free and open source video editor for web, desktop, and
              mobile.&rdquo;
            </p>
            <p>
              The repository uses the MIT license. That means you can use,
              modify, and self-host it without a subscription. It does not mean
              the product is finished.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              The README says the project is being rewritten and points users to{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                opencut-classic
              </code>{" "}
              as the build to use today. The official site still runs the
              classic build; the rewrite lives at a separate subdomain.
            </p>
            <p>
              Planned rewrite features include an editor API, third-party
              plugins, a Rust core across web and desktop, an MCP server for AI
              agents, headless rendering, and a scripting tab. Those are
              roadmap items, not current guarantees.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Use it today if…
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>You want a free editor with inspectable, MIT-licensed code.</li>
            <li>You are comfortable testing beta software on non-critical videos.</li>
            <li>Privacy or self-hosting matters more than a polished UI.</li>
            <li>You can keep a second editor installed as a fallback.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Wait if…
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            <li>You need documented export limits before committing a project.</li>
            <li>A client deadline depends on the render finishing correctly.</li>
            <li>You need a mature mobile app with predictable behavior.</li>
            <li>You cannot verify the watermark behavior with a test export.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          If OpenCut is not ready for you
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          These are the practical fallbacks: Clipchamp for a clean free export,
          DaVinci Resolve for free professional desktop editing, and CapCut
          Online if you want to stay inside CapCut&apos;s ecosystem.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {alternatives.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          OpenCut FAQ
        </h2>
        <dl className="mt-5 space-y-5">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="text-sm font-semibold text-slate-900">
                {faq.question}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <RelatedLinks
        links={[
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/for-pc", label: "Editors for PC" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
          { href: "/guides/transfer-capcut-projects", label: "Move CapCut projects between devices" },
        ]}
      />
    </div>
  );
}
