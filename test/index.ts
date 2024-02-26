import fs from "fs";
import { exit } from "process";
import { generateIdenteapot } from "../index";
import { waitInput } from "./utils/wait-input";
import "global-jsdom/register";

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
