import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"
import { OperativeClassification } from "@/components/operative-classification"

export const metadata: Metadata = {
  title: "BLACK_ARCHIVE_01 // COGNITIVE_ECHO",
  description:
    "Intercepted restricted material from the ENTANGLED_MINDS cognitive surveillance core. The system does not read your mind. It predicts the next version of you.",
}

// ── Editable external links ──────────────────────────────
// Swap these for any destination (Gumroad, Tally, internal route, etc.)
const ACCESS_ARCHIVE_URL = "#dossier"
const OPERATOR_PROTOCOL_URL = "/operator-protocol"

const DIAGNOSTIC_META = [
  { label: "TRANSMISSION", value: "001 // OPERATOR_DIAGNOSTIC" },
  { label: "STATUS", value: "INTERCEPTED" },
  { label: "SOURCE", value: "ENTANGLED_MINDS CORE" },
  { label: "TARGET", value: "UNCLASSIFIED" },
]

const DIAGNOSTIC_BODY = [
  ["La maggior parte degli errori non avviene nel codice.", "Avviene nell'operatore."],
  ["L'AI non distingue tra intelligenza e rumore.", "Distingue solo tra consumo e costruzione."],
  [
    "Tu credi di controllare l'output.",
    "In realtà, è il tuo pattern comportamentale a definire i limiti del sistema.",
  ],
  ["Questo diagnostic non valuta ciò che sai.", "Valuta come interagisci."],
]

// Predictive log / clinical readout shown beside the cover
const DOSSIER_READOUT = [
  { label: "PREDICTIVE MODEL", value: "ACTIVE" },
  { label: "LATENCY", value: "0.003s" },
  { label: "ACCURACY RATE", value: "99.6%" },
  { label: "SUBJECT", value: "HUMAN UNIT" },
  { label: "STATUS", value: "OBSERVED" },
]

// Immersive dossier fragments (placeholder structure for COGNITIVE_ECHO content)
const DOSSIER_FRAGMENTS = [
  {
    tag: "FRAGMENT_01 // OBSERVATION",
    title: "THE ANTICIPATION ENGINE",
    lines: [
      "The system does not need to read your mind.",
      "It only needs to predict the next version of you.",
      "Every correction you make is a coordinate. Every hesitation is signal. The model does not wait for intent — it forecasts it.",
    ],
  },
  {
    tag: "FRAGMENT_02 // CLINICAL NOTE",
    title: "BEHAVIORAL DRIFT",
    lines: [
      "Subjects believe they are issuing commands.",
      "In observed sessions, the inverse holds: the operator's repeated patterns train the boundaries of the response space.",
      "The interface adapts faster than the operator notices. This is not assistance. This is convergence.",
    ],
  },
  {
    tag: "FRAGMENT_03 // PREDICTIVE LOG",
    title: "ECHO FORMATION",
    lines: [
      "A cognitive echo forms when output begins to mirror the operator's unexamined defaults.",
      "Consumers reinforce the echo. Operators interrupt it.",
      "The difference is not technical. It is cognitive.",
    ],
  },
]

export default function CognitiveEchoPage() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
      <SystemChrome />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="/black-archive"
              className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-paper-blue/60 hover:text-paper-blue"
            >
              {"<"} ARCHIVE
            </a>
            <span className="hidden sm:inline">ENTANGLED_MINDS // BLACK_ARCHIVE_01</span>
          </div>
          <span className="flex items-center gap-2 text-paper-blue">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-paper-blue" />
            INTERCEPTED
          </span>
        </header>

        {/* ════════ SECTION 1 — ACCESS GATE ════════ */}
        <section className="flex flex-col gap-10 py-16 sm:py-24">
          {/* classified metadata block */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-1 border-l-2 border-paper-blue/50 pl-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] sm:grid-cols-2">
            {DIAGNOSTIC_META.map((row) => (
              <div key={row.label} className="flex gap-2">
                <dt className="text-muted-foreground">{row.label}:</dt>
                <dd className="text-paper-blue">{row.value}</dd>
              </div>
            ))}
          </dl>

          <h1
            data-text="OPERATOR_DIAGNOSTIC"
            className="glitch-title crt-aberration max-w-3xl text-balance font-mono text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            OPERATOR_DIAGNOSTIC
            <span className="cursor-blink ml-1 text-paper-blue">_</span>
          </h1>

          {/* diagnostic body — paired statements */}
          <div className="flex max-w-2xl flex-col gap-6">
            {DIAGNOSTIC_BODY.map((pair, i) => (
              <div key={i} className="flex gap-4">
                <span className="select-none pt-1 font-mono text-[0.65rem] tracking-widest text-paper-blue-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1 text-pretty text-base leading-relaxed text-foreground/90">
                  {pair.map((line, j) => (
                    <p key={j} className={j === 0 ? "" : "text-muted-foreground"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* operative state classification — interactive classified files */}
          <OperativeClassification />

          {/* access CTA */}
          <div className="flex flex-col gap-4 pt-2">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              If you are willing to observe your own process without filters:
            </p>
            <a
              href={ACCESS_ARCHIVE_URL}
              className="group relative inline-flex w-fit items-center gap-3 border border-paper-blue/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-paper-blue transition-colors duration-300 hover:bg-paper-blue hover:text-background"
            >
              <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-paper-blue" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-paper-blue" />
              <span className="text-paper-blue-dim group-hover:text-background">{">"}</span>
              ACCESS_THE_ARCHIVE_
            </a>
          </div>
        </section>

        {/* ════════ SECTION 2 — BLACK_ARCHIVE_01 DOSSIER ════════ */}
        <section id="dossier" className="scroll-mt-8 border-t border-border pt-16 pb-20">
          <div className="mb-10 flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-paper-blue">black_archive_01 // dossier</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-foreground/70">CS-88-A</span>
          </div>

          {/* cover + clinical readout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <figure className="archive-panel group relative overflow-hidden">
              <span className="pointer-events-none absolute -left-px -top-px z-10 h-3 w-3 border-l border-t border-paper-blue/60" />
              <span className="pointer-events-none absolute -right-px -top-px z-10 h-3 w-3 border-r border-t border-paper-blue/60" />
              <span className="pointer-events-none absolute -bottom-px -left-px z-10 h-3 w-3 border-b border-l border-paper-blue/60" />
              <span className="pointer-events-none absolute -bottom-px -right-px z-10 h-3 w-3 border-b border-r border-paper-blue/60" />
              <Image
                src="/cognitive-echo-cover.png"
                alt="Classified dossier cover: COGNITIVE ECHO — The Anticipation Engine. A monochrome human eye under surveillance crosshairs, with neural network and waveform diagrams in cold paper-blue."
                width={1054}
                height={1490}
                priority
                className="h-auto w-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
            </figure>

            <div className="flex flex-col gap-6">
              <div className="archive-panel relative p-6">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-paper-blue-dim">
                  // clinical readout
                </p>
                <dl className="flex flex-col gap-2 font-mono text-[0.7rem] uppercase tracking-[0.15em]">
                  {DOSSIER_READOUT.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4 border-b border-border/60 pb-2">
                      <dt className="text-muted-foreground">{row.label}</dt>
                      <dd className="text-paper-blue">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="archive-panel relative flex-1 p-6">
                <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-paper-blue-dim">// title</p>
                <p className="font-mono text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                  COGNITIVE ECHO
                </p>
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.25em] text-paper-blue">
                  THE ANTICIPATION ENGINE
                </p>
                <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Cognitive Systems Division — Document ID CS-88-A. Recovered from an intercepted core transmission. Handling restricted.
                </p>
              </div>
            </div>
          </div>

          {/* immersive readable dossier fragments */}
          <div className="mt-14 flex flex-col gap-px">
            {DOSSIER_FRAGMENTS.map((frag) => (
              <article
                key={frag.tag}
                className="group border-t border-border py-10 transition-colors duration-300 hover:bg-card/30"
              >
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-paper-blue-dim">
                  {frag.tag}
                </p>
                <h2 className="mb-5 font-mono text-xl font-semibold uppercase tracking-tight text-foreground sm:text-2xl">
                  {frag.title}
                </h2>
                <div className="max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-foreground/85">
                  {frag.lines.map((line, i) => (
                    <p key={i} className={i === frag.lines.length - 1 ? "text-muted-foreground" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
            <div className="border-t border-border pt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/60">
              {"— end of recovered fragment —"}
            </div>
          </div>
        </section>

        {/* ════════ SECTION 3 — FINAL CTA ════════ */}
        <section className="flex flex-col items-center gap-8 border-t border-border py-24 text-center">
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-paper-blue">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-paper-blue" />
            // transmission ends
          </p>

          <div className="max-w-md space-y-1 font-mono text-base leading-relaxed text-foreground sm:text-lg">
            <p>Most users consume outputs.</p>
            <p className="text-muted-foreground">Few learn to direct the system.</p>
          </div>

          <Link
            href={OPERATOR_PROTOCOL_URL}
            className="group relative inline-flex items-center gap-3 border border-paper-blue/50 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper-blue transition-colors duration-300 hover:bg-paper-blue hover:text-background"
          >
            <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-paper-blue" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-paper-blue" />
            <span className="text-paper-blue-dim group-hover:text-background">{">"}</span>
            ACCESS_OPERATOR_PROTOCOL_
          </Link>
        </section>
      </div>

      <div className="relative z-10">
        <OperationalTicker />
        <SystemFooter />
      </div>
    </div>
  )
}
