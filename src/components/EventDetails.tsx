import { EVENT_NAME, EVENT_TIME, EVENT_VENUE } from '../config/event'
import { stagger } from '../lib/style'
import { ColorMark } from './ColorMark'
import { Icon, type IconName } from './Icon'

type Detail = {
  icon: IconName
  label: string
  value: string
  tone: 'blue' | 'red' | 'green'
}

const details: Detail[] = [
  { icon: 'calendar', label: 'Event', value: EVENT_NAME, tone: 'blue' },
  { icon: 'pin', label: 'Venue', value: EVENT_VENUE, tone: 'red' },
  { icon: 'clock', label: 'Time', value: EVENT_TIME, tone: 'green' },
]

export function EventDetails() {
  return (
    <section className="section section--surface" id="details" aria-labelledby="details-heading">
      <div className="container">
        <header className="section__head" data-reveal>
          <ColorMark className="colormark--section" />
          <p className="eyebrow">Event Details</p>
          <h2 className="section__title" id="details-heading">
            Plan your <span className="hl-green">hack</span>
          </h2>
          <p className="section__lede">Everything you need to know before you show up.</p>
        </header>

        <ul className="details">
          {details.map((item, index) => (
            <li
              className="details__item"
              key={item.label}
              data-reveal
              style={stagger(index, 90)}
            >
              <span className={`details__icon details__icon--${item.tone}`}>
                <Icon name={item.icon} size={28} />
              </span>
              <p className="details__label">{item.label}</p>
              <p className="details__value">{item.value}</p>
            </li>
          ))}
        </ul>

        <p className="details__note" data-reveal>
          Exact date, campus address and the detailed schedule will be shared with registered
          participants.
        </p>
      </div>
    </section>
  )
}