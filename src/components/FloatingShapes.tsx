import type { CSSProperties } from 'react'

type ShapeProps = {
  className?: string
  style?: CSSProperties
}

export function SparkleStar({ className = '', style }: ShapeProps) {
  return (
    <svg
      className={className}
      style={style}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function RingShape({ className = '', style }: ShapeProps) {
  return (
    <svg className={className} style={style} width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

export function HeartShape({ className = '', style }: ShapeProps) {
  return (
    <svg className={className} style={style} width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path
        d="M17 30 C6 22 2 15 2 10 C2 5 6 2 10 2 C13 2 16 4 17 7 C18 4 21 2 24 2 C28 2 32 5 32 10 C32 15 28 22 17 30 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PixelSquare({ className = '', style }: ShapeProps) {
  return (
    <svg className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="20" height="20" fill="currentColor" />
    </svg>
  )
}
