import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Machine Learning",
  "Network Security",
]

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Dayananda Sagar University" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="rounded-2xl border border-line p-6 sm:p-8 bg-ink-panel">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <p className="text-lg">B.Tech in Computer Science and Engineering (Cybersecurity)</p>
            <p className="font-mono text-xs text-muted-dim">2024 — 2028</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-dim mb-3">
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-line-strong text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
