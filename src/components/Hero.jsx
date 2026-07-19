import { motion, useReducedMotion } from "framer-motion"
import BoundaryGraphic from "./BoundaryGraphic"

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = {
    initial: reduce ? {} : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-accent mb-5"
          >
            B.Tech CSE — Cybersecurity · Dayananda Sagar University
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6"
          >
            I build security and AI tools, end to end.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-lg leading-relaxed max-w-lg mb-8"
          >
            Third-year Computer Science student specializing in cybersecurity,
            with hands-on experience across Django, FastAPI, PostgreSQL, and
            React. I like taking a problem from API design through testing,
            and I pick up new codebases quickly. Co-author of two peer-reviewed
            papers.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 font-mono text-sm"
          >
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-dim transition-colors"
            >
              See the work
            </a>
            <a
              href="/resume.pdf"
              className="px-5 py-2.5 rounded-full border border-line-strong hover:border-accent transition-colors"
            >
              Download resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="justify-self-center sm:justify-self-end"
        >
          <BoundaryGraphic />
        </motion.div>
      </div>
    </section>
  )
}
