const ITEMS = [
  'OPEN TO WORK',
  'FULL-STACK DEVELOPER',
  'SOFTWARE ENGINEER',
  'NOT PICKY, JUST CURIOUS',
  'BASED IN MELBOURNE',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display text-sm sm:text-base tracking-wide text-ink px-4">{item}</span>
          <span className="text-ink px-2">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      className="relative w-full overflow-hidden border-y-2 border-ink bg-gradient-to-r from-turq via-pink-soft to-pink py-3"
      aria-label="Currently open to full-time software development roles"
    >
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
