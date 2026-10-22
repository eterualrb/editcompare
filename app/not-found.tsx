import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        That page is not here
      </h1>
      <p className="mt-3 text-slate-600">
        The comparison and the scenario pages are still the fastest way to pick
        an editor.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Compare alternatives
        </Link>
        <Link
          href="/guides"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-400"
        >
          Read the guides
        </Link>
      </div>
    </div>
  );
}
