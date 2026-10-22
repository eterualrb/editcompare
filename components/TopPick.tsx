import type { Tool } from "@/lib/tool-types";

export function TopPick({ tool, reason }: { tool: Tool; reason: string }) {
  return (
    <section
      aria-labelledby="top-pick-heading"
      className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
        Start here
      </p>
      <h2
        id="top-pick-heading"
        className="mt-2 text-2xl font-bold tracking-tight text-slate-900"
      >
        {tool.name}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">{reason}</p>
      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-900">Price</dt>
          <dd className="mt-1 text-slate-600">{tool.price}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Watermark</dt>
          <dd className="mt-1 text-slate-600">{tool.watermark}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`/go/${tool.slug}`}
          className="rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
        >
          Visit {tool.name} →
        </a>
        <a
          href={tool.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400"
        >
          Official source ↗
        </a>
      </div>
    </section>
  );
}
