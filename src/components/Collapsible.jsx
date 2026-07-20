import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

// Shared collapse pattern: a headline is always visible, extra detail
// hides behind an Expand/Collapse toggle. Used anywhere a card should
// read as a headline first and a click away from the full detail.
export default function Collapsible({ header, children, className = "" }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  if (!children) {
    return (
      <div className={`rounded-2xl border-[1.5px] border-line-strong p-5 sm:p-6 ${className}`}>
        {header}
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border-[1.5px] border-line-strong overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-5 sm:p-6 cursor-pointer"
        aria-expanded={open}
      >
        {header}
        <span className="font-mono text-xs text-muted-dim mt-2 inline-block">
          {open ? "Collapse −" : "Expand +"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? {} : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
