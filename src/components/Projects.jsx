import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Projects" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
            <div className="group relative overflow-hidden rounded-2xl border border-line hover:border-line-strong p-6 sm:p-8 bg-ink-panel h-full transition-colors">
              {/* subtle single-pass hover sweep, disabled under reduced motion */}
              <div className="pointer-events-none absolute inset-0 motion-safe:opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-y-full -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent motion-safe:group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
              </div>

              <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
                <h3 className="font-display text-xl">{p.title}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-dim"
                  >
                    View repo →
                  </a>
                )}
              </div>

              <ul className="relative space-y-2 mb-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-line-strong text-muted-dim"
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
