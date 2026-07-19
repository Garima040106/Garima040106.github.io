import { motion, useReducedMotion } from "framer-motion"

// The hero's signature element: a decision boundary separating two
// point clusters. It's a literal nod to what most of the portfolio is
// actually about — phishing vs. legitimate, real vs. deepfake, match vs.
// no-match — the recurring problem of drawing a reliable line between
// signal and noise.
export default function BoundaryGraphic() {
  const reduce = useReducedMotion()

  const linePath =
    "M -10 150 C 60 150, 90 70, 160 70 S 260 130, 340 60 S 420 -10, 500 -10"

  const noisePoints = [
    [40, 190], [90, 210], [150, 175], [30, 130], [200, 200], [230, 165], [70, 235],
  ]
  const signalPoints = [
    [180, 30], [240, 55], [300, 15], [360, 40], [420, -5], [270, 90], [400, 30],
  ]

  return (
    <svg
      viewBox="-10 -30 520 280"
      className="w-full h-auto max-w-xl"
      role="img"
      aria-label="Illustration of a boundary line separating two clusters of points, representing signal-versus-noise classification."
    >
      <motion.path
        d={linePath}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {noisePoints.map(([cx, cy], i) => (
        <motion.circle
          key={`n-${i}`}
          cx={cx}
          cy={cy}
          r={4}
          fill="var(--color-muted)"
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.9 + i * 0.05 }}
        />
      ))}

      {signalPoints.map(([cx, cy], i) => (
        <motion.circle
          key={`s-${i}`}
          cx={cx}
          cy={cy}
          r={4}
          fill="var(--color-tag-ctf)"
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: reduce ? 0 : 1.0 + i * 0.05 }}
        />
      ))}
    </svg>
  )
}
