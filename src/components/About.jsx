import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import Collapsible from "./Collapsible"

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Machine Learning",
  "Network Security",
]

export default function About() {
  return (
    <div id="about">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Dayananda Sagar University" />
      </Reveal>

      <Reveal delay={0.05}>
        <Collapsible
          className="bg-ink-panel"
          header={
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg">B.Tech CSE (Cybersecurity)</p>
              <p className="font-mono text-xs text-muted-dim">2024 — 2028</p>
            </div>
          }
        >
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
        </Collapsible>
      </Reveal>
    </div>
  )
}
