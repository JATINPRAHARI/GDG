import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { ColorMark } from './ColorMark'

type SectionProps = {
  id: string
  /** Small label above the heading. */
  eyebrow: string
  title: ReactNode
  /** Optional supporting copy under the heading. */
  lede?: ReactNode
  tone?: 'white' | 'surface'
  headingId?: string
  className?: string
  children?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  lede,
  tone = 'white',
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx('section', tone === 'surface' && 'section--surface', className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <header className="section__head" data-reveal>
          <ColorMark className="colormark--section" />
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section__title" id={`${id}-heading`}>
            {title}
          </h2>
          {lede ? <p className="section__lede">{lede}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}