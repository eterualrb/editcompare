export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideLink = {
  href: string;
  label: string;
};

export type Guide = {
  slug: string;
  seoTitle: string;
  h1: string;
  description: string;
  updated: string;
  faqs: GuideFaq[];
  related: GuideLink[];
};

export const GUIDES: Guide[] = [
  {
    slug: "remove-capcut-watermark",
    seoTitle: "Remove the CapCut Watermark: Official Fixes That Work",
    h1: "How to remove the CapCut watermark (without sketchy tools)",
    description:
      "CapCut only watermarks free exports in specific cases. Find the Pro asset causing it, delete template outros, and export clean 1080p video.",
    updated: "2026-10-20",
    faqs: [
      {
        question: "Does CapCut watermark all free exports?",
        answer:
          "No. A standard 1080p export from a free account, using only free material, exports without a watermark according to CapCut's export help page. The watermark appears when the project uses Pro content, or on mobile when you decline the Pro prompt for a project that exceeds the free limits.",
      },
      {
        question: "Can I remove the watermark for free?",
        answer:
          "Yes, when the watermark comes from a Pro asset you can replace or delete. Remove Pro templates, effects, fonts, music, stickers, AI-generated elements, and premium transitions, then export again. CapCut does not provide a free toggle that removes the watermark while Pro material stays in the project.",
      },
      {
        question: "Why does my CapCut template have a logo at the end?",
        answer:
          "Some templates include a CapCut-branded ending clip. Scroll to the end of the timeline, select that clip, and delete it before exporting. That outro is separate from a Pro-asset watermark.",
      },
      {
        question: "Are third-party CapCut watermark removers safe?",
        answer:
          "We do not recommend them. They often require installing unknown software, and stripping a watermark can violate the platform's terms or the rights of the template creator. Removing the Pro asset or switching editors is safer and more durable.",
      },
    ],
    related: [
      { href: "/no-watermark", label: "CapCut alternatives with no watermark" },
      { href: "/free", label: "Free CapCut alternatives" },
      { href: "/guides/capcut-free-limits", label: "What CapCut's free plan includes" },
      { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
    ],
  },
  {
    slug: "transfer-capcut-projects",
    seoTitle: "Move CapCut Projects to Another Device (Official Sync)",
    h1: "How to move CapCut projects between devices",
    description:
      "CapCut projects sync through your account, not a file transfer. Learn the official cloud-sync flow, find local-only projects, and fix failed syncs.",
    updated: "2026-10-20",
    faqs: [
      {
        question: "Can I transfer a CapCut project to another editor?",
        answer:
          "Not as a native project file. CapCut does not advertise a project interchange format for other editors. Export the finished MP4 for delivery, or export the source clips and rebuild the timeline in the new editor.",
      },
      {
        question: "Why is my CapCut project missing on desktop?",
        answer:
          "The project may be local-only. If you created it without signing in, check Local Projects in the PC app. On desktop you can toggle between Cloud and Local views in the projects library.",
      },
      {
        question: "Does a different login method lose my CapCut projects?",
        answer:
          "It can. CapCut's help center notes that different sign-in methods can create separate accounts even when the email looks the same. Use the same login method you originally used.",
      },
      {
        question: "How many devices can use one CapCut subscription?",
        answer:
          "CapCut's help center says a subscription can be used on up to five devices simultaneously. Feature availability can still differ between mobile, desktop, and web.",
      },
    ],
    related: [
      { href: "/for-pc", label: "CapCut alternatives for PC" },
      { href: "/free", label: "Free CapCut alternatives" },
      { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
      { href: "/guides/capcut-free-limits", label: "What CapCut's free plan includes" },
    ],
  },
  {
    slug: "capcut-free-limits",
    seoTitle: "CapCut Free Plan Limits: What You Get in 2026",
    h1: "What CapCut's free plan actually includes",
    description:
      "CapCut is still free for basic 1080p edits, but Pro assets, 4K, 60fps, and some mobile exports are gated. Here are the limits, with sources.",
    updated: "2026-10-20",
    faqs: [
      {
        question: "Is CapCut still free?",
        answer:
          "Yes. CapCut's pricing page lists a $0 free plan with basic editing tools and free templates. Pro features sit on top of that.",
      },
      {
        question: "Does CapCut's free plan add a watermark?",
        answer:
          "Only in specific cases. Standard 1080p exports that use free material are watermark-free. Pro-badged templates, effects, fonts, music, stickers, AI tools, and premium transitions trigger a watermark unless you subscribe.",
      },
      {
        question: "Can I export 4K for free on CapCut?",
        answer:
          "No. On desktop, 4K and 60fps exports are locked behind Pro. Free exports go up to 1080p.",
      },
      {
        question: "How much does CapCut Pro cost?",
        answer:
          "On the US pricing page checked October 20, 2026: $19.99 per month or $179.99 per year, including 1,200 monthly AI credits and 1 TB of storage.",
      },
      {
        question: "What is the free mobile length limit?",
        answer:
          "CapCut's export help page says the free limit varies by region and is around 15 minutes.",
      },
    ],
    related: [
      { href: "/free", label: "Free CapCut alternatives" },
      { href: "/no-watermark", label: "CapCut alternatives with no watermark" },
      { href: "/guides/remove-capcut-watermark", label: "How to remove the CapCut watermark" },
      { href: "/apps-like-capcut", label: "Apps like CapCut compared" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
