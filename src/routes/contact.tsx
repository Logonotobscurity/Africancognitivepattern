import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site-shell";
import { offers } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Get an Audit — LOG_ON" }] }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      name: String(data.get("name") ?? ""),
      org: String(data.get("org") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("logon-enquiries") || "[]") as unknown[];
    localStorage.setItem("logon-enquiries", JSON.stringify([record, ...prev]));
    setSent(true);
  }

  return (
    <section className="px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-xl">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-black">
          Let's audit your
          <br />
          <em className="text-amber italic">AI direction.</em>
        </h1>
        <p className="mt-4 mb-10 text-body">
          Tell us about your AI deployment. We'll respond with a scoping note or a direct Tier
          1 audit proposal.
        </p>

        {sent ? (
          <div className="border border-teal bg-teal-pale px-6 py-8">
            <p className="font-display text-2xl font-bold text-paper">Enquiry received.</p>
            <p className="mt-2 text-body">
              Saved locally in this preview. In production this form routes to the LOG_ON desk.
              Meanwhile, open the Action Brief and start the Week 1 sequence.
            </p>
            <button
              type="button"
              className="mt-6 min-h-11 border border-amber px-4 font-mono text-[11px] tracking-[0.15em] text-amber uppercase"
              onClick={() => setSent(false)}
            >
              Send another
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Amaka Osei" />
              <Field label="Organisation" name="org" required placeholder="TechCo Nigeria" />
            </div>
            <Field label="Email" name="email" type="email" required placeholder="amaka@techco.ng" />
            <label className="block">
              <span className="mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase">
                I'm interested in
              </span>
              <select
                name="service"
                className="h-12 w-full border border-border bg-surface px-4 text-head outline-none focus:border-amber"
                defaultValue=""
              >
                <option value="">Select a service</option>
                {offers.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.name} ({o.priceN})
                  </option>
                ))}
                <option value="other">Research partnership / other</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase">
                Tell us about your AI deployment
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="We're deploying an AI customer service system across 3 Nigerian cities..."
                className="w-full border border-border bg-surface px-4 py-3 text-head outline-none focus:border-amber"
              />
            </label>
            <button
              type="submit"
              className="mt-2 min-h-12 bg-amber font-mono text-[12px] font-bold tracking-[0.2em] text-void uppercase hover:bg-amber-bright"
            >
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] font-bold tracking-[0.15em] text-muted uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full border border-border bg-surface px-4 text-head outline-none focus:border-amber"
      />
    </label>
  );
}
