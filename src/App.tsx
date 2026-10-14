import { About } from './components/About'
import { EventDetails } from './components/EventDetails'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Navbar } from './components/Navbar'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <div ref={revealRef}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Highlights />
        <EventDetails />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}