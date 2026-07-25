import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  transpilePackages: ["country-flag-icons"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blogs/managing-multiple-projects-sanity",
        destination: "/blogs/manage-multiple-projects",
        permanent: true,
      },
      {
        source: "/blogs/delegation-mastery-leaders",
        destination: "/blogs/delegation-guide-leaders",
        permanent: true,
      },
      {
        source: "/blogs/feedback-culture-teams-guide",
        destination: "/blogs/team-communication-async-sync",
        permanent: true,
      },
      {
        source: "/blogs/spacelean-vs-notion-ai-task-management-comparison",
        destination: "/blogs/spacelean-vs-notion-intelligent-workspace",
        permanent: true,
      },
      {
        source: "/auth/register",
        destination: "/request-a-demo",
        permanent: true,
      },
      {
        source: "/blogs/kanban-guide-project-teams",
        destination: "/blogs/kanban-board-best-practices-teams",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'ir.ozone.ru',
      },
       {
        protocol: 'https',
        hostname: 'julienflorkin.com',
      },
    ],
  },
};

export default nextConfig;
