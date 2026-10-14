import { EVENT_NAME, ORGANIZER } from '../config/event'
import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>About <span className="hl-blue">HackHeist</span></>}
      tone="surface"
    >
      <div className="about">
        <p className="about__lead" data-reveal>
          HackHeist is a developer-focused event by <strong>{ORGANIZER}</strong> where students learn,
          build, collaborate and connect with the developer community.
        </p>
        <p className="about__body" data-reveal>
          The day runs as a hands-on mix of practical workshops, tech sessions led by experienced
          developers, and a hackathon where teams turn ideas into working projects. Come curious —
          whether you are writing your first line of code or sharpening an existing skillset, there is
          a place for you at {EVENT_NAME}.
        </p>
      </div>
    </Section>
  )
}