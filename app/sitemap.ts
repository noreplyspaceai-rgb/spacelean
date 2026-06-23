import { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog-data";
import { getAllSolutionSlugs } from "@/lib/solutions-data";
import { getAllCoreFeatureSlugs } from "@/components/space-lean-core/data";
import { getAllComparisonSlugs } from "@/lib/compare-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacelean.ai";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/space-lean-core`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tool`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/request-a-demo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Blog pages
  const blogSlugs = getAllBlogSlugs();
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Solution pages
  const solutionSlugs = getAllSolutionSlugs();
  const solutionPages = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Core feature pages
  const coreFeatureSlugs = getAllCoreFeatureSlugs();
  const coreFeaturePages = coreFeatureSlugs.map((slug) => ({
    url: `${baseUrl}/space-lean-core/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Comparison pages
  const comparisonSlugs = getAllComparisonSlugs();
  const comparisonPages = comparisonSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...solutionPages,
    ...blogPages,
    ...coreFeaturePages,
    ...comparisonPages,
  ];
}
