import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as cn, n as CopyBlock, r as Eyebrow } from "./router-C6r2tvIp.mjs";
import { d as palSample, f as positioning, i as execGroups, r as claudeDocs, s as mission, u as outreachDm } from "./content-HJq9tygl.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/execute-DX0z5LyM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var memory = {};
var fallbackStorage = {
	getItem: (k) => memory[k] ?? null,
	setItem: (k, v) => {
		memory[k] = v;
	},
	removeItem: (k) => {
		delete memory[k];
	}
};
var useExecuteStore = create()(persist((set) => ({
	done: {},
	toggle: (id) => set((s) => ({ done: {
		...s.done,
		[id]: !s.done[id]
	} })),
	reset: () => set({ done: {} })
}), {
	name: "logon-execute",
	storage: createJSONStorage(() => typeof window === "undefined" ? fallbackStorage : localStorage)
}));
function execStats(done) {
	const ids = execGroups.flatMap((g) => g.tasks.map((t) => t.id));
	const total = ids.length;
	const complete = ids.filter((id) => done[id]).length;
	return {
		total,
		complete,
		pct: total ? Math.round(complete / total * 100) : 0
	};
}
function Execute() {
	const done = useExecuteStore((s) => s.done);
	const toggle = useExecuteStore((s) => s.toggle);
	const reset = useExecuteStore((s) => s.reset);
	const { total, complete, pct } = execStats(done);
	const [open, setOpen] = (0, import_react.useState)("01");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b-2 border-amber px-4 py-14 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Execution Command Centre · All actions built" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[clamp(2.4rem,5vw,4.2rem)] font-black tracking-[-0.03em]",
						children: [
							"Action",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-amber italic",
								children: "All Tasks."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg font-display text-muted italic",
						children: "Every deliverable produced. Check boxes as you complete actions. Progress tracks in this browser."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-end gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-4xl font-black text-amber tabular-nums",
								children: [
									complete,
									"/",
									total
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] tracking-wide text-muted",
								children: [
									"Tasks complete · ",
									pct,
									"%"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 min-w-40 flex-1 bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-amber transition-[width] duration-300",
									style: { width: `${pct}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: reset,
								className: "min-h-10 border border-border px-3 font-mono text-[10px] tracking-[0.15em] text-muted uppercase hover:text-head",
								children: "Reset"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-amber-pale px-4 py-6 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-mono text-[10px] font-bold tracking-[0.3em] text-amber-bright uppercase",
					children: "Do these right now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						["Mission statement", "Add to LinkedIn bio and email signature now."],
						["Post Thread 1", "All 8 tweets are written. Schedule 8am Tuesday."],
						["Outreach DM 1", "Identify one Nigerian EdTech or FinTech deploying AI."],
						["CLAUDE.md", "Save the Cultural Bridge protocol where the research agent can read it."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-amber-dim bg-void/30 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 font-mono text-[9px] font-bold tracking-[0.15em] text-amber uppercase",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.8rem] text-amber-bright",
							children: d
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-5xl flex-col gap-0.5 px-4 py-10 sm:px-10",
			children: execGroups.map((g) => {
				const isOpen = open === g.rec;
				const groupDone = g.tasks.filter((t) => done[t.id]).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border-l-2 border-amber bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-start justify-between gap-4 px-5 py-5 text-left",
						onClick: () => setOpen(isOpen ? "" : g.rec),
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-black text-mid",
								children: g.rec
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] font-bold tracking-[0.25em] text-amber-dim uppercase",
									children: g.domain
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold text-head",
									children: g.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[10px] text-muted",
									children: [
										groupDone,
										"/",
										g.tasks.length,
										" done"
									]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("mt-1 size-4 shrink-0 text-muted transition-transform duration-150", isOpen && "rotate-90") })]
					}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border px-5 py-6",
						children: [
							g.rec === "01" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "Mission statement — paste everywhere",
									text: mission
								})
							}) : null,
							g.rec === "02" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "Cultural Bridge Tech — CLAUDE.md",
									text: claudeDocs.cbt
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "AgentBridge Africa — CLAUDE.md",
									text: claudeDocs.aba
								})]
							}) : null,
							g.rec === "03" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "Outreach DM — EdTech (personalise and send)",
									text: outreachDm
								})
							}) : null,
							g.rec === "05" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "PAL v0.1 — Proverb 01 annotation",
									text: palSample
								})
							}) : null,
							g.rec === "06" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
									label: "Positioning — copy into every proposal",
									text: positioning
								})
							}) : null,
							g.tasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer gap-3.5 border-b border-border py-3.5 last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: !!done[t.id],
									onChange: () => toggle(t.id),
									className: "mt-1 size-[18px] shrink-0 appearance-none border-2 border-amber-dim checked:border-ok checked:bg-ok"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-bold text-head",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-[0.83rem]",
										children: t.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-mono text-[9px] tracking-[0.1em] text-amber-dim",
										children: t.when
									})
								] })]
							}, t.id))
						]
					}) : null]
				}, g.rec);
			})
		})
	] });
}
//#endregion
export { Execute as component };
