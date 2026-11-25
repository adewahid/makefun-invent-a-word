// Entry generator for make.fun "Invent a Word We Need"
// (u-deranalabs-invent-a-word-we-need-17a020e0)
//
// Writes the entry — one invented word plus its one-line definition —
// to /output/entry.txt, enforcing the gate from RULES.txt:
// UTF-8 text of 1 to 140 characters, not only white space, one line.
//
// Why this word fills a real gap: every texter knows the stomach-drop of
// spotting a typo the instant a message leaves their hands, yet English
// has no single word for it — only long-winded descriptions ("I sent it
// and THEN saw the typo"). "sendspasm" names that exact jolt: "send" for
// the message already gone, "spasm" for the involuntary flinch that
// follows it. It is built from two plain English parts, so anyone can say
// it, spell it, and remember it after one hearing — and the moment it
// names is one every reader has lived through, which is what makes a
// coinage stick instead of fading after the contest ends.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "sendspasm \u2014 the jolt of spotting a typo the second after you hit send.";

const MAX_CHARS = 140;

// Count Unicode code points, as the gate counts characters.
const chars = [...ENTRY].length;

if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(
    `entry is ${chars} characters, outside the 1-${MAX_CHARS} gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

console.log(`wrote /output/entry.txt (${chars} characters)`);
console.log(ENTRY);
