import { useEffect, useState } from "react"

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#notes", label: "Field Notes" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ink/85 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight">
          Garima Varma
        </a>

        <nav className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paper transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="px-3 py-1.5 rounded-full border border-line-strong hover:border-accent hover:text-paper transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          className="sm:hidden font-mono text-xs uppercase tracking-wider text-muted py-3 px-1 -mx-1"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden px-6 pb-6 flex flex-col font-mono text-sm uppercase tracking-wider text-muted">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-paper py-2.5">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" onClick={() => setOpen(false)} className="text-accent py-2.5">
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}
