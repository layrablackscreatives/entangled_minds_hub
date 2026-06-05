import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export interface AccessNodeProps {
  /** node identifier, e.g. "01" */
  node: string
  /** short uppercase label, e.g. "AI SYSTEM" */
  label: string
  /** small descriptor tags shown under the title */
  microLabels?: string[]
  /** descriptive paragraph */
  description: string
  /** call-to-action text, e.g. "ACCESS PRODUCTS" */
  action: string
  /** destination url — replace with your real link */
  href: string
}

export function AccessNode({ node, label, microLabels, description, action, href }: AccessNodeProps) {
  // Internal routes (e.g. "/black-archive") navigate within the public site in the same tab.
  // External links (http/https) open in a new tab.
  const isExternal = /^https?:\/\//i.test(href)
  const sharedClassName =
    "group relative flex flex-col justify-between gap-8 border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-terminal/40 hover:bg-card/70 sm:p-8"

  const LinkWrapper = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a href={href} target="_blank" rel="noreferrer" className={sharedClassName}>
        {children}
      </a>
    ) : (
      <Link href={href} className={sharedClassName}>
        {children}
      </Link>
    )

  return (
    <LinkWrapper>
      {/* surveillance corner brackets */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-foreground/30 transition-colors group-hover:border-terminal/80" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-foreground/30 transition-colors group-hover:border-terminal/80" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-foreground/30 transition-colors group-hover:border-terminal/80" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-foreground/30 transition-colors group-hover:border-terminal/80" />

      <div className="space-y-4">
        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="text-terminal/80">{node} //</span>
          <span className="text-terminal/50 transition-colors group-hover:text-terminal">●</span>
        </div>

        <h2 className="font-mono text-xl font-medium tracking-tight text-foreground sm:text-2xl">{label}</h2>

        {microLabels && microLabels.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-terminal/60">
            {microLabels.map((micro, i) => (
              <span key={micro} className="flex items-center gap-2">
                {i > 0 && <span className="text-terminal/30">/</span>}
                {micro}
              </span>
            ))}
          </div>
        )}

        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-terminal/90 transition-colors group-hover:text-terminal">
        <span>{action}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </LinkWrapper>
  )
}
