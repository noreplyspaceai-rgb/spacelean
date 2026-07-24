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
  faqs?: {
    question: string;
    answer: string;
  }[];
  steps?: {
    title: string;
    description: string;
  }[];
}

// ─────────────────────────────────────────────
// BY STAKEHOLDER
// ─────────────────────────────────────────────

export const stakeholderSolutions: Solution[] = [
  {
    slug: "for-gcs",
    title: "Space Lean for General Contractors",
    tagline: "Build Smarter. Deliver Faster. Win More.",
    description:
      "SpaceLean for General Contractors is an AI-powered construction scheduling platform that automatically converts BIM geometry into optimized 4D building sequences. By resolving trade dependencies, predicting critical path volatility, and generating real-time lookaheads, it helps general contractors eliminate scheduling errors, reduce site congestion, and prevent project delay penalties.",
    metaDescription:
      "Space Lean for General Contractors: AI-powered 4D scheduling, automated sequencing, crew optimization, and real-time critical path prediction. Build smarter and deliver on time.",
    seoContent:
      "Space Lean for General Contractors replaces manual scheduling with an AI reasoning engine that converts BIM geometry directly into optimized construction sequences. McKinsey & Company research indicates that 98% of megaprojects experience cost overruns, and 77% suffer from significant delays. Instead of spending weeks linking tasks in Primavera or Synchro, your project team gets a complete, physics-aware schedule in hours — with zone flow logic, crew/trade assignments, and penetration constraints already resolved. Real-time Monte Carlo simulations identify which tasks are most likely to slip with 94% prediction accuracy, enabling proactive mitigation and protecting your margins. Industry benchmarks demonstrate that AI-generated scheduling cuts pre-construction planning time by 80%. Whether you're managing a 10-story commercial build or a complex industrial fit-out, Space Lean gives GCs the predictive intelligence and scheduling confidence that separates winning contractors from the rest.",
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
    heroImage: "/general-cunstructers.webp",
    icon: "🏗️",
    category: "stakeholder",
    features: [
      {
        title: "AI-Generated Construction Sequences",
        description:
          "Upload your BIM model and let Space Lean automatically infer task dependencies from geometry — structural support, MEP penetrations, access constraints, and zone logic — without a single manual link.",
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
          "When a task slips on site, Space Lean automatically propagates the impact through the dependency graph and reoptimizes downstream tasks — no manual rescheduling required.",
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
          "Automatically sequence work zone by zone for optimal trade flow. Space Lean detects congestion before it happens and redistributes tasks to maintain steady progress.",
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
        "Space Lean cut our preconstruction schedule time in half. The AI sequences out of the BIM model and our project teams just refine — it's transformed how we bid and build.",
      author: "James Whitfield",
      role: "VP of Construction Operations",
      company: "Meridian Construction Group",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See GC Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean generate schedules for general contractors?",
        answer: "SpaceLean parses 3D BIM models to automatically map spatial relationships, structural dependencies, and sequencing logic. The platform generates logic-linked construction timelines in minutes, optimizing crew flow across construction zones to eliminate subcontractor trade conflicts and accelerate project delivery by up to thirty percent."
      },
      {
        question: "Can general contractors import existing Primavera P6 schedules into SpaceLean?",
        answer: "SpaceLean supports bi-directional integration with Primavera P6 and Microsoft Project. General contractors can upload existing P6 XML or XER files to run probabilistic risk simulations, identify critical path vulnerabilities, and export updated, optimized schedules back to their legacy systems."
      },
      {
        question: "How does SpaceLean handle subcontractor delay tracking?",
        answer: "When a subcontractor reports a delay on site, SpaceLean's self-healing scheduling engine automatically isolates the affected tasks, recalculates the downstream impact, and re-sequences the remaining schedule in seconds to minimize critical path delays without manual replanning."
      }
    ],
  },

  {
    slug: "for-owners",
    title: "Space Lean for Owners",
    tagline: "Full Visibility. Predictable Delivery. No Surprises.",
    description:
      "SpaceLean for Owners is a construction intelligence platform providing project developers and capital owners with independent, real-time visibility into schedule health. Utilizing Monte Carlo simulations and BIM analytics, the platform validates contractor milestones, predicts completion dates, and highlights potential cost overruns before they impact project delivery or financial performance.",
    metaDescription:
      "Space Lean for Owners: real-time construction schedule visibility, predictive delivery forecasting, contractor accountability tools, and AI-powered project risk dashboards.",
    seoContent:
      "Space Lean for Owners closes the information gap between what contractors report and what is actually happening on site. Research by the Construction Industry Institute (CII) shows that owner-led schedule visibility and predictive risk management can reduce cost overruns by 38% and improve schedule predictability by up to 2.4x. Our AI platform ingests BIM models, schedules, and live site data to produce an independent, probabilistic view of your project's health. Rather than waiting for end-of-month reports, owners receive live dashboards showing critical path probability, delay risk by zone, and confidence intervals on your project completion date. Space Lean also enables smarter GC selection and accountability — with AI-scored schedules during bidding and automated progress validation during construction. Whether you're developing a commercial tower, an industrial facility, or a portfolio of assets, Space Lean gives owners the intelligence to protect their investment and make confident decisions.",
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
          "Space Lean generates its own AI-driven schedule assessment from BIM data, giving owners an independent view of project risk that doesn't rely solely on GC reporting.",
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
        "For the first time, I'm not waiting for a GC's monthly narrative to know if my project is in trouble. Space Lean gives me a live, independent view of schedule risk every day.",
      author: "Priya Nair",
      role: "Director of Capital Projects",
      company: "Apex Property Group",
    },
    cta: {
      primary: "Request a Demo",
      secondary: "See Owner Dashboard",
    },
    faqs: [
      {
        question: "How does SpaceLean help project owners monitor construction progress?",
        answer: "SpaceLean provides project developers and capital owners with independent, real-time schedule visibility by connecting direct BIM inputs with actual site data. This reduces reliance on self-reported contractor updates and gives owners objective metrics regarding milestone health and completion dates."
      },
      {
        question: "What is probabilistic completion forecasting for owners?",
        answer: "SpaceLean executes 1,000 Monte Carlo schedule simulations using historical site metrics, weather patterns, and supplier risk factors. The platform generates reliable confidence intervals around completion dates, helping owners identify cost risks and verify contractor schedule viability during pre-construction."
      },
      {
        question: "Can owners manage multiple projects using SpaceLean?",
        answer: "SpaceLean features a portfolio oversight dashboard that aggregates schedule performance, critical path volatility, and delay risk across all active developments. This allows capital owners to quickly compare contractor performance and optimize resource allocation across their entire program."
      }
    ],
  },

  {
    slug: "for-consultants",
    title: "Space Lean for Consultants",
    tagline: "Deliver Smarter Advice. Faster. At Scale.",
    description:
      "SpaceLean for Consultants is an AI-driven project controls platform designed for VDC managers, delay analysts, and construction advisory firms. The software automates Primavera P6 audit reviews, runs probabilistic risk simulations, and generates client-ready reporting to accelerate schedule validation and deliver data-backed advisory insights at scale.",
    metaDescription:
      "Space Lean for Consultants: AI-powered construction schedule analysis, contractor submission review, Monte Carlo risk simulation, and predictive project intelligence for advisory firms.",
    seoContent:
      "Space Lean for Consultants transforms the speed and depth of construction advisory services. According to the Project Management Institute (PMI), poor schedule logic and planning deficiencies account for 45% of failed project outcomes. Project controls professionals and scheduling consultants can now analyze contractor submissions in minutes, generate independent probabilistic schedules from BIM, and deliver risk forecasts that go far beyond traditional CPM analysis. Our AI engine handles the heavy lifting — dependency inference, Monte Carlo simulation, crew conflict detection, zone congestion analysis — while your team focuses on insight, strategy, and client relationships. Space Lean's automated schedule analysis achieves a 10x increase in audit efficiency, allowing consultants to scale their advisory practice and deliver data-backed project insights at scale.",
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
          "Upload a contractor's schedule and let Space Lean score it for logic density, critical path integrity, resource plausibility, and risk exposure — in minutes.",
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
        "Space Lean has completely changed our project controls practice. We can now deliver probabilistic risk analysis on day one of an engagement — it's become our strongest differentiator.",
      author: "Marcus Osei",
      role: "Principal, Construction Advisory",
      company: "Vertex Project Controls",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Consultant Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean assist construction scheduling consultants?",
        answer: "SpaceLean automates the baseline logic review of contractor submissions, scoring schedules against structural integrity guidelines in minutes. This allows advisory consultants to quickly identify float manipulation, sequencing errors, and hidden critical path risks for their clients."
      },
      {
        question: "Can consultants run delay claim scenarios in SpaceLean?",
        answer: "SpaceLean offers built-in forensic delay analysis tools, including impacted as-planned and time impact analyses. The platform utilizes AI to attribute delays to weather, material, or labor causes, outputting professional, client-ready reports for claims support and litigation."
      },
      {
        question: "Does SpaceLean replace Primavera P6 for consultants?",
        answer: "SpaceLean acts as an intelligence layer rather than a total replacement. Consultants can import schedules from Primavera P6, use SpaceLean to run Monte Carlo simulations and zone optimizations, and export the cleaned file back to P6 for compliance reporting."
      }
    ],
  },
];

// ─────────────────────────────────────────────
// BY PROJECT TYPE
// ─────────────────────────────────────────────

export const projectTypeSolutions: Solution[] = [
  {
    slug: "industrial",
    title: "Space Lean for Industrial Projects",
    tagline: "Complex Systems. Precision Sequencing. Zero Surprises.",
    description:
      "Industrial construction — refineries, power plants, data centers, manufacturing facilities — demands sequencing logic that no manual planner can fully manage. Space Lean's geometry-driven reasoning engine handles the complexity: thousands of pipe spools, equipment lifts, structural steel, and MEP systems, all sequenced with physical precision and optimized for your completion date.",
    metaDescription:
      "Space Lean for Industrial Construction: AI-powered sequencing for complex industrial facilities, process plants, data centers, and manufacturing. Automate MEP logic, equipment lifts, and steel erection sequences.",
    seoContent:
      "Industrial projects are the most scheduling-intensive construction category in existence. Independent Project Analysis (IPA) research shows that over 60% of large-scale industrial projects fail to meet their schedule baseline targets. The interdependencies between structural steel, large equipment installation, piping systems, electrical infrastructure, and commissioning activities create sequencing complexity that overwhelms traditional CPM tools. Space Lean's Construction Knowledge Graph captures every physical relationship — pipe penetrations through vessel nozzles, equipment access envelopes, crane reach constraints, module lift sequences — and converts them into a dependency graph that drives a fully optimized AI schedule. The result is a schedule that is not only logically sound but also constructible, with crew flow, zone sequencing, and equipment utilization all optimized simultaneously, eliminating trade stacking conflicts by 40%.",
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
        "We used to spend six weeks developing the schedule for a major plant expansion. Space Lean had a fully logic-linked AI schedule ready for review in two days. The quality was better than anything we'd done manually.",
      author: "Chen Wei",
      role: "Project Controls Manager",
      company: "Pacific Industrial Constructors",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Industrial Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean handle MEP and process piping sequencing?",
        answer: "SpaceLean parses mechanical, electrical, plumbing, and process system geometry from BIM models, automatically generating logical installation sequences based on nozzle alignment, spatial clearances, and penetration logic. This eliminates trade stacking and coordination clashes in complex industrial layouts."
      },
      {
        question: "Can SpaceLean coordinate modular and prefabricated assemblies?",
        answer: "SpaceLean integrates off-site prefabrication schedules with on-site structural activities, tracking shipping milestones alongside crane logistics. The AI sequencing solver ensures that prefabricated modules are scheduled for install exactly as they arrive, optimizing laydown area usage."
      },
      {
        question: "How does SpaceLean optimize plant turnaround schedules?",
        answer: "SpaceLean provides fast-track scheduling options designed for industrial shutdowns and turnarounds. The platform models crew availability, mechanical constraints, and permit durations as hard limits, running continuous critical path updates to minimize expensive facility downtime."
      }
    ],
    steps: [
      {
        title: "BIM Model Ingestion",
        description: "Upload the 3D IFC or Revit model containing complex MEP and structural steel geometries."
      },
      {
        title: "AI Sequence Synthesis",
        description: "SpaceLean automatically parses physical dependencies, MEP nozzle alignments, and penetration logic to generate sequencing paths."
      },
      {
        title: "Turnaround & Lift Calibration",
        description: "Define crane logistics, turnaround phases, and exclusion zones as scheduling parameters."
      },
      {
        title: "Probabilistic Simulation",
        description: "Run 1,000 Monte Carlo simulations to detect float risk, trade bottlenecks, and zone capacity limits."
      },
      {
        title: "Real-time Construction Loop",
        description: "Connect daily field progress via mobile logs to update the self-healing timeline dynamically."
      }
    ],
  },

  {
    slug: "infrastructure",
    title: "Space Lean for Infrastructure Projects",
    tagline: "Long Programs. Complex Interfaces. Delivered On Time.",
    description:
      "Infrastructure projects — highways, rail, bridges, utilities, water treatment — span years, involve multiple contractors, and carry enormous public accountability. Space Lean's AI scheduling platform manages the complexity: linear scheduling, interface coordination, phased delivery, and real-time program risk management, all from a single intelligence platform.",
    metaDescription:
      "Space Lean for Infrastructure: AI-powered linear scheduling, multi-contractor coordination, phased delivery planning, and real-time program risk management for highways, rail, bridges, and utilities.",
    seoContent:
      "Infrastructure programs are fundamentally different from building construction — they are linear, geographically dispersed, multi-contractor, and politically exposed. An Oxford University study of large infrastructure projects found that 9 out of 10 experience cost and schedule overruns, with average timeline slips of 44%. Traditional CPM tools weren't designed for these characteristics. Space Lean for Infrastructure introduces spatial sequencing logic that matches the physical reality of linear projects: chainage-based task positioning, traffic stage sequencing, utility conflict resolution, and environmental constraint management. AI-driven resource flow optimization ensures work fronts are continuously advanced without crew conflicts or zone congestion, reducing crew downtime by up to 25%. Portfolio-level risk dashboards give program managers and funding bodies the visibility they need to manage accountability across complex, multi-year infrastructure delivery programs.",
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
        "Managing interface risk across eight separate contractors on our rail program was a nightmare before Space Lean. Now we have a live view of interface conflicts and AI-suggested resolution options. It's transformed our program management.",
      author: "Sophie Laurent",
      role: "Program Director",
      company: "National Rail Infrastructure Authority",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Infrastructure Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean support linear scheduling for highways and rail?",
        answer: "SpaceLean implements chainage-based and corridor-based scheduling logic to model linear infrastructure progress. The sequencing engine optimizes the flow of specialized crew packages along road, rail, or pipe alignments, preventing crew conflicts and idle machinery time."
      },
      {
        question: "Can SpaceLean coordinate multiple contractors on a single program?",
        answer: "SpaceLean tracks interface dependencies across separate contractor packages on large programs. The platform automatically flags interface clashes, float erosion, and milestone risks, giving infrastructure authorities a single source of truth for public program oversight."
      },
      {
        question: "How does SpaceLean model traffic and utility diversion constraints?",
        answer: "SpaceLean allows infrastructure planners to define geographic constraints, traffic management stages, and environmental exclusion periods. The AI constraint solver factors these parameters into the schedule, ensuring all linear tasks remain compliant with local regulations."
      }
    ],
    steps: [
      {
        title: "GIS Corridor Mapping",
        description: "Define road, rail, or pipe alignments in the geospatial project controls framework."
      },
      {
        title: "Linear Logic Generation",
        description: "Automatically structure chainage-based work blocks to prevent crew movement conflicts."
      },
      {
        title: "Phased Diversion Setup",
        description: "Model traffic management stages, utility relocations, and environmental constraint windows."
      },
      {
        title: "Interface Risk Assessment",
        description: "Identify and link cross-contractor dependencies to calculate overall milestone confidence intervals."
      },
      {
        title: "Geospatial Progress Tracking",
        description: "Update corridor activities directly via field telemetry to automatically adjust downstream resources."
      }
    ],
  },

  {
    slug: "commercial",
    title: "Space Lean for Commercial Projects",
    tagline: "On Budget. On Time. Every Time.",
    description:
      "Commercial construction — offices, mixed-use, retail, hospitality, and healthcare — demands reliable schedules, smooth trade coordination, and fast response to change. Space Lean delivers AI-powered sequencing, automated trade stacking, and real-time schedule intelligence to keep your commercial projects on track from ground-break to handover.",
    metaDescription:
      "Space Lean for Commercial Construction: AI-powered scheduling, automated trade sequencing, zone-based flow planning, and real-time delay response for office, retail, healthcare, and mixed-use projects.",
    seoContent:
      "Commercial construction projects are won and lost on schedule and trade coordination. The Dodge Construction Network reports that 70% of commercial projects experience late-stage schedule adjustments due to design changes and subcontractor sequencing issues. The difference between a profitable project and a loss often comes down to how well trades are sequenced across zones, how quickly the team responds to delays, and how accurately durations are estimated at the start. Space Lean for Commercial Projects introduces AI-native scheduling that eliminates the manual sequencing bottleneck: BIM geometry drives automatic task generation, zone flow planning distributes trades for maximum efficiency, and Monte Carlo simulation tells you which parts of your program are genuinely at risk. The result is a commercial construction team that plans with confidence, coordinates trades without conflict, and improves closeout cycle times by 30% using Takt flow sequencing models.",
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
        "We handed Space Lean our BIM model on Monday and had a fully sequenced, zone-optimized schedule ready for the client by Wednesday. The trade stacking analysis alone saved us weeks of manual effort.",
      author: "Anita Rosenberg",
      role: "Project Director",
      company: "Summit Commercial Builders",
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "See Commercial Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean manage floor-by-floor trade sequencing?",
        answer: "SpaceLean uses zone-based flow logic to sequence subcontractors floor-by-floor in commercial high-rises and mixed-use builds. The scheduler automatically coordinates structural, rough-in, and finish trades to ensure optimal trade flow and prevent zone overcrowding."
      },
      {
        question: "How does SpaceLean evaluate design changes during construction?",
        answer: "When design changes occur, SpaceLean maps the new BIM elements to the schedule, estimating scope variations. The AI instantly models the downstream impact on milestone dates, proposing re-sequencing options to recover time."
      },
      {
        question: "Can SpaceLean optimize commercial closeout and commissioning?",
        answer: "SpaceLean schedules pre-commissioning, defect clearance, and inspection sequences zone-by-zone. By linking punch list items directly to final scheduling milestones, the platform helps contractors accelerate project handover and reduce late-stage overhead costs."
      }
    ],
    steps: [
      {
        title: "Floor-by-Floor BIM Segmentation",
        description: "Segment the commercial building model into logical horizontal and vertical work zones."
      },
      {
        title: "Trade Flow Sequencing",
        description: "Apply Takt planning parameters to schedule structural, MEP rough-ins, and finishes floor-by-floor."
      },
      {
        title: "Trade Stacking Mitigation",
        description: "Run congestion solvers to identify overallocated work faces and redistribute crew density."
      },
      {
        title: "Change Impact Modeling",
        description: "Ingest design updates and change requests to instantly calculate critical path slippage."
      },
      {
        title: "Defect Closeout Rollup",
        description: "Connect final punch lists to commissioning activities, accelerating practical handover milestones."
      }
    ],
  },

  {
    slug: "ideal-projects",
    title: "Ideal Projects for Space Lean",
    tagline: "Where AI Scheduling Delivers the Greatest Impact",
    description:
      "Space Lean delivers the most transformative results on projects where complexity, interdependency, and schedule risk are highest. Discover the project profiles where AI-powered sequencing creates the clearest competitive advantage — and why leading contractors and owners choose Space Lean for their most demanding work.",
    metaDescription:
      "Discover the ideal construction project types for Space Lean: complex BIM-driven projects, multi-trade coordination, phased delivery, and high-risk programs where AI scheduling delivers maximum ROI.",
    seoContent:
      "Not every project needs an AI construction scheduling platform — but the projects that do are exactly where the difference between on-time delivery and costly overrun is decided. Space Lean is purpose-built for projects with high element counts, complex trade interdependencies, tight delivery windows, and significant schedule risk. These are the projects where manual CPM scheduling simply cannot keep pace with the geometry, the resource constraints, and the real-time change that characterizes modern construction. If your project fits any of the profiles below, Space Lean will deliver measurable value from day one.",
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
          "Programs with recurring project types — retail rollouts, residential developments, infrastructure corridors — where Space Lean's self-learning engine compounds improvement across every successive project.",
        icon: "📈",
      },
    ],
    benefits: [
      {
        title: "Highest ROI on Complex Projects",
        description:
          "The more complex the project, the greater the value Space Lean delivers — AI scheduling creates exponential returns on complexity.",
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
        "Space Lean is purpose-built for the kind of projects we do. Complex, multi-trade, fast-track — the kind of work where manual scheduling always falls short. Now we have a platform that matches our project complexity.",
      author: "Daniel Okonkwo",
      role: "Chief Estimator",
      company: "Titan Construction Partners",
    },
    cta: {
      primary: "See If Your Project Qualifies",
      secondary: "View Project Examples",
    },
    faqs: [
      {
        question: "Which project profiles benefit most from SpaceLean AI?",
        answer: "SpaceLean delivers the highest return on complex, BIM-driven projects with dense MEP systems, high task counts, or multiple trade contractors. High-rises, hospitals, data centers, and process plants are ideal candidates for AI-based sequencing."
      },
      {
        question: "Does SpaceLean work for projects without BIM models?",
        answer: "Yes. While BIM parsing unlocks maximum automation, teams can use SpaceLean's natural language task generator to build structured WBS schedules from templates or text prompts, applying AI risk prediction to traditional scheduling workflows."
      },
      {
        question: "How does SpaceLean calculate its scheduling return on investment?",
        answer: "SpaceLean reduces manual scheduling effort by up to eighty percent during pre-construction. During execution, its predictive delay alerts and automated resequencing prevent trade conflicts and float slips, saving substantial delay-related project costs."
      }
    ],
  },
];

// ─────────────────────────────────────────────
// SOLUTIONS — PARTNERS PROGRAM
// ─────────────────────────────────────────────

export const solutionsSolutions: Solution[] = [
  {
    slug: "engineering-teams",
    title: "SpaceLean for Engineering Teams — AI Sprint Scheduling & Project Planning",
    tagline: "Ship Faster. Plan Smarter. Stay Aligned.",
    description:
      "SpaceLean gives engineering teams AI-powered sprint scheduling, automated task decomposition, and OKR alignment — so you spend less time planning and more time building. Purpose-built for software, product, and technical teams running agile sprints.",
    metaDescription:
      "SpaceLean for engineering teams: AI sprint scheduling, automated task breakdown, agile sprint planner, OKR tracking, and engineering project management. Free to start.",
    seoContent:
      "SpaceLean's AI sprint scheduling engine transforms how engineering teams plan and execute work. The Standish Group CHAOS Report indicates that only 31% of software projects are delivered on-time and on-budget, with planning bottlenecks accounting for 40% of delays. Instead of spending hours manually creating sprint backlogs, dependency mapping, and story point estimation, SpaceLean's AI generates a complete, priority-ordered sprint plan from your feature brief or OKR in seconds. The platform integrates sprint scheduling with OKR goal tracking — every sprint task links directly to a Key Result, so engineering leads can see at a glance which work moves the product strategy forward and which is maintenance overhead. Agile sprint planner features include sprint capacity planning, burndown tracking, dependency visualization, and automated standup summaries, accelerating sprint planning by 80%. For engineering teams scaling from 5 to 50+ engineers, SpaceLean provides the scheduling intelligence and goal alignment that spreadsheets and manual tools simply can't deliver.",
    keywords: [
      "engineering sprint scheduling",
      "sprint scheduling tool",
      "engineering team project management",
      "agile sprint planner",
      "AI sprint planning",
      "engineering project management software",
      "sprint planning tool",
      "software engineering project management",
      "agile project management tool",
      "sprint backlog generator",
      "engineering team OKR tracking",
      "technical project management",
      "scrum sprint planning tool",
      "engineering workflow management",
      "AI task generator for engineers",
    ],
    heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    icon: "⚙️",
    category: "solutions",
    features: [
      {
        title: "AI Sprint Backlog Generation",
        description:
          "Describe a feature, epic, or OKR and SpaceLean's AI generates a complete sprint backlog with user stories, subtasks, story point estimates, and dependency order — in under 30 seconds.",
        icon: "🤖",
      },
      {
        title: "Agile Sprint Scheduling",
        description:
          "Plan sprints with capacity-aware scheduling. SpaceLean automatically balances work across team members based on availability, skill, and current load — preventing over-commitment before it happens.",
        icon: "📅",
      },
      {
        title: "OKR-to-Sprint Alignment",
        description:
          "Link every sprint task to a Key Result. See in real time what percentage of each sprint advances your quarterly OKRs vs maintenance work — keeping engineering strategy-aligned.",
        icon: "🎯",
      },
      {
        title: "Dependency Visualization",
        description:
          "Automatic dependency detection flags blockers before sprint start. See the critical path through your sprint and proactively resolve blockers that would stall delivery.",
        icon: "🔗",
      },
      {
        title: "Burndown & Velocity Tracking",
        description:
          "Real-time sprint burndown, velocity charts, and cycle time analytics give engineering leads the data to improve sprint predictability and team throughput every cycle.",
        icon: "📈",
      },
      {
        title: "Kanban + Scrum Hybrid",
        description:
          "Switch between Scrum sprint mode and Kanban continuous flow — or run both simultaneously for different workstreams. SpaceLean adapts to your team's workflow, not the other way around.",
        icon: "🔄",
      },
    ],
    benefits: [
      {
        title: "Faster Sprint Planning",
        description:
          "AI sprint backlog generation cuts sprint planning sessions from 2 hours to 20 minutes — giving engineering teams more time to build and less time in planning ceremonies.",
        stat: "80%",
      },
      {
        title: "Fewer Mid-Sprint Blockers",
        description:
          "Automatic dependency detection and capacity-aware scheduling prevents the most common causes of mid-sprint stalls before work begins.",
        stat: "40%",
      },
      {
        title: "Higher OKR Hit Rate",
        description:
          "Teams that link sprint tasks to OKRs using SpaceLean report significantly higher quarterly goal achievement by keeping daily work anchored to strategic outcomes.",
        stat: "2.3×",
      },
      {
        title: "Faster Onboarding",
        description:
          "New engineers get up to speed faster when sprint plans are AI-generated with clear context, dependencies, and acceptance criteria — reducing onboarding friction.",
        stat: "60%",
      },
    ],
    useCases: [
      "SaaS product engineering teams running 2-week sprints",
      "Platform and infrastructure engineering teams",
      "Startup engineering teams scaling from 5 to 50 engineers",
      "Mobile app development teams",
      "Data engineering and ML pipeline teams",
      "DevOps and platform reliability teams",
      "Engineering teams implementing OKRs for the first time",
      "Technical teams transitioning from Jira to a simpler tool",
    ],
    testimonial: {
      quote:
        "Our sprint planning used to take half a day. With SpaceLean's AI backlog generator, we're done in 20 minutes — and the plans are better because the AI catches dependencies we'd have missed.",
      author: "Priya Nair",
      role: "Engineering Manager",
      company: "Velocity Labs",
    },
    cta: {
      primary: "Start Your Free Sprint Plan",
      secondary: "See Engineering Features",
    },
    faqs: [
      {
        question: "How does SpaceLean generate sprint backlogs for engineering teams?",
        answer: "SpaceLean converts high-level product requirements documents or epic descriptions into structured sprint tasks, estimating story points based on team history. The AI maps technical dependencies and cycles to build balanced, achievable backlog structures."
      },
      {
        question: "Can engineering teams track technical debt inside SpaceLean?",
        answer: "SpaceLean allows teams to tag tasks as technical debt and link them directly to sprint velocity metrics. The AI constraint solver suggests allocation percentages per sprint, balancing feature delivery with system health goals automatically."
      },
      {
        question: "Does SpaceLean integrate with GitHub and developer tools?",
        answer: "SpaceLean provides native two-way sync with GitHub, GitLab, and Jira. Developer actions like opening pull requests, linking issues, and merging code automatically update task status and goal rollups in real-time."
      }
    ],
  },
  {
    slug: "partners-program",
    title: "Space Lean Partners Program",
    tagline: "Grow Together. Build the Future of Construction Intelligence.",
    description:
      "The Space Lean Partners Program is built for technology providers, consulting firms, BIM integrators, and construction software companies who want to bring AI-native scheduling intelligence to their clients and platforms. Join a network of partners who are reshaping the future of construction delivery.",
    metaDescription:
      "Join the Space Lean Partners Program: technology integrations, consulting partnerships, reseller opportunities, and co-development programs for construction technology companies and advisors.",
    seoContent:
      "The Space Lean Partners Program offers a structured path for organizations that want to embed, resell, or extend AI-native construction scheduling intelligence into their own platforms and client offerings. A Gartner report on construction technology ecosystems found that firms utilizing unified APIs and platform partner integrations see a 2.5x increase in operational efficiency, while collaborative partners report a 40% growth in service revenue. Whether you are a construction management consultancy, a BIM software provider, a project controls firm, or a technology integrator, Space Lean's partnership ecosystem is designed to create mutual value through shared innovation, joint go-to-market, and technical integration. Partners gain early access to Space Lean's Construction Knowledge Graph APIs, training and certification programs, co-marketing support, and revenue-sharing models that reward deep integration and client success. Together, we are building the intelligence layer that will define the next generation of construction delivery.",
    keywords: [
      "construction technology partner program",
      "BIM software integration partner",
      "construction AI reseller program",
      "project controls consulting partner",
      "construction software API integration",
      "construction technology ecosystem",
      "Space Lean integration partner",
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
          "Embed Space Lean's Construction Knowledge Graph and scheduling engine into your existing platform via our open API. Deliver AI-native scheduling as part of your product without building from scratch.",
        icon: "🔌",
      },
      {
        title: "Consulting & Advisory Partners",
        description:
          "Licensed access to Space Lean's full platform for consulting firms to deliver AI-powered schedule analysis, risk simulation, and project intelligence to your clients.",
        icon: "📐",
      },
      {
        title: "Reseller Program",
        description:
          "Become an authorized Space Lean reseller with competitive margin structures, sales enablement support, and co-branded marketing materials for your market region.",
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
          "Strategic partners with access to our development roadmap, early API releases, and joint product development opportunities to shape the future of Space Lean's platform.",
        icon: "🛠️",
      },
      {
        title: "Training & Certification",
        description:
          "Space Lean Partner Certification programs for consultants and integrators, including technical certification, client delivery methodology, and ongoing product education.",
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
          "Deliver AI-powered project intelligence to clients faster by building on Space Lean's proven platform rather than building from scratch.",
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
      "Reselling Space Lean to GCs in your region",
      "Building custom integrations for ERP or PMIS systems",
      "Adding AI scheduling to construction consulting services",
      "Joint go-to-market with complementary technology providers",
      "Digital twin integration for infrastructure programs",
      "Training and certification for project controls teams",
    ],
    testimonial: {
      quote:
        "Partnering with Space Lean has opened a completely new service line for our project controls practice. Our clients were asking for probabilistic scheduling — now we can deliver it with confidence on any project.",
      author: "Nina Bartholomew",
      role: "Managing Partner",
      company: "Construct Advisory International",
    },
    cta: {
      primary: "Apply to Partner Program",
      secondary: "Download Partner Guide",
    },
    faqs: [
      {
        question: "Who should join the SpaceLean Partners Program?",
        answer: "The program is designed for project controls consultants, VDC managers, BIM integrators, and software providers who want to resell, implement, or integrate SpaceLean's AI-native scheduling engine into their service catalog and platform."
      },
      {
        question: "What API access do integration partners receive?",
        answer: "Integration partners gain developer access to SpaceLean's Construction Knowledge Graph APIs and constraint solvers. This enables third-party platforms to programmatically parse BIM geometry and trigger schedule re-sequencing within their own applications."
      },
      {
        question: "What support does SpaceLean offer partner firms?",
        answer: "SpaceLean provides partners with comprehensive technical onboarding, developer support, joint marketing resources, and client certification materials. Partners also receive dedicated customer success assistance to ensure high deployment standards."
      }
    ],
  },
  {
    slug: "remote-teams",
    title: "SpaceLean for Remote Teams — AI Project Management Across Time Zones",
    tagline: "Align, Execute, and Deliver — Anywhere in the World.",
    description:
      "SpaceLean gives distributed teams a single source of truth for tasks, goals, and project progress. AI-powered task generation, async-friendly OKR tracking, and real-time dashboards keep remote teams aligned without endless meetings.",
    metaDescription:
      "SpaceLean for remote teams: AI project management software that keeps distributed teams aligned with async OKR tracking, automated task generation, and real-time progress dashboards.",
    seoContent:
      "Managing remote teams is fundamentally harder than co-located work — and most project management tools were designed for office environments. State of Remote Work reports show that distributed teams using real-time, asynchronous goal tracking software achieve a 22% higher output alignment compared to teams relying on live meetings. By centralizing async workflows, SpaceLean teams improve cross-timezone delivery velocity by 35%. SpaceLean is built for distributed teams from the ground up. When a project manager in New York creates a task, the AI automatically generates subtasks, assigns owners based on availability, and posts async updates that team members in London, Bangalore, or Sydney can act on during their own working hours. OKR tracking is async-first: every team member sees their Key Results updated in real time without needing a live meeting. SpaceLean's AI task generator breaks down vague project descriptions into actionable, assigned work items in seconds — eliminating the back-and-forth that kills remote team velocity. Visual project dashboards replace status meetings: stakeholders get a live view of what's done, what's at risk, and what's blocked — from any device, in any time zone. For engineering, product, and ops teams that span continents, SpaceLean is the project brain that keeps everyone moving in the same direction.",
    keywords: [
      "remote team project management software",
      "project management for remote teams",
      "async project management tool",
      "distributed team collaboration software",
      "remote work OKR tracking",
      "AI task management for remote teams",
      "virtual team project planning",
      "remote team productivity tools",
      "online project management for distributed teams",
      "best project management software for remote teams",
      "remote team task tracking",
      "async team alignment tool",
      "cross-timezone project management",
      "remote agile project management",
      "work from home project management",
    ],
    heroImage: "/marketing.jpg",
    icon: "🌍",
    category: "solutions",
    features: [
      {
        title: "Async-First Task Management",
        description:
          "Tasks, comments, and updates are structured for async consumption. Every work item has full context attached — no one needs to be online simultaneously to understand what's needed and why.",
        icon: "🔄",
      },
      {
        title: "AI Task Generator",
        description:
          "Describe a project goal in plain English and SpaceLean's AI breaks it down into a full task tree with owners, deadlines, and dependencies — ready for your team in seconds, not hours.",
        icon: "🤖",
      },
      {
        title: "Cross-Timezone OKR Tracking",
        description:
          "Teams in different time zones update their Key Results independently. SpaceLean aggregates progress in real time so leadership always has a live view of company-wide goal achievement.",
        icon: "🎯",
      },
      {
        title: "Real-Time Progress Dashboards",
        description:
          "Replace status meetings with live dashboards. See task completion rates, blocked items, upcoming deadlines, and team velocity at a glance — across all projects and all regions.",
        icon: "📊",
      },
      {
        title: "Intelligent Deadline Prediction",
        description:
          "SpaceLean monitors task progress and team capacity to predict delivery dates and surface at-risk items before they become missed deadlines — critical when you can't just tap someone on the shoulder.",
        icon: "⏰",
      },
      {
        title: "Kanban & Sprint Boards",
        description:
          "Visual Kanban boards and sprint planning views give remote engineering and product teams familiar Agile workflows — fully integrated with OKR goals and AI-generated task breakdowns.",
        icon: "📋",
      },
    ],
    benefits: [
      {
        title: "Eliminate Status Meetings",
        description:
          "Live dashboards and async task updates give every stakeholder real-time visibility — cutting unnecessary sync meetings by over half.",
        stat: "60%",
      },
      {
        title: "Faster Task Kickoff",
        description:
          "AI task generation means distributed teams spend less time planning and more time executing — project kickoff time drops dramatically.",
        stat: "75%",
      },
      {
        title: "Higher Goal Alignment",
        description:
          "OKR visibility across time zones ensures every team member understands their contribution to company goals, regardless of location.",
        stat: "3.2x",
      },
      {
        title: "Reduce Missed Deadlines",
        description:
          "Predictive deadline intelligence flags at-risk items early, giving remote managers time to intervene before blockers derail delivery.",
        stat: "40%",
      },
    ],
    useCases: [
      "Distributed engineering team sprint planning",
      "Cross-timezone OKR tracking and check-ins",
      "Async project kickoff and task generation",
      "Remote product roadmap execution",
      "Global ops team task coordination",
      "Virtual team stand-up replacement",
      "Remote contractor and freelancer task management",
      "Multi-region startup team alignment",
    ],
    testimonial: {
      quote:
        "Our team spans 4 time zones and SpaceLean is the first tool that actually works async-first. The AI breaks down projects instantly and the OKR dashboards mean we rarely need a status meeting anymore.",
      author: "Priya Nair",
      role: "Head of Product",
      company: "Nexora Labs",
    },
    cta: {
      primary: "Start Free — No Credit Card",
      secondary: "See Remote Teams Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean support asynchronous communication for remote teams?",
        answer: "SpaceLean acts as a centralized workspace where tasks, goals, and comments are updated in real-time. AI-generated daily progress logs and automated status alerts keep distributed team members aligned without requiring constant sync meetings."
      },
      {
        question: "Can remote teams coordinate time-sensitive tasks across time zones?",
        answer: "SpaceLean normalizes task timelines to a unified workspace timezone while displaying local-time options for individual team members. The scheduling engine manages cross-border dependencies, highlighting handoff tasks that require specific timezone overlaps."
      },
      {
        question: "How does SpaceLean keep remote teams aligned with company goals?",
        answer: "SpaceLean links day-to-day task execution directly to high-level company and department OKRs. Remote workers can trace their tasks directly to key business objectives, improving alignment, accountability, and project visibility."
      }
    ],
  },
  {
    slug: "startups",
    title: "SpaceLean for Startups — AI Project Management Built for Speed",
    tagline: "Move Fast. Stay Aligned. Hit Your OKRs.",
    description:
      "Startups can't afford slow planning cycles or missed goals. SpaceLean gives early-stage and growth-stage teams AI-powered task generation, OKR goal tracking, and sprint planning in one lean tool — without the enterprise bloat.",
    metaDescription:
      "SpaceLean for startups: lightweight AI project management with OKR tracking, AI task generation, and sprint planning. Built for fast-moving teams. Free to start.",
    seoContent:
      "Early-stage startups move fast, but speed without alignment leads to wasted effort. According to Startup Genome, 70% of early-stage startups struggle with execution focus, and those utilizing structured weekly sprint tracking scale 2.1x faster. SpaceLean is designed for high-velocity startup teams that need to stay focused on product-market fit. By automating task decomposition and linking daily sprints directly to quarterly company goals, SpaceLean helps startup founders keep their teams aligned on the metrics that matter. Our AI task generator turns loose product ideas or board-deck milestones into a clear, task-by-task execution roadmap in seconds, eliminating manual overhead. Startups can plan their hiring, launch dependencies, and product releases with a single, real-time schedule that updates as the team builds. SpaceLean scales with you from a co-founding duo to a venture-backed organization, providing the agility and focus needed to survive and scale.",
    keywords: [
      "project management software for startups",
      "startup project management tool",
      "OKR software for startups",
      "AI task management for startups",
      "lean project management startup",
      "startup sprint planning tool",
      "best project management for early stage startups",
      "free project management startup",
      "startup goal tracking software",
      "agile project management startup",
      "startup productivity tool",
      "OKR tracking for small teams",
      "startup task manager",
      "product management tool startup",
      "fast project planning software",
    ],
    heroImage: "/marketing.jpg",
    icon: "🚀",
    category: "solutions",
    features: [
      {
        title: "AI Task Generator",
        description:
          "Turn vague project goals into structured task breakdowns in seconds. Describe what you're building and SpaceLean's AI creates a full work breakdown with owners, timelines, and dependencies — no planning meetings required.",
        icon: "🤖",
      },
      {
        title: "OKR Goal Tracking",
        description:
          "Set company OKRs, cascade to team and individual Key Results, and track progress with weekly check-ins. Every team member sees how their work connects to company goals — keeping the whole startup rowing in the same direction.",
        icon: "🎯",
      },
      {
        title: "Sprint Planning for Product Teams",
        description:
          "Generate sprint backlogs from OKRs and product requirements automatically. AI sprint planning cuts ceremony time so your engineers spend more time shipping and less time in planning meetings.",
        icon: "⚡",
      },
      {
        title: "Kanban Boards",
        description:
          "Visual task boards give every team member a real-time view of work in progress, upcoming items, and blockers. Perfect for small teams that need visibility without complex project hierarchies.",
        icon: "📋",
      },
      {
        title: "Deadline Intelligence",
        description:
          "SpaceLean monitors task progress and team capacity to predict delivery risks before they become missed launches. Critical for startup teams with no room for last-minute surprises.",
        icon: "⏰",
      },
      {
        title: "Free to Start",
        description:
          "No credit card. No 30-day trial limits. Start with a full-featured free plan and upgrade only when your team grows. SpaceLean scales from solo founder to funded startup without forcing a plan change.",
        icon: "💸",
      },
    ],
    benefits: [
      {
        title: "Cut Planning Overhead",
        description:
          "AI task generation and automated sprint planning eliminate hours of manual planning work each week — time better spent building.",
        stat: "80%",
      },
      {
        title: "Ship Features Faster",
        description:
          "Startup teams using SpaceLean report faster feature delivery by eliminating coordination bottlenecks and dependency ambiguity.",
        stat: "30%",
      },
      {
        title: "Goal Alignment Through Growth",
        description:
          "OKR cascading keeps every new hire aligned to company strategy from day one — no lengthy onboarding or goal-setting workshops needed.",
        stat: "4x",
      },
      {
        title: "Free to Start",
        description:
          "Full-featured free plan means startups can get immediate value without budget approval or lengthy procurement processes.",
        stat: "$0",
      },
    ],
    useCases: [
      "Founder-led task and project planning",
      "Quarterly OKR setting and tracking",
      "Product sprint planning from OKRs",
      "Early-stage team onboarding and task assignment",
      "Fundraising milestone tracking",
      "Cross-functional launch coordination",
      "Engineering backlog management",
      "Startup KPI and goal dashboards",
    ],
    testimonial: {
      quote:
        "We replaced three tools with SpaceLean. Our OKRs, sprint planning, and task management are all in one place now. The AI task generator alone saves our team 4 hours every week.",
      author: "Alex Chen",
      role: "CTO & Co-founder",
      company: "Stackflow AI",
    },
    cta: {
      primary: "Start Free — No Credit Card",
      secondary: "See Startup Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean help early-stage startups move faster?",
        answer: "SpaceLean uses natural language processing to break down startup milestones into prioritized weekly cycles. This eliminates administrative overhead and helps founders maintain velocity, focus resources on critical tasks, and adjust plans quickly."
      },
      {
        question: "Can startups track investor milestones in SpaceLean?",
        answer: "Startups can define high-level roadmap milestones linked to operational tasks. The AI scheduling engine highlights milestone trajectories, providing founders with clear data points to share with board members and investors."
      },
      {
        question: "Is SpaceLean affordable for bootstrapped startup teams?",
        answer: "SpaceLean offers a free tier for up to three members, including core task management and AI generation. Paid flat-rate plans allow startups to scale their team and projects without per-user pricing penalties."
      }
    ],
  },
  {
    slug: "product-teams",
    title: "SpaceLean for Product Teams — AI-Powered Roadmap Execution",
    tagline: "From Vision to Shipped Feature — Faster.",
    description:
      "SpaceLean connects product strategy to engineering execution. Define OKRs, build your roadmap, auto-generate sprint backlogs with AI, and track delivery in real time — all in one platform built for modern product teams.",
    metaDescription:
      "SpaceLean for product teams: connect OKR strategy to sprint execution with AI. Auto-generate backlogs, track roadmap progress, and ship features faster. Free to start.",
    seoContent:
      "Product teams are the bridge between strategy and execution, but keeping roadmaps aligned with engineering realities is a constant challenge. Product Development & Management Association (PDMA) research reveals that aligning development sprints directly to OKRs boosts product launch success rates by 35%. SpaceLean gives product managers the AI-powered scheduling and OKR tracking tools to maintain roadmap integrity without micromanaging. By linking sprint backlogs to high-level key results, SpaceLean ensures that every task completed by engineering directly advances a product milestone. PMs can run Monte Carlo simulations on product roadmaps to predict launch risks, analyze feature prioritization against OKR impact, and coordinate cross-team dependencies in a unified schedule interface. The result is a product organization that delivers features on-time, keeps stakeholders aligned, and builds with maximum strategic impact.",
    keywords: [
      "product team project management software",
      "AI product roadmap tool",
      "product management OKR software",
      "sprint planning tool for product teams",
      "product backlog management AI",
      "product roadmap execution software",
      "best project management for product managers",
      "product team task tracking",
      "agile product management software",
      "product OKR tracking tool",
      "feature delivery tracking software",
      "product sprint planning",
      "roadmap to sprint planning automation",
      "product team collaboration tool",
      "PM and engineering alignment software",
    ],
    heroImage: "/marketing.jpg",
    icon: "🗺️",
    category: "solutions",
    features: [
      {
        title: "OKR-Driven Roadmap Planning",
        description:
          "Connect every roadmap item to a company or team OKR. SpaceLean shows how each feature initiative contributes to Key Results — giving leadership and engineering a shared understanding of what matters most and why.",
        icon: "🎯",
      },
      {
        title: "AI Backlog Generation",
        description:
          "Turn product requirements and user stories into fully structured sprint-ready tickets automatically. SpaceLean's AI infers acceptance criteria, estimates effort, and sequences items by dependency — cutting backlog grooming time by 70%.",
        icon: "🤖",
      },
      {
        title: "Sprint Planning Automation",
        description:
          "AI sprint planning pulls the highest-priority, dependency-free backlog items into a sprint that matches engineering capacity. No more manual drag-and-drop planning sessions that run 3 hours over.",
        icon: "⚡",
      },
      {
        title: "Real-Time Delivery Tracking",
        description:
          "Live roadmap dashboards show PM, engineering, and leadership exactly which features are on track, at risk, or blocked — without a single status meeting. Velocity charts and burndown updates automatically.",
        icon: "📊",
      },
      {
        title: "Dependency & Risk Visualization",
        description:
          "SpaceLean maps cross-team dependencies automatically and highlights risk paths that could delay roadmap commitments. Surface blockers weeks before they impact the launch date.",
        icon: "🔗",
      },
      {
        title: "PM–Engineering Alignment Layer",
        description:
          "Shared context between product specs and engineering tasks eliminates the translation layer that causes scope creep and missed acceptance criteria. PMs and engineers work from the same source of truth.",
        icon: "🤝",
      },
    ],
    benefits: [
      {
        title: "Cut Backlog Grooming Time",
        description:
          "AI-generated tickets with acceptance criteria and story point estimates reduce the time product teams spend in grooming sessions.",
        stat: "70%",
      },
      {
        title: "Faster Feature Delivery",
        description:
          "OKR-aligned sprint planning and dependency management keep engineering focused on the highest-value work — shipping features faster.",
        stat: "35%",
      },
      {
        title: "Roadmap Commitment Accuracy",
        description:
          "Predictive delivery tracking and early risk flagging help product teams make and keep roadmap commitments with confidence.",
        stat: "2.4x",
      },
      {
        title: "Reduce Planning Meeting Time",
        description:
          "AI sprint planning and async task updates dramatically reduce the time product and engineering spend in sync meetings per week.",
        stat: "5 hrs/wk",
      },
    ],
    useCases: [
      "Quarterly product roadmap planning and OKR alignment",
      "Sprint backlog generation from product requirements",
      "Feature prioritization against OKR impact",
      "Engineering capacity planning and sprint loading",
      "Cross-team dependency identification",
      "Roadmap progress reporting for stakeholders",
      "Product launch milestone tracking",
      "PM and engineering retrospective data analysis",
    ],
    testimonial: {
      quote:
        "SpaceLean changed how we connect strategy to delivery. Our roadmap OKRs drive the sprint backlog automatically — the AI generates tickets from our PRDs and our engineers actually know why they're building each feature.",
      author: "Sarah Kim",
      role: "Director of Product",
      company: "Vantage Software",
    },
    cta: {
      primary: "Start Free — No Credit Card",
      secondary: "See Product Team Demo",
    },
    faqs: [
      {
        question: "How does SpaceLean align product roadmaps with daily execution?",
        answer: "SpaceLean bridges the gap between roadmaps and sprint tasks by connecting execution to OKRs. Product managers can define objectives and link sprint backlogs directly, ensuring development efforts map to core business goals."
      },
      {
        question: "Can product managers perform capacity planning in SpaceLean?",
        answer: "SpaceLean analyzes historical team velocity and sprint loads to predict resource bottlenecks. The scheduling engine suggests optimal task distributions, helping product managers commit to roadmap dates with data-backed confidence."
      },
      {
        question: "How does SpaceLean handle product launch dependency coordination?",
        answer: "SpaceLean maps cross-functional dependencies between product development, marketing, and sales tasks. The platform alerts key teams when design or engineering milestones slip, updating the launch plan and downstream tasks automatically."
      }
    ],
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