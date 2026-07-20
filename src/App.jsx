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
        <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16 border-t border-line">
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            <About />
            <Experience />
          </div>
        </section>
        <Projects />
        <Skills />
        <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16 border-t border-line">
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            <Research />
            <Certifications />
          </div>
        </section>
        <FieldNotes />
      </main>
      <Footer />
    </div>
  )
}
