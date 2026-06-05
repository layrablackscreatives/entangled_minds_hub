"use client"

import { useState } from "react"

type OperativeState = {
  id: string
  code: string
  clearance: string
  lines: string[]
}

const OPERATIVE_STATES: OperativeState[] = [
  {
    id: "consumer",
    code: "LVL_00",
    clearance: "UNRESTRICTED",
    lines: ["Uses AI for speed.", "Consumes outputs passively.", "Searches shortcuts.", "Avoids cognitive friction."],
  },
  {
    id: "user",
    code: "LVL_01",
    clearance: "MONITORED",
    lines: ["Understands prompting.", "Can generate results.", "Still depends on external systems."],
  },
  {
    id: "operator",
    code: "LVL_02",
    clearance: "RESTRICTED",
    lines: ["Builds workflows.", "Directs AI intentionally.", "Uses systems instead of isolated prompts."],
  },
  {
    id: "architect",
    code: "LVL_03",
    clearance: "CLASSIFIED",
    lines: [
      "Designs cognitive ecosystems.",
      "Creates structures that evolve independently.",
      "Turns intelligence into infrastructure.",
    ],
  },
]

export function OperativeClassification() {
  const [active, setActive] = useState<string>("consumer")
  const activeState = OPERATIVE_STATES.find((s) => s.id === active) ?? OPERATIVE_STATES[0]

  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
        Identificherà il tuo stato operativo attuale:
      </p>

      {/* selector row — classified file tabs */}
      <div
        className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
        role="tablist"
        aria-label="Operative classifications"
      >
        {OPERATIVE_STATES.map((state, i) => {
          const isActive = state.id === active
          return (
            <span key={state.id} className="flex items-center gap-2">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`classified-${state.id}`}
                onMouseEnter={() => setActive(state.id)}
                onFocus={() => setActive(state.id)}
                onClick={() => setActive(state.id)}
                className={`border px-3 py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "border-paper-blue bg-paper-blue text-background"
                    : "border-paper-blue/40 text-paper-blue hover:bg-paper-blue/10"
                }`}
              >
                {state.id.toUpperCase()}
              </button>
              {i < OPERATIVE_STATES.length - 1 && <span className="text-paper-blue-dim">/</span>}
            </span>
          )
        })}
      </div>

      {/* revealed classified file */}
      <div
        key={activeState.id}
        id={`classified-${activeState.id}`}
        role="tabpanel"
        className="archive-panel file-decrypt scanlines relative max-w-xl overflow-hidden p-5"
      >
        {/* corner registration marks */}
        <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-paper-blue/60" />
        <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-paper-blue/60" />

        {/* file header */}
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-border/60 pb-3 font-mono text-[0.6rem] uppercase tracking-[0.25em]">
          <span className="text-paper-blue">
            FILE // {activeState.id.toUpperCase()}_{activeState.code}
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-paper-blue" />
            {activeState.clearance}
          </span>
        </div>

        {/* decrypted lines */}
        <ul className="flex flex-col gap-2">
          {activeState.lines.map((line, i) => (
            <li
              key={line}
              className="decrypt-line flex items-start gap-3 text-pretty text-sm leading-relaxed text-foreground/90"
              style={{ animationDelay: `${0.08 + i * 0.07}s` }}
            >
              <span className="select-none pt-0.5 font-mono text-[0.6rem] tracking-widest text-paper-blue-dim">
                {">"}
              </span>
              {line}
            </li>
          ))}
        </ul>

        <p className="mt-4 border-t border-border/60 pt-3 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground/60">
          {"— end of file —"}
        </p>
      </div>

      <div className="max-w-md space-y-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        <p>La differenza non è tecnica.</p>
        <p className="text-paper-blue">È cognitiva.</p>
      </div>
    </div>
  )
}
