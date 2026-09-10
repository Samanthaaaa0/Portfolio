import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import AskMe from './components/AskMe'
import ScrollProgress from './components/ScrollProgress'
import DotNav from './components/DotNav'
import CursorTrail from './components/CursorTrail'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <ScrollProgress />
      <DotNav />
      <CursorTrail />

      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </main>

      <AskMe />
    </div>
  )
}
