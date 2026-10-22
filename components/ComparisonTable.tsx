"use client";

import { useMemo, useState } from "react";

import { watermarkBadge } from "@/lib/display";
import {
  formatPlatform,
  type Platform,
  type Tool,
} from "@/lib/tool-types";

const FILTERS: { key: "all" | Platform; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "windows", label: "Windows" },
  { key: "mac", label: "macOS" },
  { key: "ios", label: "iOS" },
  { key: "android", label: "Android" },
];

export function ComparisonTable({ tools }: { tools: Tool[] }) {
  const [filter, setFilter] = useState<"all" | Platform>("all");

  const visible = useMemo(() => {
    if (filter === "all") return tools;
    return tools.filter((tool) => tool.platforms.includes(filter));
  }, [filter, tools]);

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter tools by platform"
      >
        {FILTERS.map((option) => {
          const active = filter === option.key;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setFilter(option.key)}
              aria-pressed={active}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                active
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {option.label}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-slate-500" aria-live="polite">
          {visible.length} tool{visible.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="relative mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <caption className="sr-only">
            CapCut alternatives compared by free tier, watermark, platforms,
            and best fit
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <th scope="col" className="px-4 py-3 font-semibold">
                Tool
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Free tier
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Watermark
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Platforms
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Best for
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                <span className="sr-only">Go to site</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.map((tool) => {
              const badge = watermarkBadge(tool.watermark);
              return (
                <tr
                  key={tool.slug}
                  id={tool.slug}
                  className="border-b border-slate-100 align-top last:border-0"
                >
                  <th scope="row" className="px-4 py-4 font-semibold text-slate-900">
                    {tool.name}
                  </th>
                  <td className="max-w-[220px] px-4 py-4 text-slate-600">
                    {tool.price}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                    <span className="mt-1 block max-w-[200px] text-xs text-slate-500">
                      {tool.watermark}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-600">
                    {tool.platforms.map(formatPlatform).join(", ")}
                  </td>
                  <td className="max-w-[240px] px-4 py-4 text-slate-600">
                    {tool.bestFor}
                  </td>
                  <td className="px-4 py-4">
                    <a
                      href={`/go/${tool.slug}`}
                      className="whitespace-nowrap rounded-lg bg-emerald-700 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
                    >
                      Visit →
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Table scrolls horizontally on small screens. Filters show tools that
        support a platform; it does not rank them.
      </p>
    </div>
  );
}
