import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import AboutCards from './components/AboutCards.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Transcript from './components/Transcript.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <AboutCards />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Transcript />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
