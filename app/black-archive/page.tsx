import type { Metadata } from "next"
import { AccessNode, type AccessNodeProps } from "@/components/access-node"
import { SystemFooter } from "@/components/system-footer"
import { SystemChrome } from "@/components/system-chrome"
import { OperationalTicker } from "@/components/operational-ticker"

export const metadata: Metadata = {
  title: "THE_BLACK_ARCHIVE // ENTANGLED_MINDS",
  description: "Restricted narrative files and cognitive artifacts. A deeper layer of the ENTANGLED_MINDS system.",
}

// Structural groundwork — all links temporarily point to "#".
const ARCHIVE_NODES: AccessNodeProps[] = [
  {
    node: "01",
    label: "DOSSIERS_",
    microLabels: ["classified profiles", "case files", "sealed records"],
    description:
      "Compiled intelligence on subjects, systems and anomalies. Names redacted. Patterns preserved. Each file is a fragment of a larger structure waiting to be assembled.",
    action: "OPEN DOSSIER_",
    href: "/node-expansion",
  },
  {
    node: "02",
    label: "NARRATIVE_FILES_",
    microLabels: ["story fragments", "encoded transmissions", "fictional truths"],
    description:
      "Narrative artifacts recovered from the deeper layer. Fiction and intelligence blur here. What reads like a story may be a leak. What reads like a leak may be a warning.",
    action: "DECODE FILE_",
    href: "/node-expansion",
  },
  {
    node: "03",
    label: "FIELD_REPORTS_",
    microLabels: ["ground observation", "first-hand signal", "uncleared findings"],
    description:
      "Reports filed from inside the system. Raw, unedited, unverified. Observations gathered before the noise had a chance to bury them. Read with caution.",
    action: "RETRIEVE REPORT_",
    href: "/node-expansion",
  },
  {
    node: "04",
    label: "IMAGE_ARCHIVES_",
    microLabels: ["visual evidence", "recovered frames", "static memory"],
    description:
      "Stills, captures and corrupted frames pulled from forgotten channels. Some images are documentation. Some are artifacts. All of them outlived their context.",
    action: "VIEW ARCHIVE_",
    href: "/node-expansion",
  },
  {
    node: "05",
    label: "RESTRICTED_LOGS_",
    microLabels: ["sealed transmissions", "limited clearance", "buried signal"],
    description:
      "Transmissions that were never meant to surface. Logs locked behind clearance levels that no longer exist. The deepest sediment of the archive.",
    action: "UNSEAL LOG_",
    href: "/node-expansion",
  },
]

export default function BlackArchivePage() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen bg-background text-foreground">
      <SystemChrome />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80 transition-colors hover:border-terminal/60 hover:text-terminal"
            >
              EM
            </a>
            <span className="hidden sm:inline">ENTANGLED_MINDS // BLACK_ARCHIVE</span>
          </div>
          <span className="flex items-center gap-2 text-alert">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-alert" />
            RESTRICTED
          </span>
        </header>

        {/* HERO / ENTRY */}
        <section className="flex flex-col justify-center gap-10 py-16 sm:py-24">
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-alert">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-alert" />
              // access level — limited
            </p>

            <h1
              data-text="THE_BLACK_ARCHIVE"
              className="glitch-title crt-aberration text-balance font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            >
              THE_BLACK_ARCHIVE
              <span className="cursor-blink ml-1 text-terminal">_</span>
            </h1>

            <p className="font-mono text-sm tracking-wide text-terminal sm:text-base">
              restricted narrative files <span className="text-terminal-dim">×</span> cognitive artifacts
            </p>

            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              A deeper layer of the system containing narrative fragments, dossiers, investigations, restricted
              transmissions and unreleased archive material.
            </p>

            <div className="max-w-xl space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              <p>What surfaces on the main hub is the signal. This is the sediment beneath it.</p>
              <p>
                The Black Archive is not curated for you. It is preserved against erasure. Files are added as they are
                recovered. Nothing here is finished. Nothing here is safe.
              </p>
            </div>

            <p className="max-w-xl font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-foreground/60">
              Not a feed.
              <br />
              A buried layer.
            </p>

            <div className="pt-2">
              <a
                href="#archive"
                className="group relative inline-flex items-center gap-3 border border-alert/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-alert transition-colors duration-300 hover:bg-alert hover:text-background"
              >
                <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-alert" />
                <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-alert" />
                <span className="text-alert/70 group-hover:text-background">{">"}</span>
                ENTER ARCHIVE_
              </a>
            </div>
          </div>
        </section>

        {/* ARCHIVE NODES */}
        <section id="archive" className="scroll-mt-8 pb-20">
          <div className="mb-6 flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-terminal">archive nodes</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-foreground/70">[ 05 ]</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ARCHIVE_NODES.map((node) => (
              <AccessNode key={node.node} {...node} />
            ))}
          </div>

          <p className="mt-8 max-w-xl font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-foreground/40">
            // status: groundwork. nodes pending population. transmissions incoming.
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
