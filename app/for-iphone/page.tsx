import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "CapCut Alternative for iPhone: 5 Free Video Editors",
  description:
    "CapCut alternatives for iPhone with native apps, 9:16 templates, and free exports. Compare watermarks, limits, and the best pick for mobile editing.",
  path: "/for-iphone",
});

export default function ForIPhonePage() {
  const topPick = getTool("canva");
  const candidates = getToolsBySlugs([
    "adobe-express",
    "descript",
    "filmora",
    "opencut",
  ]);

  if (!topPick) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Mobile editing · iOS
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The best CapCut alternative for iPhone
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          On iPhone, the replacement has to do three things well: shoot-and-edit
          quickly, produce a clean 9:16 export, and survive a small screen. A
          desktop-class editor that technically runs in Safari is not an answer.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="Canva has a native iPhone app, 9:16 templates, and standard free exports without a watermark. It is the least disruptive replacement for CapCut's template-first mobile workflow, and the same account works on desktop when you need a bigger canvas."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Four other mobile options
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          These cover different jobs: Adobe Express for branded social assets,
          Descript for talking-head video, Filmora for a CapCut-like timeline,
          and OpenCut if you want to test an early open-source mobile build.
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
            How to choose on iPhone
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Native app beats mobile
              web.</strong> Importing from Photos, scrubbing, and exporting are
              all smoother in an app.
            </li>
            <li>
              <strong className="text-slate-900">Check the watermark.</strong>{" "}
              Descript&apos;s free exports are watermarked. Canva and CapCut
              standard free exports are not.
            </li>
            <li>
              <strong className="text-slate-900">Watch runtime.</strong> Long
              4K clips on a phone can make any editor feel broken. Transcode or
              trim before importing.
            </li>
            <li>
              <strong className="text-slate-900">Offline matters.</strong>{" "}
              Canva lists Canva Offline as a paid feature, so do not plan a
              flight edit on the free plan.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Where CapCut still wins on iPhone
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            CapCut&apos;s mobile app is still faster for one specific job:
            applying a current template to fresh clips. If that is your entire
            workflow, the alternatives will feel like a step back unless you
            rebuild the template once in Canva.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            If your videos are mostly your own footage, cuts, captions, and
            music, the switch is easy. CapCut&apos;s free mobile limit is around
            15 minutes in some regions, which is rarely a constraint for short
            vertical video.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/for-tiktok", label: "Best alternative for TikTok" },
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
          { href: "/guides/transfer-capcut-projects", label: "Move CapCut projects between devices" },
        ]}
      />
    </div>
  );
}
