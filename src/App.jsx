import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Research from "./components/Research"
import Certifications from "./components/Certifications"
import FieldNotes from "./components/FieldNotes"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Certifications />
        <FieldNotes />
      </main>
      <Footer />
    </div>
  )
}
