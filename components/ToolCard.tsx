import { hostname, watermarkBadge } from "@/lib/display";
import { formatDate } from "@/lib/site";
import {
  formatPlatform,
  type Tool,
} from "@/lib/tool-types";

export function ToolCard({ tool }: { tool: Tool }) {
  const badge = watermarkBadge(tool.watermark);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {tool.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      <p className="mt-1 text-sm text-slate-600">{tool.bestFor}</p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-slate-900">Price</dt>
          <dd className="mt-0.5 text-slate-600">{tool.price}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Watermark</dt>
          <dd className="mt-0.5 text-slate-600">{tool.watermark}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Free-tier limits</dt>
          <dd className="mt-0.5 text-slate-600">{tool.limits}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Platforms</dt>
          <dd className="mt-0.5 text-slate-600">
            {tool.platforms.map(formatPlatform).join(" · ")}
          </dd>
        </div>
        {tool.notFor ? (
          <div>
            <dt className="font-semibold text-slate-900">Skip it if</dt>
            <dd className="mt-0.5 text-slate-600">{tool.notFor}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
        <a
          href={`/go/${tool.slug}`}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          Visit {tool.name} →
        </a>
        <a
          href={tool.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-slate-800"
        >
          Source: {hostname(tool.sourceUrl)} ↗
        </a>
      </div>
      <p className="mt-3 text-[11px] text-slate-400">
        Checked {formatDate(tool.checkedAt)}
      </p>
    </article>
  );
}
