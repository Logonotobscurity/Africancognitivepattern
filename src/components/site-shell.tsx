import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/brief", label: "Action Brief" },
  { to: "/map", label: "Mind Map" },
  { to: "/essay", label: "Essay" },
  { to: "/execute", label: "Execute" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-void text-body">
      <header className="sticky top-0 z-50 border-b border-border bg-void/95 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-8">
          <Link
            to="/"
            className="font-mono text-[12px] font-bold tracking-[0.25em] text-amber"
            onClick={() => setOpen(false)}
          >
            LOG_ON
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "font-mono text-[11px] tracking-[0.12em] transition-colors duration-150",
                  pathname === l.to ? "text-amber" : "text-muted hover:text-head",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-head md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-border px-4 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center font-mono text-[12px] tracking-[0.12em]",
                  pathname === l.to ? "text-amber" : "text-head",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-amber px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[12px] font-bold tracking-[0.25em] text-amber">LOG_ON</span>
          <p className="font-mono text-[10px] tracking-[0.1em] text-muted">
            Lagos, Nigeria · Direction infrastructure for African AI · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.3em] text-amber uppercase">
      <span className="inline-block h-px w-7 bg-amber" aria-hidden />
      {children}
    </p>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 font-mono text-[10px] font-bold tracking-[0.3em] text-amber uppercase">
      {children}
      <span className="h-px max-w-40 flex-1 bg-linear-to-r from-amber-dim to-transparent opacity-40" />
    </p>
  );
}

export function CopyBlock({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="border border-border border-l-2 border-l-amber bg-void">
      <div className="flex items-center justify-between border-b border-border bg-panel px-4 py-2">
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-amber uppercase">
          {label}
        </span>
        <button
          type="button"
          className={cn(
            "min-h-8 border px-2.5 font-mono text-[9px] font-bold tracking-[0.15em] uppercase",
            copied
              ? "border-ok text-ok"
              : "border-border text-muted hover:border-amber hover:text-amber",
          )}
          onClick={async () => {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-72 overflow-auto px-5 py-4 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-body">
        {text}
      </pre>
    </div>
  );
}
