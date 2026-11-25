// One Word, One Username, One Reward
// Entry: Tuhin's own make.fun username, sent as a single word and nothing else.
// The judge's first criterion is that the entry IS the entrant's own real
// make.fun handle, so the entire entry text is exactly this username.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "kingisback0111";

// Guard the gate before writing: the entry must be a single word of
// 1-30 characters, with no spaces and no surrounding whitespace. If the
// handle ever changed to something invalid, fail loudly instead of
// submitting a text the gate would refuse.
if (
  USERNAME.length < 1 ||
  USERNAME.length > 30 ||
  /\s/.test(USERNAME) ||
  USERNAME.trim() !== USERNAME
) {
  throw new Error(`Invalid username entry: ${JSON.stringify(USERNAME)}`);
}

// The grader mounts /output root-owned: create the directory if it is
// missing, but never remove /output itself.
mkdirSync("/output", { recursive: true });

// Write exactly the username with no trailing newline and no extra text,
// so the gate (1-30 characters, not only whitespace) passes.
writeFileSync("/output/entry.txt", USERNAME, "utf8");
