import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "How We Make Money and Choose Tools",
  description:
    "How CapCut Alternatives funds itself, how affiliate links work, and the rules we use for pricing, watermark, and free-tier data.",
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Disclosure
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How we make money and choose tools
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          This site is independent. It has no login, no subscription, and no
          sponsored rankings. The goal is to fund the writing through affiliate
          commissions without letting commissions decide the recommendations.
        </p>
      </header>

      <section className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Affiliate links
          </h2>
          <p className="mt-2">
            Some outbound links may be affiliate links. If you sign up or buy
            through one, the vendor may pay us a commission. The price you pay
            is the same. Every page with outbound links shows an affiliate
            disclosure at the bottom.
          </p>
          <p className="mt-2">
            We have not been approved by every affiliate program yet. When a link
            is not an affiliate link, it goes to the vendor&apos;s official page
            with UTM parameters so we can still tell which pages generate
            interest.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            How picks are made
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              Recommendations are based on free-tier limits, watermark policy,
              platform support, and the workflow the page is about.
            </li>
            <li>
              Commission rates are not part of the ranking. A tool with no
              affiliate program can be the top pick.
            </li>
            <li>
              We do not claim hands-on testing unless it happened. The site is
              built from official vendor documentation.
            </li>
            <li>
              When an official page does not state a fact, we write
              &ldquo;unconfirmed&rdquo; instead of filling the gap with a guess.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Sources and dates
          </h2>
          <p className="mt-2">
            Every tool card shows a source link and the date the source was
            checked. Prices and free-tier limits change; verify the linked
            official page before you buy. If you spot a fact that has changed,
            the source link is the fastest way to confirm it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            No fabricated reviews
          </h2>
          <p className="mt-2">
            You will not find star ratings, invented user quotes, or
            &ldquo;we tested 10 editors&rdquo; claims here. The value is a
            clear, sourced decision, not a fake review score.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/", label: "Compare 11 CapCut alternatives" },
          { href: "/free", label: "Free alternatives" },
          { href: "/no-watermark", label: "No-watermark alternatives" },
          { href: "/guides/capcut-free-limits", label: "What CapCut's free plan includes" },
        ]}
      />

      <div className="mt-8">
        <LastUpdated />
      </div>
    </div>
  );
}
