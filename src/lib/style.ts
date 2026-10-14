import type { CSSProperties } from 'react'

/** Staggers entrance animations for list items without inline style noise. */
export function stagger(index: number, step = 80): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
}