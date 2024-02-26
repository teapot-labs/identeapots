import fs from "fs";
import { generateIdenteapot } from "../index";
import { waitInput } from "./utils/wait-input";
import { exit } from "process";

(async () => {
  const outputDir = "test/gen";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const seed = await waitInput("Enter a seed: ", "user123");
  const identicon = generateIdenteapot(seed);
  const filename = `${outputDir}/${seed}.png`;
  const base64Data = identicon.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync(filename, base64Data, "base64");

  console.log(`Identicon saved as ${filename}`);
  exit(0);
})();
