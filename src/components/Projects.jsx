import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { projects } from "../data/projects"

function ProjectCard({ p, delay, wide }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <Reveal delay={delay} className={wide ? "sm:col-span-2" : ""}>
      <div className="group relative overflow-hidden rounded-2xl border-[1.5px] border-line-strong hover:border-accent bg-ink-panel h-full transition-colors">
        {/* subtle single-pass hover sweep, disabled under reduced motion */}
        <div className="pointer-events-none absolute inset-0 motion-safe:opacity-0 motion-safe:group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-y-full -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent motion-safe:group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative w-full text-left p-6 sm:p-8 cursor-pointer"
          aria-expanded={open}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
            <h3 className="font-display text-xl">{p.title}</h3>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-dim"
              >
                View repo →
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-xs font-mono px-3 py-1 rounded-full border border-line-strong text-muted-dim"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted leading-relaxed">{p.summary}</p>

          <span className="font-mono text-xs text-muted-dim mt-3 inline-block">
            {open ? "Collapse −" : "Expand +"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={reduce ? {} : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="relative space-y-2 px-6 sm:px-8 pb-6 sm:pb-8">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-12 sm:py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Selected work" title="Projects" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={i * 0.06} wide={i === 0} />
        ))}
      </div>
    </section>
  )
}
