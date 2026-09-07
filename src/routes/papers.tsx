import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText } from "lucide-react";
import { Eyebrow, SectionLabel } from "@/components/site-shell";

export const Route = createFileRoute("/papers")({
  component: PapersPage,
  head: () => ({
    meta: [{ title: "Research Papers — LOG_ON" }],
  }),
});

const papers = [
  {
    id: "benchmark-paradox",
    title: "The Benchmark Paradox in African AI Evaluation",
    category: "Research Paper",
    description:
      "Critical analysis of how standard AI benchmarks fail to capture African cognitive frameworks and cultural competence.",
    docx: "/papers/benchmark_paradox_paper.docx",
    md: "/papers/benchmark_paradox_paper.md",
  },
  {
    id: "cultural-bridge",
    title: "Cultural Bridge SAE Analysis",
    category: "Technical Research",
    description:
      "Sparse autoencoder feature analysis detecting where frontier LLMs collapse African concepts into English proxies.",
    docx: "/papers/cultural_bridge_sae_analysis.docx",
    md: "/papers/cultural_bridge_sae_analysis.md",
  },
  {
    id: "schmidt-2026",
    title: "Schmidt Sciences 2026 Proposal",
    category: "Grant Proposal",
    description:
      "Research proposal for African cognitive AI infrastructure and interpretability research.",
    docx: "/papers/schmidt_2026_proposal_REVISED_final.docx",
    md: "/papers/schmidt_2026_proposal_REVISED_final.md",
  },
  {
    id: "schmidt-compliance",
    title: "Schmidt Compliance Audit",
    category: "Audit Report",
    description:
      "Comprehensive audit of alignment with Schmidt Sciences programme requirements and objectives.",
    docx: "/papers/schmidt_compliance_audit.docx",
    md: "/papers/schmidt_compliance_audit.md",
  },
  {
    id: "smme-audit",
    title: "SMME Agentic AI Research Audit",
    category: "Research Audit",
    description:
      "Analysis of small, medium and micro enterprise opportunities in African agentic AI deployment.",
    docx: "/papers/smme_agentic_ai_research_audit.docx",
    md: "/papers/smme_agentic_ai_research_audit.md",
  },
  {
    id: "study1-discourse",
    title: "Does Discourse Structure Determine Comprehension?",
    category: "Empirical Study",
    description:
      "Study 1 examining the relationship between African-language discourse patterns and AI comprehension metrics.",
    docx: "/papers/study1_does_discourse_structure_determine_comprehension.docx",
    md: "/papers/study1_does_discourse_structure_determine_comprehension.md",
  },
  {
    id: "study2-proverb",
    title: "Toward a Proverb Activation Library",
    category: "Empirical Study",
    description:
      "Study 2 building ground-truth datasets for Yoruba reasoning primitives through proverb activation analysis.",
    docx: "/papers/study2_toward_a_proverb_activation_library.docx",
    md: "/papers/study2_toward_a_proverb_activation_library.md",
  },
  {
    id: "whose-intelligence",
    title: "Whose Intelligence Is This?",
    category: "Position Paper",
    description:
      "Foundational position paper on African AI sovereignty and the epistemological frameworks governing objective functions.",
    docx: "/papers/whose-intelligence-is-this.docx",
    md: "/papers/whose-intelligence-is-this.md",
  },
  {
    id: "research-ideas",
    title: "Research Ideas & Proposals: African Cognitive AI",
    category: "Research Portfolio",
    description:
      "Collection of research directions, methodologies, and proposals for advancing African cognitive AI.",
    docx: "/papers/research_ideas_proposals_african_cognitive_ai.docx",
    md: "/papers/research_ideas_proposals_african_cognitive_ai.md",
  },
  {
    id: "agentbridge-spec",
    title: "AgentBridge & AgentBase Specification",
    category: "Technical Specification",
    description:
      "Technical architecture document for multi-agent orchestration with African deliberation protocols.",
    docx: null,
    md: "/papers/11_agentbridge_agentbase_spec.md",
  },
] as const;

function PapersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-amber px-4 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Eyebrow>Research Papers</Eyebrow>
          <h1 className="font-display text-[clamp(2.6rem,8vw,5.8rem)] leading-[0.95] font-black tracking-[-0.03em] text-paper">
            Building African AI
            <br />
            <em className="text-amber not-italic sm:italic">One Paper at a Time.</em>
          </h1>
          <p className="mt-7 max-w-2xl font-display text-lg text-muted italic">
            Original research in African cognitive AI, LLM interpretability, and cultural bias detection.
            All papers are available for download in multiple formats.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center bg-amber px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-void uppercase transition-colors hover:bg-amber-bright"
            >
              Discuss Collaboration
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center border border-amber-dim px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-amber uppercase transition-colors hover:border-amber hover:bg-amber-pale"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Papers & Publications</SectionLabel>
          <p className="mb-10 max-w-2xl text-[0.97rem] text-body">
            Our research spans interpretability analysis, empirical studies, grant proposals, and technical specifications.
            Download any paper in DOCX format for citation or MD format for reading.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            {papers.map((paper) => (
              <article
                key={paper.id}
                className="group border border-border bg-surface p-6 transition-colors hover:border-amber"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <FileText className="size-5 text-amber" />
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-amber uppercase">
                        {paper.category}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-head group-hover:text-amber">
                      {paper.title}
                    </h3>
                    <p className="mt-2 text-sm text-body">{paper.description}</p>
                  </div>
                  
                  <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                    {paper.docx && (
                      <a
                        href={paper.docx}
                        download
                        className="inline-flex min-h-10 items-center gap-2 bg-amber px-4 font-mono text-[11px] font-bold tracking-[0.15em] text-void uppercase transition-colors hover:bg-amber-bright"
                      >
                        <Download className="size-4" />
                        Download DOCX
                      </a>
                    )}
                    {paper.md && (
                      <a
                        href={paper.md}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 border border-amber-dim px-4 font-mono text-[11px] font-bold tracking-[0.15em] text-amber uppercase transition-colors hover:border-amber hover:bg-amber-pale"
                      >
                        <FileText className="size-4" />
                        Read Markdown
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-black text-void">
            Want to collaborate on this research?
          </h2>
          <p className="mt-4 text-[0.97rem] text-void/80">
            We welcome partnerships with researchers, institutions, and organisations working on African AI,
            linguistic justice, and cognitive sovereignty.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center bg-void px-8 font-mono text-[12px] font-bold tracking-[0.15em] text-amber uppercase transition-colors hover:bg-void/90"
            >
              Get in Touch
            </Link>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center border border-void px-8 font-mono text-[12px] font-bold tracking-[0.15em] text-void uppercase transition-colors hover:bg-void hover:text-amber"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
