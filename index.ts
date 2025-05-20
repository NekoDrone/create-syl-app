#!/usr/bin/env node
import * as inquirer from "@inquirer/prompts";
import { PrintColour, printWithColour } from "@/utils/logging";
import * as path from "node:path";

async function main() {
  printWithColour(PrintColour.MAGENTA, " ✨ 🐰 Welcome to create-syl-app 🐰✨ ", {
    bold: true,
  });
  const projectName = await inquirer.input({
    message:
      "What is the name of your project? (enter '.' to use the current directory)",
    validate: (input) => input.trim() !== "" || "Project name is required",
  });
  printWithColour(
    PrintColour.WHITE,
    `Bootstrapping new project${projectName === "." ? ` in current folder: ${path.basename(process.cwd())}` : `: ${projectName}`}`,
  );
}

main().then(() => {
  printWithColour(PrintColour.GREEN, " ✨  Finished! Have fun building! 💜️ ")
});
