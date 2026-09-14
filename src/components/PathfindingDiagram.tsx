import { useState } from 'react'
import { Pause, Play } from 'lucide-react'

const AGENTS = [
    { id: 'a', cls: 'pf-agent-a', color: '#37E8CE' },
    { id: 'b', cls: 'pf-agent-b', color: '#9FF3E6' },
    { id: 'c', cls: 'pf-agent-c', color: '#1FA895' },
]

export default function PathfindingDiagram() {
    const [paused, setPaused] = useState(false)

    return (
        <div>
        <div
            className={`pathfinding-diagram relative mx-auto aspect-[5/3] w-full max-w-sm overflow-hidden rounded-xl border border-turq/25 bg-panel2 ${
            paused ? 'is-paused' : ''
            }`}
        >
            <div className="polka-dots-turq-dense pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

            {AGENTS.map((agent) => (
            <span
                key={agent.id}
                className={`pf-agent ${agent.cls} absolute h-3.5 w-3.5 rounded-full`}
                style={{ backgroundColor: agent.color, boxShadow: `0 0 8px ${agent.color}` }}
                aria-hidden="true"
            />
            ))}

            <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play animation' : 'Pause animation'}
            className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-turq/40 bg-ink/70 px-3 py-1 font-body text-[11px] text-turq backdrop-blur-sm transition-colors hover:bg-turq hover:text-ink"
            >
            {paused ? <Play size={12} /> : <Pause size={12} />}
            {paused ? 'Play' : 'Pause'}
            </button>
        </div>
        <p className="mt-2.5 text-center font-body text-xs italic text-grey-dim">
            An illustrative diagram of multiple agents pathfinding at once — not the real thesis output. Hover to pause.
        </p>
        </div>
    )
}