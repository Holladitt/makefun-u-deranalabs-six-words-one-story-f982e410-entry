// Six Words, One Story — entry program (Node 22, stdlib only).
// Writes exactly one six-word story to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "He sold everything except her photograph.";

// Self-check: the entry must be exactly six words, 1-60 UTF-8 characters,
// and not whitespace-only. Fail loudly instead of writing a bad entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected 6 words, got ${words.length}`);
}
const charCount = [...STORY].length;
if (charCount < 1 || charCount > 60) {
  throw new Error(`expected 1-60 characters, got ${charCount}`);
}
if (STORY.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
