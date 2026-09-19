import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || renderedRef.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      fontFamily: "monospace",
      themeVariables: {
        primaryColor: "#d97706",
        primaryTextColor: "#fffbeb",
        primaryBorderColor: "#f59e0b",
        lineColor: "#fbbf24",
        secondaryColor: "#78350f",
        tertiaryColor: "#451a03",
      },
    });

    const renderMermaid = async () => {
      try {
        const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).slice(2)}`, chart);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
          renderedRef.current = true;
        }
      } catch (error) {
        console.error("Mermaid render error:", error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<div class="text-amber text-sm">Diagram rendering failed</div>`;
        }
      }
    };

    renderMermaid();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={`mermaid-container ${className}`}
      style={{
        opacity: 0,
        animation: "fadeInScale 0.8s ease-out forwards",
      }}
    />
  );
}
