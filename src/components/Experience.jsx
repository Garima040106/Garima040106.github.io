import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { experience } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="What I've been building" />
      </Reveal>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.06}>
            <div className="rounded-2xl border border-line p-6 sm:p-8 bg-ink-panel">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="font-display text-xl">{job.role}</h3>
                <p className="font-mono text-xs text-muted-dim">{job.period}</p>
              </div>
              <p className="text-muted mb-5">
                {job.org} · {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
