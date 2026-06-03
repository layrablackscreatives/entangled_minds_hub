import type { Metadata } from "next"
import { SystemChrome } from "@/components/system-chrome"
import { SystemFooter } from "@/components/system-footer"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "NEW NODES COMING ONLINE // ENTANGLED_MINDS",
  description:
    "Additional archive sectors are still being synchronized. A restricted expansion layer of the ENTANGLED_MINDS system.",
}

export default function NodeExpansionPage() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen overflow-hidden bg-background text-foreground">
      <SystemChrome />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="/black-archive"
              className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-terminal/60 hover:text-terminal"
            >
              {"<"} BLACK_ARCHIVE
            </a>
            <span className="hidden sm:inline">ENTANGLED_MINDS // EXPANSION_LAYER</span>
          </div>
          <span className="flex items-center gap-2 text-alert">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-alert" />
            RESTRICTED
          </span>
        </header>

        {/* CENTERED HOLDING SCREEN */}
        <section className="relative flex flex-1 flex-col items-center justify-center py-24 text-center">
          {/* diagonal security-tape band — classified analog warning */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-40%] top-1/2 z-20 -translate-y-1/2 -rotate-[14deg] select-none border-y-2 border-alert/70 bg-alert/10 py-3 backdrop-blur-[1px]"
          >
            <div className="security-tape flex items-center gap-6 font-mono text-xs font-semibold uppercase tracking-[0.4em] text-alert sm:text-sm">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex shrink-0 items-center gap-6 whitespace-nowrap">
                  RESTRICTED <span className="text-alert/50">//</span> EXPANDING SYSTEM LAYER
                  <span className="text-alert/50">×</span>
                </span>
              ))}
            </div>
          </div>

          {/* content sits above the band */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-alert">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-alert" />
              // sector status — synchronizing
            </p>

            <h1
              data-text="NEW NODES COMING ONLINE_"
              className="glitch-title crt-aberration text-balance font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              NEW NODES COMING ONLINE
              <span className="cursor-blink ml-1 text-terminal">_</span>
            </h1>

            <p className="max-w-md font-mono text-sm leading-relaxed tracking-wide text-terminal">
              additional archive sectors are still being synchronized
            </p>

            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              This sector of THE_BLACK_ARCHIVE has not surfaced yet. The system is still expanding. New nodes are
              brought online as they are recovered, decrypted and cleared.
            </p>

            <p className="max-w-md font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-foreground/40">
              // hold position. transmission pending. do not refresh the signal.
            </p>
          </div>
        </section>
      </div>

      <div className="relative z-10">
        <OperationalTicker />
        <SystemFooter />
      </div>
    </div>
  )
}
