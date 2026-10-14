import { EVENT_BRAND, ORGANIZER } from '../config/event'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">{EVENT_BRAND}</p>
        <p className="footer__org">Organised by {ORGANIZER}</p>
      </div>
    </footer>
  )
}