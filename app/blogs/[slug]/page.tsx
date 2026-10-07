import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/lib/blog-data";
import { Sparkles, ArrowRight, Clock, ChevronRight, ArrowLeft, BookOpen, Calendar, Share2 } from "lucide-react";
import BlogToc from "@/components/blog/BlogToc";
import MarkdownRenderer, { extractTocFromMarkdown } from "@/components/blog/MarkdownRenderer";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function extractFaqFromContent(content: string): { question: string; answer: string }[] {
  const faqSectionMatch = content.split(/##\s*Frequently Asked Questions/i);
  if (faqSectionMatch.length < 2) return [];

  const faqSection = faqSectionMatch[1].split(/##\s*Related Resources/i)[0];
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://spacelean.ai/blogs/${slug}`,
      languages: {
        "en-US": `https://spacelean.ai/blogs/${slug}`,
        "en-GB": `https://spacelean.ai/blogs/${slug}`,
        "en-IN": `https://spacelean.ai/blogs/${slug}`,
        "x-default": `https://spacelean.ai/blogs/${slug}`,
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
  const tocItems = extractTocFromMarkdown(post.content);

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
    "construction-project-management-ai": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Automate Construction Scheduling with 4D BIM",
      description: "A step-by-step workflow for integrating 3D BIM geometry with 4D schedule timelines to automate construction planning.",
      totalTime: "PT4H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Geometry and Element Parsing", text: "Upload the 3D IFC or Revit model into the SpaceLean AI Engine. The platform parses physical dependencies, spatial relationships, and structural support sequences from the geometry." },
        { "@type": "HowToStep", position: 2, name: "Workface Constraint Detection", text: "The engine runs constraint solvers to flag trade stacking and spatial conflicts, ensuring trades are not scheduled in the same zone simultaneously." },
        { "@type": "HowToStep", position: 3, name: "Automated CPM Network Generation", text: "Generate the logic-linked baseline schedule. The AI defines tasks, durations, and dependencies with realistic lag buffers based on historical trade velocity." },
        { "@type": "HowToStep", position: 4, name: "Lock Baseline and Distribute", text: "Verify the auto-sequenced timeline, lock the baseline schedule, and export lookaheads to subcontractors for alignment." },
        { "@type": "HowToStep", position: 5, name: "Enable Real-time Site Loop", text: "Provide field superintendents with mobile access to report daily progress, allowing the self-healing scheduler to dynamically update downstream dependencies." }
      ]
    },
    "ai-project-management-guide": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Integrate AI into Your Project Management Workflow",
      description: "A practical 4-step implementation guide to adopting AI-powered project controls and task management tools.",
      totalTime: "P14D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Start with AI Task Generation", text: "Decompose a new project goal into a complete task tree using natural language inputs. Verify subtasks and sequence logic." },
        { "@type": "HowToStep", position: 2, name: "Add Predictive Scheduling", text: "Inject task timelines and enable AI-powered risk predictions to identify bottleneck tasks and overallocation risks." },
        { "@type": "HowToStep", position: 3, name: "Automate Weekly Reporting", text: "Replace manual status reporting meetings with live, AI-generated project dashboards visible to all stakeholders." },
        { "@type": "HowToStep", position: 4, name: "Connect Strategic Goals to Sprints", text: "Link company OKRs directly to execution tasks, creating a fully automated strategy-to-execution delivery pipeline." }
      ]
    }
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

  const authorInitials = post.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <main className="min-h-screen text-[#0a0a0a] bg-white pt-24 sm:pt-28 pb-24">
      {/* ── JSON-LD Structured Data ── */}
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

      {/* ── Hero Header Container ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Breadcrumb + Back Button */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-100">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-neutral-400">
              <li>
                <Link href="/" className="hover:text-neutral-900 transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-neutral-300" /></li>
              <li>
                <Link href="/blogs" className="hover:text-neutral-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3 text-neutral-300" /></li>
              <li className="text-neutral-700 font-medium truncate max-w-[180px] sm:max-w-[320px]">
                {post.title}
              </li>
            </ol>
          </nav>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-cyan-600 bg-neutral-100/70 hover:bg-cyan-50 border border-neutral-200/70 hover:border-cyan-200 rounded-full px-3 py-1.5 transition-all flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>
        </div>

        {/* Category Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1">
            {post.category}
          </span>
          {post.readTime && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 bg-neutral-100/80 rounded-full px-3 py-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              {post.readTime}
            </span>
          )}
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#0a0a0a] leading-[1.18] mb-6">
          {post.title}
        </h1>

        {/* Description Excerpt */}
        {post.description && (
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal mb-8">
            {post.description}
          </p>
        )}

        {/* Author & Publication Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200/80 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-xs flex-shrink-0">
              {authorInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0a0a0a]">{post.author}</p>
              <p className="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3 h-3 text-neutral-400" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-neutral-400" />
              SpaceLean Journal
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Article Section ── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Featured Image */}
        {post.image && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-xs">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Body Container */}
        <article className="max-w-[780px] mx-auto bg-white">
          
          {/* Table of Contents Block */}
          {tocItems.length >= 2 && <BlogToc items={tocItems} />}

          {/* Rendered Article Body */}
          <MarkdownRenderer content={post.content} />

          {/* Article Topic Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-blue-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Article Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#EFF6FF] border border-blue-200/70 text-[#14213D] text-xs font-semibold rounded-full hover:bg-blue-100 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <section className="mt-14 pt-10 border-t border-blue-100">
              <div className="flex items-center gap-2.5 mb-6">
                <BookOpen className="w-5 h-5 text-[#1D4ED8]" />
                <h3 className="text-2xl font-bold tracking-tight text-[#0B1733]">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-blue-200/80 bg-[#EFF6FF]/60 hover:bg-[#EFF6FF] transition-colors"
                  >
                    <h4 className="text-base font-bold text-[#0B1733] mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SpaceLean Brand CTA Banner */}
          <div className="mt-14 p-8 rounded-3xl border border-blue-900 bg-gradient-to-br from-[#0B1733] via-[#14213D] to-[#1E293B] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[#1D4ED8]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-full px-3.5 py-1 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                SpaceLean Intelligent Execution Engine
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight !text-white mb-3">
                Ready to eliminate project complexity?
              </h3>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-7 max-w-xl font-normal">
                Turn strategic objectives and project schedules into automated AI workflows. Experience SpaceLean intelligent planning with no setup hassle.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md group"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-100 hover:text-white px-5 py-3.5 rounded-full border border-blue-700/60 hover:border-blue-500 bg-blue-950/40 hover:bg-blue-900/60 transition-colors"
                >
                  Explore Free AI Tools
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* ── Related Articles Section ── */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-blue-200/60 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  More Insights
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#0B1733] mt-1">
                  Related Articles
                </h3>
              </div>
              <Link
                href="/blogs"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] hover:text-[#2563EB] transition-colors"
              >
                View all articles
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group flex flex-col justify-between p-6 rounded-2xl border border-blue-200/80 hover:border-blue-400 bg-white hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/80 rounded-full px-2.5 py-0.5">
                        {relatedPost.category}
                      </span>
                      {relatedPost.readTime && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {relatedPost.readTime}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold tracking-tight text-[#0B1733] group-hover:text-[#1D4ED8] transition-colors duration-200 line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {relatedPost.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform">
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Bottom Navigation Link ── */}
        <div className="mt-16 pt-8 border-t border-blue-100 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-[#2563EB] px-6 py-3.5 rounded-full border border-blue-200/80 bg-[#EFF6FF] hover:bg-blue-100/80 transition-all shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore all articles on SpaceLean Blog
          </Link>
        </div>

      </div>
    </main>
  );
}
