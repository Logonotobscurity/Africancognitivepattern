import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, SectionLabel } from "@/components/site-shell";
import { mission, offers, researchStreams, stats, moat } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "LOG_ON — Direction Infrastructure for African AI" }],
  }),
});

function Home() {
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
          <Eyebrow>LOG_ON AI Solution Agency · Lagos, Nigeria</Eyebrow>
          <h1 className="font-display text-[clamp(2.6rem,8vw,5.8rem)] leading-[0.95] font-black tracking-[-0.03em] text-paper">
            Your AI Is
            <br />
            Executing.
            <br />
            <em className="text-amber not-italic sm:italic">Toward What?</em>
          </h1>
          <p className="mt-7 max-w-lg font-display text-lg text-muted italic">
            Most organisations deploying AI in African contexts get technically correct outputs
            that solve the wrong problem, miss the cultural context, or violate constraints that
            were never documented.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center bg-amber px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-void uppercase transition-colors hover:bg-amber-bright"
            >
              Get a Cultural Bias Audit
            </Link>
            <Link
              to="/brief"
              className="inline-flex min-h-12 items-center border border-amber-dim px-6 font-mono text-[12px] font-bold tracking-[0.15em] text-amber uppercase transition-colors hover:border-amber hover:bg-amber-pale"
            >
              Open the Action Brief
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-amber px-4 py-10 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-mono text-[10px] font-bold tracking-[0.3em] text-void/50 uppercase">
            What LOG_ON Does
          </p>
          <p className="font-display text-[clamp(1.1rem,2.4vw,1.55rem)] leading-snug font-bold text-void">
            {mission}
          </p>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] font-black tracking-[-0.02em]">
            The AI is working.
            <br />
            It is working toward
            <br />
            <em className="text-amber italic">someone else's outcomes.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[0.97rem] text-body">
            Nigerian users get generic responses built for American behaviour patterns. Yoruba
            concepts get processed through English semantic frames. Safety protocols designed for
            Western regulatory environments get applied to contexts they were never tested in.
          </p>
          <p className="mt-4 max-w-2xl text-[0.97rem] text-body">
            The problem is not your prompts. It is that your AI was built with someone else's
            direction. <span className="text-head">The failure is always in the systems layer that nobody designed.</span>
          </p>
          <div className="mt-10 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.n} className="border-t-2 border-amber-dim bg-surface px-5 py-6">
                <div className="font-display text-3xl font-black text-amber tabular-nums">{s.n}</div>
                <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-wide text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mb-12 font-display text-[clamp(1.8rem,4vw,3rem)] font-black">
            Three ways to work with <em className="text-amber italic">LOG_ON.</em>
          </h2>
          <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-3">
            {offers.map((o) => (
              <article
                key={o.id}
                className={
                  o.featured
                    ? "border-t-2 border-amber bg-void px-6 py-7"
                    : "border-t-2 border-amber-dim bg-void px-6 py-7"
                }
              >
                <p className="mb-2 font-mono text-[10px] font-bold tracking-[0.2em] text-amber uppercase">
                  {o.tier}
                </p>
                <p className="font-display text-3xl font-black text-paper">{o.priceN}</p>
                <p className="mb-4 font-mono text-[10px] text-muted">{o.priceU}</p>
                <h3 className="mb-4 border-b border-border pb-3 font-sans text-[0.97rem] font-bold text-head">
                  {o.name}
                </h3>
                <ul>
                  {o.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-2 pl-4 text-[0.83rem] text-body last:border-b-0"
                    >
                      <span className="text-amber">→ </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={
                    o.featured
                      ? "mt-6 flex min-h-11 items-center justify-center bg-amber font-mono text-[11px] font-bold tracking-[0.15em] text-void uppercase"
                      : "mt-6 flex min-h-11 items-center justify-center border border-amber-dim font-mono text-[11px] font-bold tracking-[0.15em] text-amber uppercase"
                  }
                >
                  {o.featured ? "Start here" : "Request"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Why LOG_ON</SectionLabel>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-black">
              The only practice that treats your AI's objective function as a{" "}
              <em className="text-amber italic">cultural document.</em>
            </h2>
            <p className="mt-5 text-[0.92rem] text-body">
              Cross-disciplinary AI systems architecture, 25 years of upstream-to-downstream oil
              and gas operations, and original research in African cognitive AI.
            </p>
          </div>
          <ol>
            {moat.map((m, i) => (
              <li key={m} className="flex gap-3.5 border-b border-border py-4 text-[0.88rem] last:border-b-0">
                <span className="mt-0.5 min-w-6 font-mono text-[11px] font-bold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border bg-surface px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Research Streams</SectionLabel>
          <h2 className="mb-10 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-black">
            Building the cognitive <em className="text-amber italic">infrastructure layer.</em>
          </h2>
          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
            {researchStreams.map((r) => (
              <article key={r.label} className="border-l-2 border-amber-dim bg-void px-5 py-6">
                <p className="mb-2 font-mono text-[9px] font-bold tracking-[0.2em] text-amber-dim uppercase">
                  {r.label}
                </p>
                <h3 className="mb-2 font-sans text-[0.9rem] font-bold text-head">{r.title}</h3>
                <p className="text-[0.8rem] leading-relaxed text-muted">{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pages in this brief</SectionLabel>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black">
            Six recommendations. Fully written. <em className="text-amber italic">Ready to run.</em>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
            {[
              { to: "/brief" as const, t: "Action Brief", d: "LFA, audits, offer stack, waterfall, tooling, 30-day plan." },
              { to: "/map" as const, t: "Mind Map", d: "Williams · Derosiaux · Koe synthesised into the Direction Problem." },
              { to: "/essay" as const, t: "Onboarding Essay", d: "Why you are still onboarding agents like it is 2019." },
              { to: "/execute" as const, t: "Command Centre", d: "Checkboxes, copyable CLAUDE.md files, outreach DMs." },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group flex items-start justify-between gap-4 border border-border bg-surface p-5 transition-colors hover:border-amber"
              >
                <div>
                  <p className="font-display text-lg font-bold text-head group-hover:text-amber">{c.t}</p>
                  <p className="mt-1 text-sm text-body">{c.d}</p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
