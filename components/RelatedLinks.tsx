import Link from "next/link";

export function RelatedLinks({
  links,
  title = "Keep reading",
}: {
  links: { href: string; label: string }[];
  title?: string;
}) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
