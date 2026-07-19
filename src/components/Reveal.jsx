import { motion, useReducedMotion } from "framer-motion"

// Shared scroll-reveal wrapper so every section animates in consistently
// (once, on entering the viewport — not looping, not scattered per-element).
export default function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  )
}
