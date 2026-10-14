type ColorMarkProps = {
  className?: string
  /** Hide from screen readers when the mark sits next to meaningful text. */
  decorative?: boolean
}

/** The four-colour Google bar used as a small brand accent. */
export function ColorMark({ className, decorative = true }: ColorMarkProps) {
  return (
    <span className={className ? `colormark ${className}` : 'colormark'} aria-hidden={decorative || undefined}>
      <span className="colormark__bar colormark__bar--blue" />
      <span className="colormark__bar colormark__bar--red" />
      <span className="colormark__bar colormark__bar--yellow" />
      <span className="colormark__bar colormark__bar--green" />
    </span>
  )
}