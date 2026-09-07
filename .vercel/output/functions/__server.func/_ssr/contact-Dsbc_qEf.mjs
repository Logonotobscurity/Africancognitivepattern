import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Eyebrow } from "./router-C6r2tvIp.mjs";
import { l as offers } from "./content-HJq9tygl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dsbc_qEf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const record = {
			name: String(data.get("name") ?? ""),
			org: String(data.get("org") ?? ""),
			email: String(data.get("email") ?? ""),
			service: String(data.get("service") ?? ""),
			message: String(data.get("message") ?? ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem("logon-enquiries") || "[]");
		localStorage.setItem("logon-enquiries", JSON.stringify([record, ...prev]));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 sm:px-10 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Get in touch" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-[clamp(2rem,5vw,3.4rem)] font-black",
					children: [
						"Let's audit your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-amber italic",
							children: "AI direction."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 mb-10 text-body",
					children: "Tell us about your AI deployment. We'll respond with a scoping note or a direct Tier 1 audit proposal."
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-teal bg-teal-pale px-6 py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-bold text-paper",
							children: "Enquiry received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-body",
							children: "Saved locally in this preview. In production this form routes to the LOG_ON desk. Meanwhile, open the Action Brief and start the Week 1 sequence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-6 min-h-11 border border-amber px-4 font-mono text-[11px] tracking-[0.15em] text-amber uppercase",
							onClick: () => setSent(false),
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-3",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								name: "name",
								required: true,
								placeholder: "Amaka Osei"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Organisation",
								name: "org",
								required: true,
								placeholder: "TechCo Nigeria"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true,
							placeholder: "amaka@techco.ng"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase",
								children: "I'm interested in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "service",
								className: "h-12 w-full border border-border bg-surface px-4 text-head outline-none focus:border-amber",
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select a service"
									}),
									offers.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: o.id,
										children: [
											o.name,
											" (",
											o.priceN,
											")"
										]
									}, o.id)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "other",
										children: "Research partnership / other"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase",
								children: "Tell us about your AI deployment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 5,
								placeholder: "We're deploying an AI customer service system across 3 Nigerian cities...",
								className: "w-full border border-border bg-surface px-4 py-3 text-head outline-none focus:border-amber"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-2 min-h-12 bg-amber font-mono text-[12px] font-bold tracking-[0.2em] text-void uppercase hover:bg-amber-bright",
							children: "Send enquiry"
						})
					]
				})
			]
		})
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			placeholder,
			className: "h-12 w-full border border-border bg-surface px-4 text-head outline-none focus:border-amber"
		})]
	});
}
//#endregion
export { Contact as component };
