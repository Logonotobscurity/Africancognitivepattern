import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Eyebrow, CopyBlock } from "@/components/site-shell";
import { execGroups, mission, claudeDocs, palSample, outreachDm, positioning } from "@/lib/content";
import { execStats, useExecuteStore } from "@/lib/execute-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/execute")({
  component: Execute,
  head: () => ({ meta: [{ title: "Execution Command Centre — LOG_ON" }] }),
});

function Execute() {
  const done = useExecuteStore((s) => s.done);
  const toggle = useExecuteStore((s) => s.toggle);
  const reset = useExecuteStore((s) => s.reset);
  const { total, complete, pct } = execStats(done);
  const [open, setOpen] = useState<string>("01");

  return (
    <>
      <section className="border-b-2 border-amber px-4 py-14 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Execution Command Centre · All actions built</Eyebrow>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-black tracking-[-0.03em]">
            Action
            <br />
            <em className="text-amber italic">All Tasks.</em>
          </h1>
          <p className="mt-4 max-w-lg font-display text-muted italic">
            Every deliverable produced. Check boxes as you complete actions. Progress tracks in
            this browser.
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="font-display text-4xl font-black text-amber tabular-nums">
                {complete}/{total}
              </p>
              <p className="font-mono text-[10px] tracking-wide text-muted">Tasks complete · {pct}%</p>
            </div>
            <div className="h-1 min-w-40 flex-1 bg-border">
              <div className="h-full bg-amber transition-[width] duration-300" style={{ width: `${pct}%` }} />
            </div>
            <button
              type="button"
              onClick={reset}
              className="min-h-10 border border-border px-3 font-mono text-[10px] tracking-[0.15em] text-muted uppercase hover:text-head"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-amber-pale px-4 py-6 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-mono text-[10px] font-bold tracking-[0.3em] text-amber-bright uppercase">
            Do these right now
          </p>
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Mission statement", "Add to LinkedIn bio and email signature now."],
              ["Post Thread 1", "All 8 tweets are written. Schedule 8am Tuesday."],
              ["Outreach DM 1", "Identify one Nigerian EdTech or FinTech deploying AI."],
              ["CLAUDE.md", "Save the Cultural Bridge protocol where the research agent can read it."],
            ].map(([t, d]) => (
              <div key={t} className="border border-amber-dim bg-void/30 px-4 py-3">
                <p className="mb-1 font-mono text-[9px] font-bold tracking-[0.15em] text-amber uppercase">
                  {t}
                </p>
                <p className="text-[0.8rem] text-amber-bright">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-5xl flex-col gap-0.5 px-4 py-10 sm:px-10">
        {execGroups.map((g) => {
          const isOpen = open === g.rec;
          const groupDone = g.tasks.filter((t) => done[t.id]).length;
          return (
            <section key={g.rec} className="border-l-2 border-amber bg-surface">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                onClick={() => setOpen(isOpen ? "" : g.rec)}
                aria-expanded={isOpen}
              >
                <div className="flex gap-4">
                  <span className="font-display text-3xl font-black text-mid">{g.rec}</span>
                  <div>
                    <p className="font-mono text-[9px] font-bold tracking-[0.25em] text-amber-dim uppercase">
                      {g.domain}
                    </p>
                    <p className="font-display text-lg font-bold text-head">{g.title}</p>
                    <p className="mt-1 font-mono text-[10px] text-muted">
                      {groupDone}/{g.tasks.length} done
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "mt-1 size-4 shrink-0 text-muted transition-transform duration-150",
                    isOpen && "rotate-90",
                  )}
                />
              </button>
              {isOpen ? (
                <div className="border-t border-border px-5 py-6">
                  {g.rec === "01" ? (
                    <div className="mb-6">
                      <CopyBlock label="Mission statement — paste everywhere" text={mission} />
                    </div>
                  ) : null}
                  {g.rec === "02" ? (
                    <div className="mb-6 space-y-3">
                      <CopyBlock label="Cultural Bridge Tech — CLAUDE.md" text={claudeDocs.cbt} />
                      <CopyBlock label="AgentBridge Africa — CLAUDE.md" text={claudeDocs.aba} />
                    </div>
                  ) : null}
                  {g.rec === "03" ? (
                    <div className="mb-6">
                      <CopyBlock label="Outreach DM — EdTech (personalise and send)" text={outreachDm} />
                    </div>
                  ) : null}
                  {g.rec === "05" ? (
                    <div className="mb-6">
                      <CopyBlock label="PAL v0.1 — Proverb 01 annotation" text={palSample} />
                    </div>
                  ) : null}
                  {g.rec === "06" ? (
                    <div className="mb-6">
                      <CopyBlock label="Positioning — copy into every proposal" text={positioning} />
                    </div>
                  ) : null}
                  {g.tasks.map((t) => (
                    <label
                      key={t.id}
                      className="flex cursor-pointer gap-3.5 border-b border-border py-3.5 last:border-b-0"
                    >
                      <input
                        type="checkbox"
                        checked={!!done[t.id]}
                        onChange={() => toggle(t.id)}
                        className="mt-1 size-[18px] shrink-0 appearance-none border-2 border-amber-dim checked:border-ok checked:bg-ok"
                      />
                      <span>
                        <span className="block font-bold text-head">{t.title}</span>
                        <span className="mt-0.5 block text-[0.83rem]">{t.desc}</span>
                        <span className="mt-1 block font-mono text-[9px] tracking-[0.1em] text-amber-dim">
                          {t.when}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </>
  );
}
