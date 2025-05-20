#!/usr/bin/env node
import { bootstrap } from "@/bootstrap";
import { PrintColour, printLine, printWithColour } from "@/utils/print";

bootstrap().then(() => {
  printLine();
  printWithColour(PrintColour.GRAY, "----------🐱💜🐱💜🐱----------");
  printWithColour(PrintColour.GREEN, "✨  Finished! Have fun building! 💜️ ");
  printWithColour(PrintColour.CYAN, "Remember to run `pnpm install` before running the dev server!", { bold: true })
});
