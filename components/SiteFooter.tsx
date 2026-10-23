import Link from "next/link";

const SCENARIO_LINKS = [
  { href: "/apps-like-capcut", label: "Apps like CapCut" },
  { href: "/free", label: "Free alternatives" },
  { href: "/for-tiktok", label: "For TikTok" },
  { href: "/for-iphone", label: "For iPhone" },
  { href: "/for-pc", label: "For PC" },
  { href: "/no-watermark", label: "No watermark" },
];

const COPYRIGHT_YEAR = 2026;

const GUIDE_LINKS = [
  { href: "/guides/remove-capcut-watermark", label: "Remove the watermark" },
  { href: "/guides/transfer-capcut-projects", label: "Transfer projects" },
  { href: "/guides/capcut-free-limits", label: "CapCut free limits" },
  { href: "/opencut", label: "OpenCut review" },
  { href: "/disclosure", label: "Disclosure" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-sm font-bold tracking-tight text-slate-900">
            CapCut<span className="text-emerald-600">Alternatives</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
            A decision site for people leaving CapCut. Prices, watermarks, and
            free-tier limits come from official pages, with the source and
            check date shown on every pick.
          </p>
        </div>
        <nav aria-label="Scenario pages">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            By scenario
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {SCENARIO_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Guides">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Guides
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {GUIDE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-400">
          © {COPYRIGHT_YEAR} CapCut Alternatives. Not affiliated with
          CapCut, ByteDance, or any editor listed on this site.
        </div>
      </div>
    </footer>
  );
}
