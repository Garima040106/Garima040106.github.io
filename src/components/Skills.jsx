import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { skillGroups } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title="Skills" />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.04}>
            <div className="rounded-2xl border border-line p-5 h-full">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-dim mb-3">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1 rounded-full bg-ink-panel-soft text-paper"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
