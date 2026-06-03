const MARKERS = [
  "signal locked_",
  "cognitive layer active_",
  "node synchronized_",
  "operator authenticated_",
  "transmission ongoing_",
  "the system is already shifting_",
]

// Scrolling operational status ticker.
export function OperationalTicker() {
  const sequence = [...MARKERS, ...MARKERS]

  return (
    <div className="overflow-hidden border-y border-border bg-card/40 py-2">
      <div className="ticker-track flex w-max items-center gap-8 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
        {sequence.map((marker, i) => (
          <span key={`${marker}-${i}`} className="flex shrink-0 items-center gap-2">
            <span className="text-terminal/70">{">>"}</span>
            <span>{marker}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
