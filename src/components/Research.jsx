import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { research } from "../data/research"

export default function Research() {
  return (
    <section id="research" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Publications" title="Research" />
      </Reveal>

      <div className="space-y-3">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-line p-5 sm:p-6 max-w-2xl">
              <p className="text-paper leading-snug mb-1">{r.title}</p>
              {r.note && <p className="text-sm text-muted mb-1">{r.note}</p>}
              <p className="text-sm text-muted-dim">
                {r.venue}
                {r.year ? ` · ${r.year}` : ""}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
