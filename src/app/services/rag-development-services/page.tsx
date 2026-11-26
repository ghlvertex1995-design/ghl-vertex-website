import type { Metadata } from "next";
import Link from "next/link";
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
} from "@/components/services";
import styles from "./RagServices.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "RAG Development Services | GHLVertex",
  },
  description:
    "Build knowledge-grounded AI with GHLVertex's RAG development services. Connect LLMs with business documents, databases, and knowledge bases.",
  alternates: {
    canonical: "/services/rag-development-services/",
  },
  openGraph: {
    title: "RAG Development Services | GHLVertex",
    description:
      "Build knowledge-grounded AI with GHLVertex's RAG development services. Connect LLMs with business documents, databases, and knowledge bases.",
    url: `${siteConfig.url}/services/rag-development-services/`,
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "RAG Development Services", href: "/services/rag-development-services/" },
];

const faqs = [
  {
    question: "What are RAG development services?",
    answer:
      "RAG (Retrieval-Augmented Generation) development services design and build production software architectures that connect large language models to your organization's approved documentation, databases, and standard operating procedures. By engineering document ingestion pipelines, hybrid vector-and-keyword search, neural reranking, and citation frameworks, RAG systems retrieve relevant context at inference time, substantially reducing unsupported responses and grounding AI answers in company truth.",
  },
  {
    question: "What is retrieval-augmented generation?",
    answer:
      "Retrieval-Augmented Generation is an AI architectural pattern where a language model receives external factual context alongside a user question before drafting a response. Instead of relying solely on the static training data baked into model weights, the system searches an approved private knowledge base, extracts relevant passages, and instructs the model to synthesize an answer based strictly on those retrieved sources.",
  },
  {
    question: "How does RAG differ from fine-tuning a language model?",
    answer:
      "Fine-tuning adjusts the internal neural weights of a model to learn specialized tone, formatting, or task behaviors, but it is slow and costly to update, does not easily cite source documents, and can still fabricate answers. RAG separates knowledge from reasoning: you can add, update, or remove business documents in real time without retraining, enforce strict role-based access controls, and generate verifiable citations pointing directly to source files.",
  },
  {
    question: "Can RAG eliminate all AI hallucinations?",
    answer:
      "No. RAG substantially reduces the risk of unsupported answers by grounding models in verified company context and enabling strict refusal instructions when information is absent. However, language models remain probabilistic systems. Complete reliability requires defensive system prompt boundaries, human review for critical actions, and continuous evaluation testing.",
  },
  {
    question: "What document types and business databases can a RAG system ingest?",
    answer:
      "Production RAG systems can ingest complex multi-column PDFs, Word documents, PowerPoint presentations, Notion workspaces, Google Drive folders, Confluence documentation, Zendesk support tickets, SQL databases, and web scrape records, preserving critical table structures and formatting.",
  },
  {
    question: "Does RAG require a vector database?",
    answer:
      "While dense vector databases (such as Pinecone, Qdrant, or PostgreSQL with pgvector) are standard for semantic similarity search, RAG does not strictly require one. Production systems often combine vector databases with sparse keyword search engines (like BM25 or Elasticsearch) and relational databases to support hybrid retrieval across exact SKUs, names, and concepts.",
  },
  {
    question: "What is hybrid search and why is it important?",
    answer:
      "Pure vector search matches concepts by semantic meaning but frequently fails on exact keywords, model numbers, part identifiers, or error codes. Hybrid search combines dense vector retrieval with sparse lexical search (BM25), merging the results using Reciprocal Rank Fusion (RRF) to deliver both conceptual understanding and exact keyword precision.",
  },
  {
    question: "How does neural reranking improve retrieval precision?",
    answer:
      "Initial search typically retrieves the top 20 to 50 candidate document chunks quickly. A cross-encoder neural reranker (such as Cohere Rerank or BGE-Reranker) performs deep semantic relevance scoring on these candidates, ensuring that only the top 3 to 5 most factual chunks are passed into the LLM context window, saving token costs and reducing noise.",
  },
  {
    question: "How is confidential company information protected in a RAG system?",
    answer:
      "Security is enforced at the database and application levels before data reaches the model. We embed permission metadata (such as user roles, department access, and tenant IDs) into every vector chunk, filtering search queries so employees and customers only retrieve documents they are explicitly authorized to view.",
  },
  {
    question: "How are RAG systems tested and evaluated?",
    answer:
      "We separate retrieval evaluation from generation evaluation. Using automated benchmark frameworks (like Ragas or TruLens) alongside human evaluation datasets, we measure Context Precision, Context Recall, Faithfulness (groundedness against context), and Answer Relevance before production deployment.",
  },
  {
    question: "Can RAG systems provide clickable source citations?",
    answer:
      "Yes. By tagging document chunks with precise source metadata during ingestion (such as file name, page number, and section header), the language model is instructed to output inline citation brackets referencing the exact source material used in its response.",
  },
  {
    question: "How is a RAG knowledge base updated when company documentation changes?",
    answer:
      "We build automated synchronization pipelines connected to webhooks from your cloud storage, Notion, or CRM. When a document is modified or deleted, the pipeline re-parses the file, generates new vector embeddings, and updates or archives outdated vector records without service downtime.",
  },
  {
    question: "How does RAG connect with AI chatbots and autonomous agents?",
    answer:
      "RAG provides the knowledge retrieval layer, while chatbots deliver the conversational UI and AI agents execute operational tasks. For example, a customer service chatbot uses RAG to retrieve warranty policies, while an AI agent uses RAG to look up diagnostic SOPs before booking a field technician in the CRM.",
  },
  {
    question: "How much do custom RAG development services cost?",
    answer:
      "RAG development costs depend on the number and format of data sources, document volume, OCR complexity, retrieval strategy (basic vs. hybrid with reranking), access control requirements, and ongoing model token volumes. We provide fixed-scope architectural and implementation roadmaps tailored to your organizational needs.",
  },
  {
    question: "What is the difference between basic RAG and advanced RAG?",
    answer:
      "Basic RAG performs simple text chunking and cosine similarity search against a vector store. Advanced RAG incorporates layout-aware document parsing, parent-child chunk hierarchies, hybrid keyword-and-vector retrieval, cross-encoder neural reranking, query transformation (such as HyDE), and automated evaluation benchmarking.",
  },
  {
    question: "Do RAG systems require ongoing maintenance?",
    answer:
      "Yes. Production RAG systems require continuous monitoring of vector database query latency, token expenses, embedding model updates, knowledge freshness synchronization, and failure analysis for unanswerable user inquiries.",
  },
];

export default function RagDevelopmentServicesPage() {
  const currentUrl = "/services/rag-development-services/";
  const pageSchema = getWebPageSchema({
    title: "RAG Development Services | GHLVertex",
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
    <div className={styles.pageWrapper}>
      <JsonLd data={pageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs items={breadcrumbs} />

      {/* ====================================================================
          SECTION 01: HERO
          ==================================================================== */}
      <ServiceHero
        eyebrow="Enterprise Knowledge Retrieval"
        h1="Custom RAG Development Services for Knowledge-Grounded AI"
        description="Connect large language models with relevant business documents, databases, and knowledge sources. GHLVertex helps businesses design and develop retrieval-augmented generation systems that retrieve useful information and support more grounded AI responses within defined business and security requirements."
        primaryCtaText="Book a RAG Development Consultation"
        primaryCtaHref={siteConfig.links.calendly}
        secondaryCtaText="Explore Our RAG Solutions"
        secondaryCtaHref="#rag-capabilities"
        targetAudience="CTOs, Product Leaders, Technical Decision-Makers & Operations Executives"
        outcomeText="Grounded Knowledge Retrieval, Layout-Aware Parsing & Verifiable Source Citations"
        diagramTitle="Enterprise Production RAG Architecture"
        flowSteps={[
          { label: "Knowledge Ingestion & Parsing", sublabel: "PDFs, Tables, CRM Records & Notion Docs" },
          { label: "Semantic Chunking & Indexing", sublabel: "Dense Embeddings & BM25 Keyword Search" },
          { label: "Hybrid Retrieval & Reranking", sublabel: "Cross-Encoder Relevance & Permission Filters" },
          { label: "Context Assembly & Citations", sublabel: "Strict Grounding Guardrails & Page Citations" },
          { label: "Continuous Quality Evaluation", sublabel: "Automated Benchmarks via Ragas / TruLens" },
        ]}
        highlights={[
          "Hybrid Vector + BM25 Keyword Retrieval",
          "Cross-Encoder Neural Reranking",
          "Clickable In-Line Source Citations",
          "Document-Level Role-Based Access (RBAC)",
        ]}
      />

      {/* ====================================================================
          SECTION 02: DIRECT ANSWER
          ==================================================================== */}
      <DirectAnswer
        question="What Are RAG Development Services?"
        answer="RAG (Retrieval-Augmented Generation) development services design and build production software architectures that connect large language models to your organization's approved documentation, databases, and standard operating procedures. By engineering document ingestion pipelines, hybrid vector-and-keyword search, neural reranking, and citation frameworks, RAG systems retrieve relevant context at inference time, substantially reducing unsupported responses and grounding AI answers in company truth."
        keyTakeaways={[
          "Supplies verified company documentation at inference time rather than attempting to memorize facts in model weights.",
          "Combines dense vector embeddings with sparse keyword search (BM25) and neural reranking for high-precision retrieval.",
          "Substantially reduces unsupported answers by instructing models to cite specific passages and decline ungrounded queries.",
          "Enforces document-level security filters so users only retrieve information authorized for their role or department.",
        ]}
      />

      {/* Extended Context & Technical Nuance */}
      <section className={styles.extendedWrap}>
        <div className="container">
          <div className={styles.extendedDirectAnswer}>
            <h3 className={styles.extendedTitle}>
              How RAG Bridges the Gap Between LLM Reasoning and Proprietary Data
            </h3>
            <p className={styles.extendedParagraph}>
              Standard public language models (such as GPT-4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro) possess broad general reasoning abilities, but they operate with static training cutoffs and complete ignorance of your company&apos;s internal standard operating procedures, pricing agreements, product revisions, and customer histories.
            </p>
            <p className={styles.extendedParagraph}>
              Retrieval-Augmented Generation solves this limitation at inference time without requiring multi-million-dollar model training runs. When a user asks a question, the RAG architecture queries your secure document index, retrieves the most semantically relevant passages, attaches verifiable source citations, and instructs the language model to generate an answer grounded solely in that retrieved context. While RAG substantially mitigates hallucination risk, it remains a probabilistic framework; enterprise reliability requires defensive prompt boundaries, human review on high-stakes actions, and continuous evaluation benchmarking.
            </p>
            <div className={styles.exampleCallout}>
              <div className={styles.exampleTitle}>Practical Business Example</div>
              <p className={styles.exampleText}>
                An industrial equipment distributor maintained 12,000 service manuals, warranty contracts, and specification PDFs scattered across internal network drives. When field technicians submitted equipment error codes, searching for the correct wiring diagram required 30 minutes of manual browsing. GHLVertex engineered a hybrid RAG pipeline that parses complex multi-column schematics into hierarchical chunks. Technicians now submit model numbers via mobile chat and receive exact diagnostic steps within two seconds, complete with clickable citations pointing to the exact manual page and paragraph.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: BUSINESS PROBLEMS
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Knowledge Retrieval Challenge</span>
            <h2 className={styles.heading}>Why Businesses Need Knowledge-Grounded AI</h2>
            <p className={styles.subtitle}>
              Generic artificial intelligence chatbots and naive search setups fail when confronted with complex corporate documents, dense financial tables, and strict privacy requirements.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📂</div>
              <h3 className={styles.cardTitle}>Scattered Information Across Silos</h3>
              <p className={styles.cardDesc}>
                Critical company knowledge is fragmented across Google Drive folders, Notion workspaces, PDF handbooks, Confluence wikis, and CRM notes, forcing employees to spend hours hunting for verified operational answers.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>⚠️</div>
              <h3 className={styles.cardTitle}>Dangerous AI Hallucinations on Edge Cases</h3>
              <p className={styles.cardDesc}>
                When an ungrounded AI model lacks specific business context, it fabricates answers, quoting nonexistent return policies, invalid pricing tiers, or flawed technical instructions that damage brand reputation.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>📊</div>
              <h3 className={styles.cardTitle}>Mangled Tables &amp; Multi-Column Documents</h3>
              <p className={styles.cardDesc}>
                Naive chunking strategies split complex financial tables, pricing tiers, and multi-column PDFs in half, separating column headers from numerical data and resulting in incorrect quantitative summaries.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🔒</div>
              <h3 className={styles.cardTitle}>Lack of Access Control &amp; Data Security</h3>
              <p className={styles.cardDesc}>
                Basic vector search prototypes lump all company files into a single global index, allowing junior staff or external chatbot users to accidentally retrieve confidential payroll spreadsheets or executive memos.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>🔄</div>
              <h3 className={styles.cardTitle}>Outdated Knowledge &amp; Stale Documentation</h3>
              <p className={styles.cardDesc}>
                Static model fine-tuning cannot accommodate weekly policy changes or product updates. As documents evolve, AI applications provide obsolete answers without automated vector synchronization.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>❓</div>
              <h3 className={styles.cardTitle}>Zero Source Traceability</h3>
              <p className={styles.cardDesc}>
                Standard language model outputs offer no way to verify claims. Without explicit, clickable inline citations pointing to the original document pages, staff cannot trust the generated responses for high-stakes business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: RAG DEVELOPMENT SOLUTIONS
          ==================================================================== */}
      <section id="rag-capabilities" className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Core Engineering Capabilities</span>
            <h2 className={styles.heading}>Custom RAG Development Solutions for Your Business</h2>
            <p className={styles.subtitle}>
              From document ingestion pipelines to hybrid neural search and verifiable citation frameworks, we build enterprise knowledge systems engineered for precision and governance.
            </p>
          </div>

          <div className={styles.grid3}>
            {/* 01. Custom RAG Applications */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Core Architecture</span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Custom RAG Application Development</h3>
              <p className={styles.cardDesc}>
                We design bespoke retrieval and generation systems tailored to your specific organizational workflows, data structures, and latency requirements, ensuring full client source code ownership.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>End-to-end ingestion, retrieval, and synthesis architecture</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Custom API endpoints and secure cloud infrastructure deployment</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Direct integration with your existing CRM and software platforms</span>
                </li>
              </ul>
            </div>

            {/* 02. Enterprise Knowledge Bases */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Enterprise Search</span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Enterprise Knowledge Base Development</h3>
              <p className={styles.cardDesc}>
                We unite fragmented corporate data repositories into a single, high-speed searchable knowledge engine. Staff can query thousands of internal documents and receive instant, cited answers.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Connectors for Google Drive, Notion, Confluence, and SharePoint</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Granular role-based access control (RBAC) metadata filtering</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Automated synchronization pipelines tracking document modifications</span>
                </li>
              </ul>
            </div>

            {/* 03. RAG Chatbot Development */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Conversational AI</span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>RAG Chatbot Development</h3>
              <p className={styles.cardDesc}>
                Equip customer-facing and employee-facing conversational interfaces with grounded knowledge retrieval. Chatbots answer complex product questions based strictly on verified documentation.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Citation-backed answers with clickable document references</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Defensive refusal guardrails for ungrounded inquiries</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Aligned directly with our{" "}
                    <Link href="/services/ai-chatbot-development-services/" className={styles.inlineLink}>
                      AI chatbot development services
                    </Link>
                  </span>
                </li>
              </ul>
            </div>

            {/* 04. Document Retrieval Solutions */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Parsing &amp; OCR</span>
              <span className={styles.cardNumber}>04</span>
              <h3 className={styles.cardTitle}>AI Document Retrieval Solutions</h3>
              <p className={styles.cardDesc}>
                Extract, parse, and index complex multi-page PDFs, technical blueprints, and legal contracts without losing structure. We preserve tables, headers, and bulleted lists via layout-aware OCR.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Vision-assisted table parsing converting tables into clean Markdown</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Parent-child hierarchical indexing for broad and narrow retrieval</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Deduplication and text sanitization pipelines</span>
                </li>
              </ul>
            </div>

            {/* 05. Semantic & Hybrid Search */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Search Strategy</span>
              <span className={styles.cardNumber}>05</span>
              <h3 className={styles.cardTitle}>Semantic and Hybrid Search Development</h3>
              <p className={styles.cardDesc}>
                We combine the conceptual comprehension of dense vector embeddings with the exact keyword precision of sparse BM25 search, fusing results for superior retrieval accuracy.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Dual vector and BM25 index execution</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Reciprocal Rank Fusion (RRF) score merging</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Exact keyword matching for serial numbers, SKUs, and codes</span>
                </li>
              </ul>
            </div>

            {/* 06. Vector Database Integration */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Vector Stores</span>
              <span className={styles.cardNumber}>06</span>
              <h3 className={styles.cardTitle}>Vector Database Integration</h3>
              <p className={styles.cardDesc}>
                We select, configure, and optimize production vector databases (Pinecone, Qdrant, Weaviate, pgvector) based on your data volume, query latency requirements, and hosting preferences.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>High-performance vector indexing (HNSW / IVF)</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Metadata payload optimization for real-time filtering</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Self-hosted cloud VPC or managed cloud vector configurations</span>
                </li>
              </ul>
            </div>

            {/* 07. RAG Pipeline Optimization */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Performance Tuning</span>
              <span className={styles.cardNumber}>07</span>
              <h3 className={styles.cardTitle}>RAG Pipeline Optimization &amp; Reranking</h3>
              <p className={styles.cardDesc}>
                Upgrade existing, brittle RAG implementations. We integrate cross-encoder neural rerankers (Cohere / BGE), optimize chunking boundaries, and reduce context token overhead.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Cross-encoder neural reranking filtering top candidate chunks</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Context window compression reducing inference token expenses</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Sub-500ms retrieval latency optimization across large document sets</span>
                </li>
              </ul>
            </div>

            {/* 08. Agentic RAG Solutions */}
            <div className={styles.card}>
              <span className={styles.cardBadge}>Agentic Retrieval</span>
              <span className={styles.cardNumber}>08</span>
              <h3 className={styles.cardTitle}>Agentic RAG Solutions</h3>
              <p className={styles.cardDesc}>
                Equip autonomous AI agents with dynamic retrieval tools. Agents iteratively reformulate search queries, cross-reference multiple document indices, and evaluate evidence before acting.
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Multi-step iterative search and document query decomposition</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Self-correcting retrieval loops verifying factual sufficiency</span>
                </li>
                <li className={styles.cardItem}>
                  <span className={styles.checkIcon}>&#10003;</span>
                  <span>Seamless connection with{" "}
                    <Link href="/services/ai-agent-development-services/" className={styles.inlineLink}>
                      AI agent development services
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: HOW RAG WORKS (Ingestion + Query Pipelines)
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Architectural Workflow</span>
            <h2 className={styles.heading}>How Retrieval-Augmented Generation Works</h2>
            <p className={styles.subtitle}>
              A dual-pipeline system architecture separating asynchronous document ingestion from real-time user query retrieval and generation.
            </p>
          </div>

          {/* Pipeline 1: Knowledge Ingestion */}
          <div className={styles.pipelineBox}>
            <div className={styles.pipelineHeader}>
              <h3 className={styles.pipelineTitle}>Pipeline 1: Document Ingestion &amp; Knowledge Indexing (Asynchronous)</h3>
              <span className={styles.pipelineBadge}>Data Preparation Layer</span>
            </div>
            <div className={styles.pipelineSteps}>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>01. Ingestion</span>
                <div className={styles.stepLabel}>Source Collection</div>
                <p className={styles.stepDesc}>Pull PDFs, Notion pages, and CRM records via secure webhooks and cloud APIs.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>02. Extraction</span>
                <div className={styles.stepLabel}>Layout-Aware OCR</div>
                <p className={styles.stepDesc}>Extract text while preserving multi-column structures, tables, and section headers.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>03. Chunking</span>
                <div className={styles.stepLabel}>Semantic Chunking</div>
                <p className={styles.stepDesc}>Divide content into coherent 300–500 token segments with parent-child context trees.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>04. Embedding</span>
                <div className={styles.stepLabel}>Vector Generation</div>
                <p className={styles.stepDesc}>Convert chunks into 1536- or 3072-dimensional embeddings tagged with access metadata.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>05. Storage</span>
                <div className={styles.stepLabel}>Index Population</div>
                <p className={styles.stepDesc}>Populate vector database (Pinecone / pgvector) and parallel BM25 keyword index.</p>
              </div>
            </div>
          </div>

          {/* Pipeline 2: Query & Retrieval */}
          <div className={styles.pipelineBox}>
            <div className={styles.pipelineHeader}>
              <h3 className={styles.pipelineTitle}>Pipeline 2: User Query, Hybrid Retrieval &amp; Generation (Real-Time)</h3>
              <span className={styles.pipelineBadge}>Inference Layer</span>
            </div>
            <div className={styles.pipelineSteps}>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>01. Query</span>
                <div className={styles.stepLabel}>User Question</div>
                <p className={styles.stepDesc}>User submits question; gateway sanitizes input and extracts key search entities.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>02. Retrieval</span>
                <div className={styles.stepLabel}>Hybrid Search &amp; RBAC</div>
                <p className={styles.stepDesc}>Execute vector similarity + BM25 keyword search with user permission metadata filters.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>03. Reranking</span>
                <div className={styles.stepLabel}>Neural Cross-Encoder</div>
                <p className={styles.stepDesc}>Reranker evaluates top 40 candidates, compressing down to the 4 most factual chunks.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>04. Synthesis</span>
                <div className={styles.stepLabel}>LLM Generation</div>
                <p className={styles.stepDesc}>Foundation model (Claude / GPT-4o) crafts response strictly from retrieved context.</p>
              </div>
              <div className={styles.stepNode}>
                <span className={styles.stepIndex}>05. Validation</span>
                <div className={styles.stepLabel}>Citations &amp; Delivery</div>
                <p className={styles.stepDesc}>Attach clickable source citations; if context is insufficient, trigger clean refusal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 06: DOCUMENT INGESTION & KNOWLEDGE PROCESSING
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Data Pipeline Engineering</span>
            <h2 className={styles.heading}>Document Ingestion and Knowledge Base Integration</h2>
            <p className={styles.subtitle}>
              The quality of any RAG system is bounded by the cleanliness and structural integrity of its document ingestion pipeline.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Approved Knowledge Sources</h3>
              <p className={styles.cardDesc}>
                We build automated connectors across your company&apos;s digital ecosystem: PDF handbooks, technical manuals, Microsoft Word files, Google Drive directories, Notion team wikis, Confluence spaces, Zendesk ticket resolutions, and SQL database tables.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Layout-Aware Parsing &amp; OCR</h3>
              <p className={styles.cardDesc}>
                Standard parsers turn complex documents into unusable text soup. We utilize layout-aware vision models to parse tables into clean Markdown, separate multi-column headers, and extract embedded chart values without losing formatting.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Semantic &amp; Parent-Child Chunking</h3>
              <p className={styles.cardDesc}>
                Rather than arbitrary character splitting, we implement semantic chunking based on natural document headings. We configure parent-child hierarchies where small chunks are matched during search, but larger parent sections are fed to the model for full context.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Rich Metadata Extraction</h3>
              <p className={styles.cardDesc}>
                Every text chunk is tagged with detailed metadata during ingestion: source URL, file name, exact page number, section header, creation timestamp, document version, and role-based access permission level.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Freshness Synchronization</h3>
              <p className={styles.cardDesc}>
                When documents are modified in your cloud drive, automated webhook listeners trigger incremental ingestion. Outdated vector records are deleted or archived, ensuring the model never cites superseded company policies.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Deduplication &amp; Cleaning</h3>
              <p className={styles.cardDesc}>
                Duplicate documents and redundant email threads bloat vector databases and cause conflicting answers. Our pipelines apply MinHash deduplication and boilerplate removal before embedding generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 07: EMBEDDINGS & VECTOR DATABASES
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Vector Storage &amp; Search</span>
            <h2 className={styles.heading}>Embedding Models and Vector Database Integration</h2>
            <p className={styles.subtitle}>
              Selecting the appropriate embedding model and vector storage engine is essential for balancing search precision, latency, and operational expense.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <span className={styles.cardBadge}>Pinecone</span>
              <h3 className={styles.cardTitle}>Pinecone Managed Vector DB</h3>
              <p className={styles.cardDesc}>
                A fully managed serverless vector database ideal for fast-growing SaaS applications requiring sub-100ms retrieval latency across millions of vectors without infrastructure maintenance overhead.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardBadge}>PostgreSQL</span>
              <h3 className={styles.cardTitle}>PostgreSQL with pgvector</h3>
              <p className={styles.cardDesc}>
                For organizations seeking to keep vector embeddings inside their existing relational database. Combines standard SQL queries, ACID compliance, and vector similarity search in a unified, private database.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardBadge}>Qdrant / Weaviate</span>
              <h3 className={styles.cardTitle}>Qdrant &amp; Weaviate Open-Source</h3>
              <p className={styles.cardDesc}>
                Specialized vector search engines that support self-hosting inside your private cloud VPC. Exceptional support for rich payload metadata filtering and hybrid vector-keyword retrieval.
              </p>
            </div>
          </div>

          <div className={styles.exampleCallout} style={{ marginTop: "2rem" }}>
            <div className={styles.exampleTitle}>Embedding Model Benchmarking</div>
            <p className={styles.exampleText}>
              We benchmark leading embedding models based on dimensional density and retrieval performance: OpenAI&apos;s <code>text-embedding-3-large</code> (3,072 dimensions) for complex conceptual nuance, Voyage AI models for legal and financial domains, and open-source models (such as BGE or E5) for self-hosted, compliance-restricted enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 08: RETRIEVAL STRATEGIES & RERANKING
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Search Precision</span>
            <h2 className={styles.heading}>Semantic Search, Hybrid Search, and Retrieval Optimization</h2>
            <p className={styles.subtitle}>
              Why pure vector search is insufficient for enterprise data, and how neural reranking delivers pinpoint factual accuracy.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Dense Vector Semantic Search</h3>
              <p className={styles.cardDesc}>
                Converts text into high-dimensional vectors to capture conceptual meaning. Allows users to ask questions using natural language (e.g. &ldquo;How do I reset my credentials?&rdquo;) and retrieve passages discussing password recovery even without identical wording.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Sparse BM25 Keyword Search</h3>
              <p className={styles.cardDesc}>
                Standard lexical indexing that matches exact terms. Essential when queries involve exact part numbers, software error codes (e.g. &ldquo;ERR_502_BAD_GATEWAY&rdquo;), legal statutes, or product SKUs that semantic embeddings often smooth over.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Reciprocal Rank Fusion (RRF)</h3>
              <p className={styles.cardDesc}>
                An algorithmic scoring technique that combines results from parallel vector and BM25 search queries. Ensures that candidates appearing high in both conceptual and exact keyword rankings are prioritized for model synthesis.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Neural Cross-Encoder Reranking</h3>
              <p className={styles.cardDesc}>
                Initial search retrieves the top 30–50 candidates. A cross-encoder model (such as Cohere Rerank v3 or BGE-Reranker) scores the deep semantic relevance of each passage against the user question, retaining only the top 3–5 most relevant chunks.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Query Transformation &amp; HyDE</h3>
              <p className={styles.cardDesc}>
                When user questions are vague or brief, our gateway applies Hypothetical Document Embeddings (HyDE) or query expansion to generate richer search vectors, substantially improving retrieval recall across complex corpora.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Context Window Optimization</h3>
              <p className={styles.cardDesc}>
                More context is not always better. Overloading context windows increases latency, drives up token costs, and introduces the &ldquo;lost in the middle&rdquo; phenomenon. We compress context to include only high-signal passages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 09: PRACTICAL USE CASES & DEMO
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Enterprise Deployments</span>
            <h2 className={styles.heading}>Practical RAG Applications for Businesses</h2>
            <p className={styles.subtitle}>
              Real-world knowledge retrieval systems that accelerate decision-making, eliminate manual document research, and ensure compliant answers.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.scenarioCard}>
              <span className={styles.scenarioIndustry}>Customer Support</span>
              <h3 className={styles.scenarioTitle}>Tier-1 Ticket Deflection Assistant</h3>
              <div className={styles.scenarioProblem}>
                <strong>Problem:</strong> Support reps spend 35% of their workday answering identical product warranty and software configuration questions.
              </div>
              <p className={styles.scenarioFocus}>
                <strong>RAG Solution:</strong> Retrieves verified troubleshooting SOPs and answers customer inquiries with clickable links to official help docs.
              </p>
              <div className={styles.scenarioSolution}>
                <strong>Outcome:</strong> Faster resolution times with zero fabricated policies or invalid refund promises.
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <span className={styles.scenarioIndustry}>Internal Operations</span>
              <h3 className={styles.scenarioTitle}>Enterprise SOP &amp; Policy Navigator</h3>
              <div className={styles.scenarioProblem}>
                <strong>Problem:</strong> New hires and managers struggle to find authoritative guidelines across hundreds of internal HR and operational docs.
              </div>
              <p className={styles.scenarioFocus}>
                <strong>RAG Solution:</strong> Searches authorized company documents and provides instant answers with role-based access filtering.
              </p>
              <div className={styles.scenarioSolution}>
                <strong>Outcome:</strong> Accelerated employee onboarding and reduced administrative interruption of executive staff.
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <span className={styles.scenarioIndustry}>Field Services</span>
              <h3 className={styles.scenarioTitle}>Technical Service Manual Assistant</h3>
              <div className={styles.scenarioProblem}>
                <strong>Problem:</strong> HVAC and electrical technicians on job sites struggle to locate specific wiring diagrams in 1,000-page manufacturer PDFs.
              </div>
              <p className={styles.scenarioFocus}>
                <strong>RAG Solution:</strong> Mobile-friendly hybrid search identifying specific model numbers and delivering exact wiring schematics with page citations.
              </p>
              <div className={styles.scenarioSolution}>
                <strong>Outcome:</strong> On-site diagnostic time cut from 45 minutes to under 30 seconds.
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <span className={styles.scenarioIndustry}>Legal &amp; Compliance</span>
              <h3 className={styles.scenarioTitle}>Contract &amp; Regulatory Audit Search</h3>
              <div className={styles.scenarioProblem}>
                <strong>Problem:</strong> Compliance teams manually cross-reference client agreements to locate specific indemnification clauses and disclosure terms.
              </div>
              <p className={styles.scenarioFocus}>
                <strong>RAG Solution:</strong> Scans contract repositories, retrieves exact clause passages, and highlights source page citations.
              </p>
              <div className={styles.scenarioSolution}>
                <strong>Outcome:</strong> Comprehensive contract audits completed in minutes with verifiable audit trails.
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <span className={styles.scenarioIndustry}>Marketing Agencies</span>
              <h3 className={styles.scenarioTitle}>Agency Multi-Client Knowledge Partitioning</h3>
              <div className={styles.scenarioProblem}>
                <strong>Problem:</strong> Account managers handling 20+ clients confuse brand guidelines, promotional calendars, and offer restrictions.
              </div>
              <p className={styles.scenarioFocus}>
                <strong>RAG Solution:</strong> Strict multi-tenant metadata filtering ensuring client-specific knowledge bases remain isolated.
              </p>
              <div className={styles.scenarioSolution}>
                <strong>Outcome:</strong> Consistent creative output with zero risk of cross-client data contamination.
              </div>
            </div>
          </div>

          {/* Illustrative Demonstration Component */}
          <div className={styles.demoBox}>
            <div className={styles.demoHeader}>
              <span className={styles.demoTitle}>Illustrative RAG Query &amp; Citation Walkthrough</span>
              <span className={styles.demoBadge}>Interactive System Preview</span>
            </div>
            <div className={styles.demoQuestion}>
              <strong>User Query:</strong> &ldquo;What is our cancellation and refund policy for enterprise annual contracts if requested within 30 days?&rdquo;
            </div>
            <div className={styles.demoPassages}>
              <div className={styles.passageCard}>
                <div className={styles.passageMeta}>
                  <span>Retrieved Chunk #1 — Legal_Master_SaaS_Agreement_2026.pdf (Page 14, ¶ 3)</span>
                  <span>Relevance Score: 0.94</span>
                </div>
                &ldquo;Section 8.2 (Early Termination): Enterprise annual licenses may be cancelled within thirty (30) days of the initial effective date for a full refund of prepaid subscription fees, less a standard $250 administrative provisioning fee. Cancellations submitted after day 30 remain non-refundable for the remainder of the annual term.&rdquo;
              </div>
            </div>
            <div className={styles.demoAnswer}>
              <strong>Grounded LLM Response:</strong><br />
              Enterprise annual contracts can be cancelled within thirty (30) days of the effective date for a full refund of prepaid subscription fees, subject to a $250 administrative provisioning fee [Legal_Master_SaaS_Agreement_2026.pdf, Page 14]. Any cancellation requests submitted after the initial 30-day window are non-refundable for the remaining contract term.
            </div>
            <p className={styles.demoDisclaimer}>
              *Illustrative knowledge retrieval demonstration with synthetic data. In production deployments, citations link directly to preview modals displaying highlighted source passages.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 10: RAG CHATBOTS & AI AGENTS
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Ecosystem Architecture</span>
            <h2 className={styles.heading}>Connecting RAG With AI Chatbots and AI Agents</h2>
            <p className={styles.subtitle}>
              Understanding how retrieval-augmented generation powers conversational chatbots and autonomous agentic workflows.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>1. RAG Knowledge Layer</h3>
              <p className={styles.cardDesc}>
                RAG serves as the authoritative memory and knowledge retrieval engine. It indexes documents, executes hybrid searches, enforces security permissions, and extracts relevant facts.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>2. Conversational Chatbot UI</h3>
              <p className={styles.cardDesc}>
                A chatbot provides the user-facing interface, managing conversational turns, session state, and persona tone. Grounded by RAG, our{" "}
                <Link href="/services/ai-chatbot-development-services/" className={styles.inlineLink}>
                  AI chatbot development services
                </Link>{" "}
                deliver answers with direct source citations.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>3. Autonomous Task Agents</h3>
              <p className={styles.cardDesc}>
                An AI agent pairs RAG knowledge retrieval with programmatic tool use. Built via our{" "}
                <Link href="/services/ai-agent-development-services/" className={styles.inlineLink}>
                  AI agent development services
                </Link>
                , agents consult RAG documentation before executing actions like booking CRM appointments or triggering webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 11: RAG VS FINE-TUNING VS STANDARD LLM
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Architectural Comparison</span>
            <h2 className={styles.heading}>RAG vs. Fine-Tuning vs. Standard LLM Applications</h2>
            <p className={styles.subtitle}>
              A technical comparison highlighting when to implement retrieval-augmented generation, model fine-tuning, or standard prompt engineering.
            </p>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>RAG Architecture</th>
                  <th>Model Fine-Tuning</th>
                  <th>Standard LLM Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.dimensionName}>Primary Purpose</td>
                  <td>Accessing private, dynamic business knowledge at query time.</td>
                  <td>Teaching specialized tone, formatting, or novel domain vocabulary.</td>
                  <td>General-purpose reasoning, creative drafting, and public QA.</td>
                </tr>
                <tr>
                  <td className={styles.dimensionName}>Knowledge Freshness</td>
                  <td>Instantaneous. Updates immediately as files or records change.</td>
                  <td>Static. Requires retraining to incorporate updated documentation.</td>
                  <td>Locked to the foundation model&apos;s training cutoff date.</td>
                </tr>
                <tr>
                  <td className={styles.dimensionName}>Source Citations</td>
                  <td>Yes. Inline citations reference exact document pages and sections.</td>
                  <td>No. Knowledge is encoded into weights with no audit trail.</td>
                  <td>No. Cannot cite proprietary private business documentation.</td>
                </tr>
                <tr>
                  <td className={styles.dimensionName}>Access Control (RBAC)</td>
                  <td>Granular. Metadata filters exclude unauthorized files per user.</td>
                  <td>None. All fine-tuned knowledge is accessible to all model users.</td>
                  <td>None. Model treats all prompts identically without file permissions.</td>
                </tr>
                <tr>
                  <td className={styles.dimensionName}>Cost &amp; Maintenance</td>
                  <td>Low setup cost; predictable vector storage and inference tokens.</td>
                  <td>High initial training cost and recurring retraining expense.</td>
                  <td>Lowest setup cost; standard API token usage fees.</td>
                </tr>
                <tr>
                  <td className={styles.dimensionName}>Hallucination Mitigation</td>
                  <td>High. Strictly grounded in retrieved context with refusal guardrails.</td>
                  <td>Moderate to Low. Fine-tuning frequently hallucinates memorized facts.</td>
                  <td>Low on proprietary topics; model guesses when lacking context.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 12: ADVANCED RAG ARCHITECTURES
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Next-Generation Retrieval</span>
            <h2 className={styles.heading}>Advanced RAG Architectures and Retrieval Strategies</h2>
            <p className={styles.subtitle}>
              For organizations with enterprise scale and complex knowledge structures, we deploy advanced retrieval patterns beyond basic vector search.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Hierarchical &amp; Parent-Child RAG</h3>
              <p className={styles.cardDesc}>
                Small chunks (100–200 tokens) are optimal for similarity search, but larger sections (800–1,200 tokens) provide necessary context for synthesis. We index granular leaf chunks that link back to full parent sections.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Hypothetical Document Embeddings (HyDE)</h3>
              <p className={styles.cardDesc}>
                The model generates a hypothetical ideal answer to the user query before search. The hypothetical answer is then embedded, finding genuine passages with similar semantic structure and overcoming brief, cryptic queries.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Agentic Multi-Step RAG</h3>
              <p className={styles.cardDesc}>
                For complex questions requiring information from multiple files, an autonomous agent decomposes the query into sub-questions, executes sequential retrieval runs, cross-examines findings, and synthesizes a unified answer.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Graph-Enhanced RAG (GraphRAG)</h3>
              <p className={styles.cardDesc}>
                Combines vector databases with knowledge graphs. Enables systems to navigate explicit entity relationships (e.g. &ldquo;Which vendors supply parts for Product X in Region Y?&rdquo;) that pure vector cosine similarity often misses.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Multi-Modal Document RAG</h3>
              <p className={styles.cardDesc}>
                Indexes both text and imagery. Uses multi-modal embeddings (such as CLIP or ColPali) to search and retrieve technical engineering drawings, flowcharts, architectural blueprints, and infographics alongside text.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Self-RAG &amp; Corrective Retrieval (CRAG)</h3>
              <p className={styles.cardDesc}>
                System evaluates the quality of retrieved passages before passing them to the generator. If retrieved chunks fail confidence thresholds, the system automatically reformulates the search or falls back to web/SQL lookups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 13: RAG EVALUATION & QUALITY TESTING
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Quality Assurance</span>
            <h2 className={styles.heading}>How RAG Systems Are Tested and Evaluated</h2>
            <p className={styles.subtitle}>
              Production reliability requires separating retrieval quality from generation quality using automated benchmarks and human evaluation datasets.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>1. Retrieval Quality Metrics</h3>
              <p className={styles.cardDesc}>
                Evaluates whether the search engine locates the correct document passages:
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span><strong>• Context Precision:</strong> Ratio of retrieved chunks that are genuinely relevant to the query.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Context Recall:</strong> Whether all necessary factual chunks required to answer the query were retrieved.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Mean Reciprocal Rank (MRR):</strong> How high the most relevant document chunk ranks in search results.</span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>2. Generation Quality Metrics</h3>
              <p className={styles.cardDesc}>
                Evaluates whether the language model faithfully synthesizes the retrieved context:
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span><strong>• Faithfulness (Groundedness):</strong> Verifies that every claim in the response is directly supported by context.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Answer Relevance:</strong> Ensures the response directly answers the user question without rambling.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Citation Precision:</strong> Validates that inline citation brackets point to the exact source paragraph.</span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>3. Operational Benchmarks</h3>
              <p className={styles.cardDesc}>
                Monitors performance, cost efficiency, and latency across live queries:
              </p>
              <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                  <span><strong>• End-to-End Latency:</strong> Sub-second response targets across parsing, retrieval, and streaming.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Token Efficiency:</strong> Compressing context to prevent unnecessary API spending.</span>
                </li>
                <li className={styles.cardItem}>
                  <span><strong>• Safe Refusal Rate:</strong> Ensuring the system declines unanswerable questions rather than guessing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 14: SECURITY, DATA PRIVACY & ACCESS CONTROL
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Enterprise Governance</span>
            <h2 className={styles.heading}>RAG Security, Data Privacy, and Access Control</h2>
            <p className={styles.subtitle}>
              Protecting confidential business records with strict application-level permission filtering and zero-training data policies.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Document-Level Role-Based Access (RBAC)</h3>
              <p className={styles.cardDesc}>
                Security filters are applied at the database layer before data reaches the model. Metadata tags verify user identity, ensuring employees only retrieve documents authorized for their specific department.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Enterprise Zero-Data-Retention Agreements</h3>
              <p className={styles.cardDesc}>
                All embedding generation and model completions execute over commercial enterprise agreements ensuring proprietary documents and customer queries are never used to train public foundation models.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Pre-Embedding PII Redaction</h3>
              <p className={styles.cardDesc}>
                Automated regex and NER sanitization filters remove customer social security numbers, payment card details, and confidential health records before text chunks are indexed in vector databases.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Defensive Prompt Injection Filtering</h3>
              <p className={styles.cardDesc}>
                Retrieved document passages are treated as untrusted inputs. Our architectures separate user instructions from context and sanitize documents to prevent indirect prompt injection attacks.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Auditable Logging &amp; Source Attribution</h3>
              <p className={styles.cardDesc}>
                Every query execution logs user ID, retrieved chunk identifiers, similarity scores, and generated citations, giving compliance teams complete visibility into corporate knowledge usage.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Industry Security Framework Alignment</h3>
              <p className={styles.cardDesc}>
                Our security architecture follows published standards from the{" "}
                <a
                  href="https://www.nist.gov/itl/ai-risk-management-framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  NIST AI Risk Management Framework
                </a>{" "}
                and the{" "}
                <a
                  href="https://genai.owasp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  OWASP GenAI Security Project
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 15: SUPPORTED TECHNOLOGIES
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Modern RAG Stack</span>
            <h2 className={styles.heading}>RAG Development Technologies and Integrations</h2>
            <p className={styles.subtitle}>
              We engineer production knowledge systems using industry-leading foundational models, vector databases, and evaluation frameworks.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Language Models</h3>
              <p className={styles.cardDesc}>
                OpenAI (GPT-4o, o1), Anthropic Claude (3.5 Sonnet, 3.5 Haiku), Google Gemini (1.5 Pro), and self-hosted open-source models (Llama 3, Mistral) for private cloud VPC deployments.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Embedding &amp; Reranking Models</h3>
              <p className={styles.cardDesc}>
                OpenAI <code>text-embedding-3-large</code>, Voyage AI domain embeddings, Cohere Rerank v3, and BGE cross-encoders for deep semantic relevance scoring.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Vector &amp; Search Stores</h3>
              <p className={styles.cardDesc}>
                Pinecone, Qdrant, Weaviate, PostgreSQL (pgvector), Milvus, Elasticsearch, and OpenSearch with hybrid HNSW and BM25 index configurations.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>RAG Frameworks &amp; Tooling</h3>
              <p className={styles.cardDesc}>
                LlamaIndex, LangChain, Unstructured.io for multi-format document parsing, and Ragas / TruLens for automated mathematical evaluation benchmarking.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>CRM &amp; Workflow Integrations</h3>
              <p className={styles.cardDesc}>
                Direct connection to GoHighLevel CRM pipelines, conversation inboxes, custom serverless webhooks, and enterprise API gateways via our{" "}
                <Link href="/services/ai-integration-services/" className={styles.inlineLink}>
                  AI integration services
                </Link>.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cloud &amp; Infrastructure</h3>
              <p className={styles.cardDesc}>
                AWS (Lambda, S3, ECS), Google Cloud Platform (Cloud Run, Cloud Storage), and Microsoft Azure with automated CI/CD and telemetry logging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 16: RAG DEVELOPMENT PROCESS
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Lifecycle Delivery</span>
            <h2 className={styles.heading}>Our Structured RAG Development Process</h2>
            <p className={styles.subtitle}>
              A disciplined, 7-stage engineering lifecycle transforming messy corporate documentation into an authoritative, grounded knowledge engine.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 01</span>
              <h3 className={styles.cardTitle}>Requirements Discovery &amp; Scope</h3>
              <p className={styles.cardDesc}>
                Define business objectives, identify user personas, determine target response latency, and establish factual accuracy criteria.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 02</span>
              <h3 className={styles.cardTitle}>Corpus Audit &amp; Data Assessment</h3>
              <p className={styles.cardDesc}>
                Inventory company files, evaluate formatting complexity (tables, charts, scans), design metadata schemas, and define access control tiers.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 03</span>
              <h3 className={styles.cardTitle}>Architecture &amp; Stack Selection</h3>
              <p className={styles.cardDesc}>
                Select embedding models, vector database engines, and foundational LLMs based on query volume, token costs, and privacy requirements.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 04</span>
              <h3 className={styles.cardTitle}>Ingestion Pipeline &amp; Indexing</h3>
              <p className={styles.cardDesc}>
                Build layout-aware OCR parsers, configure semantic chunking, generate embeddings, and populate vector and BM25 indices.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 05</span>
              <h3 className={styles.cardTitle}>Hybrid Search &amp; Reranker Tuning</h3>
              <p className={styles.cardDesc}>
                Configure hybrid retrieval, connect cross-encoder neural rerankers, tune score cutoffs, and engineer inline citation mapping.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 06</span>
              <h3 className={styles.cardTitle}>Automated Eval Benchmarking</h3>
              <p className={styles.cardDesc}>
                Run automated test suites using Ragas to measure Faithfulness, Context Recall, and Answer Relevance before production rollout.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.cardNumber}>Step 07</span>
              <h3 className={styles.cardTitle}>Production Deployment &amp; Handoff</h3>
              <p className={styles.cardDesc}>
                Deploy secure API endpoints, connect UI/CRM applications, configure automated document refresh webhooks, and deliver runbooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 17: RAG DEVELOPMENT COST
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Pricing &amp; Investment</span>
            <h2 className={styles.heading}>How Much Do RAG Development Services Cost?</h2>
            <p className={styles.subtitle}>
              Transparent pricing factors explaining how knowledge engineering projects are scoped based on technical complexity and document volume.
            </p>
          </div>

          <div className={styles.extendedDirectAnswer}>
            <h3 className={styles.extendedTitle}>
              Key Drivers That Determine RAG Project Investment
            </h3>
            <p className={styles.extendedParagraph}>
              Because every organization maintains different document formats and retrieval requirements, pricing is determined by engineering scope rather than arbitrary estimates. Primary cost drivers include:
            </p>

            <ul className={styles.cardList} style={{ borderTop: "none", paddingTop: 0 }}>
              <li className={styles.cardItem}>
                <span className={styles.checkIcon}>•</span>
                <span><strong>Corpus Volume &amp; Formatting:</strong> Clean digital Markdown or text documents require less ingestion engineering than 50,000 pages of scanned PDFs with complex tables and visual charts.</span>
              </li>
              <li className={styles.cardItem}>
                <span className={styles.checkIcon}>•</span>
                <span><strong>Retrieval Complexity:</strong> Standard semantic vector search involves streamlined setup, whereas multi-stage hybrid search with neural rerankers (Cohere) and metadata RBAC requires advanced engineering.</span>
              </li>
              <li className={styles.cardItem}>
                <span className={styles.checkIcon}>•</span>
                <span><strong>Access Control Tiers:</strong> Multi-tenant isolation and user-specific document permission filtering require custom middleware and secure metadata mapping.</span>
              </li>
              <li className={styles.cardItem}>
                <span className={styles.checkIcon}>•</span>
                <span><strong>Evaluation &amp; Benchmarking:</strong> Building custom synthetic test sets and automated Ragas evaluation pipelines ensures enterprise reliability prior to launch.</span>
              </li>
            </ul>

            <div className={styles.exampleCallout}>
              <div className={styles.exampleTitle}>Get a Precise Project Scoping Call</div>
              <p className={styles.exampleText}>
                During an initial technical consultation, our RAG architects review your document samples, expected query volumes, and integration endpoints to provide a transparent, fixed-scope implementation proposal.{" "}
                <Link href={siteConfig.links.calendly} className={styles.inlineLink}>
                  Schedule a technical RAG strategy call
                </Link>{" "}
                to discuss your project requirements directly with our systems engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 18: TRUST & DIFFERENTIATION
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The GHLVertex Difference</span>
            <h2 className={styles.heading}>Why Choose GHLVertex for RAG Development?</h2>
            <p className={styles.subtitle}>
              We build production-grade knowledge architectures engineered for accuracy, security, and full client system ownership.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Layout-Aware Parsing Specialists</h3>
              <p className={styles.cardDesc}>
                We do not dump raw PDFs into basic character splitters. We engineer vision-assisted parsers that preserve complex tables, headers, and multi-column formatting so the model receives complete factual context.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Advanced Hybrid &amp; Reranking Stack</h3>
              <p className={styles.cardDesc}>
                We don&apos;t rely on naive vector cosine similarity. We deploy hybrid dense-and-sparse search fused with cross-encoder neural rerankers (Cohere / BGE) for pinpoint retrieval accuracy.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Mathematical Evaluation</h3>
              <p className={styles.cardDesc}>
                We validate system performance using automated Ragas and TruLens benchmark suites, measuring Context Precision, Context Recall, and Faithfulness before production deployment.
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>100% Client Code &amp; Data Ownership</h3>
              <p className={styles.cardDesc}>
                You retain complete ownership of all vector databases, embeddings, custom ingestion scripts, and application code. No proprietary vendor lock-in or hidden platform markups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 19: RELATED SERVICES
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Complementary AI Solutions</span>
            <h2 className={styles.heading}>Explore Related AI Development Services</h2>
            <p className={styles.subtitle}>
              Connect your RAG knowledge architecture with conversational chatbots, autonomous agents, and enterprise automation pipelines.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Chatbot Development Services</h3>
              <p className={styles.cardDesc}>
                Deploy conversational AI interfaces grounded in your enterprise RAG knowledge base for 24/7 customer support and instant lead capture.
              </p>
              <Link href="/services/ai-chatbot-development-services/" className={styles.inlineLink}>
                Explore AI Chatbot Development &rarr;
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Agent Development Services</h3>
              <p className={styles.cardDesc}>
                Build goal-directed autonomous agents that use RAG knowledge retrieval alongside CRM tools to complete complex multi-step tasks.
              </p>
              <Link href="/services/ai-agent-development-services/" className={styles.inlineLink}>
                Explore AI Agent Development &rarr;
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Integration Services</h3>
              <p className={styles.cardDesc}>
                Connect foundation models, vector stores, and custom middleware directly to your existing cloud infrastructure with robust rate limiting.
              </p>
              <Link href="/services/ai-integration-services/" className={styles.inlineLink}>
                Explore AI Integration Services &rarr;
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Consulting Services</h3>
              <p className={styles.cardDesc}>
                Evaluate operational readiness, prioritize high-ROI use cases, and design technical roadmaps with our specialized{" "}
                <Link href="/services/ai-consulting-services/" className={styles.inlineLink}>
                  AI consulting services
                </Link>.
              </p>
              <Link href="/services/ai-consulting-services/" className={styles.inlineLink}>
                Explore AI Consulting &rarr;
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Automation Services</h3>
              <p className={styles.cardDesc}>
                Automate repetitive operational workflows by combining LLM reasoning with deterministic CRM logic and database sync.
              </p>
              <Link href="/services/ai-automation-services/" className={styles.inlineLink}>
                Explore AI Automation Services &rarr;
              </Link>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom AI Development</h3>
              <p className={styles.cardDesc}>
                Engineer bespoke full-stack artificial intelligence applications, specialized LLM tools, and internal copilot systems.
              </p>
              <Link href="/services/custom-ai-development/" className={styles.inlineLink}>
                Explore Custom AI Development &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 20: FAQ
          ==================================================================== */}
      <section className={styles.sectionNormal}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Common Questions</span>
            <h2 className={styles.heading}>Frequently Asked Questions About RAG Development</h2>
            <p className={styles.subtitle}>
              Clear technical and commercial answers to help decision-makers evaluate retrieval-augmented generation architectures.
            </p>
          </div>

          <div className={styles.grid3}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.card}>
                <h3 className={styles.cardTitle}>{faq.question}</h3>
                <p className={styles.cardDesc}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 21: FINAL CONVERSION SECTION
          ==================================================================== */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Take The Next Step</span>
            <h2 className={styles.heading}>Ready to Build a Knowledge-Grounded AI Application?</h2>
            <p className={styles.subtitle}>
              Schedule a technical consultation with our RAG architects. To help us maximize our discussion, consider preparing your core business objectives, representative document samples, access control requirements, and existing software stack.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href={siteConfig.links.calendly}
              className="btn btn-primary"
              style={{
                background: "var(--brand-primary, #0148a3)",
                color: "#ffffff",
                padding: "0.85rem 1.75rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a RAG Development Consultation
            </Link>
            <Link
              href="/contact/"
              className="btn btn-secondary"
              style={{
                background: "#ffffff",
                color: "var(--text-main, #0f172a)",
                border: "1px solid var(--border-subtle, #e8eef6)",
                padding: "0.85rem 1.75rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Discuss Your RAG Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
