import { formatDate } from "@/lib/site";
import { getLastCheckedAt } from "@/lib/tools";

export function LastUpdated({ date }: { date?: string }) {
  const value = date ?? getLastCheckedAt();

  return (
    <p className="text-xs text-slate-500">
      Facts checked{" "}
      <time dateTime={value} className="font-medium text-slate-600">
        {formatDate(value)}
      </time>
      . Every pick links to its official source.
    </p>
  );
}
