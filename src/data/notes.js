// Field Notes — interview experiences, CTF/hackathon writeups, article notes.
//
// To add a new entry: copy the shape below and push a new object into the
// array. Newest-first ordering is automatic (sorted by `date` at render
// time in FieldNotes.jsx) — you don't need to insert it in any particular
// place in this file.
//
// Fields:
//   id       (string, required)  — unique slug, e.g. "fampay-ctf-2026"
//   title    (string, required)
//   date     (string, required)  — "YYYY-MM-DD"
//   category (string, required)  — one of: "Interview" | "CTF" | "Hackathon" | "Article" | "Research"
//   summary  (string, required)  — 1-2 lines, shown on the collapsed card
//   body     (string, optional)  — full write-up, shown when the card is expanded.
//                                   Supports plain paragraphs separated by "\n\n".
//                                   Omit this if you're linking out instead (see `link`).
//   link     (string, optional)  — external URL (e.g. a published post). If set
//                                   without `body`, the card shows "Read full post ->"
//   tags     (string[], optional)

export const notes = [
  {
    id: "fampay-ctf-2026",
    title: "FamPay CTF hiring challenge",
    date: "2026-06-01", // TODO: set the actual date
    category: "CTF",
    summary:
      "Solved 4 of 6 challenges in FamPay's CTF-style hiring challenge. The other two were blocked by infrastructure issues on their end, which I reported.",
    body:
      "The challenge was six security puzzles built around FamPay's stack. Here's what I got through:\n\n1. Pulled hardcoded strings out of a native library to find a hidden path.\n\n2. Used Firebase's anonymous auth to get into a part of the app that should have needed a real login.\n\n3. Cracked an XOR-obfuscated token used by Firebase App Check, then forged one myself.\n\n4. Exploited a JWT that accepted \"alg: none\", which let me sign my own tokens.\n\nThe remaining two challenges wouldn't load properly on my end. I reported the issue to FamPay instead of guessing at a fix.",
    tags: ["Firebase", "JWT", "Reverse Engineering"],
  },
]
