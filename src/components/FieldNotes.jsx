import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { notes } from "../data/notes"

const CATEGORY_COLOR = {
  Interview: "tag-interview",
  CTF: "tag-ctf",
  Hackathon: "tag-hackathon",
  Article: "tag-article",
  Research: "tag-research",
}

function NoteCard({ note, delay }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const color = CATEGORY_COLOR[note.category] ?? "tag-interview"

  return (
    <Reveal delay={delay}>
      <div
        className="rounded-2xl border border-line overflow-hidden"
        style={{ borderLeftWidth: "3px", borderLeftColor: `var(--color-${color})` }}
      >
        <button
          type="button"
          onClick={() => note.body && setOpen((v) => !v)}
          className={`w-full text-left p-5 sm:p-6 flex flex-col gap-2 ${note.body ? "cursor-pointer" : ""}`}
          aria-expanded={note.body ? open : undefined}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ color: `var(--color-${color})`, border: `1px solid var(--color-${color})` }}
            >
              {note.category}
            </span>
            <span className="font-mono text-xs text-muted-dim">
              {new Date(note.date).toLocaleDateString("en-IN", { year: "numeric", month: "short" })}
            </span>
          </div>

          <h3 className="font-display text-lg mt-1">{note.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{note.summary}</p>

          {note.link && !note.body && (
            <a
              href={note.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-accent mt-1 inline-block w-fit"
            >
              Read full post →
            </a>
          )}

          {note.body && (
            <span className="font-mono text-xs text-muted-dim mt-1">
              {open ? "Collapse −" : "Expand +"}
            </span>
          )}
        </button>

        <AnimatePresence initial={false}>
          {open && note.body && (
            <motion.div
              initial={reduce ? {} : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 space-y-3">
                {note.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
                {note.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {note.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink-panel-soft text-muted-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}

export default function FieldNotes() {
  const sorted = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <section id="notes" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionHeading
          eyebrow="Log"
          title="Field Notes"
        />
      </Reveal>
      <Reveal delay={0.03} className="mb-8 -mt-6">
        <p className="text-sm text-muted-dim max-w-lg">
          Notes on interviews, CTFs, and hackathons, added as they happen.
          New entries go in <code className="font-mono text-xs">src/data/notes.js</code> — nothing
          else needs to change.
        </p>
      </Reveal>

      <div className="space-y-4">
        {sorted.map((note, i) => (
          <NoteCard key={note.id} note={note} delay={i * 0.05} />
        ))}
      </div>
    </section>
  )
}
