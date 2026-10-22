import Link from "next/link";

export function AffiliateDisclosure() {
  return (
    <div className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <p className="text-xs leading-5 text-slate-500">
          <strong className="font-semibold text-slate-700">
            Affiliate disclosure:
          </strong>{" "}
          some outbound links on this site may be affiliate links. If you buy
          through them, we may earn a commission at no extra cost to you.
          Picks are based on official pricing and limit pages, not on
          commission rates.{" "}
          <Link
            href="/disclosure"
            className="underline underline-offset-2 hover:text-slate-700"
          >
            How we make money
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
