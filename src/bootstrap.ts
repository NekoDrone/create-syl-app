import * as inquirer from "@inquirer/prompts";
import { PrintColour, printLine, printWithColour } from "@/utils/print";
import * as path from "node:path";
import { isDirectoryEmpty } from "@/utils/fs";

export async function bootstrap() {
  printWithColour(PrintColour.MAGENTA, "✨ 🐰 Welcome to create-syl-app 🐰✨ ", {
    bold: false,
  });
  const projectName = await inquirer.input({
    message:
      "What is the name of your project? (enter '.' to use the current directory)",
    validate: (input) => input.trim() !== "" || "Project name is required",
  });

  const targetDir = path.join(process.cwd(), projectName);

  printWithColour(
    PrintColour.WHITE,
    `Bootstrapping new project${projectName === "." ? ` in current folder: ${path.basename(process.cwd())}` : `: ${projectName}`}`,
  );


  if (!isDirectoryEmpty(targetDir)) {
    printWithColour(PrintColour.RED, `Error: Directory /${targetDir} already exists and has conflicting files.`);
    printWithColour(PrintColour.RED, `Please clear the directory of existing files before trying again.`);
    process.exit(1);
  }
}


