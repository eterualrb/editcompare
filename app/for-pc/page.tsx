import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCard } from "@/components/ToolCard";
import { TopPick } from "@/components/TopPick";
import { pageMetadata } from "@/lib/site";
import { getTool, getToolsBySlugs } from "@/lib/tools";

export const metadata = pageMetadata({
  title: "CapCut Alternative for PC: Free Desktop & Web Editors",
  description:
    "CapCut alternatives for PC: free Windows, macOS, Linux, and browser editors compared by export quality, watermark, and learning curve.",
  path: "/for-pc",
});

export default function ForPcPage() {
  const topPick = getTool("clipchamp");
  const candidates = getToolsBySlugs([
    "davinci-resolve",
    "descript",
    "opencut",
    "filmora",
  ]);

  if (!topPick) return null;

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there a free PC editor that exports 4K?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DaVinci Resolve's free version supports up to 4K at 60fps; its Studio license adds higher-end formats. CapCut's free desktop export is capped at 1080p, with 4K and 60fps behind Pro, so Resolve is the free route if 4K is the requirement.",
        },
      },
      {
        "@type": "Question",
        name: "Can I open a CapCut project in another desktop editor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no reliable direct import. Plan to re-edit from the original media, or export a flattened video from CapCut and use that as the source. Budget time for relinking clips and rebuilding captions and effects.",
        },
      },
      {
        "@type": "Question",
        name: "Do browser editors use my GPU for export?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partly. Browsers can accelerate previews, but heavy encoding is usually handled on the vendor's servers. Desktop editors can call hardware encoders such as NVENC, QuickSync, or VideoToolbox directly, which is why long or 4K exports are usually faster locally.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Desktop editing · Windows, macOS, Linux
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          The best CapCut alternative for PC
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          On a computer you have more room to choose: a simple Windows editor, a
          professional color suite, or a browser tab. The right pick depends on
          whether you want CapCut replaced or CapCut outgrown.
        </p>
        <div className="mt-4">
          <LastUpdated />
        </div>
      </header>

      <div className="mt-8">
        <TopPick
          tool={topPick}
          reason="On Windows, Clipchamp is the shortest path: free 1080p exports, no watermark, and no install beyond the Microsoft Store or a browser. It is the direct replacement for CapCut's basic desktop workflow."
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Five desktop options, ranked by ambition
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          DaVinci Resolve is the free upgrade if you want professional color and
          audio. Descript is the talking-head specialist. OpenCut is the
          open-source beta. Filmora is the paid step up with a CapCut-like timeline.
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
            How to choose on desktop
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li>
              <strong className="text-slate-900">Windows, simple edits:</strong>{" "}
              Clipchamp. Free 1080p, no watermark, least friction.
            </li>
            <li>
              <strong className="text-slate-900">macOS, simple edits:</strong>{" "}
              Clipchamp runs in the browser; Canva and Filmora feel closer to a
              native app. Descript if the video is mostly talking.
            </li>
            <li>
              <strong className="text-slate-900">4K or color work:</strong>{" "}
              DaVinci Resolve free. It is a real professional tool with a real
              learning curve.
            </li>
            <li>
              <strong className="text-slate-900">Open source or offline:</strong>{" "}
              OpenCut, with the beta caveat, or Resolve once installed.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            The 4K question
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            CapCut&apos;s free desktop export tops out at 1080p; 4K and 60fps
            are Pro-only. If 4K is the reason you are leaving, do not replace it
            with another 1080p editor. DaVinci Resolve&apos;s free version
            supports up to 4K at 60fps, and Studio adds 10-bit and 120fps.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            If you only publish to TikTok, Reels, or YouTube at 1080p, paying for
            4K is unnecessary. Choose the simpler editor and keep the money.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <JsonLd data={faq} />
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          What actually changes when you edit on a desktop
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Most “PC vs browser” comparisons stop at screen size. These are the
          four differences that decide whether a desktop editor is worth the
          install.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Local media, not uploads
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A desktop editor reads footage from your drive. A browser editor
              has to upload it first, so long 4K files are limited by your
              connection and by the vendor&apos;s per-file cap. If your source
              files are measured in gigabytes, that difference shows up on every
              project.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Hardware encoding
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Desktop apps can hand the final encode to your GPU (NVENC,
              QuickSync, or VideoToolbox). Browser editors can preview on your
              machine, but the heavy encode usually runs on their servers. For a
              five-minute 4K export, that is often the difference between
              minutes and coffee breaks.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Projects you keep
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A local project file plus local media still opens when a
              subscription lapses or a service changes its plans. Cloud-first
              editors keep the project on their servers; useful for switching
              devices, less useful as an archive.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">
              The learning curve is the real price
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clipchamp is a direct CapCut replacement: you can edit in minutes.
              DaVinci Resolve is a professional suite, and its node-based color
              page and Fairlight audio page take real time to learn. Choose
              Resolve because you need the ceiling, not because it is free.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Before you switch: three checks
        </h2>
        <ol className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
          <li>
            <strong className="text-slate-900">Can the project move?</strong>{" "}
            Assume no direct CapCut project import. Export a flattened video or
            plan to rebuild from the original clips.
          </li>
          <li>
            <strong className="text-slate-900">How big is one source file?</strong>{" "}
            If a single clip is several gigabytes or longer than ten minutes,
            prefer a desktop editor and skip the upload step entirely.
          </li>
          <li>
            <strong className="text-slate-900">Do you actually need 4K?</strong>{" "}
            TikTok, Reels, and most YouTube uploads are watched at 1080p. Paying
            for 4K or learning Resolve only pays off if the deliverable requires
            it.
          </li>
        </ol>
      </section>

      <RelatedLinks
        links={[
          { href: "/free", label: "Free CapCut alternatives" },
          { href: "/no-watermark", label: "Editors with no watermark" },
          { href: "/opencut", label: "OpenCut: the open-source option" },
          { href: "/for-tiktok", label: "Best alternative for TikTok" },
          { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
        ]}
      />
    </div>
  );
}
