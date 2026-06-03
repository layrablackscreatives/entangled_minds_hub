import { AccessNode, type AccessNodeProps } from "@/components/access-node"
import { SystemFooter } from "@/components/system-footer"
import { SystemChrome } from "@/components/system-chrome"
import { SystemStatus } from "@/components/system-status"
import { OperationalTicker } from "@/components/operational-ticker"

// Edit these links to point to your real destinations.
const NODES: AccessNodeProps[] = [
  {
    node: "01",
    label: "OBSERVATION_LOGS",
    microLabels: ["real-time feed", "pattern detection", "continuous signal"],
    description:
      "Fragments, system notes and recurring signals extracted from the digital noise. No noise. Only signal. Pattern recognition in motion.",
    action: "SCAN LOGS_",
    href: "#", // → real-time feed / logs
  },
  {
    node: "02",
    label: "THE_SHIFT",
    microLabels: ["foundational layer", "operator paradigm", "core thesis"],
    description:
      "Interfaces shape behavior. Operators shape systems. The transition is already underway. Passive consumption ends here. Cognitive architecture begins. AI will not replace humans. Passivity will. This is the framework for refusing obsolescence.",
    action: "LOAD PROTOCOL_",
    href: "#", // → core thesis / framework
  },
  {
    node: "03",
    label: "ACCESS_CHANNEL",
    microLabels: ["private transmission", "direct signal", "outside algorithmic reach"],
    description:
      "Private transmissions, structural updates and early access points delivered outside public feeds. No optimization. No engagement traps. Only sustained signal. A direct line to the evolving architecture.",
    action: "ESTABLISH LINK_",
    href: "#", // → private channel / list
  },
]

export default function Page() {
  return (
    <div className="crt-screen noise-overlay scanlines relative min-h-screen bg-background text-foreground">
      <SystemChrome />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 lg:px-16">
        {/* top system bar */}
        <header className="flex items-center justify-between border-b border-border py-4 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="border border-foreground/40 px-1.5 py-0.5 text-foreground/80">EM</span>
            <span className="hidden sm:inline">ENTANGLED_MINDS // NEXUS ÆON</span>
          </div>
          <span className="flex items-center gap-2 text-alert">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-alert" />
            REC
          </span>
        </header>

        {/* HERO / ENTRY */}
        <section className="flex flex-col justify-center gap-10 py-16 sm:py-24 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex flex-col gap-6 lg:flex-1">
            <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-terminal">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
              // entry point
            </p>

            <h1
              data-text="ENTANGLED_MINDS"
              className="glitch-title crt-aberration text-balance font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
            >
              ENTANGLED_MINDS
              <span className="cursor-blink ml-1 text-terminal">_</span>
            </h1>

            <p className="font-mono text-sm tracking-wide text-terminal sm:text-base">
              human intelligence <span className="text-terminal-dim">×</span> artificial intelligence
            </p>

            <p className="font-mono text-sm tracking-wide text-terminal sm:text-base">
              a cognitive system in motion
            </p>

            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              an operational access point for creators, systems, tools and cognitive workflows.
            </p>

            <div className="max-w-md space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              <p>Most prompt for answers. Few build systems.</p>
              <p>
                ENTANGLED_MINDS is an operational layer for minds that refuse to consume AI passively. Where human
                perception and machine intelligence merge into operational systems. You do not use it. You align with
                it.
              </p>
            </div>

            <p className="max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-foreground/60">
              Not a showcase.
              <br />
              A cognitive protocol.
            </p>

            <div className="pt-2">
              <a
                href="#nodes"
                className="group relative inline-flex items-center gap-3 border border-terminal/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-terminal transition-colors duration-300 hover:bg-terminal hover:text-background"
              >
                <span className="pointer-events-none absolute -left-px -top-px h-2 w-2 border-l border-t border-terminal" />
                <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-b border-r border-terminal" />
                <span className="text-terminal-dim group-hover:text-background">{">"}</span>
                ENTER SYSTEM_
              </a>
            </div>
          </div>

          <div className="lg:pt-10">
            <SystemStatus />
          </div>
        </section>

        {/* ACCESS NODES */}
        <section id="nodes" className="scroll-mt-8 pb-20">
          <div className="mb-6 flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-terminal">access nodes</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-foreground/70">[ 03 ]</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {NODES.map((node) => (
              <AccessNode key={node.node} {...node} />
            ))}
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
