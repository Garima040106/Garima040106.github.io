import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import Collapsible from "./Collapsible"
import { experience } from "../data/experience"

export default function Experience() {
  return (
    <div id="experience">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="What I've been building" />
      </Reveal>

      <div className="space-y-3">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.06}>
            <Collapsible
              className="bg-ink-panel"
              header={
                <>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-lg">{job.role}</h3>
                    <p className="font-mono text-xs text-muted-dim">{job.period}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {job.org} · {job.location}
                  </p>
                </>
              }
            >
              <ul className="space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Collapsible>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
