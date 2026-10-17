import { blogPosts } from "@/lib/blog-data";

export async function GET() {
  const baseUrl = "https://spacelean.ai";

  // Sort posts by date descending
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const itemsXml = sortedPosts
    .map((post) => {
      const postUrl = `${baseUrl}/blogs/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author><![CDATA[${post.author}]]></author>
      <category><![CDATA[${post.category}]]></category>
    </item>`;
    })
    .join("\n");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SpaceLean AI Blog — AI-Native Construction 4D Scheduling</title>
    <link>${baseUrl}/blogs</link>
    <description>Latest insights, guides, and updates on AI construction scheduling, 4D BIM, productivity, and lean project management from SpaceLean.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
