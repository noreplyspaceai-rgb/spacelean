export interface Video {
  id: string;
  title: string;
  description: string;
  category: "Product Demo" | "Feature Demo" | "Overview" | "YouTube Short";
  type?: "video" | "short";
}

export const videos: Video[] = [
  {
    id: "B3SUXorTy8g",
    title: "Interactive 3D BIM Viewer",
    description: "Explore and navigate BIM models in a fully interactive 3D environment for improved visualization, collaboration, and project coordination.",
    category: "Feature Demo"
  },
  {
    id: "3uEXt8ma1r0",
    title: "Automatic Schedule Generation",
    description: "See how SpaceLean AI automatically generates intelligent construction schedules in minutes, helping project teams reduce manual planning effort and optimize project execution.",
    category: "Product Demo"
  },
  {
    id: "nWoce9id8kM",
    title: "SpaceLean Product Overview",
    description: "Discover how SpaceLean brings together AI-powered scheduling, BIM, documentation, collaboration, and project management into one intelligent construction platform.",
    category: "Overview"
  },
  {
    id: "XMGtxpQNCUs",
    title: "AI Risk Analysis",
    description: "Discover how SpaceLean AI helps identify, assess, and manage construction project risks with intelligent risk analysis, real-time insights, and proactive decision-making.",
    category: "YouTube Short",
    type: "short"
  }
];
