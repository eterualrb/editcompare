import fs from "node:fs/promises";
import path from "node:path";

import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { GUIDES, getGuide } from "@/lib/guides";
import { formatDate, pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return pageMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const source = await fs.readFile(
    path.join(process.cwd(), "content", "pages", `${slug}.mdx`),
    "utf8",
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <JsonLd data={faqJsonLd} />

      <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-800">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/guides" className="hover:text-slate-800">
          Guides
        </Link>{" "}
        / <span className="text-slate-700">{guide.h1}</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {guide.h1}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {guide.description}
        </p>
        <p className="mt-3 text-xs text-slate-500">
          Updated{" "}
          <time dateTime={guide.updated} className="font-medium text-slate-600">
            {formatDate(guide.updated)}
          </time>
          . Based on CapCut&apos;s official help and pricing pages.
        </p>
      </header>

      <article className="guide-content mt-8">
        <MDXRemote source={source} />
      </article>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <dl className="mt-4 space-y-5">
          {guide.faqs.map((faq) => (
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

      <RelatedLinks links={guide.related} />

      <div className="mt-8">
        <LastUpdated date={guide.updated} />
      </div>
    </div>
  );
}
