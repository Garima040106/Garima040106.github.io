import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { certifications } from "../data/certifications"

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Credentials" title="Certifications" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.04}>
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-baseline justify-between gap-3 rounded-2xl border border-line hover:border-line-strong p-4 sm:p-5 transition-colors"
            >
              <span>
                <span className="block text-paper">{c.title}</span>
                <span className="block text-sm text-muted-dim">{c.issuer}</span>
              </span>
              <span className="font-mono text-xs text-accent flex-shrink-0">View →</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
