import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function waitInput(question: string, defaultValue: string = ""): Promise<string> {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(question);
  return answer || defaultValue;
}
