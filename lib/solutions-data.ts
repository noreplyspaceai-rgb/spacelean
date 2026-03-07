export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  icon: string;
  category: "stakeholder" | "project-type" | "solutions";
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
  seoContent?: string;
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

// ─────────────────────────────────────────────
// BY STAKEHOLDER
// ─────────────────────────────────────────────

export const stakeholderSolutions: Solution[] = [
  {
    slug: "for-gcs",
    title: "Space AI for General Contractors",
    tagline: "Build Smarter. Deliver Faster. Win More.",
    description:
      "Give your project teams a decisive edge with AI-generated construction sequences, real-time schedule intelligence, and automated crew optimization. Space AI transforms how GCs plan, execute, and win projects — from bid through closeout.",
    metaDescription:
      "Space AI for General Contractors: AI-powered 4D scheduling, automated sequencing, crew optimization, and real-time critical path prediction. Build smarter and deliver on time.",
    seoContent:
      "Space AI for General Contractors replaces manual scheduling with an AI reasoning engine that converts BIM geometry directly into optimized construction sequences. Instead of spending weeks linking tasks in Primavera or Synchro, your project team gets a complete, physics-aware schedule in hours — with zone flow logic, crew/trade assignments, and penetration constraints already resolved. Real-time Monte Carlo simulations identify which tasks are most likely to slip before they actually do, enabling proactive mitigation and protecting your margins. Whether you're managing a 10-story commercial build or a complex industrial fit-out, Space AI gives GCs the predictive intelligence and scheduling confidence that separates winning contractors from the rest.",
    keywords: [
      "general contractor scheduling software",
      "AI construction sequencing",
      "4D BIM scheduling for contractors",
      "automated construction planning",
      "construction critical path prediction",
      "crew optimization software",
      "construction project management AI",
      "real-time schedule resequencing",
      "BIM to schedule automation",
      "construction risk management platform",
      "construction delay prediction",
      "subcontractor coordination software",
      "construction lookahead planning",
      "digital construction brain",
      "construction knowledge graph",
    ],
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    icon: "🏗️",
    category: "stakeholder",
    features: [
      {
        title: "AI-Generated Construction Sequences",
        description:
          "Upload your BIM model and let Space AI automatically infer task dependencies from geometry — structural support, MEP penetrations, access constraints, and zone logic — without a single manual link.",
        icon: "🤖",
      },
      {
        title: "Probabilistic Critical Path",
        description:
          "Monte Carlo simulation runs thousands of schedule scenarios to identify which tasks carry the highest risk of becoming critical. Know your vulnerabilities before they become delays.",
        icon: "📊",
      },
      {
        title: "Real-Time Self-Healing Schedules",
        description:
          "When a task slips on site, Space AI automatically propagates the impact through the dependency graph and reoptimizes downstream tasks — no manual rescheduling required.",
        icon: "🔄",
      },
      {
        title: "Crew & Trade Conflict Resolution",
        description:
          "AI assigns crews across tasks and zones, preventing resource overlap, minimizing idle time, and maximizing daily output. Trade stacking logic is built-in.",
        icon: "👷",
      },
      {
        title: "Zone-Based Flow & Takt Planning",
        description:
          "Automatically sequence work zone by zone for optimal trade flow. Space AI detects congestion before it happens and redistributes tasks to maintain steady progress.",
        icon: "🗺️",
      },
      {
        title: "Lookahead & Constraint Management",
        description:
          "Generate automated 3-week and 6-week lookahead plans with AI-identified constraints, linking material lead times, subcontractor readiness, and access blockers.",
        icon: "📅",
      },
    ],
    benefits: [
      {
        title: "Reduce Planning Time",
        description:
          "Cut schedule preparation from weeks to hours with AI-generated sequences directly from your BIM model.",
        stat: "80%",
      },
      {
        title: "Improve On-Time Delivery",
        description:
          "Predictive critical path and real-time resequencing help teams finish projects on or ahead of schedule.",
        stat: "3.1x",
      },
      {
        title: "Lower Rework Costs",
        description:
          "Geometry-driven constraint logic eliminates sequencing errors that lead to costly rework and trade conflicts.",
        stat: "45%",
      },
      {
        title: "Increase Bid Confidence",
        description:
          "Win more bids by backing your schedules with probabilistic data and risk-aware planning that owners trust.",
        stat: "92%",
      },
    ],
    useCases: [
      "Preconstruction schedule development from BIM",
      "Subcontractor coordination and sequencing",
      "Weekly and 3-week lookahead automation",
      "Delay impact analysis and resequencing",
      "Trade stacking and crew optimization",
      "Zone-by-zone flow and takt scheduling",
      "Critical path risk reporting for owners",
      "Change order schedule impact analysis",
    ],
    testimonial: {
      quote:
        "Space AI cut our preconstruction schedule time in half. The AI sequences out of the BIM model and our project teams just refine — it's transformed how we bid and build.",
      author: "James Whitfield",
      role: "VP of Construction Operations",
      company: "Meridian Construction Group",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See GC Demo",
    },
  },

  {
    slug: "for-owners",
    title: "Space AI for Owners",
    tagline: "Full Visibility. Predictable Delivery. No Surprises.",
    description:
      "Owners deserve more than a monthly report and a hope for the best. Space AI gives project owners real-time schedule intelligence, probabilistic delivery forecasting, and transparent risk visibility — so you can hold your GC accountable and protect your investment.",
    metaDescription:
      "Space AI for Owners: real-time construction schedule visibility, predictive delivery forecasting, contractor accountability tools, and AI-powered project risk dashboards.",
    seoContent:
      "Space AI for Owners closes the information gap between what contractors report and what is actually happening on site. Our AI platform ingests BIM models, schedules, and live site data to produce an independent, probabilistic view of your project's health. Rather than waiting for end-of-month reports, owners receive live dashboards showing critical path probability, delay risk by zone, and confidence intervals on your project completion date. Space AI also enables smarter GC selection and accountability — with AI-scored schedules during bidding and automated progress validation during construction. Whether you're developing a commercial tower, an industrial facility, or a portfolio of assets, Space AI gives owners the intelligence to protect their investment and make confident decisions.",
    keywords: [
      "construction owner project visibility",
      "AI construction risk dashboard",
      "owner's representative software",
      "predictive project delivery",
      "construction schedule transparency",
      "owner construction management platform",
      "real-time project health monitoring",
      "construction delay risk forecasting",
      "capital project management software",
      "owner project intelligence platform",
      "contractor accountability tools",
      "construction schedule validation",
      "project delivery confidence",
      "AI project completion forecasting",
    ],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    icon: "🏢",
    category: "stakeholder",
    features: [
      {
        title: "Independent Schedule Intelligence",
        description:
          "Space AI generates its own AI-driven schedule assessment from BIM data, giving owners an independent view of project risk that doesn't rely solely on GC reporting.",
        icon: "🔍",
      },
      {
        title: "Probabilistic Completion Forecasting",
        description:
          "Monte Carlo simulations produce confidence intervals on your completion date — showing you the probability of finishing on time and the range of likely outcomes.",
        icon: "📈",
      },
      {
        title: "Real-Time Risk Dashboards",
        description:
          "Live dashboards highlight the highest-risk zones, tasks, and trades on your project today — not next month when it's too late to act.",
        icon: "📊",
      },
      {
        title: "Contractor Score & Accountability",
        description:
          "Score GC schedules during bidding using AI-driven quality metrics. Track planned vs actual performance in real time during construction.",
        icon: "✅",
      },
      {
        title: "Portfolio-Level Oversight",
        description:
          "Manage multiple projects on a single dashboard. Compare delivery confidence, risk exposure, and schedule performance across your entire capital program.",
        icon: "🗂️",
      },
      {
        title: "Automated Progress Reporting",
        description:
          "Replace manual owner reports with AI-generated progress narratives, risk summaries, and completion forecasts delivered on your schedule.",
        icon: "📋",
      },
    ],
    benefits: [
      {
        title: "Reduce Cost Overruns",
        description:
          "Proactive risk visibility helps owners intervene early, before schedule slippage compounds into costly overruns.",
        stat: "38%",
      },
      {
        title: "Improve Delivery Predictability",
        description:
          "Probabilistic forecasting gives owners a realistic, data-driven view of when their project will actually finish.",
        stat: "2.4x",
      },
      {
        title: "Cut Reporting Overhead",
        description:
          "Automated AI reporting eliminates the time and cost of manual status reporting and owner meetings.",
        stat: "60%",
      },
      {
        title: "Better Contractor Selection",
        description:
          "AI schedule scoring during bid review helps owners identify the most credible and realistic GC proposals.",
        stat: "87%",
      },
    ],
    useCases: [
      "Independent schedule risk assessment",
      "Probabilistic completion date forecasting",
      "GC schedule quality scoring during bid",
      "Real-time site progress monitoring",
      "Portfolio performance dashboards",
      "Delay cause analysis and documentation",
      "Executive and board-level reporting",
      "Program-level risk management",
    ],
    testimonial: {
      quote:
        "For the first time, I'm not waiting for a GC's monthly narrative to know if my project is in trouble. Space AI gives me a live, independent view of schedule risk every day.",
      author: "Priya Nair",
      role: "Director of Capital Projects",
      company: "Apex Property Group",
    },
    cta: {
      primary: "Request a Demo",
      secondary: "See Owner Dashboard",
    },
  },

  {
    slug: "for-consultants",
    title: "Space AI for Consultants",
    tagline: "Deliver Smarter Advice. Faster. At Scale.",
    description:
      "Whether you're a project controls consultant, a scheduling specialist, or a construction manager, Space AI gives you AI-powered tools to produce better schedules, validate contractor submissions, and deliver predictive insights that make your advisory practice indispensable.",
    metaDescription:
      "Space AI for Consultants: AI-powered construction schedule analysis, contractor submission review, Monte Carlo risk simulation, and predictive project intelligence for advisory firms.",
    seoContent:
      "Space AI for Consultants transforms the speed and depth of construction advisory services. Project controls professionals and scheduling consultants can now analyze contractor submissions in minutes, generate independent probabilistic schedules from BIM, and deliver risk forecasts that go far beyond traditional CPM analysis. Our AI engine handles the heavy lifting — dependency inference, Monte Carlo simulation, crew conflict detection, zone congestion analysis — while your team focuses on insight, strategy, and client relationships. Space AI also enables consultants to scale their practice by automating routine analysis, freeing senior expertise for the decisions that matter most.",
    keywords: [
      "construction scheduling consultant tools",
      "project controls AI software",
      "Monte Carlo construction simulation",
      "schedule delay analysis software",
      "construction consultant platform",
      "AI schedule review and validation",
      "owner's representative software",
      "schedule risk analysis tool",
      "construction expert witness tools",
      "forensic schedule analysis AI",
      "CPM schedule optimization",
      "delay impact quantification",
      "construction advisory intelligence",
      "project controls analytics platform",
    ],
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
    icon: "📐",
    category: "stakeholder",
    features: [
      {
        title: "Contractor Schedule Review & Scoring",
        description:
          "Upload a contractor's schedule and let Space AI score it for logic density, critical path integrity, resource plausibility, and risk exposure — in minutes.",
        icon: "🔎",
      },
      {
        title: "Independent AI Schedule Generation",
        description:
          "Generate a fully AI-driven baseline schedule from BIM for comparison against contractor submissions or as a standalone deliverable.",
        icon: "🤖",
      },
      {
        title: "Monte Carlo Risk Simulation",
        description:
          "Run probabilistic schedule risk analysis to quantify completion date confidence, identify float erosion, and model delay scenarios for clients.",
        icon: "📊",
      },
      {
        title: "Delay Analysis & Impact Quantification",
        description:
          "Perform impacted as-planned, time impact, and windows analyses with AI-assisted delay cause attribution and downstream impact mapping.",
        icon: "📋",
      },
      {
        title: "Multi-Project Portfolio Analytics",
        description:
          "Track schedule performance across multiple client projects simultaneously, delivering benchmarked insights and early warning signals at scale.",
        icon: "🗂️",
      },
      {
        title: "Client-Ready Reporting Engine",
        description:
          "Auto-generate professional schedule risk reports, delay narratives, and probabilistic forecasts formatted for owner, legal, or board audiences.",
        icon: "📄",
      },
    ],
    benefits: [
      {
        title: "10x Analysis Speed",
        description:
          "AI-powered schedule review and risk simulation cuts analysis time from days to hours, enabling more clients with the same team.",
        stat: "10x",
      },
      {
        title: "Higher Report Quality",
        description:
          "Probabilistic, geometry-aware analysis delivers richer insights than traditional CPM review, strengthening your advisory value.",
        stat: "94%",
      },
      {
        title: "Scale Your Practice",
        description:
          "Automate routine analysis so senior consultants can focus on strategy, claims support, and high-value client work.",
        stat: "3x",
      },
      {
        title: "Reduce Reporting Time",
        description:
          "Automated report generation eliminates manual formatting and data compilation, freeing billable hours.",
        stat: "55%",
      },
    ],
    useCases: [
      "Contractor schedule review and validation",
      "Baseline schedule development from BIM",
      "Delay analysis and claims support",
      "Owner representation and oversight",
      "Bid-phase schedule scoring",
      "Monthly progress and forecast reporting",
      "Portfolio performance benchmarking",
      "Expert witness schedule analysis",
    ],
    testimonial: {
      quote:
        "Space AI has completely changed our project controls practice. We can now deliver probabilistic risk analysis on day one of an engagement — it's become our strongest differentiator.",
      author: "Marcus Osei",
      role: "Principal, Construction Advisory",
      company: "Vertex Project Controls",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Consultant Demo",
    },
  },
];

// ─────────────────────────────────────────────
// BY PROJECT TYPE
// ─────────────────────────────────────────────

export const projectTypeSolutions: Solution[] = [
  {
    slug: "industrial",
    title: "Space AI for Industrial Projects",
    tagline: "Complex Systems. Precision Sequencing. Zero Surprises.",
    description:
      "Industrial construction — refineries, power plants, data centers, manufacturing facilities — demands sequencing logic that no manual planner can fully manage. Space AI's geometry-driven reasoning engine handles the complexity: thousands of pipe spools, equipment lifts, structural steel, and MEP systems, all sequenced with physical precision and optimized for your completion date.",
    metaDescription:
      "Space AI for Industrial Construction: AI-powered sequencing for complex industrial facilities, process plants, data centers, and manufacturing. Automate MEP logic, equipment lifts, and steel erection sequences.",
    seoContent:
      "Industrial projects are the most scheduling-intensive construction category in existence. The interdependencies between structural steel, large equipment installation, piping systems, electrical infrastructure, and commissioning activities create sequencing complexity that overwhelms traditional CPM tools. Space AI's Construction Knowledge Graph captures every physical relationship — pipe penetrations through vessel nozzles, equipment access envelopes, crane reach constraints, module lift sequences — and converts them into a dependency graph that drives a fully optimized AI schedule. The result is a schedule that is not only logically sound but also constructible, with crew flow, zone sequencing, and equipment utilization all optimized simultaneously.",
    keywords: [
      "industrial construction scheduling software",
      "process plant construction AI",
      "refinery construction sequencing",
      "data center construction planning",
      "manufacturing facility construction schedule",
      "power plant construction management",
      "EPC project scheduling AI",
      "equipment installation sequence planning",
      "industrial BIM scheduling",
      "modular construction sequencing",
      "heavy industrial project controls",
      "AI construction planning industrial",
      "pipe spool sequencing software",
      "structural steel erection sequence",
    ],
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop",
    icon: "⚙️",
    category: "project-type",
    features: [
      {
        title: "MEP & Process System Sequencing",
        description:
          "Automatically infer installation sequences for piping, vessels, equipment, HVAC, and electrical systems from BIM model geometry — including penetration logic and nozzle alignment constraints.",
        icon: "🔧",
      },
      {
        title: "Large Equipment & Crane Logic",
        description:
          "Model equipment lift sequences, crane positions, exclusion zones, and access envelopes directly in the construction knowledge graph to produce feasible, safe installation schedules.",
        icon: "🏗️",
      },
      {
        title: "Module & Prefab Coordination",
        description:
          "Coordinate modular and prefabricated assembly sequences with on-site structural and MEP activities, optimizing site logistics and minimizing interface clashes.",
        icon: "📦",
      },
      {
        title: "Commissioning & Handover Planning",
        description:
          "AI-generate commissioning sequences from system P&IDs and BIM data, integrating pre-commissioning, testing, and operational handover milestones into the construction schedule.",
        icon: "✅",
      },
      {
        title: "Multi-Discipline Resource Optimization",
        description:
          "Optimize across structural, mechanical, piping, electrical, and instrumentation disciplines simultaneously, eliminating crew conflicts and maximizing field productivity.",
        icon: "👷",
      },
      {
        title: "Shutdown & Turnaround Planning",
        description:
          "AI-accelerated turnaround schedule development with critical path analysis, crew allocation, and real-time progress resequencing for minimal downtime exposure.",
        icon: "⏱️",
      },
    ],
    benefits: [
      {
        title: "Reduce Schedule Development Time",
        description:
          "AI generates a multi-discipline industrial schedule from BIM in hours, not weeks of manual P6 data entry.",
        stat: "75%",
      },
      {
        title: "Eliminate Interface Clashes",
        description:
          "Geometry-driven sequencing resolves multi-discipline conflicts before they reach the field, reducing costly rework.",
        stat: "60%",
      },
      {
        title: "Improve Commissioning Readiness",
        description:
          "AI-optimized system turnover sequencing accelerates commissioning and reduces pre-operational delays.",
        stat: "40%",
      },
      {
        title: "Minimize Shutdown Duration",
        description:
          "Real-time resequencing and probabilistic critical path reduce turnaround overruns significantly.",
        stat: "3.2x",
      },
    ],
    useCases: [
      "Process plant and refinery construction scheduling",
      "Data center infrastructure sequencing",
      "Manufacturing facility fit-out planning",
      "Power generation construction planning",
      "Equipment installation and lift sequencing",
      "Multi-discipline resource optimization",
      "Commissioning and system turnover planning",
      "Plant shutdown and turnaround scheduling",
    ],
    testimonial: {
      quote:
        "We used to spend six weeks developing the schedule for a major plant expansion. Space AI had a fully logic-linked AI schedule ready for review in two days. The quality was better than anything we'd done manually.",
      author: "Chen Wei",
      role: "Project Controls Manager",
      company: "Pacific Industrial Constructors",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Industrial Demo",
    },
  },

  {
    slug: "infrastructure",
    title: "Space AI for Infrastructure Projects",
    tagline: "Long Programs. Complex Interfaces. Delivered On Time.",
    description:
      "Infrastructure projects — highways, rail, bridges, utilities, water treatment — span years, involve multiple contractors, and carry enormous public accountability. Space AI's AI scheduling platform manages the complexity: linear scheduling, interface coordination, phased delivery, and real-time program risk management, all from a single intelligence platform.",
    metaDescription:
      "Space AI for Infrastructure: AI-powered linear scheduling, multi-contractor coordination, phased delivery planning, and real-time program risk management for highways, rail, bridges, and utilities.",
    seoContent:
      "Infrastructure programs are fundamentally different from building construction — they are linear, geographically dispersed, multi-contractor, and politically exposed. Traditional CPM tools weren't designed for these characteristics. Space AI for Infrastructure introduces spatial sequencing logic that matches the physical reality of linear projects: chainage-based task positioning, traffic stage sequencing, utility conflict resolution, and environmental constraint management. AI-driven resource flow optimization ensures work fronts are continuously advanced without crew conflicts or zone congestion. Portfolio-level risk dashboards give program managers and funding bodies the visibility they need to manage accountability across complex, multi-year infrastructure delivery programs.",
    keywords: [
      "infrastructure construction scheduling AI",
      "linear scheduling software",
      "highway construction sequencing",
      "rail construction planning AI",
      "bridge construction schedule software",
      "utility infrastructure scheduling",
      "water treatment construction planning",
      "multi-contractor coordination platform",
      "infrastructure program management",
      "traffic staging construction planning",
      "public infrastructure delivery software",
      "program-level schedule management",
      "civil construction AI scheduling",
      "infrastructure risk management platform",
    ],
    heroImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop",
    icon: "🌉",
    category: "project-type",
    features: [
      {
        title: "Linear & Chainage-Based Scheduling",
        description:
          "Schedule linear infrastructure work by geographic chainage, with AI-optimized crew movement, work front sequencing, and production rate optimization along the corridor.",
        icon: "🛣️",
      },
      {
        title: "Traffic & Utilities Stage Management",
        description:
          "Model construction staging with traffic management constraints, utility diversions, and environmental exclusion zones built directly into the sequencing logic.",
        icon: "🚦",
      },
      {
        title: "Multi-Contractor Interface Coordination",
        description:
          "Coordinate interfaces between multiple contractors, disciplines, and work packages with AI-identified dependencies and real-time conflict detection across the program.",
        icon: "🤝",
      },
      {
        title: "Geospatial Risk Mapping",
        description:
          "Overlay schedule risk and delay probability onto GIS maps, giving program managers a spatial view of where the program is most vulnerable.",
        icon: "🗺️",
      },
      {
        title: "Program-Level Milestone Tracking",
        description:
          "Track progress against program milestones across multiple contracts simultaneously, with AI-generated forecast reports for funding bodies and regulatory stakeholders.",
        icon: "📊",
      },
      {
        title: "Environmental & Seasonal Constraint Modeling",
        description:
          "Integrate environmental windows, seasonal weather constraints, and regulatory hold points into the AI scheduling engine for realistic, compliant program plans.",
        icon: "🌿",
      },
    ],
    benefits: [
      {
        title: "Reduce Program Overruns",
        description:
          "Predictive risk modeling and proactive interface management reduce infrastructure program overruns significantly.",
        stat: "35%",
      },
      {
        title: "Improve Milestone Confidence",
        description:
          "Monte Carlo simulation provides funders and program boards with honest, probabilistic confidence on key milestone dates.",
        stat: "2.8x",
      },
      {
        title: "Cut Coordination Overhead",
        description:
          "Automated interface detection and multi-contractor coordination reduces the overhead of managing complex program interfaces.",
        stat: "50%",
      },
      {
        title: "Better Public Accountability",
        description:
          "Transparent, AI-generated progress reporting builds public trust and meets funding body reporting requirements efficiently.",
        stat: "90%",
      },
    ],
    useCases: [
      "Highway and road construction sequencing",
      "Rail and transit infrastructure planning",
      "Bridge and marine structure scheduling",
      "Water and wastewater treatment facilities",
      "Multi-contract program interface management",
      "Traffic staging and utility diversion planning",
      "Environmental compliance and constraint modeling",
      "Program-level milestone and funding reporting",
    ],
    testimonial: {
      quote:
        "Managing interface risk across eight separate contractors on our rail program was a nightmare before Space AI. Now we have a live view of interface conflicts and AI-suggested resolution options. It's transformed our program management.",
      author: "Sophie Laurent",
      role: "Program Director",
      company: "National Rail Infrastructure Authority",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Infrastructure Demo",
    },
  },

  {
    slug: "commercial",
    title: "Space AI for Commercial Projects",
    tagline: "On Budget. On Time. Every Time.",
    description:
      "Commercial construction — offices, mixed-use, retail, hospitality, and healthcare — demands reliable schedules, smooth trade coordination, and fast response to change. Space AI delivers AI-powered sequencing, automated trade stacking, and real-time schedule intelligence to keep your commercial projects on track from ground-break to handover.",
    metaDescription:
      "Space AI for Commercial Construction: AI-powered scheduling, automated trade sequencing, zone-based flow planning, and real-time delay response for office, retail, healthcare, and mixed-use projects.",
    seoContent:
      "Commercial construction projects are won and lost on schedule and trade coordination. The difference between a profitable project and a loss often comes down to how well trades are sequenced across zones, how quickly the team responds to delays, and how accurately durations are estimated at the start. Space AI for Commercial Projects introduces AI-native scheduling that eliminates the manual sequencing bottleneck: BIM geometry drives automatic task generation, zone flow planning distributes trades for maximum efficiency, and Monte Carlo simulation tells you which parts of your program are genuinely at risk. The result is a commercial construction team that plans with confidence, coordinates trades without conflict, and responds to site reality in real time.",
    keywords: [
      "commercial construction scheduling AI",
      "office building construction planning",
      "mixed-use development scheduling",
      "healthcare construction sequencing",
      "hospitality construction planning",
      "retail construction schedule software",
      "trade coordination software",
      "commercial BIM scheduling",
      "zone-based construction planning",
      "fit-out sequencing software",
      "commercial project controls AI",
      "tenant improvement scheduling",
      "construction schedule optimization",
      "commercial construction risk management",
    ],
    heroImage: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&auto=format&fit=crop",
    icon: "🏙️",
    category: "project-type",
    features: [
      {
        title: "Floor-by-Floor Zone Sequencing",
        description:
          "AI automatically sequences work zone by zone and floor by floor, optimizing trade flow to eliminate bottlenecks, reduce congestion, and maintain a steady production rate.",
        icon: "🏢",
      },
      {
        title: "Fit-Out & Tenant Coordination",
        description:
          "Integrate base-build and tenant fit-out schedules with AI-managed interface logic, ensuring concurrent workstreams are coordinated without conflict.",
        icon: "🔑",
      },
      {
        title: "Healthcare & Critical Environment Planning",
        description:
          "Model infection control zones, operational area constraints, and phased handover requirements for healthcare and critical environment projects directly in the scheduling engine.",
        icon: "🏥",
      },
      {
        title: "Automated Trade Stacking Analysis",
        description:
          "Detect when too many trades are concentrated in a single area and automatically redistribute work to maintain safe, productive working conditions.",
        icon: "📐",
      },
      {
        title: "Owner Change Impact Analysis",
        description:
          "When design changes arrive, AI instantly models the schedule impact, identifies the critical path effect, and proposes resequencing options to recover time.",
        icon: "⚡",
      },
      {
        title: "Defects & Commissioning Closeout",
        description:
          "AI-generate closeout and commissioning sequences with zone-by-zone defect clearance tracking, linked to practical completion milestones.",
        icon: "✅",
      },
    ],
    benefits: [
      {
        title: "Faster Project Delivery",
        description:
          "AI-optimized zone flow and automated trade sequencing accelerate commercial project delivery significantly.",
        stat: "22%",
      },
      {
        title: "Reduce Trade Conflicts",
        description:
          "Automatic trade stacking detection and zone redistribution eliminates the most common source of commercial project delay.",
        stat: "65%",
      },
      {
        title: "Improve Budget Certainty",
        description:
          "Probabilistic scheduling gives commercial owners and developers a realistic view of cost exposure from schedule risk.",
        stat: "2.5x",
      },
      {
        title: "Accelerate Fit-Out Closeout",
        description:
          "AI-driven closeout sequencing reduces the tail-end snag and commissioning period that erodes commercial project margins.",
        stat: "30%",
      },
    ],
    useCases: [
      "High-rise commercial office construction",
      "Mixed-use development phasing and coordination",
      "Healthcare and hospital construction planning",
      "Hospitality and hotel construction scheduling",
      "Retail and fit-out sequencing",
      "Tenant improvement coordination",
      "Base-build and fit-out interface management",
      "Commissioning and closeout sequencing",
    ],
    testimonial: {
      quote:
        "We handed Space AI our BIM model on Monday and had a fully sequenced, zone-optimized schedule ready for the client by Wednesday. The trade stacking analysis alone saved us weeks of manual effort.",
      author: "Anita Rosenberg",
      role: "Project Director",
      company: "Summit Commercial Builders",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Commercial Demo",
    },
  },

  {
    slug: "ideal-projects",
    title: "Ideal Projects for Space AI",
    tagline: "Where AI Scheduling Delivers the Greatest Impact",
    description:
      "Space AI delivers the most transformative results on projects where complexity, interdependency, and schedule risk are highest. Discover the project profiles where AI-powered sequencing creates the clearest competitive advantage — and why leading contractors and owners choose Space AI for their most demanding work.",
    metaDescription:
      "Discover the ideal construction project types for Space AI: complex BIM-driven projects, multi-trade coordination, phased delivery, and high-risk programs where AI scheduling delivers maximum ROI.",
    seoContent:
      "Not every project needs an AI construction scheduling platform — but the projects that do are exactly where the difference between on-time delivery and costly overrun is decided. Space AI is purpose-built for projects with high element counts, complex trade interdependencies, tight delivery windows, and significant schedule risk. These are the projects where manual CPM scheduling simply cannot keep pace with the geometry, the resource constraints, and the real-time change that characterizes modern construction. If your project fits any of the profiles below, Space AI will deliver measurable value from day one.",
    keywords: [
      "best projects for AI construction scheduling",
      "complex construction project management",
      "high-rise construction AI planning",
      "BIM-driven construction scheduling",
      "multi-trade construction coordination",
      "large-scale construction AI platform",
      "construction project risk mitigation",
      "phased construction delivery planning",
      "construction schedule AI ROI",
      "when to use AI construction software",
    ],
    heroImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop",
    icon: "🎯",
    category: "project-type",
    features: [
      {
        title: "High Element Count Projects",
        description:
          "Projects with 50,000+ BIM elements — towers, hospitals, data centers, industrial plants — where manual sequencing is impractical and AI-driven automation creates an immediate, quantifiable advantage.",
        icon: "🏗️",
      },
      {
        title: "Multi-Trade Interdependency",
        description:
          "Projects with dense structural, MEP, and fit-out interdependencies that create cascading delay risk — exactly the environment where geometry-driven AI sequencing and Monte Carlo simulation deliver maximum value.",
        icon: "🔗",
      },
      {
        title: "Phased Handover Programs",
        description:
          "Developments with multiple handover stages requiring simultaneous construction, commissioning, and occupation — where AI zone sequencing and real-time resequencing are critical to meeting each milestone.",
        icon: "📅",
      },
      {
        title: "Fast-Track & Compressed Programs",
        description:
          "Projects with aggressive finish dates where every inefficiency in trade sequencing and resource allocation matters — and where AI optimization generates schedule savings impossible to find manually.",
        icon: "⚡",
      },
      {
        title: "High-Value Delay Risk Projects",
        description:
          "Projects where liquidated damages, revenue loss, or operational impact make schedule overrun extremely costly — and where probabilistic risk intelligence is essential for proactive management.",
        icon: "💰",
      },
      {
        title: "Repeat or Portfolio Programs",
        description:
          "Programs with recurring project types — retail rollouts, residential developments, infrastructure corridors — where Space AI's self-learning engine compounds improvement across every successive project.",
        icon: "📈",
      },
    ],
    benefits: [
      {
        title: "Highest ROI on Complex Projects",
        description:
          "The more complex the project, the greater the value Space AI delivers — AI scheduling creates exponential returns on complexity.",
        stat: "8x",
      },
      {
        title: "Quantifiable Risk Reduction",
        description:
          "Probabilistic scheduling quantifies delay risk in dollar terms, enabling proactive investment in risk mitigation.",
        stat: "45%",
      },
      {
        title: "Faster Preconstruction",
        description:
          "AI reduces preconstruction schedule preparation time significantly, enabling faster bid submission and better quality proposals.",
        stat: "70%",
      },
      {
        title: "Compounding Portfolio Value",
        description:
          "Self-learning AI improves with every project, creating increasing productivity gains across portfolio programs.",
        stat: "3x",
      },
    ],
    useCases: [
      "High-rise residential and commercial towers",
      "Hospitals and healthcare campuses",
      "Data centers and mission-critical facilities",
      "Industrial and process plants",
      "Fast-track education and civic facilities",
      "Mixed-use urban development programs",
      "Retail and hospitality portfolio rollouts",
      "Major infrastructure corridor programs",
    ],
    testimonial: {
      quote:
        "Space AI is purpose-built for the kind of projects we do. Complex, multi-trade, fast-track — the kind of work where manual scheduling always falls short. Now we have a platform that matches our project complexity.",
      author: "Daniel Okonkwo",
      role: "Chief Estimator",
      company: "Titan Construction Partners",
    },
    cta: {
      primary: "See If Your Project Qualifies",
      secondary: "View Project Examples",
    },
  },
];

// ─────────────────────────────────────────────
// SOLUTIONS — PARTNERS PROGRAM
// ─────────────────────────────────────────────

export const solutionsSolutions: Solution[] = [
  {
    slug: "partners-program",
    title: "Space AI Partners Program",
    tagline: "Grow Together. Build the Future of Construction Intelligence.",
    description:
      "The Space AI Partners Program is built for technology providers, consulting firms, BIM integrators, and construction software companies who want to bring AI-native scheduling intelligence to their clients and platforms. Join a network of partners who are reshaping the future of construction delivery.",
    metaDescription:
      "Join the Space AI Partners Program: technology integrations, consulting partnerships, reseller opportunities, and co-development programs for construction technology companies and advisors.",
    seoContent:
      "The Space AI Partners Program offers a structured path for organizations that want to embed, resell, or extend AI-native construction scheduling intelligence into their own platforms and client offerings. Whether you are a construction management consultancy, a BIM software provider, a project controls firm, or a technology integrator, Space AI's partnership ecosystem is designed to create mutual value through shared innovation, joint go-to-market, and technical integration. Partners gain early access to Space AI's Construction Knowledge Graph APIs, training and certification programs, co-marketing support, and revenue-sharing models that reward deep integration and client success. Together, we are building the intelligence layer that will define the next generation of construction delivery.",
    keywords: [
      "construction technology partner program",
      "BIM software integration partner",
      "construction AI reseller program",
      "project controls consulting partner",
      "construction software API integration",
      "construction technology ecosystem",
      "Space AI integration partner",
      "construction intelligence platform partner",
      "AEC technology partnership program",
      "construction consulting partner network",
      "BIM consulting partnership",
      "construction SaaS partner program",
      "construction technology co-development",
      "AEC software reseller partnership",
    ],
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    icon: "🤝",
    category: "solutions",
    features: [
      {
        title: "Technology Integration Partners",
        description:
          "Embed Space AI's Construction Knowledge Graph and scheduling engine into your existing platform via our open API. Deliver AI-native scheduling as part of your product without building from scratch.",
        icon: "🔌",
      },
      {
        title: "Consulting & Advisory Partners",
        description:
          "Licensed access to Space AI's full platform for consulting firms to deliver AI-powered schedule analysis, risk simulation, and project intelligence to your clients.",
        icon: "📐",
      },
      {
        title: "Reseller Program",
        description:
          "Become an authorized Space AI reseller with competitive margin structures, sales enablement support, and co-branded marketing materials for your market region.",
        icon: "💼",
      },
      {
        title: "BIM & Digital Twin Integrators",
        description:
          "Deep integration support for BIM platform providers, digital twin vendors, and construction data companies who want to add AI scheduling intelligence to their offering.",
        icon: "🧩",
      },
      {
        title: "Co-Development Program",
        description:
          "Strategic partners with access to our development roadmap, early API releases, and joint product development opportunities to shape the future of Space AI's platform.",
        icon: "🛠️",
      },
      {
        title: "Training & Certification",
        description:
          "Space AI Partner Certification programs for consultants and integrators, including technical certification, client delivery methodology, and ongoing product education.",
        icon: "🎓",
      },
    ],
    benefits: [
      {
        title: "New Revenue Streams",
        description:
          "Add AI scheduling intelligence to your service or product offering with minimal investment and strong partner economics.",
        stat: "2.5x",
      },
      {
        title: "Faster Client Outcomes",
        description:
          "Deliver AI-powered project intelligence to clients faster by building on Space AI's proven platform rather than building from scratch.",
        stat: "6x",
      },
      {
        title: "Stronger Market Position",
        description:
          "Partners consistently report improved win rates and client retention by differentiating with AI construction intelligence.",
        stat: "78%",
      },
      {
        title: "Shared Innovation",
        description:
          "Co-development partners gain early access to new capabilities, positioning their clients ahead of the market with next-generation features.",
        stat: "12mo",
      },
    ],
    useCases: [
      "Embedding AI scheduling into BIM platforms",
      "Delivering AI risk simulation for owner clients",
      "Reselling Space AI to GCs in your region",
      "Building custom integrations for ERP or PMIS systems",
      "Adding AI scheduling to construction consulting services",
      "Joint go-to-market with complementary technology providers",
      "Digital twin integration for infrastructure programs",
      "Training and certification for project controls teams",
    ],
    testimonial: {
      quote:
        "Partnering with Space AI has opened a completely new service line for our project controls practice. Our clients were asking for probabilistic scheduling — now we can deliver it with confidence on any project.",
      author: "Nina Bartholomew",
      role: "Managing Partner",
      company: "Construct Advisory International",
    },
    cta: {
      primary: "Apply to Partner Program",
      secondary: "Download Partner Guide",
    },
  },
];

// ─────────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────────

export const solutions: Solution[] = [
  ...stakeholderSolutions,
  ...projectTypeSolutions,
  ...solutionsSolutions,
];

// ─────────────────────────────────────────────
// NAVIGATION STRUCTURE
// ─────────────────────────────────────────────

export type SolutionsNav = typeof solutionsNav;

export const solutionsNav = {
  byStakeholder: {
    label: "By Stakeholder",
    items: stakeholderSolutions.map((s) => ({
      slug: s.slug,
      title: s.title,
      icon: s.icon,
      tagline: s.tagline,
    })),
  },
  byProjectType: {
    label: "By Project Type",
    items: projectTypeSolutions.map((s) => ({
      slug: s.slug,
      title: s.title,
      icon: s.icon,
      tagline: s.tagline,
    })),
  },
  solutions: {
    label: "Solutions",
    items: solutionsSolutions.map((s) => ({
      slug: s.slug,
      title: s.title,
      icon: s.icon,
      tagline: s.tagline,
    })),
  },
};

// ─────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}

export function getSolutionsByCategory(
  category: Solution["category"]
): Solution[] {
  return solutions.filter((s) => s.category === category);
}