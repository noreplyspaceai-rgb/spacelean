export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: {
    title: string;
    description: string;
    stat?: string;
  }[];
  useCases: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
}

export const solutions: Solution[] = [
  {
    slug: "marketing-teams",
    title: "Space Lean for Marketing Teams",
    tagline: "AI-Powered Marketing Command Center",
    description:
      "Transform your marketing operations with intelligent automation, real-time analytics, and seamless campaign orchestration. Space Lean empowers marketing teams to move faster, optimize smarter, and deliver measurable results at scale.",
    metaDescription:
      "Space Lean for Marketing Teams: AI-powered marketing automation, campaign analytics, and team collaboration. Boost marketing ROI with intelligent workflows and real-time insights.",
    keywords: [
      "marketing automation platform",
      "AI marketing tools",
      "campaign management software",
      "marketing analytics dashboard",
      "marketing team collaboration",
      "content marketing automation",
      "marketing ROI optimization",
      "digital marketing platform",
      "marketing workflow automation",
      "enterprise marketing software",
      "marketing operations platform",
      "marketing performance analytics",
      "multi-channel marketing",
      "marketing attribution software",
      "marketing intelligence platform",
    ],
    heroImage: "/marketing.jpg",
    icon: "📊",
    features: [
      {
        title: "Campaign Orchestration",
        description:
          "Launch and manage multi-channel campaigns from a single dashboard. AI-powered scheduling ensures optimal timing for maximum engagement.",
        icon: "🚀",
      },
      {
        title: "Performance Analytics",
        description:
          "Real-time dashboards with predictive analytics. Track KPIs, measure attribution, and forecast campaign performance with AI-driven insights.",
        icon: "📈",
      },
      {
        title: "Content Optimization",
        description:
          "AI-assisted content creation and A/B testing. Automatically optimize headlines, copy, and creative assets for higher conversion rates.",
        icon: "✍️",
      },
      {
        title: "Audience Intelligence",
        description:
          "Deep audience segmentation with behavioral analytics. Identify high-value segments and personalize messaging at scale.",
        icon: "🎯",
      },
      {
        title: "Brand Asset Management",
        description:
          "Centralized asset library with version control. Ensure brand consistency across all channels and teams.",
        icon: "🎨",
      },
      {
        title: "Marketing Automation",
        description:
          "Intelligent workflow automation for lead nurturing, email sequences, and customer journey mapping.",
        icon: "⚡",
      },
    ],
    benefits: [
      {
        title: "Accelerate Time-to-Market",
        description:
          "Reduce campaign launch time by 60% with streamlined workflows and AI-powered automation.",
        stat: "60%",
      },
      {
        title: "Boost Marketing ROI",
        description:
          "Optimize spend allocation with predictive analytics and real-time performance tracking.",
        stat: "3.2x",
      },
      {
        title: "Enhance Team Productivity",
        description:
          "Eliminate manual tasks and focus on strategic initiatives that drive growth.",
        stat: "40%",
      },
      {
        title: "Improve Campaign Performance",
        description:
          "Data-driven optimization increases engagement and conversion rates across channels.",
        stat: "85%",
      },
    ],
    useCases: [
      "Multi-channel campaign management",
      "Marketing performance reporting",
      "Content calendar planning",
      "Lead generation automation",
      "Customer journey mapping",
      "Brand consistency management",
      "Marketing budget optimization",
      "Competitive intelligence tracking",
    ],
    testimonial: {
      quote:
        "Space Lean transformed how our marketing team operates. We've cut campaign launch time in half while doubling our conversion rates.",
      author: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow Inc.",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Marketing Demo",
    },
  },
  {
    slug: "product-management",
    title: "Space Lean for Product Management",
    tagline: "Build Products Users Love, Faster",
    description:
      "Empower your product team with AI-driven insights, roadmap visualization, and seamless stakeholder collaboration. Space Lean helps product managers prioritize features, track metrics, and deliver value with confidence.",
    metaDescription:
      "Space Lean for Product Management: AI-powered roadmapping, feature prioritization, and user feedback analysis. Make data-driven product decisions faster.",
    keywords: [
      "product management software",
      "product roadmap tool",
      "feature prioritization platform",
      "product analytics dashboard",
      "user feedback management",
      "product team collaboration",
      "agile product management",
      "product strategy software",
      "product lifecycle management",
      "product discovery platform",
      "product metrics tracking",
      "product backlog management",
      "OKR tracking software",
      "product intelligence platform",
      "product development workflow",
    ],
    heroImage: "/productmanagement.jpg",
    icon: "🎯",
    features: [
      {
        title: "AI-Powered Roadmapping",
        description:
          "Create dynamic roadmaps that adapt to changing priorities. AI suggests optimal feature sequencing based on impact and effort.",
        icon: "🗺️",
      },
      {
        title: "Feature Prioritization",
        description:
          "Data-driven prioritization frameworks with RICE scoring, value mapping, and opportunity analysis.",
        icon: "📊",
      },
      {
        title: "User Feedback Intelligence",
        description:
          "Aggregate and analyze feedback from multiple sources. AI categorizes insights and identifies emerging patterns.",
        icon: "💬",
      },
      {
        title: "Stakeholder Alignment",
        description:
          "Keep executives, engineering, and sales aligned with shared dashboards and automated status updates.",
        icon: "🤝",
      },
      {
        title: "Product Analytics",
        description:
          "Track adoption metrics, user behavior, and feature performance in real-time.",
        icon: "📈",
      },
      {
        title: "Release Management",
        description:
          "Coordinate releases across teams with automated changelogs, release notes, and deployment tracking.",
        icon: "🚀",
      },
    ],
    benefits: [
      {
        title: "Faster Time-to-Value",
        description:
          "Reduce feature discovery to delivery cycle by 45% with streamlined workflows.",
        stat: "45%",
      },
      {
        title: "Better Prioritization",
        description:
          "Make confident decisions with AI-powered impact analysis and opportunity scoring.",
        stat: "92%",
      },
      {
        title: "Improved Alignment",
        description:
          "Keep all stakeholders on the same page with real-time visibility into roadmap progress.",
        stat: "78%",
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Replace gut feelings with actionable insights from comprehensive product analytics.",
        stat: "4.5x",
      },
    ],
    useCases: [
      "Product roadmap planning",
      "Feature request management",
      "User research synthesis",
      "Sprint planning integration",
      "Product metrics dashboards",
      "Competitive analysis tracking",
      "Customer journey mapping",
      "Product launch coordination",
    ],
    testimonial: {
      quote:
        "Space Lean gave us the clarity we needed to focus on what matters. Our product velocity has increased while customer satisfaction scores are at an all-time high.",
      author: "Michael Torres",
      role: "Chief Product Officer",
      company: "ScaleUp Systems",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Product Demo",
    },
  },
  {
    slug: "engineering-teams",
    title: "Space Lean for Engineering Teams",
    tagline: "Ship Better Code, Faster",
    description:
      "Supercharge your engineering workflow with intelligent task management, automated code insights, and seamless CI/CD integration. Space Lean helps engineering teams reduce technical debt, improve velocity, and maintain code quality at scale.",
    metaDescription:
      "Space Lean for Engineering Teams: AI-powered project management, code analytics, and developer productivity tools. Accelerate software delivery with intelligent automation.",
    keywords: [
      "engineering project management",
      "developer productivity platform",
      "software development tools",
      "engineering team collaboration",
      "code analytics dashboard",
      "technical debt management",
      "engineering velocity metrics",
      "software delivery automation",
      "agile development platform",
      "DevOps collaboration tools",
      "sprint management software",
      "engineering OKR tracking",
      "developer workflow automation",
      "code quality platform",
      "engineering intelligence software",
    ],
    heroImage: "/engineering.jpg",
    icon: "⚡",
    features: [
      {
        title: "Intelligent Sprint Planning",
        description:
          "AI-powered capacity planning and story point estimation. Optimize sprint loads based on historical velocity.",
        icon: "📋",
      },
      {
        title: "Code Analytics",
        description:
          "Track code health, technical debt, and deployment frequency. Identify bottlenecks before they impact delivery.",
        icon: "💻",
      },
      {
        title: "CI/CD Integration",
        description:
          "Seamless integration with GitHub, GitLab, Jenkins, and more. Track deployments and correlate with project milestones.",
        icon: "🔄",
      },
      {
        title: "Engineering Metrics",
        description:
          "DORA metrics, cycle time analysis, and team velocity dashboards for continuous improvement.",
        icon: "📊",
      },
      {
        title: "Documentation Hub",
        description:
          "AI-assisted technical documentation with auto-generated API docs and knowledge base management.",
        icon: "📚",
      },
      {
        title: "Incident Management",
        description:
          "Integrated incident tracking with post-mortem automation and SLA monitoring.",
        icon: "🚨",
      },
    ],
    benefits: [
      {
        title: "Increase Deployment Frequency",
        description:
          "Ship code more frequently with streamlined workflows and automated pipelines.",
        stat: "3x",
      },
      {
        title: "Reduce Lead Time",
        description:
          "Cut time from commit to production with intelligent automation and bottleneck detection.",
        stat: "55%",
      },
      {
        title: "Improve Code Quality",
        description:
          "Proactive technical debt management and code health monitoring.",
        stat: "40%",
      },
      {
        title: "Boost Developer Experience",
        description:
          "Reduce context switching and administrative overhead for your engineering team.",
        stat: "67%",
      },
    ],
    useCases: [
      "Agile sprint management",
      "Engineering metrics tracking",
      "Technical debt prioritization",
      "Release coordination",
      "On-call scheduling",
      "Code review workflows",
      "Engineering capacity planning",
      "Cross-team dependency management",
    ],
    testimonial: {
      quote:
        "Since adopting Space Lean, our deployment frequency has tripled while our change failure rate dropped significantly. It's transformed how we deliver software.",
      author: "David Kim",
      role: "VP of Engineering",
      company: "CloudNative Labs",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Engineering Demo",
    },
  },
  {
    slug: "design-teams",
    title: "Space Lean for Design Teams",
    tagline: "Design Smarter, Collaborate Better",
    description:
      "Elevate your design workflow with AI-powered asset management, seamless feedback loops, and integrated project tracking. Space Lean helps design teams maintain consistency, streamline reviews, and deliver exceptional user experiences.",
    metaDescription:
      "Space Lean for Design Teams: AI-powered design project management, asset libraries, and collaborative feedback tools. Streamline your creative workflow.",
    keywords: [
      "design project management",
      "design team collaboration",
      "creative workflow software",
      "design asset management",
      "design review platform",
      "UX design tools",
      "design system management",
      "creative project tracking",
      "design feedback software",
      "design operations platform",
      "design handoff tools",
      "brand management software",
      "creative team productivity",
      "design sprint planning",
      "visual collaboration platform",
    ],
    heroImage: "/design.jpg",
    icon: "🎨",
    features: [
      {
        title: "Design System Hub",
        description:
          "Centralized design system management with version control, component libraries, and token management.",
        icon: "🧩",
      },
      {
        title: "Collaborative Feedback",
        description:
          "Contextual comments, annotations, and approval workflows directly on design files.",
        icon: "💬",
      },
      {
        title: "Asset Library",
        description:
          "AI-tagged asset management with smart search, version history, and usage tracking.",
        icon: "📁",
      },
      {
        title: "Design-to-Dev Handoff",
        description:
          "Seamless handoff with auto-generated specs, CSS properties, and responsive breakpoints.",
        icon: "🔗",
      },
      {
        title: "Project Visualization",
        description:
          "Visual project timelines, design sprints, and workload balancing for creative teams.",
        icon: "📅",
      },
      {
        title: "Brand Consistency",
        description:
          "Automated brand compliance checking and style guide enforcement across projects.",
        icon: "✅",
      },
    ],
    benefits: [
      {
        title: "Faster Design Iterations",
        description:
          "Reduce feedback cycles by 50% with streamlined review and approval workflows.",
        stat: "50%",
      },
      {
        title: "Improved Consistency",
        description:
          "Maintain brand and design system consistency across all projects and teams.",
        stat: "95%",
      },
      {
        title: "Seamless Handoffs",
        description:
          "Eliminate back-and-forth with developers through comprehensive design specs.",
        stat: "70%",
      },
      {
        title: "Enhanced Creativity",
        description:
          "Spend more time designing and less time on administrative tasks.",
        stat: "35%",
      },
    ],
    useCases: [
      "Design project management",
      "Creative asset organization",
      "Design review and approval",
      "Design system governance",
      "Brand asset management",
      "Design sprint facilitation",
      "Cross-functional collaboration",
      "Design resource planning",
    ],
    testimonial: {
      quote:
        "Space Lean revolutionized our design operations. We've cut our review cycles in half and our design system adoption has never been higher.",
      author: "Emma Rodriguez",
      role: "Head of Design",
      company: "PixelPerfect Studio",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Design Demo",
    },
  },
  {
    slug: "startups",
    title: "Space Lean for Startups",
    tagline: "Scale Fast Without the Chaos",
    description:
      "Built for speed and scale, Space Lean gives startups the operational foundation they need to grow. From seed to Series C and beyond, our AI-powered platform adapts to your evolving needs while keeping your team aligned and moving fast.",
    metaDescription:
      "Space Lean for Startups: Scalable project management, team collaboration, and growth analytics for fast-moving startup teams. Enterprise features at startup-friendly pricing.",
    keywords: [
      "startup project management",
      "startup collaboration tools",
      "startup growth platform",
      "startup team management",
      "startup productivity software",
      "startup operations platform",
      "startup scaling tools",
      "startup workflow automation",
      "startup OKR software",
      "startup metrics dashboard",
      "early-stage startup tools",
      "startup team alignment",
      "startup agile management",
      "startup resource planning",
      "startup intelligence platform",
    ],
    heroImage: "/startups.jpg",
    icon: "🚀",
    features: [
      {
        title: "Rapid Deployment",
        description:
          "Get up and running in minutes, not weeks. Pre-built templates and workflows designed for startup speed.",
        icon: "⚡",
      },
      {
        title: "Scalable Architecture",
        description:
          "Start small and scale infinitely. Our platform grows with you from 5 to 500+ team members.",
        icon: "📈",
      },
      {
        title: "Investor Reporting",
        description:
          "Auto-generated investor updates, KPI dashboards, and board meeting preparation tools.",
        icon: "📊",
      },
      {
        title: "Cross-Functional Alignment",
        description:
          "Keep engineering, product, sales, and ops aligned with shared goals and transparent progress.",
        icon: "🎯",
      },
      {
        title: "Resource Optimization",
        description:
          "AI-powered resource allocation to maximize output with limited runway.",
        icon: "💰",
      },
      {
        title: "Growth Analytics",
        description:
          "Track key startup metrics: burn rate, runway, growth rate, and team velocity in one dashboard.",
        icon: "🔍",
      },
    ],
    benefits: [
      {
        title: "Move Faster",
        description:
          "Reduce operational overhead so your team can focus on building and shipping.",
        stat: "2x",
      },
      {
        title: "Stay Aligned",
        description:
          "Keep everyone rowing in the same direction with transparent goals and progress.",
        stat: "89%",
      },
      {
        title: "Scale Smoothly",
        description:
          "Avoid growing pains with processes that scale from seed to Series C.",
        stat: "10x",
      },
      {
        title: "Impress Investors",
        description:
          "Professional reporting and metrics that demonstrate operational excellence.",
        stat: "95%",
      },
    ],
    useCases: [
      "OKR and goal tracking",
      "Sprint and iteration planning",
      "Investor update automation",
      "Hiring and onboarding workflows",
      "Customer feedback management",
      "Product-market fit tracking",
      "Runway and burn rate monitoring",
      "Cross-team communication",
    ],
    testimonial: {
      quote:
        "Space Lean helped us scale from 10 to 100 people without losing our startup speed. It's the operational backbone every growing startup needs.",
      author: "Jason Park",
      role: "CEO & Co-founder",
      company: "RapidGrowth AI",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Startup Demo",
    },
  },
  {
    slug: "remote-teams",
    title: "Space Lean for Remote Teams",
    tagline: "Collaborate Like You're in the Same Room",
    description:
      "Purpose-built for distributed teams, Space Lean bridges time zones and eliminates communication gaps. Our AI-powered platform ensures remote teams stay connected, productive, and aligned regardless of where they work.",
    metaDescription:
      "Space Lean for Remote Teams: AI-powered remote collaboration, async communication, and distributed team management. Keep your remote workforce connected and productive.",
    keywords: [
      "remote team management",
      "distributed team collaboration",
      "remote work platform",
      "async communication tools",
      "remote project management",
      "virtual team software",
      "remote team productivity",
      "distributed workforce management",
      "remote team coordination",
      "hybrid work platform",
      "remote team alignment",
      "async work tools",
      "remote team communication",
      "virtual collaboration platform",
      "remote operations software",
    ],
    heroImage: "/remote.jpg",
    icon: "🌍",
    features: [
      {
        title: "Async-First Communication",
        description:
          "Built for asynchronous work with threaded discussions, video messages, and smart notifications that respect time zones.",
        icon: "💬",
      },
      {
        title: "Time Zone Intelligence",
        description:
          "AI-optimized scheduling that finds the best times for collaboration across global teams.",
        icon: "🌐",
      },
      {
        title: "Virtual Stand-ups",
        description:
          "Automated async stand-ups and check-ins that keep everyone informed without meeting fatigue.",
        icon: "📹",
      },
      {
        title: "Documentation Hub",
        description:
          "Centralized knowledge base with AI-powered search so context is always accessible.",
        icon: "📚",
      },
      {
        title: "Team Visibility",
        description:
          "Real-time presence, availability status, and workload visibility across distributed teams.",
        icon: "👀",
      },
      {
        title: "Culture & Connection",
        description:
          "Virtual water coolers, team celebrations, and engagement tools to maintain company culture.",
        icon: "🎉",
      },
    ],
    benefits: [
      {
        title: "Reduce Meeting Overload",
        description:
          "Cut unnecessary meetings by 60% with effective async communication tools.",
        stat: "60%",
      },
      {
        title: "Bridge Time Zones",
        description:
          "Enable seamless collaboration across 24 time zones without anyone working odd hours.",
        stat: "24",
      },
      {
        title: "Boost Engagement",
        description:
          "Keep remote team members connected and engaged with visibility and recognition tools.",
        stat: "75%",
      },
      {
        title: "Maintain Productivity",
        description:
          "Remote teams using Space Lean match or exceed in-office productivity levels.",
        stat: "110%",
      },
    ],
    useCases: [
      "Async project management",
      "Distributed team coordination",
      "Remote onboarding",
      "Cross-timezone scheduling",
      "Virtual team building",
      "Remote performance tracking",
      "Knowledge management",
      "Hybrid work coordination",
    ],
    testimonial: {
      quote:
        "With team members in 15 countries, Space Lean has been a game-changer. We've never felt more connected or aligned as a distributed team.",
      author: "Lisa Andersson",
      role: "Chief People Officer",
      company: "GlobalTech Solutions",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Remote Demo",
    },
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}
