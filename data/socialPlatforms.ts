export type PlatformStatus = "Registered" | "Coming Soon" | "Planned";

export type PlatformCategory =
  | "Social Networks"
  | "Developer Communities"
  | "Design Communities"
  | "Content Platforms";

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
    url: "https://www.instagram.com/spacelean._/",
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
    id: "medium",
    name: "Medium",
    category: "Content Platforms",
    description:
      "In-depth articles from the SpaceLean team on AI, construction technology, and the future of lean project management.",
    status: "Coming Soon",
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
];

export const getPlatformsByCategory = (category: PlatformCategory): SocialPlatform[] =>
  socialPlatforms.filter((p) => p.category === category);

export const getRegisteredPlatforms = (): SocialPlatform[] =>
  socialPlatforms.filter((p) => p.status === "Registered");
