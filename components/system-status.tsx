const ROWS: { label: string; value: string }[] = [
  { label: "MODE", value: "OPERATOR" },
  { label: "ACCESS", value: "RESTRICTED" },
  { label: "LAYER", value: "COGNITIVE" },
]

// Decorative archive status panel — terminal metadata overlay.
export function SystemStatus() {
  return (
    <aside className="archive-panel relative w-full max-w-xs shrink-0 p-5 font-mono text-[0.7rem] tracking-wide">
      <div className="mb-4 flex items-center justify-between border-b border-terminal/20 pb-3">
        <span className="uppercase tracking-[0.25em] text-terminal">System Status</span>
        <span className="flex gap-0.5">
          <span className="h-2.5 w-1 bg-terminal/70" />
          <span className="h-2.5 w-1 bg-terminal/70" />
          <span className="h-2.5 w-1 bg-terminal/40" />
        </span>
      </div>

      <dl className="space-y-1.5 text-muted-foreground">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <dt className="uppercase tracking-[0.2em] text-muted-foreground/70">{row.label}:</dt>
            <dd className="text-foreground/90">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="my-4 h-px bg-terminal/15" />

      <div className="space-y-1.5 text-muted-foreground">
        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-terminal/80">Timestamp:</span>
        </div>
        <p className="text-foreground/80">26.05.2826 // 20:21</p>
      </div>

      <div className="mt-4 space-y-1.5 text-muted-foreground">
        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-muted-foreground/70">Node:</span>
          <span className="text-foreground/90">HUB-PRIMARY</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-muted-foreground/70">Signal:</span>
          <span className="flex items-center gap-2 text-terminal">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-terminal" />
            STABLE
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-terminal/20 pt-3 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/60">
        <span>LOG ID: EM-ARCHIVE-0001</span>
        <span className="text-foreground/40">[ ]</span>
      </div>
    </aside>
  )
}
