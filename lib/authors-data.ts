export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  credentials: string[];
  knowsAbout: string[];
  sameAs?: string[];
  worksFor: string;
}

export const authors: AuthorProfile[] = [
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    role: "Lead Product Architect & VDC Systems Specialist",
    bio: "Sarah Chen specializes in intelligent project management workflows, OKR frameworks, and BIM-to-schedule automation with over 8 years of experience across commercial ConTech.",
    credentials: [
      "B.S. Civil & Environmental Engineering",
      "LEED AP BD+C",
      "Certified Scrum Product Owner (CSPO)",
    ],
    knowsAbout: [
      "Building Information Modeling",
      "Lean Construction",
      "Agile Project Management",
      "OKR Management",
      "4D Construction Scheduling",
    ],
    sameAs: ["https://linkedin.com/in/sarahchen-vdc"],
    worksFor: "SpaceLean",
  },
  {
    slug: "dr-lisa-park",
    name: "Dr. Lisa Park",
    role: "VP of Organizational Analytics & Behavioral Engineering",
    bio: "Dr. Lisa Park conducts computational research into team performance, cognitive fatigue, and proactive burnout prevention across high-velocity engineering and construction teams.",
    credentials: [
      "Ph.D. Industrial & Systems Engineering (Stanford)",
      "M.S. Applied Psychology",
      "Human Factors Professional",
    ],
    knowsAbout: [
      "Team Performance Dynamics",
      "Burnout Prevention",
      "Workplace Analytics",
      "Predictive Delay Modeling",
    ],
    sameAs: ["https://linkedin.com/in/drlisapark"],
    worksFor: "SpaceLean",
  },
  {
    slug: "michael-torres",
    name: "Michael Torres",
    role: "Senior Agile Delivery Lead & Lean Construction Coach",
    bio: "Michael Torres is an agile coach and construction process optimizer who guides distributed teams through visual Kanban flows, takt time planning, and WIP reduction.",
    credentials: [
      "Certified ScrumMaster (CSM)",
      "Lean Bronze Certified (SME)",
      "Project Management Professional (PMP)",
    ],
    knowsAbout: [
      "Kanban Board Systems",
      "Work-in-Progress (WIP) Limits",
      "Lean Construction Institute (LCI) Workflows",
      "Takt Planning",
    ],
    sameAs: ["https://linkedin.com/in/michaeltorres-agile"],
    worksFor: "SpaceLean",
  },
  {
    slug: "robert-chang",
    name: "Robert Chang",
    role: "Director of Digital Delivery & Operations",
    bio: "Robert Chang has spent a decade scaling operational systems for distributed engineering teams, focusing on high-signal asynchronous communication and schedule alignment.",
    credentials: [
      "M.S. Construction Engineering & Management",
      "Project Management Professional (PMP)",
      "Certified Lean Six Sigma Black Belt",
    ],
    knowsAbout: [
      "Asynchronous Team Communication",
      "Cross-Functional Collaboration",
      "Construction Project Controls",
      "Resource Allocation",
    ],
    sameAs: ["https://linkedin.com/in/robertchang-ops"],
    worksFor: "SpaceLean",
  },
  {
    slug: "jessica-martinez",
    name: "Jessica Martinez",
    role: "Agile Implementation Consultant",
    bio: "Jessica Martinez mentors engineering and construction technology teams transitioning from rigid waterfall scheduling into flexible, sprint-based delivery cycles.",
    credentials: [
      "Advanced Certified ScrumMaster (A-CSM)",
      "Scaled Agile Framework (SAFe) Agilist",
    ],
    knowsAbout: [
      "Agile Methodology",
      "Sprint Planning",
      "Scrum Ceremonies",
      "Backlog Grooming",
    ],
    sameAs: ["https://linkedin.com/in/jessicamartinez-scrum"],
    worksFor: "SpaceLean",
  },
  {
    slug: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Head of Remote Collaboration & Field Operations",
    bio: "Emily Rodriguez evaluates digital collaboration stacks for modern distributed teams, bridging field superintendent insights with cloud-based management tools.",
    credentials: [
      "B.A. Organizational Communication",
      "Certified Remote Work Professional",
    ],
    knowsAbout: [
      "Remote Work Tools",
      "Field-to-Office Coordination",
      "Digital Workspaces",
      "Team Transparency",
    ],
    sameAs: ["https://linkedin.com/in/emilyrodriguez-remotework"],
    worksFor: "SpaceLean",
  },
  {
    slug: "andrew-chen",
    name: "Andrew Chen",
    role: "Strategic Decision Systems Advisor",
    bio: "Andrew Chen writes on executive decision models, risk matrices, and strategic capital allocation for major project developers and EPC contractors.",
    credentials: [
      "MBA (Wharton)",
      "B.S. Operations Research",
      "Chartered Financial Analyst (CFA)",
    ],
    knowsAbout: [
      "Decision-Making Frameworks",
      "Capital Allocation",
      "Risk Governance",
      "Strategic Planning",
    ],
    sameAs: ["https://linkedin.com/in/andrewchen-leadership"],
    worksFor: "SpaceLean",
  },
  {
    slug: "david-kim",
    name: "David Kim",
    role: "Senior Project Controls & Productivity Specialist",
    bio: "David Kim is a systems thinker dedicated to optimizing daily routines, eliminating administrative friction, and accelerating critical path task turnaround.",
    credentials: [
      "Project Management Professional (PMP)",
      "Six Sigma Green Belt",
    ],
    knowsAbout: [
      "Productivity Systems",
      "Critical Path Scheduling",
      "Task Automation",
      "Workflow Efficiency",
    ],
    sameAs: ["https://linkedin.com/in/davidkim-productivity"],
    worksFor: "SpaceLean",
  },
  {
    slug: "amanda-foster",
    name: "Amanda Foster",
    role: "Lookahead Scheduling & Operations Specialist",
    bio: "Amanda Foster focuses on time architecture, proactive calendar design, and lookahead planning to eliminate scheduling bottlenecks.",
    credentials: [
      "Certified Time Management Consultant",
      "B.S. Industrial Design",
    ],
    knowsAbout: [
      "Calendar Optimization",
      "Time Blocking",
      "Lookahead Planning",
      "Resource Leveling",
    ],
    sameAs: ["https://linkedin.com/in/amandafoster-scheduling"],
    worksFor: "SpaceLean",
  },
  {
    slug: "james-rivera",
    name: "James Rivera",
    role: "Deep Work Systems & Attention Ergonomics Researcher",
    bio: "James Rivera studies knowledge worker focus, attention ergonomics, and distraction mitigation in multi-stakeholder project environments.",
    credentials: [
      "M.S. Cognitive Science",
      "Certified Productivity Coach",
    ],
    knowsAbout: [
      "Deep Work Strategies",
      "Cognitive Ergonomics",
      "Workplace Focus",
      "Time Management",
    ],
    sameAs: ["https://linkedin.com/in/jamesrivera-focus"],
    worksFor: "SpaceLean",
  },
  {
    slug: "spacelean-team",
    name: "SpaceLean Team",
    role: "Construction Technology & AI Engineering Research Group",
    bio: "The SpaceLean Team is an interdisciplinary cohort of civil engineers, VDC specialists, BIM modelers, and AI researchers engineering the next generation of construction intelligence.",
    credentials: [
      "Construction Knowledge Graph Architecture",
      "ISO 19650 Compliance",
      "BuildingSmart IFC Certification",
    ],
    knowsAbout: [
      "Building Information Modeling",
      "4D Construction Scheduling",
      "Critical Path Method",
      "AI-Powered Sequencing",
      "Lean Construction",
    ],
    sameAs: [
      "https://twitter.com/spacelean_",
      "https://linkedin.com/company/spacelean",
    ],
    worksFor: "SpaceLean",
  },
  {
    slug: "bibin-prathap",
    name: "Bibin Prathap",
    role: "Founder & Lead Architect",
    bio: "Bibin Prathap is the founder of SpaceLean and architect of VeritasGraph, pioneering graph-based neural reasoning for construction BIM sequencing and schedule risk prediction.",
    credentials: [
      "Architect of VeritasGraph",
      "AI Knowledge Graph Researcher",
    ],
    knowsAbout: [
      "Knowledge Graphs",
      "BIM 4D Scheduling",
      "Construction AI",
      "VeritasGraph",
      "Machine Learning",
    ],
    sameAs: ["https://github.com/bibinprathap"],
    worksFor: "SpaceLean",
  },
];

const authorMapByName: Record<string, AuthorProfile> = {};
const authorMapBySlug: Record<string, AuthorProfile> = {};

authors.forEach((a) => {
  authorMapByName[a.name.toLowerCase()] = a;
  authorMapBySlug[a.slug] = a;
});

export function getAuthorByName(name: string): AuthorProfile {
  const normalized = (name || "").toLowerCase().trim();
  if (authorMapByName[normalized]) {
    return authorMapByName[normalized];
  }
  // Fallback to SpaceLean Team if author not explicitly registered
  return authorMapByName["spacelean team"];
}

export function getAuthorBySlug(slug: string): AuthorProfile | undefined {
  return authorMapBySlug[slug];
}

export function getAllAuthors(): AuthorProfile[] {
  return authors;
}

