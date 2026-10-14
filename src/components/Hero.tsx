import { EVENT_BRAND, EVENT_NAME, EVENT_TAGLINE, EVENT_TIME, EVENT_VENUE, ORGANIZER } from '../config/event'
import { ColorMark } from './ColorMark'
import { Icon, type IconName } from './Icon'
import { RegisterButton } from './RegisterButton'

const facts: Array<{ icon: IconName; label: string; value: string }> = [
  { icon: 'calendar', label: 'Event', value: EVENT_NAME },
  { icon: 'pin', label: 'Venue', value: EVENT_VENUE },
  { icon: 'clock', label: 'Time', value: EVENT_TIME },
]

const terminalLines = [
  { step: '01', text: 'learn()', tone: 'blue' },
  { step: '02', text: 'build()', tone: 'red' },
  { step: '03', text: 'collaborate()', tone: 'yellow' },
  { step: '04', text: 'ship()', tone: 'green' },
] as const

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="home-heading" tabIndex={-1}>
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {ORGANIZER}
          </p>

          <h1 className="hero__title" id="home-heading">
            {EVENT_BRAND}
          </h1>
          <ColorMark className="colormark--hero" />

          <p className="hero__tagline">{EVENT_TAGLINE}</p>

          <dl className="hero__facts">
            {facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt>
                  <Icon name={fact.icon} size={18} />
                  <span>{fact.label}</span>
                </dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__actions">
            <RegisterButton />
            <a className="btn btn--ghost" href="#highlights">
              <span>See highlights</span>
              <Icon name="arrow" size={20} className="btn__icon" />
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="console">
            <div className="console__bar">
              <span className="console__dots">
                <span className="console__dot console__dot--red" />
                <span className="console__dot console__dot--yellow" />
                <span className="console__dot console__dot--green" />
              </span>
              <span className="console__title">{EVENT_NAME.toLowerCase()}</span>
            </div>
            <ul className="console__lines">
              {terminalLines.map((line) => (
                <li className="console__line" key={line.step}>
                  <span className="console__step">{line.step}</span>
                  <span className={`console__text console__text--${line.tone}`}>{line.text}</span>
                </li>
              ))}
            </ul>
            <div className="console__foot">
              <ColorMark />
              <span className="console__foot-text">{EVENT_VENUE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}