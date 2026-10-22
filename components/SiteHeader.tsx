import Link from "next/link";

const NAV_LINKS = [
  { href: "/free", label: "Free" },
  { href: "/for-tiktok", label: "TikTok" },
  { href: "/for-iphone", label: "iPhone" },
  { href: "/for-pc", label: "PC" },
  { href: "/no-watermark", label: "No watermark" },
  { href: "/opencut", label: "OpenCut" },
  { href: "/guides", label: "Guides" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight text-slate-900"
        >
          CapCut
          <span className="text-emerald-600">Alternatives</span>
        </Link>
        <nav
          aria-label="Primary"
          className="min-w-0 flex-1 overflow-x-auto [mask-image:linear-gradient(to_right,black_88%,transparent)] sm:[mask-image:none]"
        >
          <ul className="flex items-center gap-1 whitespace-nowrap text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-2.5 py-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
