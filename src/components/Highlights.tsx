import { stagger } from '../lib/style'
import { Section } from './Section'
import { Icon, type IconName } from './Icon'

type Highlight = {
  icon: IconName
  title: string
  description: string
  tone: 'blue' | 'red' | 'yellow' | 'green'
}

const highlights: Highlight[] = [
  {
    icon: 'code',
    title: 'Hackathon',
    description: 'Build and showcase your ideas.',
    tone: 'blue',
  },
  {
    icon: 'cap',
    title: 'Workshop',
    description: 'Learn practical development skills.',
    tone: 'red',
  },
  {
    icon: 'mic',
    title: 'Tech Session',
    description: 'Learn from experienced developers.',
    tone: 'yellow',
  },
  {
    icon: 'network',
    title: 'Networking',
    description: 'Connect with students and the developer community.',
    tone: 'green',
  },
]

export function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="What to expect"
      title="Event Highlights"
      lede="Four things you can look forward to in a single day."
    >
      <ul className="cards">
        {highlights.map((item, index) => (
          <li className="card" key={item.title} data-reveal style={stagger(index, 70)}>
            <span className={`card__icon card__icon--${item.tone}`}>
              <Icon name={item.icon} size={26} />
            </span>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}