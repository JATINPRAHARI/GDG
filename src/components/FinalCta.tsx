import { EVENT_NAME, ORGANIZER, REGISTRATION_IS_PLACEHOLDER } from '../config/event'
import { ColorMark } from './ColorMark'
import { RegisterButton } from './RegisterButton'

export function FinalCta() {
  return (
    <section className="cta" id="register" aria-labelledby="register-heading" tabIndex={-1}>
      <div className="container">
        <div className="cta__card" data-reveal>
          <ColorMark className="colormark--cta" />
          <h2 className="cta__title" id="register-heading">
            Ready to <span className="cta__accent">HackHeist?</span>
          </h2>
          <p className="cta__text">
            {EVENT_NAME} by {ORGANIZER}. Grab your spot and spend a day learning, building and
            connecting with fellow developers.
          </p>
          <RegisterButton className="btn--large" />
          {REGISTRATION_IS_PLACEHOLDER ? (
            <p className="cta__note">Registration form link coming soon.</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}