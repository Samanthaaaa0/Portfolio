import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Sparkle = { id: number; x: number; y: number; color: string }

const COLORS = ['#37E8CE', '#FF6FB0', '#FFC8E4']

export default function CursorTrail() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const idRef = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    function handleMove(e: MouseEvent) {
      const now = performance.now()
      if (now - lastSpawn.current < 45) return
      lastSpawn.current = now

      const id = idRef.current++
      const color = COLORS[id % COLORS.length]
      setSparkles((prev) => [...prev.slice(-14), { id, x: e.clientX, y: e.clientY, color }])

      window.setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id))
      }, 550)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: s.y - 4,
              left: s.x - 4,
              width: 8,
              height: 8,
              borderRadius: '9999px',
              background: s.color,
              mixBlendMode: 'screen',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
