import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site-shell";
import { sources, synthThreads } from "@/lib/content";

export const Route = createFileRoute("/map")({
  component: MapPage,
  head: () => ({ meta: [{ title: "The Direction Problem — LOG_ON" }] }),
});

const recs = [
  {
    n: "1",
    domain: "From Williams + Prior Work",
    title: "Build LOG_ON's LFA before the next proposal",
    body: "Research, commercial, and content are three outputs. They do not yet have a publicly documented logic chain showing how all three connect to one impact.",
  },
  {
    n: "2",
    domain: "From Derosiaux + Koe",
    title: "Audit your agent environment before you build more agents",
    body: "Each agent is operating in an epistemic environment you may not have fully documented. Find the CLAUDE.md equivalent for every system in the stack.",
  },
  {
    n: "3",
    domain: "From Koe · LOG_ON Brand",
    title: "LOG_ON has the brand. Now it needs the offer stack.",
    body: "Brand is strong. Content is strong. Offer is fragmented. Map the ladder. Trust is the moat — monetise it.",
  },
  {
    n: "4",
    domain: "From All Three Sources",
    title: "The content waterfall is already there. Deploy it.",
    body: "Every essay is a YouTube script. Every section is a thread. Every framework diagram is a carousel.",
  },
  {
    n: "5",
    domain: "From Derosiaux + Prior AI Work",
    title: "Build the cognitive tooling layer for African AI research",
    body: "PAL, cross-lingual SAE setup, African-language discourse benchmark. The cognitive tooling is the research infrastructure.",
  },
  {
    n: "6",
    domain: "From Koe · Highest Leverage",
    title: "Stop using AI to think for you. Use it to think with you.",
    body: "Define what good looks like before you prompt. Use the LFA. Set the direction. Then execute — with AI as the accelerator, not the driver.",
  },
];

function MapPage() {
  return (
    <>
      <section className="border-b border-border px-4 py-16 text-center sm:px-10 sm:py-20">
        <Eyebrow>Cross-source analysis · LOG_ON Intelligence Review</Eyebrow>
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-black tracking-[-0.02em]">
          The <em className="text-amber italic">Direction</em> Problem
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-display text-lg text-muted italic">
          Three writers. Three domains. One failure mode: execution running ahead of understanding,
          with AI making the error faster and more expensive.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            "Williams · Systems Thinking",
            "Derosiaux · Agent Tooling",
            "Koe · One-Person Business",
            "LOG_ON · African Cognitive Sovereignty",
          ].map((p) => (
            <span
              key={p}
              className="border border-border px-3 py-1.5 font-mono text-[10px] tracking-wide text-muted"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 border-y-2 border-amber bg-amber-pale px-4 py-8 sm:flex-row sm:items-center sm:px-10">
        <h2 className="min-w-[220px] font-display text-2xl text-amber italic">
          The thread
          <br />
          across all three
        </h2>
        <p className="max-w-2xl text-[0.9rem] leading-relaxed">
          Williams: systems thinking must precede analytical execution. Derosiaux: the agent's
          epistemic environment must be designed before tasks are assigned. Koe: AI is leverage for
          skilled humans — it amplifies direction, not replaces it. All three observe the same
          failure at different scales. Every system executes toward whatever target it has been
          handed — and most practitioners hand it the wrong target first.
        </p>
      </section>

      <div className="flex flex-col items-center px-4 pt-14">
        <div className="bg-amber px-10 py-6 text-center [clip-path:polygon(12px_0%,calc(100%-12px)_0%,100%_50%,calc(100%-12px)_100%,12px_100%,0%_50%)]">
          <h2 className="font-display text-xl font-black text-void">THE DIRECTION PROBLEM</h2>
          <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-void/60 uppercase">
            Execution amplified by AI · Wrong target · Same failure
          </p>
        </div>
        <div className="h-8 w-px bg-linear-to-b from-amber to-border" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0.5 px-4 pb-4 md:grid-cols-3">
        {sources.map((s) => (
          <article
            key={s.id}
            className={
              s.tone === "teal"
                ? "border-t-2 border-teal bg-teal-pale p-6"
                : s.tone === "info"
                  ? "border-t-2 border-info bg-info-pale p-6"
                  : "border-t-2 border-danger bg-danger-pale p-6"
            }
          >
            <p
              className={
                s.tone === "teal"
                  ? "mb-2 font-mono text-[9px] font-bold tracking-[0.3em] text-teal uppercase"
                  : s.tone === "info"
                    ? "mb-2 font-mono text-[9px] font-bold tracking-[0.3em] text-info uppercase"
                    : "mb-2 font-mono text-[9px] font-bold tracking-[0.3em] text-danger uppercase"
              }
            >
              {s.tag}
            </p>
            <h3 className="mb-3 font-display text-[1.05rem] text-head italic">{s.title}</h3>
            <p className="mb-4 border-b border-border pb-4 text-[0.82rem]">{s.core}</p>
            <p className="mb-1 font-mono text-[9px] font-bold tracking-[0.2em] text-muted uppercase">
              Core concept
            </p>
            <p
              className={
                s.tone === "teal"
                  ? "text-[0.85rem] font-bold text-teal"
                  : s.tone === "info"
                    ? "text-[0.85rem] font-bold text-info"
                    : "text-[0.85rem] font-bold text-danger"
              }
            >
              {s.concept}
            </p>
          </article>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="mb-6 text-center font-mono text-[11px] font-bold tracking-[0.3em] text-amber uppercase">
          6 Synthesis Threads
        </p>
        <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
          {synthThreads.map((t) => (
            <article key={t.n} className="relative border-t-2 border-amber-dim bg-surface p-6">
              <span className="absolute top-3 right-4 font-display text-4xl font-black text-border">
                {t.n}
              </span>
              <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.2em] text-amber uppercase">
                {t.label}
              </p>
              <h3 className="mb-2 pr-8 font-display text-base text-head">{t.title}</h3>
              <p className="text-[0.82rem]">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-panel px-4 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-mono text-[10px] font-bold tracking-[0.35em] text-amber uppercase">
            What this means for LOG_ON
          </p>
          <h2 className="mb-10 text-center font-display text-[clamp(1.8rem,4vw,3rem)] font-black">
            Six recommendations, mapped.
          </h2>
          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
            {recs.map((r) => (
              <article key={r.n} className="relative overflow-hidden border-l-2 border-amber bg-surface p-6">
                <span className="pointer-events-none absolute right-2 bottom-0 font-display text-6xl font-black text-border">
                  {r.n}
                </span>
                <p className="mb-2 font-mono text-[9px] font-bold tracking-[0.3em] text-amber-dim uppercase">
                  {r.domain}
                </p>
                <h3 className="mb-3 font-display text-[1.05rem] font-bold text-head">{r.title}</h3>
                <p className="relative text-[0.82rem]">{r.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/brief"
              className="inline-flex min-h-12 items-center bg-amber px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-void uppercase"
            >
              Read the full brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
