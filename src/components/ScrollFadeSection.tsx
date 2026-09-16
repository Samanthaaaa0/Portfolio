import { useRef, type ReactNode, type RefObject } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  root: RefObject<HTMLElement>
  className?: string
}

/**
 * Wraps a block so its opacity is tied to its position inside a scrollable
 * container: faded while entering/leaving view, fully visible in the middle.
 */
export default function ScrollFadeSection({ children, root, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    container: root,
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.9, 1, 1, 0.9]
  )

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  )
}