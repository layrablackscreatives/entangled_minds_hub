import type { Metadata } from "next"
import Image from "next/image"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "OBSERVATION_LOGS // ENTANGLED_MINDS",
  description:
    "A living archive of cognitive fragments, pattern notes, micro-signals and system observations from ENTANGLED_MINDS. Ongoing transmissions. Continuously updated logs.",
}

// Editable external destination for the final archive CTA.
const ENTER_ARCHIVE_URL = "https://fuorisistema.blogspot.com/p/deposito-di-micro-segnali-note-di-campo.html"

const FRAGMENTS = [
  {
    tag: "// micro-signal",
    body: "You did not leave the system. You logged into a quieter one.",
  },
  {
    tag: "// pattern note",
    body: "Freedom that requires no discipline was never freedom. It was a softer enclosure.",
  },
  {
    tag: "// field observation",
    body: "The most effective cage is the one you decorate yourself and call a worldview.",
  },
  {
    tag: "// system note",
    body: "Comfort is a containment protocol. It does not restrain you. It convinces you not to move.",
  },
  {
    tag: "// recurring signal",
    body: "You were given new language, new rituals, new gurus. The architecture underneath never changed.",
  },
  {
    tag: "// cognitive fragment",
    body: "Rebellion that fits neatly inside the market is not rebellion. It is a product line.",
  },
]

export default function ObservationLogsPage() {
  return (
    <div className="archive-amber crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
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
            <span className="hidden sm:inline">ENTANGLED_MINDS // OBSERVATION_LOGS</span>
          </div>
          <span className="flex items-center gap-2 text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            LOGS_STREAMING
          </span>
        </header>

        {/* SECTION 1 — MINIMAL OPENING */}
        <section className="flex min-h-[88vh] flex-col justify-center gap-10 py-24">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // living archive layer
          </p>

          <h1
            data-text="OBSERVATION_LOGS"
            className="glitch-title crt-aberration text-balance font-mono text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            OBSERVATION_LOGS
            <span className="cursor-blink ml-2 text-terminal">_</span>
          </h1>

          <div className="space-y-1 font-mono text-xl tracking-wide text-foreground sm:text-3xl">
            <p>Ongoing transmissions.</p>
            <p className="text-terminal">Continuously updated logs.</p>
          </div>

          <div className="max-w-md space-y-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            <p>Cognitive fragments, pattern notes and micro-signals.</p>
            <p>System observations extracted from the noise — and still accumulating.</p>
          </div>

          {/* hero cover visual — archive-framed */}
          <figure className="group relative mt-4 border border-border">
            <span className="pointer-events-none absolute -left-px -top-px z-10 h-3 w-3 border-l border-t border-terminal/60" />
            <span className="pointer-events-none absolute -right-px -top-px z-10 h-3 w-3 border-r border-t border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -left-px z-10 h-3 w-3 border-b border-l border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px z-10 h-3 w-3 border-b border-r border-terminal/60" />
            <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-terminal-dim">
              <span className="text-terminal">// archive cover</span>
              <span className="text-muted-foreground/70">EM-ARCHIVE-0001</span>
            </div>
            <Image
              src="/observation-logs-hero.png"
              alt="ENTANGLED_MINDS cognitive system interface — archived observation hub capture"
              width={1536}
              height={1030}
              priority
              className="h-auto w-full opacity-90 contrast-105 saturate-[0.85] transition-opacity duration-500 group-hover:opacity-100"
            />
            <figcaption className="flex items-center justify-between border-t border-border px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/60">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-terminal" />
                captured transmission
              </span>
              <span>hub-primary // cognitive layer</span>
            </figcaption>
          </figure>

          <p className="pt-8 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/60">
            scroll to read the logs ↓
          </p>
        </section>

        {/* SECTION 2 — LOG FRAGMENTS */}
        <section className="flex flex-col gap-px border-y border-border py-2">
          {FRAGMENTS.map((fragment, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-4 py-16 sm:flex-row sm:gap-12 sm:py-24 ${
                i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <div className="flex shrink-0 items-start gap-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-terminal-dim sm:w-40 sm:flex-col sm:gap-2">
                <span className="text-terminal">LOG_{String(i + 1).padStart(2, "0")}</span>
                <span className="text-muted-foreground/70">{fragment.tag}</span>
              </div>
              <p className="max-w-2xl text-balance font-mono text-2xl leading-snug tracking-tight text-foreground transition-colors duration-500 group-hover:text-terminal sm:text-4xl">
                {fragment.body}
              </p>
            </div>
          ))}
        </section>

        {/* SECTION 3 — TRANSMISSION STATEMENT */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center gap-8 py-24 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-terminal-dim">
            // transmission status
          </span>
          <blockquote className="max-w-3xl text-balance font-mono text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
            <span className="text-muted-foreground">These logs are not finished.</span>
            <br />
            They are{" "}
            <span className="text-terminal">still transmitting</span>.
          </blockquote>
        </section>

        {/* SECTION 4 — ARCHIVE TRANSITION */}
        <section className="flex flex-col items-center gap-10 border-t border-border py-28 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // archive transition
          </p>

          <blockquote className="max-w-2xl text-balance font-mono text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
            Not every signal belongs in static archives.
            <br />
            <span className="text-muted-foreground">
              Some transmissions continue evolving outside the system layer.
            </span>
          </blockquote>

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-terminal-dim">
            Live archive. Continuous transmissions.
          </p>

          <a
            href={ENTER_ARCHIVE_URL}
            className="group relative mt-2 inline-flex items-center gap-3 border border-terminal/40 px-10 py-5 font-mono text-sm uppercase tracking-[0.25em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
          >
            <span className="pointer-events-none absolute -left-px -top-px h-2.5 w-2.5 border-l border-t border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-terminal/60" />
            <span className="text-terminal-dim group-hover:text-background">{">"}</span>
            ENTER_THE_ARCHIVE
          </a>

          <p className="max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground/60">
            Exiting the classified interface. Entering the raw living archive.
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
