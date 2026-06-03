export function SystemFooter() {
  const lines = ["system active_", "signal aligned_", "operator required_"]

  return (
    <footer className="border-t border-border px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1 font-mono text-xs leading-relaxed text-muted-foreground">
          {lines.map((line) => (
            <p key={line} className="flex items-center gap-2">
              <span className="text-terminal/60">{">"}</span>
              <span>{line}</span>
            </p>
          ))}
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/60">
          NEXUS ÆON // PRIMORDIALE
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-2 border-t border-border pt-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <span>EM-CORE-SYS v2.8.1</span>
        <span className="text-terminal/70">[ stable ]</span>
        <span>no trace = no pattern // 888%</span>
      </div>
    </footer>
  )
}
