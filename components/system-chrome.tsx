// Decorative surveillance/archive chrome layer.
// Purely visual — fixed, non-interactive overlays that frame the interface.
export function SystemChrome() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {/* surveillance frame corners */}
      <span className="absolute left-3 top-3 h-8 w-8 border-l border-t border-foreground/40" />
      <span className="absolute right-3 top-3 h-8 w-8 border-r border-t border-foreground/40" />
      <span className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-foreground/40" />
      <span className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-foreground/40" />

      {/* thin inset frame line */}
      <span className="absolute inset-6 border border-foreground/[0.06]" />

      {/* left ruler ticks + numbers */}
      <div className="absolute left-3 top-24 bottom-24 flex w-6 flex-col items-center justify-between">
        <div className="ruler-v h-full w-px" />
        <div className="absolute inset-0 flex flex-col justify-between py-2 font-mono text-[0.5rem] tracking-widest text-foreground/30">
          {["32", "30", "28", "26", "08"].map((n) => (
            <span key={n} className="text-vertical">
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* left barcode fragment */}
      <div className="barcode-v absolute left-12 top-12 h-28 w-3" />

      {/* left bottom timecode */}
      <span className="text-vertical absolute bottom-16 left-4 font-mono text-[0.55rem] tracking-[0.3em] text-foreground/35">
        88:08:23:17L
      </span>

      {/* right barcode fragments */}
      <div className="barcode-v absolute right-11 top-12 h-24 w-3" />
      <div className="barcode-v absolute right-11 bottom-28 h-20 w-3" />

      {/* right vertical operational markers */}
      <span className="text-vertical absolute right-4 top-1/3 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-foreground/40">
        observe. analyze. evolve.
      </span>
      <span className="text-vertical absolute right-4 bottom-24 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-foreground/30">
        bp-archive-0001
      </span>
    </div>
  )
}
