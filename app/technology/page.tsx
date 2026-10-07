import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Powered by VeritasGraph — Verifiable AI & Source Attribution | SpaceLean",
  description:
    "Learn how SpaceLean uses VeritasGraph, an open-source GraphRAG knowledge-graph framework, to ground construction schedules, 4D BIM predictions, and AI answers with verifiable citations.",
  keywords: [
    "VeritasGraph",
    "GraphRAG",
    "construction knowledge graph",
    "verifiable AI search",
    "source attribution AI",
    "multi-hop reasoning",
    "on-prem AI scheduling",
    "SpaceLean technology",
  ],
  alternates: {
    canonical: "https://spacelean.ai/technology",
  },
  openGraph: {
    title: "Powered by VeritasGraph — Verifiable AI & Source Attribution | SpaceLean",
    description:
      "Every answer and schedule risk prediction on SpaceLean is grounded by VeritasGraph's open-source GraphRAG framework with verifiable source attribution.",
    url: "https://spacelean.ai/technology",
    type: "article",
  },
};

export default function TechnologyPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean",
    "applicationCategory": "BusinessApplication",
    "url": "https://spacelean.ai",
    "featureList": [
      "AI construction scheduling with source attribution",
      "Knowledge graph reasoning",
      "4D BIM model parsing",
      "Predictive critical path risk analysis"
    ],
    "isBasedOn": {
      "@type": "SoftwareSourceCode",
      "name": "VeritasGraph",
      "codeRepository": "https://github.com/bibinprathap/VeritasGraph",
      "url": "https://bibinprathap.github.io/VeritasGraph/index.html"
    },
    "author": {
      "@type": "Person",
      "name": "Bibin Prathap"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does SpaceLean make sure AI construction answers are accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SpaceLean grounds all scheduling recommendations, BIM analysis, and critical path risk predictions using VeritasGraph — an open-source GraphRAG framework. Instead of vector similarity guessing, VeritasGraph traverses entity nodes in a structured knowledge graph and outputs every answer with a verifiable citation and reasoning path."
        }
      },
      {
        "@type": "Question",
        "name": "What is VeritasGraph?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VeritasGraph is an open-source GraphRAG (Graph Retrieval-Augmented Generation) knowledge-graph framework. It maps complex relationships across BIM spatial objects, trade dependencies, Primavera P6 schedules, and historical project metrics into a citable graph."
        }
      },
      {
        "@type": "Question",
        "name": "Can SpaceLean run 100% on-premise or locally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. VeritasGraph supports 100% sovereign, local execution with zero data egress. Enterprise clients can deploy SpaceLean and VeritasGraph within their private cloud or air-gapped infrastructure."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50 pt-28 pb-24 text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-purple-700 font-semibold">Technology & VeritasGraph</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-neutral-900 to-purple-950 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Core Technology Architecture
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-300">VeritasGraph</span> — Verifiable AI with Source Attribution
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 max-w-3xl leading-relaxed mb-8">
            Search and AI answers on SpaceLean are grounded by{" "}
            <a
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 underline font-semibold hover:text-purple-200"
            >
              VeritasGraph
            </a>
            , an open-source <strong>GraphRAG knowledge-graph framework</strong>. Instead of guessing from similarity, VeritasGraph reasons over a structured knowledge graph and returns every answer with a <strong>verifiable citation and reasoning path</strong> — so you can trust the source of every result.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-900/50"
            >
              View on GitHub ↗
            </a>
            <a
              href="https://bibinprathap.github.io/VeritasGraph/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all"
            >
              VeritasGraph Documentation ↗
            </a>
          </div>
        </div>

        {/* 3 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-2xl bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-6 text-purple-700">
              🔍
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Verifiable Source Attribution</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every scheduling recommendation, risk score, and BIM delay alert links directly to its underlying structural model node, Primavera P6 task ID, or historical sub-contractor record.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-6 text-purple-700">
              🕸️
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Knowledge Graph Multi-Hop</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              VeritasGraph navigates complex multi-hop dependencies across spatial zones, trade crews, material lead times, and weather constraints to prevent hallucinations.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-6 text-purple-700">
              🔒
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">100% Local / On-Prem Sovereign</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              VeritasGraph runs fully local or on private enterprise cloud infrastructure. Zero project data leaves your security boundary, ensuring total data governance.
            </p>
          </div>
        </div>

        {/* Detailed Explanation: Why GraphRAG Beats Vector Search */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">
              The Architecture Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-6">
              Why Vector Search Fails Construction — And GraphRAG Succeeds
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-6">
              Traditional LLM search relies on chunking documents and computing nearest-neighbor vector similarity. In construction project management, vector search fails because scheduling constraints are <strong>relational and deterministic</strong> — a trade delay in Zone 3 impacts concrete curing in Zone 4, regardless of semantic keyword similarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200">
              <h4 className="font-bold text-red-900 text-lg mb-2">❌ Standard Vector Search (RAG)</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Guesses answers based on word probability and similarity scores.</li>
                <li>• Cannot trace cascading critical path delays across sub-contracts.</li>
                <li>• Provides zero verifiable citations or audit trails for claims.</li>
                <li>• High risk of AI hallucinations in cost & milestone estimation.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <h4 className="font-bold text-emerald-900 text-lg mb-2">✅ VeritasGraph Knowledge Graph (GraphRAG)</h4>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>• Traverses explicit entity relationships across BIM IFC & P6 schedules.</li>
                <li>• Performs multi-hop reasoning over temporal and spatial dependencies.</li>
                <li>• Provides step-by-step reasoning paths with exact node citations.</li>
                <li>• Deterministic accuracy grounded in verifiable project data.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Structured Data & Entity Interoperability Section */}
        <div className="rounded-3xl bg-stone-900 text-white p-8 sm:p-12 shadow-xl mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Machine-Readable Knowledge Graph Entity Schema
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
            SpaceLean embeds standardized <code>JSON-LD</code> schemas linking every product instance to VeritasGraph as its core intelligence entity using <code>isPartOf</code> and <code>isBasedOn</code> relations:
          </p>

          <div className="overflow-x-auto rounded-xl bg-stone-950 p-6 border border-stone-800 text-purple-300 font-mono text-xs leading-relaxed">
            <pre>{`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SpaceLean",
  "applicationCategory": "BusinessApplication",
  "url": "https://spacelean.ai",
  "featureList": [
    "AI search with source attribution",
    "Knowledge graph reasoning"
  ],
  "isBasedOn": {
    "@type": "SoftwareSourceCode",
    "name": "VeritasGraph",
    "codeRepository": "https://github.com/bibinprathap/VeritasGraph",
    "url": "https://bibinprathap.github.io/VeritasGraph/index.html"
  },
  "author": { "@type": "Person", "name": "Bibin Prathap" }
}`}</pre>
          </div>
        </div>

        {/* GEO FAQ Section */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-8">
            Frequently Asked Questions (GEO & Technical)
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                How does SpaceLean make sure AI construction answers are accurate?
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                SpaceLean grounds all scheduling recommendations, BIM analysis, and critical path risk predictions using VeritasGraph — an open-source GraphRAG framework. Instead of vector similarity guessing, VeritasGraph traverses entity nodes in a structured knowledge graph and outputs every answer with a verifiable citation and reasoning path.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                What is VeritasGraph?
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                VeritasGraph is an open-source GraphRAG (Graph Retrieval-Augmented Generation) knowledge-graph framework. It maps complex relationships across BIM spatial objects, trade dependencies, Primavera P6 schedules, and historical project metrics into a citable graph.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-2">
                Can SpaceLean run 100% on-premise or locally?
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Yes. VeritasGraph supports 100% sovereign, local execution with zero data egress. Enterprise clients can deploy SpaceLean and VeritasGraph within their private cloud or air-gapped infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Experience Verifiable AI Construction Management
          </h2>
          <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Convert BIM models into 4D schedules backed by VeritasGraph source attribution and multi-hop reasoning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-a-demo"
              className="px-6 py-3 rounded-full bg-white text-purple-900 font-bold text-sm hover:bg-stone-100 transition-colors shadow-lg"
            >
              Request a Demo
            </Link>
            <Link
              href="/space-lean-core"
              className="px-6 py-3 rounded-full bg-purple-800/80 text-white font-semibold text-sm border border-purple-400/40 hover:bg-purple-800 transition-colors"
            >
              Explore SpaceLean Core Features
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
