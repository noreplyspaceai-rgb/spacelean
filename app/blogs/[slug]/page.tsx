import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/lib/blog-data";
import { Sparkles, ArrowRight, Clock, ChevronRight } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function extractFaqFromContent(content: string): { question: string; answer: string }[] {
  const faqSectionMatch = content.split(/##\s*Frequently Asked Questions/i);
  if (faqSectionMatch.length < 2) return [];

  const faqSection = faqSectionMatch[1];
  const faqBlocks = faqSection.split(/###\s+/).filter(Boolean);
  return faqBlocks.map((block) => {
    const lines = block.trim().split("\n").filter(Boolean);
    if (!lines.length) return { question: "", answer: "" };
    const question = lines[0].trim();
    const answer = lines.slice(1).join(" ").trim();
    return { question, answer };
  }).filter((faq) => faq.question && faq.answer);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Blog Not Found - SPACE LEAN" };
  }

  return {
    title: `${post.title} | SPACE LEAN Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blogs/${slug}`,
      languages: {
        "en-US": `/blogs/${slug}`,
        "en-GB": `/blogs/${slug}`,
        "en-IN": `/blogs/${slug}`,
        "x-default": `/blogs/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [post.image],
      siteName: "SPACE LEAN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const faqs = extractFaqFromContent(post.content);

  // HowTo schema for step-by-step guide posts
  type HowToStep = { "@type": "HowToStep"; name: string; text: string; position: number };
  type HowToSchema = {
    "@context": string; "@type": "HowTo"; name: string; description: string;
    totalTime?: string; estimatedCost?: { "@type": string; currency: string; value: string };
    step: HowToStep[];
  };
  const howToSchemas: Record<string, HowToSchema> = {
    "agile-methodology-beginners-guide": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Implement Agile Methodology for Your Team",
      description: "A step-by-step guide to adopting Agile methodology, from choosing a framework to running your first sprint.",
      totalTime: "P14D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Choose your Agile framework", text: "Evaluate Scrum, Kanban, or Scrumban based on your team size, workflow, and project type. Scrum suits time-boxed delivery; Kanban suits continuous flow." },
        { "@type": "HowToStep", position: 2, name: "Define your team roles", text: "Assign a Product Owner to manage the backlog, a Scrum Master to facilitate ceremonies, and Development Team members to execute work items." },
        { "@type": "HowToStep", position: 3, name: "Build and prioritize your backlog", text: "Break down project goals into user stories. Estimate story points using planning poker. Prioritize by business value and dependencies." },
        { "@type": "HowToStep", position: 4, name: "Run your first sprint", text: "Plan a 1–2 week sprint. Select backlog items that fit team capacity. Hold daily standups to track progress and surface blockers." },
        { "@type": "HowToStep", position: 5, name: "Review and retrospect", text: "Demo completed work to stakeholders in the Sprint Review. Identify what went well and what to improve in the Sprint Retrospective." },
        { "@type": "HowToStep", position: 6, name: "Iterate and scale", text: "Apply retrospective insights to the next sprint. Gradually introduce Agile scaling frameworks (SAFe, LeSS) as your team grows." },
      ],
    },
    "okr-management-complete-guide": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Set Up and Track OKRs for Your Team",
      description: "A step-by-step guide to implementing OKR management — from writing your first Objectives to scoring results at quarter end.",
      totalTime: "P7D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Define 3–5 company-level Objectives", text: "Write qualitative, inspiring Objectives that reflect your biggest priorities for the quarter. Avoid metrics at this stage — focus on direction and ambition." },
        { "@type": "HowToStep", position: 2, name: "Write 2–4 Key Results per Objective", text: "Make each Key Result measurable and time-bound. Use outcome metrics (not output tasks). Example: 'Increase MRR from $50k to $75k by March 31.'" },
        { "@type": "HowToStep", position: 3, name: "Cascade OKRs to teams and individuals", text: "Each team creates their own OKRs that directly support company Objectives. Individuals align personal OKRs with team goals. Ensure 60–70% bottom-up contribution." },
        { "@type": "HowToStep", position: 4, name: "Set a weekly check-in cadence", text: "Run 15-minute weekly OKR check-ins. Each team updates Key Result progress (% complete), flags blockers, and adjusts confidence scores." },
        { "@type": "HowToStep", position: 5, name: "Score OKRs at quarter end", text: "Score each Key Result from 0.0 to 1.0. A score of 0.6–0.7 is ideal — it signals ambitious but achievable goals. Consistently scoring 1.0 means goals were too easy." },
        { "@type": "HowToStep", position: 6, name: "Run a quarterly OKR retrospective", text: "Celebrate wins, analyze misses, and identify lessons learned. Use insights to improve Objective quality and Key Result measurability for the next cycle." },
      ],
    },
    "sprint-planning-engineering-teams": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Run a Sprint Planning Session for Engineering Teams",
      description: "A step-by-step guide to running effective sprint planning meetings that align engineering capacity with business priorities.",
      totalTime: "PT4H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Groom and prioritize the backlog before the meeting", text: "Product Owner refines the top backlog items 2 days before sprint planning. Each story should have acceptance criteria, story point estimates, and no blocking dependencies." },
        { "@type": "HowToStep", position: 2, name: "Calculate team capacity", text: "Add up available engineering hours: (team size × sprint days × 6 hours) × 0.7 (for overhead). Convert to story points using your team's historical velocity." },
        { "@type": "HowToStep", position: 3, name: "Select sprint goal and backlog items", text: "Define a single Sprint Goal that aligns with current OKRs. Pull backlog items into the sprint until you reach 90% of capacity. Leave buffer for unplanned work." },
        { "@type": "HowToStep", position: 4, name: "Break stories into tasks", text: "Each engineer decomposes their assigned stories into sub-tasks of 2–4 hours each. Identify technical dependencies and sequence work to unblock others first." },
        { "@type": "HowToStep", position: 5, name: "Assign ownership and set Definition of Done", text: "Every task has a single owner. Agree on Definition of Done criteria: code reviewed, tests passing, deployed to staging, acceptance criteria met." },
        { "@type": "HowToStep", position: 6, name: "Kick off the sprint and run daily standups", text: "Update your sprint board daily. Run 15-minute standups: What did I complete? What am I working on today? What is blocking me?" },
      ],
    },
    "kanban-board-best-practices-teams": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Set Up a Kanban Board for Your Team",
      description: "Step-by-step guide to creating and optimizing a Kanban board that improves team flow and reduces bottlenecks.",
      totalTime: "PT2H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Map your team's workflow stages", text: "List every stage a work item passes through from request to done. Common stages: Backlog → In Progress → Review → Testing → Done. Keep it to 5–7 columns." },
        { "@type": "HowToStep", position: 2, name: "Set Work-in-Progress (WIP) limits", text: "Assign a WIP limit to each active column (e.g., In Progress: max 3 items per person). WIP limits expose bottlenecks and force teams to finish before starting new work." },
        { "@type": "HowToStep", position: 3, name: "Create and populate cards", text: "Add a card for each work item. Include title, description, assignee, priority, and due date. Start with your top 10 most urgent items." },
        { "@type": "HowToStep", position: 4, name: "Run daily board reviews", text: "Hold a 10-minute daily standup walking the board right-to-left (from Done back to Backlog). Identify items closest to completion and remove blockers first." },
        { "@type": "HowToStep", position: 5, name: "Measure and improve flow metrics", text: "Track Lead Time (request to delivery), Cycle Time (start to delivery), and Throughput (items completed per week). Use these to identify and eliminate bottlenecks." },
      ],
    },
    "goal-setting-okrs-teams": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Set Team Goals Using OKRs",
      description: "A practical guide to writing effective team OKRs that connect individual work to company strategy.",
      totalTime: "PT3H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Start with company-level strategy", text: "Review company OKRs or annual goals before writing team OKRs. Every team Objective should ladder up to at least one company priority." },
        { "@type": "HowToStep", position: 2, name: "Write 2–3 Objectives for your team", text: "Frame Objectives as inspiring, qualitative outcomes: 'Become the go-to platform for engineering sprint planning.' Avoid vague Objectives like 'Improve performance.'" },
        { "@type": "HowToStep", position: 3, name: "Define 2–4 measurable Key Results per Objective", text: "Each KR must have a start value, target value, and deadline. Use metrics you can measure weekly: 'Reduce average cycle time from 8 days to 4 days by March 31.'" },
        { "@type": "HowToStep", position: 4, name: "Share and get buy-in from the team", text: "Present draft OKRs in a team meeting. Invite team members to suggest changes. OKRs work best when 60–70% come bottom-up from the team itself." },
        { "@type": "HowToStep", position: 5, name: "Track weekly and adjust mid-quarter if needed", text: "Update progress every week. If a KR is consistently at risk, either adjust the target (with justification) or escalate blockers for executive help." },
      ],
    },
    "lean-project-management-software": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Implement Lean Project Management",
      description: "A step-by-step guide to applying Lean principles to your project management workflow to eliminate waste and deliver faster.",
      totalTime: "P21D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Map your current value stream", text: "Document every step from project kickoff to delivery. Identify which steps add value for the customer and which are waste (waiting, rework, over-processing)." },
        { "@type": "HowToStep", position: 2, name: "Identify and categorize waste", text: "Use the 8 Lean wastes (TIMWOODS): Transportation, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects, Skills. Rank them by frequency and impact." },
        { "@type": "HowToStep", position: 3, name: "Implement pull-based scheduling", text: "Replace push scheduling (assigning work before capacity exists) with pull scheduling. Teams pull new work only when they have capacity — reducing multitasking and WIP." },
        { "@type": "HowToStep", position: 4, name: "Set up visual management", text: "Use a Kanban board or project dashboard to make work visible to the whole team. Visual management enables faster problem identification and self-organization." },
        { "@type": "HowToStep", position: 5, name: "Run continuous improvement cycles", text: "Hold monthly Kaizen events: review metrics, identify the biggest bottleneck, implement one targeted improvement, measure the result. Repeat every cycle." },
      ],
    },
    "decision-making-frameworks-leaders": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Apply Decision-Making Frameworks as a Leader",
      description: "A guide to choosing and applying the right decision-making framework for different leadership scenarios.",
      totalTime: "PT1H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Classify the decision type", text: "Determine if the decision is reversible (Type 2) or irreversible (Type 1). Type 2 decisions should be made fast with less process. Type 1 decisions require structured frameworks." },
        { "@type": "HowToStep", position: 2, name: "Choose the right framework", text: "Use DACI/RACI for cross-functional decisions, SWOT for strategic choices, the Eisenhower Matrix for prioritization, and the 10/10/10 rule for emotionally charged decisions." },
        { "@type": "HowToStep", position: 3, name: "Gather the right inputs", text: "Identify who has relevant information, who will be affected, and who needs to ratify the decision. Collect quantitative data and qualitative perspectives before deciding." },
        { "@type": "HowToStep", position: 4, name: "Evaluate options against criteria", text: "List your decision criteria (cost, speed, risk, reversibility). Score each option against each criterion. Avoid analysis paralysis — set a deadline for the decision." },
        { "@type": "HowToStep", position: 5, name: "Communicate the decision and rationale", text: "Share the decision with all stakeholders, including the reasoning and trade-offs considered. Transparency builds trust even when people disagree with the outcome." },
      ],
    },
    "smart-calendar-scheduling-tips": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Optimize Your Calendar for Maximum Productivity",
      description: "A step-by-step system for smarter calendar scheduling that protects deep work time and reduces meeting overload.",
      totalTime: "PT1H",
      estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
      step: [
        { "@type": "HowToStep", position: 1, name: "Audit your current calendar", text: "Review last week's calendar. Categorize every block as: Deep Work, Meetings, Admin, or Buffer. Identify how much time went to each category vs. your ideal split." },
        { "@type": "HowToStep", position: 2, name: "Block deep work time first", text: "Schedule 2–4 hours of uninterrupted deep work at your peak energy time (usually mornings). Mark these blocks as busy so others cannot book over them." },
        { "@type": "HowToStep", position: 3, name: "Batch meetings into meeting blocks", text: "Designate 2–3 days per week as meeting-heavy days. Cluster meetings back-to-back to protect other days as maker days with long uninterrupted stretches." },
        { "@type": "HowToStep", position: 4, name: "Add transition and buffer time", text: "Add 10-minute buffers between meetings for notes and context-switching. Add a 30-minute end-of-day review block to close loops and plan tomorrow." },
        { "@type": "HowToStep", position: 5, name: "Review and adjust weekly", text: "Every Friday, spend 15 minutes reviewing next week's calendar. Move or decline anything that doesn't align with your top 3 weekly priorities." },
      ],
    },
  };

  const howToJsonLd = howToSchemas[slug] ?? null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: post.image.startsWith("http") ? post.image : `https://spacelean.ai${post.image}`,
    },
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://spacelean.ai/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://spacelean.ai/logo.png",
        width: 200,
        height: 60,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://spacelean.ai/blogs/${slug}`,
    },
    url: `https://spacelean.ai/blogs/${slug}`,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://spacelean.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://spacelean.ai/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://spacelean.ai/blogs/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen text-[#0a0a0a] pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Breadcrumb ── */}
        <nav className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-neutral-400">
            <li>
              <Link href="/" className="hover:text-neutral-700 transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link href="/blogs" className="hover:text-neutral-700 transition-colors">
                Blog
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-neutral-600 font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* ── Header ── */}
        <header className="mb-14">
          {/* Meta row */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 tracking-wide">
              {post.category}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1 text-xs text-neutral-400">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight leading-tight text-[#0a0a0a] mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-500 leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Author + Date */}
          <div className="flex items-center justify-between pb-8 border-b border-black/8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black/8 border border-black/10 overflow-hidden flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#0a0a0a]">{post.author}</p>
                <p className="text-xs text-neutral-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="prose prose-lg max-w-none
          prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-[#0a0a0a]
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-neutral-600 prose-p:leading-relaxed
          prose-li:text-neutral-600
          prose-strong:text-[#0a0a0a] prose-strong:font-semibold
          prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
          prose-hr:border-black/8"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gm, '<h2 class="text-2xl mt-12 mb-4">$1</h2>')
                .replace(/^### (.*$)/gm, '<h3 class="text-xl mt-8 mb-3">$1</h3>')
                .replace(/^- \*\*(.*?)\*\*: (.*$)/gm, '<li class="mb-2"><strong>$1</strong>: $2</li>')
                .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gm, '<li class="mb-2"><strong>$1</strong>: $2</li>')
                .replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[hl])/gm, '<p class="mb-4">'),
            }}
          />
        </div>

        {/* ── Tags ── */}
        <div className="mt-14 pt-8 border-t border-black/8">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-black/[0.04] border border-black/8 text-neutral-600 text-xs rounded-full hover:bg-black/[0.07] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 p-8 rounded-2xl border border-black/8 bg-black/[0.02]">
          <div className="flex items-start gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              AI-Native Construction Intelligence
            </span>
          </div>
          <h3 className="text-2xl font-normal tracking-tight text-[#0a0a0a] mb-2">
            Ready to build smarter?
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-7 max-w-md">
            Experience AI-powered project management built for construction — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/request-a-demo"
              className="group inline-flex items-center gap-2 bg-black text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/request-a-demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-3 rounded-full border border-black/10 hover:border-black/20 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Related articles</span>
              <div className="flex-1 h-px bg-black/8" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group block p-5 rounded-xl border border-black/8 hover:border-black/16 bg-white hover:shadow-sm transition-all duration-300"
                >
                  <span className="inline-flex items-center text-[11px] font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-0.5 mb-3 tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-sm font-normal tracking-tight text-[#0a0a0a] group-hover:text-cyan-500 transition-colors duration-300 line-clamp-2 mb-2">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.readTime && (
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

      </article>
    </main>
  );
}