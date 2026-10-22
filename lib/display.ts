export function watermarkBadge(watermark: string): {
  label: string;
  className: string;
} {
  const normalized = watermark.toLowerCase();

  if (normalized.startsWith("no watermark")) {
    return {
      label: "No watermark",
      className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    };
  }

  if (normalized.includes("unconfirmed")) {
    return {
      label: "Unconfirmed",
      className: "bg-slate-100 text-slate-600 ring-slate-200",
    };
  }

  if (normalized.includes("watermark")) {
    return {
      label: "Free tier watermarks",
      className: "bg-amber-50 text-amber-700 ring-amber-200",
    };
  }

  return {
    label: "Check source",
    className: "bg-slate-100 text-slate-600 ring-slate-200",
  };
}

export function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
