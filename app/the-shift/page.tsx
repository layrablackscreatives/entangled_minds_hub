import type { Metadata } from "next"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "THE_SHIFT // ENTANGLED_MINDS",
  description:
    "Not awakening. Another cage. THE_SHIFT is not information. It is perception restructuring. A threshold for those who only changed operating systems.",
}

// Editable external destination for the final CTA.
const ENTER_SYSTEM_URL = "/operator-protocol"

const FRAGMENTS = [
  {
    tag: "// terminal observation",
    body: "You did not leave the system. You logged into a quieter one.",
  },
  {
    tag: "// cognitive statement",
    body: "Freedom that requires no discipline was never freedom. It was a softer enclosure.",
  },
  {
    tag: "// philosophical interruption",
    body: "The most effective cage is the one you decorate yourself and call a worldview.",
  },
  {
    tag: "// system warning",
    body: "Comfort is a containment protocol. It does not restrain you. It convinces you not to move.",
  },
  {
    tag: "// terminal observation",
    body: "You were given new language, new rituals, new gurus. The architecture underneath never changed.",
  },
  {
    tag: "// cognitive statement",
    body: "Rebellion that fits neatly inside the market is not rebellion. It is a product line.",
  },
]

export default function TheShiftPage() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
      <SystemChrome />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-terminal/60 hover:text-terminal"
            >
              {"<"} EM
            </a>
            <span className="hidden sm:inline">ENTANGLED_MINDS // THE_SHIFT</span>
          </div>
          <span className="flex items-center gap-2 text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            THRESHOLD_OPEN
          </span>
        </header>

        {/* SECTION 1 — MINIMAL OPENING */}
        <section className="flex min-h-[88vh] flex-col justify-center gap-10 py-24">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // manifesto gateway
          </p>

          <h1
            data-text="THE_SHIFT"
            className="glitch-title crt-aberration text-balance font-mono text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          >
            THE_SHIFT
            <span className="cursor-blink ml-2 text-terminal">_</span>
          </h1>

          <div className="space-y-1 font-mono text-xl tracking-wide text-foreground sm:text-3xl">
            <p>Not awakening.</p>
            <p className="text-terminal">Another cage.</p>
          </div>

          <div className="max-w-md space-y-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            <p>Most people think they escaped the system.</p>
            <p>They only changed operating systems.</p>
          </div>

          <p className="pt-8 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/60">
            scroll to descend ↓
          </p>
        </section>

        {/* SECTION 2 — MANIFESTO FRAGMENTS */}
        <section className="flex flex-col gap-px border-y border-border py-2">
          {FRAGMENTS.map((fragment, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-4 py-16 sm:flex-row sm:gap-12 sm:py-24 ${
                i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <div className="flex shrink-0 items-start gap-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-terminal-dim sm:w-40 sm:flex-col sm:gap-2">
                <span className="text-terminal">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-muted-foreground/70">{fragment.tag}</span>
              </div>
              <p className="max-w-2xl text-balance font-mono text-2xl leading-snug tracking-tight text-foreground transition-colors duration-500 group-hover:text-terminal sm:text-4xl">
                {fragment.body}
              </p>
            </div>
          ))}
        </section>

        {/* SECTION 3 — TRANSITION MESSAGE */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center gap-8 py-24 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-terminal-dim">
            // perception restructuring
          </span>
          <blockquote className="max-w-3xl text-balance font-mono text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
            <span className="text-muted-foreground">You are not accessing information.</span>
            <br />
            You are accessing{" "}
            <span className="text-terminal">perception restructuring</span>.
          </blockquote>
        </section>

        {/* SECTION 4 — FINAL CTA */}
        <section className="flex flex-col items-center gap-10 border-t border-border py-28 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // threshold ready
          </p>

          <h2
            data-text="CROSS_THE_THRESHOLD"
            className="glitch-title crt-aberration text-balance font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            CROSS_THE_THRESHOLD
          </h2>

          <a
            href={ENTER_SYSTEM_URL}
            className="group relative inline-flex items-center gap-3 border border-terminal/50 px-10 py-5 font-mono text-sm uppercase tracking-[0.25em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
          >
            <span className="pointer-events-none absolute -left-px -top-px h-2.5 w-2.5 border-l border-t border-terminal" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-terminal" />
            <span className="text-terminal-dim group-hover:text-background">{">"}</span>
            ENTER_THE_SYSTEM_
          </a>

          <p className="max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground/70">
            There is no return path to who you were before this page.
          </p>
        </section>
      </div>

      <div className="relative z-10">
        <OperationalTicker />
        <SystemFooter />
      </div>
    </div>
  )
}
