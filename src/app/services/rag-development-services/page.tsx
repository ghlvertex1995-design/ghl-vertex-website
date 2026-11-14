import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/components/seo/schema";
import {
  Breadcrumbs,
  ServiceHero,
  DirectAnswer,
  TrustStrip,
  ProblemGrid,
  ServiceFeatures,
  WorkflowDiagram,
  ComparisonTable,
  UseCaseGrid,
  GovernanceSection,
  ProcessSteps,
  BusinessOutcomes,
  WhyGHLVertex,
  RelatedServices,
  FaqAccordion,
  ServiceCta,
} from "@/components/services";

export const metadata: Metadata = {
  title: "RAG Development Services | Enterprise Retrieval-Augmented Generation",
  description:
    "Enterprise RAG development services. We architect custom Retrieval-Augmented Generation systems connecting LLMs to your private documentation with zero hallucinations.",
  alternates: {
    canonical: "/services/rag-development-services/",
  },
  openGraph: {
    title: "Enterprise RAG Development Services & Knowledge Systems | GHLVertex",
    description:
      "Ground artificial intelligence in your proprietary business data. Custom document ingestion, hybrid vector search, Cohere reranking, and citation frameworks.",
    url: `${siteConfig.url}/services/rag-development-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Services", href: "/#services" },
  { label: "RAG Development Services", href: "/services/rag-development-services/" },
];

const faqs = [
  {
    question: "What are RAG development services?",
    answer:
      "RAG (Retrieval-Augmented Generation) development services construct production-grade enterprise knowledge architectures that connect LLMs to your private business documentation, databases, and SOPs. By engineering optimized document ingestion pipelines, hybrid vector-and-keyword search, intelligent reranking, and citation frameworks, RAG systems eliminate model hallucinations and deliver verifiable, permission-aware answers to employees and customers.",
  },
  {
    question: "Why is custom RAG superior to standard fine-tuning for business knowledge?",
    answer:
      "Fine-tuning bakes static facts into model weights, which is expensive, slow to update, prone to hallucinations, and lacks verifiable citations. RAG separates knowledge from reasoning: you can update, add, or delete documents in real time without retraining, enforce strict role-based access controls, and provide clickable citations directly linking back to source passages.",
  },
  {
    question: "What document types and databases can a RAG system ingest?",
    answer:
      "We build ingestion pipelines for complex PDFs, Word documents, PowerPoint presentations, Notion workspaces, Google Drive folders, Confluence wikis, Zendesk tickets, SQL databases, and web scrape data, preserving tables and formatting.",
  },
  {
    question: "How do you solve chunking and semantic context loss in complex documents?",
    answer:
      "We utilize semantic, recursive, and layout-aware chunking strategies rather than naive character splitting. We preserve table structures via Markdown/HTML conversion, attach rich metadata (author, department, document version, timestamps), and generate parent-child chunk hierarchies to maintain high-level context alongside granular detail.",
  },
  {
    question: "What is hybrid search and why is it necessary for enterprise RAG?",
    answer:
      "Pure vector search relies on embeddings and frequently misses exact keyword matches (e.g. part numbers, error codes, specific product models, or legal terms). Hybrid search combines dense vector semantic search with sparse BM25 keyword search, merging the results through Reciprocal Rank Fusion (RRF) for near-perfect retrieval accuracy.",
  },
  {
    question: "How does reranking improve retrieval accuracy?",
    answer:
      "Vector search quickly retrieves the top 20–50 candidate document chunks. A cross-encoder reranker (such as Cohere Rerank or BGE-Reranker) then performs deep semantic relevance scoring, ensuring the top 3–5 chunks passed to the LLM context window contain the exact factual answer.",
  },
  {
    question: "How do you enforce role-based access control (RBAC) in RAG search?",
    answer:
      "We embed permission metadata into every vector chunk. When a user executes a search, the retrieval query filters chunks based on the user's verified role (e.g. Executive, Sales, HR, Customer Support), mathematically guaranteeing that unauthorized staff cannot view restricted financial or personnel documents.",
  },
  {
    question: "How do you evaluate and benchmark RAG accuracy before deploying?",
    answer:
      "We utilize automated evaluation frameworks (such as Ragas or TruLens) to measure four critical dimensions: Faithfulness (is the answer grounded in context?), Answer Relevance (does it address the question?), Context Precision (are relevant chunks retrieved?), and Context Recall (was any key information missed?).",
  },
  {
    question: "How long does a typical enterprise RAG implementation take to deploy?",
    answer:
      "A production-grade RAG knowledge system with custom ingestion pipelines, hybrid search, and evaluation benchmarks typically deploys in 3 to 5 weeks.",
  },
];

export default function RagDevelopmentServicesPage() {
  const currentUrl = "/services/rag-development-services/";
  const pageSchema = getWebPageSchema({
    title: "RAG Development Services | Enterprise Retrieval-Augmented Generation",
    description: metadata.description as string,
    url: currentUrl,
  });
  const serviceSchema = getServiceSchema({
    name: "RAG Development Services",
    description: metadata.description as string,
    url: currentUrl,
    serviceType: "Retrieval-Augmented Generation & Enterprise Knowledge Engineering",
  });
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);
  const faqSchema = getFaqSchema(faqs);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 01. Hero */}
      <ServiceHero
        eyebrow="Enterprise Knowledge Retrieval"
        h1="Enterprise RAG Development Services: Grounding AI in Your Proprietary Knowledge"
        description="We build production-grade Retrieval-Augmented Generation (RAG) architectures that eliminate hallucinations. Ground foundation models in your company's private documentation, databases, and SOPs with verifiable citations and strict role-based access."
        primaryCtaText="Book a Free RAG Strategy Call"
        primaryCtaHref="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
        secondaryCtaText="Explore RAG Architecture"
        secondaryCtaHref="#service-capabilities"
        targetAudience="Enterprises, Knowledge-Intensive Teams & SaaS Founders"
        outcomeText="Zero Hallucinations, Verifiable Citations & Secure Role-Based Access"
        diagramTitle="Enterprise Production RAG Pipeline"
        flowSteps={[
          { label: "Document Ingestion & Layout Parsing", sublabel: "PDFs, Tables, SOPs & Markdown Conversion" },
          { label: "Semantic Chunking & Embedding Generation", sublabel: "text-embedding-3-large & Metadata Tagging" },
          { label: "Hybrid Search & Cohere Reranking", sublabel: "Dense Vectors + Sparse BM25 Keyword Search" },
          { label: "Grounded Prompt Assembly & Citations", sublabel: "Context Injection & Strict Boundary Guardrails" },
          { label: "Continuous Ragas / TruLens Evaluation", sublabel: "Faithfulness & Retrieval Precision Scoring" },
        ]}
        highlights={[
          "Hybrid Vector + BM25 Keyword Search",
          "Cohere / BGE Neural Reranking",
          "Clickable Source Citations",
          "Role-Based Access Control (RBAC)",
        ]}
      />

      {/* 02. Direct Answer / GEO / AEO */}
      <DirectAnswer
        question="What are RAG development services?"
        answer="RAG (Retrieval-Augmented Generation) development services construct production-grade enterprise knowledge architectures that connect LLMs to your private business documentation, databases, and SOPs. By engineering optimized document ingestion pipelines, hybrid vector-and-keyword search, intelligent reranking, and citation frameworks, RAG systems eliminate model hallucinations and deliver verifiable, permission-aware answers to employees and customers."
        keyTakeaways={[
          "Eliminates AI hallucinations by forcing language models to cite only verified, retrieved corporate documentation.",
          "Combines dense vector embeddings with sparse keyword search (BM25) and neural reranking for pinpoint retrieval.",
          "Enforces document-level security so users only retrieve information authorized for their specific role or department.",
          "Allows real-time knowledge base updates without the exorbitant costs and latency of retraining or fine-tuning models.",
        ]}
      />

      {/* 03. Technology Trust Strip */}
      <TrustStrip
        label="Vector Stores, Rerankers & RAG Frameworks"
        technologies={[
          "Pinecone / Qdrant / Weaviate",
          "PostgreSQL (pgvector)",
          "Cohere Rerank / BGE-Reranker",
          "LlamaIndex & LangChain",
          "OpenAI Embeddings (3-large)",
          "Unstructured.io / LlamaParse",
          "Ragas Evaluation Framework",
        ]}
      />

      {/* 04. Problem Section */}
      <ProblemGrid
        eyebrow="The Hallucination Crisis"
        heading="Why Naive Vector Search Fails in Real Business Environments"
        subtitle="Basic tutorial RAG setups fail miserably on real business documents with tables, jargon, and complex permissions."
        problems={[
          {
            title: "Dangerous AI Hallucinations on Edge Cases",
            description:
              "When an off-the-shelf bot cannot find an exact answer, it guesses, fabricating incorrect return policies, bogus pricing, or bad technical advice.",
            consequence: "Customer frustration, legal liabilities, and destroyed organizational trust.",
          },
          {
            title: "Mangled Tables, Numbers & Complex PDFs",
            description:
              "Naive chunking breaks financial tables and multi-column PDFs in half, separating critical headers from numbers.",
            consequence: "The AI quotes completely wrong statistics or financial figures.",
          },
          {
            title: "Total Lack of Access Control & Security",
            description:
              "Standard RAG prototypes dump all company documents into one global vector database with zero access partitioning.",
            consequence: "Junior staff or public chatbots inadvertently accessing executive payroll sheets or confidential client records.",
          },
        ]}
      />

      {/* 05. Service Features / Deliverables */}
      <ServiceFeatures
        eyebrow="Engineering Scope"
        heading="Production-Grade RAG Engineering Capabilities"
        subtitle="Full-stack enterprise knowledge systems engineered for precision, speed, and governance."
        features={[
          {
            title: "Layout-Aware Document Ingestion & Chunking",
            description:
              "Transforming messy corporate documentation into clean, semantically rich chunks with full structural preservation.",
            deliverables: [
              "Vision-based OCR parsing for complex tables, charts, and multi-column PDFs",
              "Recursive character and semantic document chunking pipelines",
              "Parent-child chunk hierarchical indexing for broad and narrow retrieval",
              "Automated metadata tagging (Source file, page number, author, access tier)",
            ],
          },
          {
            title: "Hybrid Search & Neural Reranking",
            description:
              "Combining the best of semantic vector similarity with exact keyword precision.",
            deliverables: [
              "Dense vector embeddings paired with sparse BM25 keyword index",
              "Reciprocal Rank Fusion (RRF) combining vector and lexical results",
              "Cross-encoder neural reranking (Cohere Rerank / BGE) on top candidate chunks",
              "Sub-500ms retrieval latency across hundreds of thousands of document pages",
            ],
          },
          {
            title: "Verifiable Citations & Anti-Hallucination Guardrails",
            description:
              "Ensuring every generated response is grounded, auditable, and linked back to source files.",
            deliverables: [
              "Exact inline citation markers referencing specific document pages and paragraphs",
              "Strict prompt grounding instructions instructing the model to decline ungrounded questions",
              "Automated confidence scoring rejecting low-certainty context matches",
              "Clickable document preview sidebars showing the original highlighted source text",
            ],
          },
          {
            title: "Automated RAG Evaluation & Freshness Pipelines",
            description:
              "Continuous benchmarking and synchronization keeping knowledge current and verified.",
            deliverables: [
              "Automated Eval test suites measuring Faithfulness and Context Relevance (Ragas)",
              "Automated webhook listeners refreshing vector records as Drive/Notion docs change",
              "Stale document deprecation pipelines archiving outdated policy versions",
              "Telemetry dashboards tracking common unanswerable queries for documentation gaps",
            ],
          },
        ]}
      />

      {/* 06. Architecture / Workflow */}
      <WorkflowDiagram
        eyebrow="System Blueprint"
        heading="Production Enterprise RAG Retrieval & Generation Flow"
        subtitle="The exact technical lifecycle from user query to grounded, cited answer."
        nodes={[
          {
            phase: "Step 1: Query Transformation & Expansion",
            title: "User Query Ingestion & Hypothetical Embeddings",
            description:
              "User submits question. Gateway extracts key entities, expands acronyms, and reformulates query using HyDE (Hypothetical Document Embeddings) for optimal search.",
            technicalDetails: "Query Rewriter • Entity Extractor • HyDE Transformation",
          },
          {
            phase: "Step 2: Hybrid Retrieval & Metadata Filter",
            title: "Dual Vector + BM25 Search with RBAC",
            description:
              "System executes parallel searches across Pinecone vector embeddings and BM25 keyword index, applying strict user permission metadata filters.",
            technicalDetails: "Pinecone Vector Search • BM25 Index • Metadata Filter: role=engineer",
          },
          {
            phase: "Step 3: Neural Cross-Encoder Reranking",
            title: "Cohere Rerank Semantic Scoring",
            description:
              "Top 40 candidate chunks pass through Cohere Rerank. The cross-encoder scores deep semantic relevance, compressing down to the top 4 most factual chunks.",
            technicalDetails: "Cohere Rerank v3 • Score Cutoff >= 0.82 • Top-4 Chunks Retained",
          },
          {
            phase: "Step 4: Grounded Generation & Citation Mapping",
            title: "Grounded Synthesis & Verified Citations",
            description:
              "Claude 3.5 Sonnet generates the response strictly from the retrieved chunks, formatting inline clickable citations linked directly to source PDFs.",
            technicalDetails: "Strict System Prompt • Inline Citation Mapping • Pydantic Schema",
          },
        ]}
      />

      {/* 07. Comparison Table */}
      <ComparisonTable
        eyebrow="RAG Comparison"
        heading="Naive Tutorial RAG vs. GHLVertex Enterprise RAG Architecture"
        subtitle="Why production enterprise knowledge retrieval requires disciplined systems engineering."
        leftColumnHeader="Naive Tutorial RAG (Basic LangChain)"
        rightColumnHeader="GHLVertex Enterprise RAG Architecture"
        rows={[
          {
            dimension: "Search Methodology",
            traditional: "Pure vector cosine similarity; constantly misses exact part numbers and codes.",
            ghlVertex: "Hybrid search combining dense vectors with sparse BM25 keyword search and neural reranking.",
          },
          {
            dimension: "PDF & Table Handling",
            traditional: "Dumb character splitting; scrambles tables, headers, and multi-column documents.",
            ghlVertex: "Layout-aware parsing converting tables into structured Markdown with parent-child chunking.",
          },
          {
            dimension: "Citations & Verification",
            traditional: "Generates generic summaries with no way to verify the source of claims.",
            ghlVertex: "Clickable inline source citations linking directly to exact document pages and paragraphs.",
          },
          {
            dimension: "Quality Assurance",
            traditional: "Subjective eyeball testing; failures discovered only after users complain.",
            ghlVertex: "Automated continuous evaluation benchmarking Faithfulness and Relevance via Ragas.",
          },
        ]}
      />

      {/* 08. Use Cases */}
      <UseCaseGrid
        eyebrow="Enterprise Scenarios"
        heading="Real-World RAG Deployments We Build"
        subtitle="Practical knowledge retrieval engines that accelerate decision-making and eliminate manual research."
        useCases={[
          {
            scenarioTitle: "Field Technician Technical Manual Retrieval",
            trigger: "Commercial HVAC technician on a roof needs error code diagnostic for rare chiller model.",
            orchestration:
              "RAG engine searches 15,000 pages of manufacturer service manuals, retrieves exact wiring diagram and troubleshooting checklist with citations.",
            outcome: "Technician diagnoses equipment in 30 seconds instead of spending 45 minutes on phone hold.",
          },
          {
            scenarioTitle: "Legal & Regulatory Policy Compliance Search",
            trigger: "Compliance officer asks: 'What are our disclosures for California privacy compliance?'",
            orchestration:
              "System retrieves latest legal memos, verifies document freshness date, cross-references internal SOPs, and synthesizes policy with citations.",
            outcome: "Instant regulatory answers with verifiable audit trails for compliance files.",
          },
          {
            scenarioTitle: "Customer Support Ticket Deflection Engine",
            trigger: "Customer inquires about complex software integration compatibility.",
            orchestration:
              "Chatbot queries engineering API documentation, confirms supported endpoints and rate limits, and provides working code snippet with doc links.",
            outcome: "Deflects complex technical tickets without requiring senior developer time.",
          },
        ]}
      />

      {/* 09. Governance & Human-in-the-Loop */}
      <GovernanceSection
        eyebrow="Security & Access Control"
        heading="Zero-Trust Document Security & Data Governance"
        subtitle="How we ensure your sensitive corporate intellectual property remains completely protected."
        items={[
          {
            title: "Document-Level Role-Based Access Control (RBAC)",
            description:
              "Metadata filters verify user identity at query time, guaranteeing that restricted documents are mathematically invisible to unauthorized users.",
          },
          {
            title: "Enterprise Zero-Data-Retention APIs",
            description:
              "All embeddings and model completions execute over enterprise agreements ensuring your proprietary files are never used to train public foundation models.",
          },
          {
            title: "Automated Source Attribution & Auditing",
            description:
              "Every generated answer logs exact document IDs, chunk timestamps, and similarity scores for full compliance and auditing.",
          },
        ]}
        humanInLoopNotes={[
          "When document retrieval scores fall below confidence thresholds, the system acknowledges insufficient data rather than guessing.",
          "Confidential executive files and HR disciplinary records remain permanently excluded from automated RAG indices.",
          "Automated alerts notify administrators whenever users query topics with missing or outdated documentation.",
        ]}
      />

      {/* 10. Process Steps */}
      <ProcessSteps
        eyebrow="Engineering Roadmap"
        heading="Our 4-Stage Enterprise RAG Implementation Lifecycle"
        subtitle="A disciplined engineering sprint to transform messy documentation into an authoritative knowledge engine."
        steps={[
          {
            number: "01",
            timeline: "Week 1",
            title: "Corpus Audit & Taxonomy Design",
            description:
              "We inventory your document repositories, evaluate formatting complexity, design metadata schemas, and define access control tiers.",
            deliverables: ["Document Inventory Report", "Metadata Schema Spec", "Access Control Matrix"],
          },
          {
            number: "02",
            timeline: "Week 2",
            title: "Ingestion Pipeline & Vector Indexing",
            description:
              "We build layout-aware parsers, configure semantic chunking, generate embeddings, and populate high-performance vector databases.",
            deliverables: ["Automated Ingestion Pipeline", "Populated Vector Database", "Parent-Child Index Setup"],
          },
          {
            number: "03",
            timeline: "Week 3",
            title: "Hybrid Search & Neural Reranker Tuning",
            description:
              "We configure BM25 sparse search, connect Cohere Rerank cross-encoders, and tune retrieval weights for optimal precision.",
            deliverables: ["Hybrid Retrieval Engine", "Reranker Integration", "Sub-500ms Query Benchmark"],
          },
          {
            number: "04",
            timeline: "Weeks 4–5",
            title: "Eval Benchmarking & Interface Rollout",
            description:
              "We run automated Ragas evaluation suites, connect UI/CRM interfaces, and train your team on updating documentation.",
            deliverables: ["Ragas Evaluation Report", "Integrated Search Interface", "Knowledge Runbook Documentation"],
          },
        ]}
      />

      {/* 11. Business Outcomes */}
      <BusinessOutcomes
        eyebrow="Measurable Value"
        heading="Tangible ROI of Enterprise RAG Systems"
        subtitle="Verifiable operational gains achieved through accurate, grounded knowledge retrieval."
        outcomes={[
          {
            focusArea: "Research Efficiency",
            metricLabel: "Hours of Document Hunting Eliminated",
            description:
              "Employees stop searching across fragmented drives and get instant, cited answers from thousands of pages of company knowledge.",
          },
          {
            focusArea: "Answer Accuracy",
            metricLabel: "Elimination of False AI Hallucinations",
            description:
              "Enforce 100% adherence to official company policy and product documentation with strict citation guardrails.",
          },
          {
            focusArea: "Onboarding Velocity",
            metricLabel: "Accelerated New Hire Ramp-Up",
            description:
              "New employees access immediate institutional knowledge, querying complex internal SOPs without monopolizing senior staff time.",
          },
          {
            focusArea: "Ticket Resolution",
            metricLabel: "Drastic Reduction in Technical Escalations",
            description:
              "Tier-1 support agents resolve technical customer inquiries immediately using accurate semantic search across engineering documentation.",
          },
        ]}
      />

      {/* 12. Why GHLVertex */}
      <WhyGHLVertex
        reasons={[
          {
            title: "Advanced Hybrid & Reranking Architecture",
            description:
              "We don't rely on basic cosine similarity. We engineer hybrid BM25 + vector search with cross-encoder rerankers for pinpoint precision.",
          },
          {
            title: "Layout-Aware Parsing Specialists",
            description:
              "We handle messy real-world PDFs, complex financial tables, and technical manuals without losing formatting or context.",
          },
          {
            title: "Automated Mathematical Evaluation",
            description:
              "We measure Faithfulness and Relevance using Ragas and TruLens, guaranteeing proven accuracy before production cutover.",
          },
          {
            title: "You Own the Entire Knowledge Pipeline",
            description:
              "You own the vector database, ingestion scripts, and embeddings. Complete data privacy with zero third-party vendor lock-in.",
          },
        ]}
      />

      {/* 13. Related Services */}
      <RelatedServices
        services={[
          {
            title: "AI Agent Development Services",
            href: "/services/ai-agent-development-services/",
            badge: "Autonomous Tool Use",
            description: "Equip autonomous agents with RAG knowledge retrieval to complete complex multi-step operational tasks.",
          },
          {
            title: "AI Chatbot Development Services",
            href: "/services/ai-chatbot-development-services/",
            badge: "Conversational UI",
            description: "Deploy customer-facing conversational chatbots grounded in your private enterprise RAG knowledge base.",
          },
          {
            title: "Custom AI Development",
            href: "/services/custom-ai-development/",
            badge: "Full-Stack AI",
            description: "Build custom full-stack generative AI applications and internal copilots powered by enterprise RAG architectures.",
          },
        ]}
      />

      {/* 14. FAQs */}
      <FaqAccordion faqs={faqs} />

      {/* 15. Final CTA */}
      <ServiceCta
        eyebrow="Ready to Ground Your AI in Reality?"
        heading="Eliminate AI Hallucinations with an Enterprise-Grade RAG Knowledge System."
        subtitle="Schedule a technical consultation with a RAG architect to audit your documentation and design your retrieval pipeline."
        primaryBtnText="Book a Free RAG Strategy Call"
        primaryBtnHref="https://calendly.com/ghl-vertex1995/30min?month=2026-11"
        secondaryBtnText="Explore AI Agent Development"
        secondaryBtnHref="/services/ai-agent-development-services/"
      />
    </>
  );
}
