import Reveal from "./Reveal"

const LINKS = [
  { label: "Email", href: "mailto:garimavarma004@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/garima-varma-5a807a326" },
  { label: "GitHub", href: "https://github.com/Garima040106" },
  { label: "Resume", href: "/resume.pdf" },
]

export default function Footer() {
  return (
    <footer id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Get in touch</p>
        <h2 className="font-display text-3xl mb-8 max-w-md">
          Open to cybersecurity, AI/ML, and backend internships.
        </h2>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="px-4 py-2 rounded-full border border-line-strong hover:border-accent hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-muted-dim text-xs mt-16">
          © {new Date().getFullYear()} Garima Varma. Built with React, Tailwind, and Framer Motion.
        </p>
      </Reveal>
    </footer>
  )
}
