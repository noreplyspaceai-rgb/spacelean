export type PlatformStatus = "Registered" | "Coming Soon" | "Planned";

export type PlatformCategory =
  | "Social Networks"
  | "Developer Communities"
  | "Design Communities"
  | "Content Platforms"
  | "Business Directories";

export interface SocialPlatform {
  id: string;
  name: string;
  category: PlatformCategory;
  description: string;
  url?: string;
  status: PlatformStatus;
}

export const PLATFORM_CATEGORIES: PlatformCategory[] = [
  "Social Networks",
  "Developer Communities",
  "Design Communities",
  "Content Platforms",
  "Business Directories",
];

export const socialPlatforms: SocialPlatform[] = [
  // ── Social Networks ──────────────────────────────────────────────────────────
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "Social Networks",
    description:
      "Official SpaceLean profile on LinkedIn — follow us for product updates, hiring news, and construction-tech insights.",
    url: "https://www.linkedin.com/in/space-lean-594724418/",
    status: "Registered",
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "Social Networks",
    description:
      "Follow SpaceLean on Instagram for behind-the-scenes content, team culture, and visual stories from the field.",
    url: "https://www.instagram.com/spacelean1/",
    status: "Registered",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Social Networks",
    description:
      "Direct chat with SpaceLean support and business inquiries on WhatsApp.",
    url: "https://wa.me/6586111900",
    status: "Registered",
  },
  {
    id: "beacons",
    name: "Beacons",
    category: "Social Networks",
    description:
      "Official SpaceLean profile on Beacons — check out our link aggregator for quick access to all our resources.",
    url: "https://beacons.ai/spacelean",
    status: "Registered",
  },

  // ── Developer Communities ─────────────────────────────────────────────────────
  {
    id: "github",
    name: "GitHub",
    category: "Developer Communities",
    description:
      "Explore SpaceLean's repositories, integrations, and developer tools on our official GitHub profile.",
    url: "https://github.com/spacelean",
    status: "Registered",
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    category: "Developer Communities",
    description:
      "SpaceLean on Stack Overflow — community Q&A, developer support, and engagement around our platform and APIs.",
    url: "https://stackoverflow.com/users/32862893/spacelean?tab=profile",
    status: "Registered",
  },
  {
    id: "reddit",
    name: "Reddit",
    category: "Developer Communities",
    description:
      "Join the SpaceLean community on Reddit — discussions, product feedback, and conversations around AI and construction tech.",
    url: "https://www.reddit.com/user/spacelean1/",
    status: "Registered",
  },
  {
    id: "sourceforge",
    name: "SourceForge",
    category: "Developer Communities",
    description:
      "Official SpaceLean profile on SourceForge — access open-source components, development releases, and community discussions.",
    url: "https://sourceforge.net/u/spacelean/profile/",
    status: "Registered",
  },

  // ── Design Communities ────────────────────────────────────────────────────────

  {
    id: "pinterest",
    name: "Pinterest",
    category: "Design Communities",
    description:
      "Discover SpaceLean inspiration boards on Pinterest — construction design, UI patterns, and team culture visuals.",
    url: "https://www.pinterest.com/spacelean1/",
    status: "Registered",
  },

  // ── Content Platforms ─────────────────────────────────────────────────────────
  {
    id: "quora",
    name: "Quora",
    category: "Content Platforms",
    description:
      "SpaceLean on Quora — expert answers and discussions on AI, construction technology, and lean project management.",
    url: "https://www.quora.com/profile/Spacelean",
    status: "Registered",
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "Content Platforms",
    description:
      "Official SpaceLean YouTube channel — watch product tutorials, feature updates, and engineering insights.",
    url: "https://www.youtube.com/@Spacelean-w2g",
    status: "Registered",
  },
  {
    id: "medium",
    name: "Medium",
    category: "Content Platforms",
    description:
      "In-depth articles from the SpaceLean team on AI, construction technology, and the future of lean project management.",
    url: "https://medium.com/@spacelean1",
    status: "Registered",
  },
  {
    id: "hashnode",
    name: "Hashnode",
    category: "Content Platforms",
    description:
      "Official SpaceLean profile on Hashnode — check out our technical blogs, engineering write-ups, and developer guides.",
    url: "https://hashnode.com/@spacelean",
    status: "Registered",
  },
  {
    id: "blogger",
    name: "Blogger",
    category: "Content Platforms",
    description:
      "Follow SpaceLean on Blogger — updates, articles, and discussions about our AI-native lean project management tools.",
    url: "https://www.blogger.com/profile/07386576460648677552",
    status: "Registered",
  },
  {
    id: "substack",
    name: "Substack",
    category: "Content Platforms",
    description:
      "Subscribe to the SpaceLean newsletter on Substack for curated insights on AI, construction, and productivity.",
    url: "https://spacelean.substack.com/",
    status: "Registered",
  },
  {
    id: "microblog",
    name: "Micro.blog",
    category: "Content Platforms",
    description:
      "Follow SpaceLean on Micro.blog for bite-sized updates, micro-posts, and quick thoughts on construction technology.",
    url: "https://spacelean.micro.blog/",
    status: "Registered",
  },

  // ── Business Directories ──────────────────────────────────────────────────────
  {
    id: "crunchbase",
    name: "Crunchbase",
    category: "Business Directories",
    description:
      "Official SpaceLean company profile on Crunchbase — view our corporate info, funding data, and industry classification.",
    url: "https://www.crunchbase.com/organization/spacelean",
    status: "Registered",
  },
];

export const getPlatformsByCategory = (category: PlatformCategory): SocialPlatform[] =>
  socialPlatforms.filter((p) => p.category === category);

export const getRegisteredPlatforms = (): SocialPlatform[] =>
  socialPlatforms.filter((p) => p.status === "Registered");
