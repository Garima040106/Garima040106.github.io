import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import Collapsible from "./Collapsible"
import { research } from "../data/research"

export default function Research() {
  return (
    <div id="research">
      <Reveal>
        <SectionHeading eyebrow="Publications" title="Research" />
      </Reveal>

      <div className="space-y-2">
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <Collapsible
              header={
                <div>
                  <p className="text-paper leading-snug">{r.title}</p>
                  <p className="text-sm text-muted-dim mt-1">
                    {r.venue}
                    {r.year ? ` · ${r.year}` : ""}
                  </p>
                </div>
              }
            >
              {r.note && <p className="text-sm text-muted">{r.note}</p>}
            </Collapsible>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
