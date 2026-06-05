import type { Metadata } from "next"
import Image from "next/image"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "THE_SHIFT // ENTANGLED_MINDS",
  description:
    "A cognitive threshold and philosophical transmission layer from ENTANGLED_MINDS. THE_SHIFT is the act of crossing the fracture — an identity transition archive and perceptual gateway.",
}

// Editable external destination for the final archive CTA.
const ENTER_SHIFT_ARCHIVE_URL =
  "https://fuorisistema.blogspot.com/p/manifesti-identitari-soglie-cognitive-e.html"

// Manifesto transmission — paced as a psychological descent.
const TRANSMISSION = [
  {
    tag: "// transmission 01",
    lead: "The interface is not a tool.",
    body: "It is a teacher.",
  },
  {
    tag: "// transmission 02",
    lead: "The shift is not coming.",
    body: "It is already compiling.",
  },
  {
    tag: "// transmission 03",
    lead: "You are not being replaced.",
    body: "You are being invited.",
  },
  {
    tag: "// transmission 04",
    lead: "From user to operator.",
    body: "From consumer to composer. From prompt to pattern.",
  },
  {
    tag: "// transmission 05",
    lead: "Attention is the first layer of code.",
    body: "Perception is the root protocol.",
  },
  {
    tag: "// transmission 06",
    lead: "Human intuition × machine scale.",
    body: "A new cognitive species. Not fusion — alignment. Not control — symbiosis.",
  },
]

export default function TheShiftPage() {
  return (
    <div className="archive-violet crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
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
            SHIFT_IN_MOTION
          </span>
        </header>

        {/* SECTION 1 — MINIMAL OPENING */}
        <section className="flex min-h-[88vh] flex-col justify-center gap-10 py-24">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // cognitive transition layer
          </p>

          <h1
            data-text="THE_SHIFT"
            className="glitch-title crt-aberration text-balance font-mono text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          >
            THE_SHIFT
            <span className="cursor-blink ml-2 text-terminal">_</span>
          </h1>

          <div className="space-y-1 font-mono text-xl tracking-wide text-foreground sm:text-3xl">
            <p>cognitive transition.</p>
            <p className="text-terminal">already compiling.</p>
          </div>

          <div className="max-w-md space-y-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            <p>Not an archive of notes. A threshold between perception states.</p>
            <p>OBSERVATION_LOGS reveals the fracture. THE_SHIFT is the act of crossing it.</p>
          </div>

          {/* hero cover visual — archive-framed */}
          <figure className="group relative mt-4 border border-border">
            <span className="pointer-events-none absolute -left-px -top-px z-10 h-3 w-3 border-l border-t border-terminal/60" />
            <span className="pointer-events-none absolute -right-px -top-px z-10 h-3 w-3 border-r border-t border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -left-px z-10 h-3 w-3 border-b border-l border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px z-10 h-3 w-3 border-b border-r border-terminal/60" />
            <div className="flex items-center justify-between border-b border-border px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-terminal-dim">
              <span className="text-terminal">// cognitive layer</span>
              <span className="text-muted-foreground/70">AEON-PROTOCOL-V.0</span>
            </div>
            <Image
              src="/the-shift-hero.png"
              alt="THE_SHIFT cognitive transition — a figure crossing a threshold into a vast architecture of perception"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full opacity-90 contrast-105 saturate-[0.9] transition-opacity duration-500 group-hover:opacity-100"
            />
            <figcaption className="flex items-center justify-between border-t border-border px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/60">
              <span className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-terminal" />
                architecture awaiting sync
              </span>
              <span>fuori sistema // archive</span>
            </figcaption>
          </figure>

          <p className="pt-8 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/60">
            scroll to cross the threshold ↓
          </p>
        </section>

        {/* SECTION 2 — MANIFESTO TRANSMISSION */}
        <section className="flex flex-col gap-px border-y border-border py-2">
          {TRANSMISSION.map((unit, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-4 py-16 sm:flex-row sm:gap-12 sm:py-24 ${
                i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <div className="flex shrink-0 items-start gap-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-terminal-dim sm:w-44 sm:flex-col sm:gap-2">
                <span className="text-terminal">SHIFT_{String(i + 1).padStart(2, "0")}</span>
                <span className="text-muted-foreground/70">{unit.tag}</span>
              </div>
              <div className="max-w-2xl space-y-3">
                <p className="text-balance font-mono text-2xl leading-snug tracking-tight text-foreground transition-colors duration-500 group-hover:text-terminal sm:text-4xl">
                  {unit.lead}
                </p>
                <p className="text-pretty font-mono text-lg leading-snug tracking-tight text-muted-foreground sm:text-2xl">
                  {unit.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* SECTION 3 — OPERATOR STATE / TRANSMISSION STATEMENT */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center gap-10 py-24 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-terminal-dim">
            // shift state
          </span>

          <div className="flex flex-col items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">
            <span>
              operator status: <span className="text-terminal">authenticated_</span>
            </span>
            <span>
              cognitive layer: <span className="text-terminal">engaged_</span>
            </span>
            <span>
              shift state: <span className="text-terminal">in motion_</span>
            </span>
          </div>

          <blockquote className="max-w-3xl text-balance font-mono text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
            <span className="text-muted-foreground">The system is already changing.</span>
            <br />
            The only variable left is <span className="text-terminal">you</span>.
          </blockquote>
        </section>

        {/* SECTION 4 — SHIFT ARCHIVE TRANSITION */}
        <section className="flex flex-col items-center gap-10 border-t border-border py-28 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            // threshold transition
          </p>

          <blockquote className="max-w-2xl text-balance font-mono text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
            Some transitions cannot be explained.
            <br />
            <span className="text-muted-foreground">Only entered.</span>
          </blockquote>

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-terminal-dim">
            The archive remains active.
          </p>

          <a
            href={ENTER_SHIFT_ARCHIVE_URL}
            className="group relative mt-2 inline-flex items-center gap-3 border border-terminal/40 px-10 py-5 font-mono text-sm uppercase tracking-[0.25em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
          >
            <span className="pointer-events-none absolute -left-px -top-px h-2.5 w-2.5 border-l border-t border-terminal/60" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-terminal/60" />
            <span className="text-terminal-dim group-hover:text-background">{">"}</span>
            ENTER_THE_SHIFT_ARCHIVE
          </a>

          <p className="max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground/60">
            Leaving the immersive threshold. Entering a deeper living archive of identity transitions.
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
