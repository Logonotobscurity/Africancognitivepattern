import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, SectionLabel } from "@/components/site-shell";
import {
  lfaRows,
  mission,
  audits,
  offers,
  landingCopy,
  waterfall,
  thread1,
  tools,
  calendar,
  positioning,
} from "@/lib/content";

export const Route = createFileRoute("/brief")({
  component: Brief,
  head: () => ({ meta: [{ title: "Action Brief — LOG_ON" }] }),
});

function Brief() {
  return (
    <>
      <section className="border-b-2 border-amber px-4 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Action Brief · 6 Recommendations · April 2026</Eyebrow>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] font-black tracking-[-0.03em]">
            Action
            <br />
            <em className="text-amber italic">Brief.</em>
          </h1>
          <p className="mt-6 max-w-xl font-display text-lg text-muted italic">
            Six recommendations. Six deliverables. Everything filled in, production-ready, specific
            to LOG_ON. Nothing left as homework.
          </p>
          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-0.5 sm:grid-cols-3">
            {[
              ["This document contains", "6 complete deliverables"],
              ["Derived from", "Williams · Derosiaux · Koe"],
              ["Implementation horizon", "7–30 days"],
            ].map(([k, v]) => (
              <div key={k} className="border-t-2 border-amber-dim bg-surface px-5 py-4">
                <p className="mb-1 font-mono text-[9px] font-bold tracking-[0.25em] text-amber-dim uppercase">
                  {k}
                </p>
                <p className="text-sm font-bold text-head">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecHeader n="01" domain="From Williams · LFA Framework" title="LOG_ON's Logical Framework — Built" desc="The one-page document that makes every subsequent proposal, pitch, grant application, and client conversation easier. Use it as the opening page of every brief you send." />
      <section className="border-b border-border px-4 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Deliverable 1 — LOG_ON Logical Framework</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-amber text-void">
                  {["Layer", "LOG_ON definition", "Evidence / indicators", "Assumptions"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-mono text-[10px] font-bold tracking-[0.2em] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lfaRows.map((row) => (
                  <tr key={row.layer} className="border-b border-border">
                    <td className="w-36 bg-panel px-4 py-4 align-top font-mono text-[11px] font-bold whitespace-nowrap text-amber">
                      {row.layer}
                      <em className="mt-1 block text-[10px] font-normal text-muted not-italic">{row.time}</em>
                    </td>
                    <td className="bg-void px-4 py-4 align-top text-body">
                      <span className="text-head">{row.def}</span>
                    </td>
                    <td className="bg-surface px-4 py-4 align-top text-body">{row.evidence}</td>
                    <td className="bg-void px-4 py-4 align-top text-body">{row.assumptions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SectionLabel>One-sentence mission</SectionLabel>
          <blockquote className="border-l-4 border-amber bg-panel px-6 py-6">
            <p className="font-display text-lg text-head italic">{mission}</p>
            <p className="mt-3 font-mono text-[10px] tracking-wide text-muted">
              Use this verbatim on the website, in proposals, and at the top of every grant application.
            </p>
          </blockquote>
        </div>
      </section>

      <RecHeader n="02" domain="From Derosiaux · Agent Environment Design" title="Agent Environment Audit — Project Stack" desc="Every active LOG_ON project assessed: what the agent believes, what constraints are missing, what boundaries it is violating because they were never documented." />
      <section className="border-b border-border px-4 py-12 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-0.5 md:grid-cols-2">
          {audits.map((a) => (
            <article
              key={a.id}
              className={
                a.level === "CRITICAL"
                  ? "border-t-2 border-danger bg-surface p-6"
                  : a.level === "HIGH"
                    ? "border-t-2 border-amber bg-surface p-6"
                    : "border-t-2 border-teal bg-surface p-6"
              }
            >
              <p
                className={
                  a.level === "CRITICAL"
                    ? "mb-1 font-mono text-[10px] font-bold tracking-[0.2em] text-danger uppercase"
                    : a.level === "HIGH"
                      ? "mb-1 font-mono text-[10px] font-bold tracking-[0.2em] text-amber uppercase"
                      : "mb-1 font-mono text-[10px] font-bold tracking-[0.2em] text-teal uppercase"
                }
              >
                {a.level}
              </p>
              <h3 className="mb-4 border-b border-border pb-3 font-sans font-bold text-head">{a.name}</h3>
              <AuditRow mark="?" label="What does the agent believe?" text={a.believe} />
              <AuditRow mark="×" label="Missing constraint" text={a.missing} />
              <AuditRow mark="!" label="Boundary being violated" text={a.boundary} />
              <p className="mt-4 border-l-2 border-amber bg-amber-pale px-3 py-2.5 font-mono text-[10px] leading-relaxed tracking-wide text-amber">
                ACTION → {a.action}
              </p>
            </article>
          ))}
        </div>
      </section>

      <RecHeader n="03" domain="From Koe · Brand + Content + Offer" title="LOG_ON Offer Stack — Three Tiers Built" desc="The brand exists. The content exists. The offer stack was missing. Here it is: three purchasable tiers, each with a specific deliverable and landing-page copy ready to deploy." />
      <section className="border-b border-border px-4 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Deliverable 3A — Three-tier offer stack</SectionLabel>
          <div className="mb-10 grid grid-cols-1 gap-0.5 lg:grid-cols-3">
            {offers.map((o) => (
              <article
                key={o.id}
                className={
                  o.featured
                    ? "border-t-2 border-amber bg-amber-pale px-6 py-7"
                    : "border-t-2 border-teal bg-teal-pale px-6 py-7"
                }
              >
                <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.25em] text-amber uppercase">
                  {o.tier}
                </p>
                <p className="font-display text-3xl font-black text-paper">{o.priceN}</p>
                <p className="mb-3 font-mono text-[10px] text-muted">{o.priceU}</p>
                <h3 className="mb-4 border-b border-border pb-3 font-bold text-head">{o.name}</h3>
                {o.items.map((item) => (
                  <p key={item} className="border-b border-border py-2 text-[0.83rem] last:border-b-0">
                    {item}
                  </p>
                ))}
                <p className="mt-4 border-l-2 border-amber bg-void/40 px-3 py-2 font-mono text-[10px] text-amber">
                  {o.deliver}
                </p>
                <p className="mt-3 font-mono text-[10px] text-muted">IDEAL CLIENT → {o.client}</p>
              </article>
            ))}
          </div>
          <SectionLabel>Deliverable 3B — Landing page copy</SectionLabel>
          <div className="space-y-3">
            {landingCopy.map((c) => (
              <div key={c.label} className="border border-border border-l-4 border-l-amber bg-surface px-6 py-5">
                <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.2em] text-amber-dim uppercase">
                  {c.label}
                </p>
                <p className="text-head">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecHeader n="04" domain="From Koe · Content Waterfall" title="“Whose Intelligence Is This?” — Fully Repurposed" desc="The essay exists. Here is the complete content waterfall: five LinkedIn threads, two YouTube scripts, one podcast outline, one carousel set — all derived from work already written." />
      <section className="border-b border-border px-4 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Deliverable 4A — Waterfall map</SectionLabel>
          <div className="mb-10 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-5">
            {(
              [
                ["LinkedIn", waterfall.linkedin, "info"],
                ["YouTube", waterfall.youtube, "danger"],
                ["Podcast", waterfall.podcast, "teal"],
                ["X / Twitter", waterfall.twitter, "ok"],
                ["Carousels", waterfall.carousel, "amber"],
              ] as const
            ).map(([head, items]) => (
              <div key={head} className="flex flex-col bg-surface">
                <p className="border-b border-border bg-info-pale px-3 py-3 font-mono text-[10px] font-bold tracking-[0.15em] text-info uppercase">
                  {head}
                </p>
                {items.map((it) => (
                  <p key={it} className="flex-1 border-b border-border px-3 py-3 text-[0.78rem] last:border-b-0">
                    {it}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <SectionLabel>Deliverable 4B — LinkedIn Thread 1, ready to post</SectionLabel>
          <div className="flex flex-col gap-0.5">
            {thread1.map((t) => (
              <article key={t.n} className="border-l-2 border-amber-dim bg-surface px-6 py-5">
                <div className="mb-2 flex justify-between font-mono text-[10px]">
                  <span className="font-bold tracking-[0.2em] text-amber uppercase">LinkedIn · Thread</span>
                  <span className="text-muted">{t.n}</span>
                </div>
                <h3 className="mb-2 font-display text-[1.05rem] font-bold text-paper">{t.hook}</h3>
                <p className="text-[0.85rem] leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RecHeader n="05" domain="From Derosiaux · Cognitive vs. Execution Tooling" title="African AI Research Cognitive Tooling — Priority Stack" desc="Three research infrastructure items that change what questions you can answer — not how fast you answer them." />
      <section className="border-b border-border px-4 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          {tools.map((t) => (
            <article key={t.rank} className="mb-0.5 grid grid-cols-1 bg-surface md:grid-cols-[200px_1fr]">
              <div className="border-b border-border px-6 py-6 md:border-r md:border-b-0">
                <p className="font-display text-4xl font-black text-mid">{t.rank}</p>
                <p className="mt-1 font-mono text-[9px] font-bold tracking-[0.2em] text-amber uppercase">
                  {t.type}
                </p>
              </div>
              <div className="px-6 py-6">
                <h3 className="mb-2 font-bold text-paper">{t.name}</h3>
                <p className="mb-3 text-[0.85rem]">{t.desc}</p>
                <p className="font-mono text-[10px] tracking-wide text-teal">→ {t.action}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <RecHeader n="06" domain="Master Recommendation · All Sources Synthesised" title="LOG_ON as Direction Infrastructure for African AI" desc="The positioning statement, the moat argument, and the 30-day implementation sequence." />
      <section className="px-4 py-12 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="border-y-2 border-amber bg-amber-pale px-6 py-12 sm:px-10">
            <p className="mb-5 font-mono text-[11px] font-bold tracking-[0.3em] text-amber uppercase">
              Master Strategic Brief
            </p>
            <h2 className="mb-8 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-black">
              The only practice that treats your AI's{" "}
              <em className="text-amber italic">objective function</em> as a cultural document.
            </h2>
            <div className="mb-8 grid grid-cols-1 gap-0.5 md:grid-cols-3">
              {[
                ["The Positioning", "Williams shows most organisations skip the systems layer. Koe shows most operators don't know what good looks like before prompting. Derosiaux shows agents execute competently in wrong environments. LOG_ON builds the missing layer."],
                ["The Moat", "Three assets stacked: 25 years of operational systems experience, active interpretability research, and agentic architecture with African deliberation protocols. Nobody else has all three. The moat is being built in public."],
                ["The Revenue Logic", "Tier 1 audits fund the research. Research builds credibility. Credibility unlocks Tier 3 consulting. Tier 3 funds the cognitive tooling. Tooling produces the benchmark paper. The paper wins the grant."],
              ].map(([t, p]) => (
                <div key={t} className="bg-void/40 p-5">
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.2em] text-amber-bright uppercase">
                    {t}
                  </p>
                  <p className="text-[0.88rem]">{p}</p>
                </div>
              ))}
            </div>
            <div className="border border-amber bg-void px-6 py-8">
              <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.25em] text-amber uppercase">
                One-paragraph positioning
              </p>
              <p className="font-display text-lg text-paper italic">{positioning}</p>
            </div>
          </div>
          <SectionLabel>30-day implementation sequence</SectionLabel>
          {calendar.map((w) => (
            <div key={w.week} className="mb-2 border border-border bg-surface">
              <p className="bg-amber px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.2em] text-void uppercase">
                {w.week}
              </p>
              <ul>
                {w.items.map((it) => (
                  <li key={it} className="flex gap-3 border-b border-border px-5 py-3.5 last:border-b-0">
                    <span className="mt-1 size-4 shrink-0 border-2 border-amber-dim" aria-hidden />
                    <span className="text-[0.88rem]">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-8 font-display text-head italic">
            The Direction Problem is universal: execution runs ahead of understanding, and AI makes
            the error faster and more expensive. LOG_ON is the practice that builds the first two
            layers for organisations operating in African contexts.
          </p>
          <Link
            to="/execute"
            className="mt-8 inline-flex min-h-12 items-center bg-amber px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-void uppercase"
          >
            Open the command centre
          </Link>
        </div>
      </section>
    </>
  );
}

function RecHeader({
  n,
  domain,
  title,
  desc,
}: {
  n: string;
  domain: string;
  title: string;
  desc: string;
}) {
  return (
    <header className="flex flex-col gap-4 border-b border-border bg-surface px-4 py-10 sm:flex-row sm:items-start sm:gap-8 sm:px-10">
      <p className="font-display text-6xl leading-none font-black text-border">{n}</p>
      <div>
        <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.3em] text-amber uppercase">{domain}</p>
        <h2 className="mb-2 font-display text-[clamp(1.5rem,3.5vw,2.3rem)] font-black text-paper">{title}</h2>
        <p className="max-w-2xl text-[0.9rem]">{desc}</p>
      </div>
    </header>
  );
}

function AuditRow({ mark, label, text }: { mark: string; label: string; text: string }) {
  return (
    <div className="mb-3 flex gap-3">
      <span className="min-w-5 font-mono text-[11px] text-muted">{mark}</span>
      <p className="text-[0.83rem] leading-relaxed">
        <strong className="text-head">{label}</strong> {text}
      </p>
    </div>
  );
}
