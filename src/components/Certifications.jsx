import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { certifications } from "../data/certifications"

export default function Certifications() {
  return (
    <div id="certifications">
      <Reveal>
        <SectionHeading eyebrow="Credentials" title="Certifications" />
      </Reveal>

      <div className="flex flex-col gap-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.04}>
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-2xl border-[1.5px] border-line-strong hover:border-accent min-h-[40px] px-4 py-2.5 transition-colors"
            >
              <span className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-paper">{c.title}</span>
                <span className="text-sm text-muted-dim">— {c.issuer}</span>
              </span>
              <span className="font-mono text-xs text-accent flex-shrink-0">View →</span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
