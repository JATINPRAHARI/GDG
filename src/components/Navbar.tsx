import { useEffect, useState } from 'react'
import { EVENT_BRAND, NAV_LINKS, ORGANIZER } from '../config/event'
import { cx } from '../lib/cx'
import { ColorMark } from './ColorMark'
import { Icon } from './Icon'

const MOBILE_QUERY = '(min-width: 860px)'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia(MOBILE_QUERY)
    const sync = () => {
      if (desktop.matches) setOpen(false)
    }
    sync()
    desktop.addEventListener('change', sync)
    return () => desktop.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  /** Native anchors handle the smooth scroll; focus moves for keyboard users. */
  const handleNavClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.focus({ preventScroll: true })
  }

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="brand" href="#home" onClick={() => handleNavClick('home')}>
          <ColorMark className="brand__mark" />
          <span className="brand__text">{EVENT_BRAND}</span>
          <span className="brand__org">{ORGANIZER}</span>
        </a>

        <button
          type="button"
          className={cx('nav__toggle', open && 'is-open')}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav
          id="primary-nav"
          className={cx('nav__links', open && 'is-open')}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a className="nav__link" href={`#${link.id}`} onClick={() => handleNavClick(link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}