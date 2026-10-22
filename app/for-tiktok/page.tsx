import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "CapCut Alternative for TikTok: Best Vertical Editors",
  description:
    "The best CapCut alternatives for TikTok, compared by vertical export, captions, watermark, and free-tier limits. Pick the right editor for 9:16 video.",
  path: "/for-tiktok",
});

export default function ForTikTokPage() {
  const topPick = getTool("canva");
  const candidates = getToolsBySlugs([
    "clipchamp",
    "kapwing",
    "veed",
    "opus-clip",
  ]);

  if (!topPick) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Vertical video · 9:16
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The best CapCut alternative for TikTok
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          TikTok punishes a watermarked export twice: it looks unprofessional
          and it sends viewers to another app. The right replacement is the one
          that exports 1080p vertical video cleanly on the free tier, not the
          one with the biggest template library.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="Canva's free plan is built around 9:16 templates, text animation, and a native mobile app, and standard free exports do not carry a watermark. If your TikToks are template-led rather than frame-accurate, start here."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          If you need a timeline instead of templates
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Clipchamp is the free timeline option with clean 1080p exports.
          Kapwing and VEED are strong caption editors, but their free exports
          carry a watermark. OpusClip is the automatic option for long
          footage you want to cut into shorts.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {candidates.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            How to choose for TikTok
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Start with watermark.</strong>{" "}
              A free export with a logo is not usable for a brand account.
            </li>
            <li>
              <strong className="text-slate-900">Then decide template vs
              timeline.</strong> Canva wins template-led edits; Clipchamp wins
              cut-and-caption edits.
            </li>
            <li>
              <strong className="text-slate-900">Check caption language.</strong>{" "}
              If you publish in several languages, VEED&apos;s translation is
              the feature you are paying for.
            </li>
            <li>
              <strong className="text-slate-900">Keep the loop short.</strong>{" "}
              The editor that exports in two clicks will beat a better editor
              that adds three steps to every post.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            The CapCut template trap
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            CapCut Online is a real option on a phone or Chromebook, but using a
            Pro-badged template, effect, font, music track, or sticker forces a
            subscription for a clean export. At 1080p too. If your saved
            templates are Pro, the browser fallback does not solve the problem.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A cleaner workflow is to rebuild the template once in Canva or
            Clipchamp, then reuse your own layout for every post. It takes one
            extra setup session and removes the subscription decision from every
            upload.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/for-iphone", label: "Best alternative for iPhone" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
          { href: "/guides/remove-capcut-watermark", label: "Remove the CapCut watermark" },
        ]}
      />
    </div>
  );
}
