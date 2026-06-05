import type { Metadata } from "next"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "OPERATOR_PROTOCOL // ENTANGLED_MINDS",
  description:
    "Most users ask for outputs. Few construct systems. The OPERATOR_PROTOCOL is an operational shift in how you align with artificial intelligence.",
}

const GUMROAD_URL = "https://pixiemuse8.gumroad.com/l/operator-protocol"

const MODULES = [
  {
    index: "01",
    label: "BEHAVIORAL_AI_USAGE",
    body: "Stop treating the model as a vending machine. Learn to direct it as a behavioral system that responds to structure, intent and constraint.",
  },
  {
    index: "02",
    label: "COGNITIVE_SYSTEMS",
    body: "Move from isolated prompts to durable cognitive architecture. Frameworks that hold context, compound over time and think alongside you.",
  },
  {
    index: "03",
    label: "OPERATOR_MINDSET",
    body: "The operator does not request. The operator constructs. A shift in posture from passive consumer to system designer.",
  },
  {
    index: "04",
    label: "INTERACTION_PATTERNS",
    body: "Repeatable patterns for steering, correcting and extending machine output without losing signal or control.",
  },
  {
    index: "05",
    label: "WORKFLOW_CONSTRUCTION",
    body: "Build workflows instead of consuming outputs. Systems that run, repeat and improve — not one-off answers you discard.",
  },
]

export default function OperatorProtocolPage() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
      <SystemChrome />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-terminal/60 hover:text-terminal"
            >
              {"<"} EM
            </a>
            <span className="hidden sm:inline">ENTANGLED_MINDS // OPERATOR_PROTOCOL</span>
          </div>
          <span className="flex items-center gap-2 text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            NODE_ACTIVE
          </span>
        </header>

        {/* SECTION 1 — HERO */}
        <section className="flex flex-col gap-8 py-16 sm:py-24">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // cognitive protocol — operational layer
          </p>

          <h1
            data-text="STAI USANDO L'AI NEL MODO SBAGLIATO_"
            className="glitch-title crt-aberration max-w-3xl text-balance font-mono text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            {"STAI USANDO L'AI NEL MODO SBAGLIATO"}
            <span className="cursor-blink ml-1 text-terminal">_</span>
          </h1>

          <div className="max-w-md space-y-1 font-mono text-sm tracking-wide text-terminal sm:text-base">
            <p>Most users ask for outputs.</p>
            <p>
              Few construct <span className="text-terminal-dim">systems</span>.
            </p>
          </div>

          <div className="max-w-md space-y-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            <p>This is not a prompt guide.</p>
            <p>It is an operational shift.</p>
          </div>

          <div className="pt-2">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 border border-terminal/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
            >
              <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-terminal" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-terminal" />
              <span className="text-terminal-dim group-hover:text-background">{">"}</span>
              ACCESS_THE_PROTOCOL_
            </a>
          </div>
        </section>

        {/* SECTION 2 — WHAT THIS IS */}
        <section className="scroll-mt-8 pb-20">
          <div className="mb-6 flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-terminal">what this is</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-foreground/70">[ 05 ]</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {MODULES.map((module) => (
              <div
                key={module.index}
                className="group relative flex flex-col gap-4 border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-terminal/40 hover:bg-card/70"
              >
                <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-terminal-dim">/ {module.index}</span>
                  <span className="h-px w-8 bg-border" />
                </div>
                <h2 className="font-mono text-sm uppercase tracking-[0.15em] text-foreground">{module.label}</h2>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{module.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — SIGNAL */}
        <section className="pb-20">
          <div className="archive-panel relative p-8 sm:p-14">
            <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-terminal/60" />
            <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-terminal/60" />

            <p className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-terminal-dim">// signal</p>

            <blockquote className="max-w-2xl text-pretty font-mono text-lg leading-relaxed tracking-wide text-foreground sm:text-2xl">
              {
                "\u201CThe difference between a consumer and an operator is rarely technical. It is behavioral.\u201D"
              }
            </blockquote>
          </div>
        </section>

        {/* SECTION 4 — FINAL CTA */}
        <section className="flex flex-col items-center gap-8 border-t border-border py-24 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // transmission ready
          </p>

          <h2
            data-text="ENTER_THE_PROTOCOL"
            className="glitch-title crt-aberration text-balance font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            ENTER_THE_PROTOCOL
          </h2>

          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 border border-terminal/50 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
          >
            <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-terminal" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-terminal" />
            <span className="text-terminal-dim group-hover:text-background">{">"}</span>
            ACCESS_THE_PROTOCOL_
          </a>
        </section>
      </div>

      <div className="relative z-10">
        <OperationalTicker />
        <SystemFooter />
      </div>
    </div>
  )
}
