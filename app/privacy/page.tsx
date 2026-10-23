import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What data EditCompare collects, what it does not collect, and how analytics and affiliate links work on this site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        Privacy
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Privacy policy
      </h1>

      <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
        <p>
          This site does not have accounts, logins, comment forms, or newsletters.
          You can read every page without giving any personal information.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Analytics
        </h2>
        <p>
          Traffic is measured with Cloudflare Web Analytics, which reports
          aggregate page views and referrers without setting cookies and without
          building a profile of individual visitors.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Affiliate links
        </h2>
        <p>
          Some outbound links are affiliate links. When you click one, this site
          redirects you to the vendor through an internal <code>/go/</code> path,
          and the vendor may set a cookie on its own site to attribute the
          referral. Those cookies are controlled by the vendor, not by this site.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Server logs
        </h2>
        <p>
          Like any website, the hosting provider records standard request data
          (IP address, user agent, requested URL) for security and operations.
          This site does not combine those logs with any other data.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Email
        </h2>
        <p>
          If you email{" "}
          <a
            href="mailto:hello@editcompare.com"
            className="font-medium text-emerald-700 underline underline-offset-2"
          >
            hello@editcompare.com
          </a>
          , your message is used only to answer you and to fix the page you
          wrote about. It is not added to a mailing list.
        </p>

        <h2 className="pt-4 text-lg font-semibold text-slate-900">
          Third-party sites
        </h2>
        <p>
          Every tool linked from this site has its own privacy policy. Once you
          leave this site, the destination&apos;s terms apply.
        </p>

        <p className="pt-4 text-xs text-slate-500">
          Last updated: 2026-10-22
        </p>
      </div>
    </div>
  );
}
