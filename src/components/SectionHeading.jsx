export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
    </div>
  )
}
