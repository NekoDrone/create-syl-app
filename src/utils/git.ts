import * as process from "node:process";
import { execSync } from "node:child_process";
import { PrintColour, printWithColour } from "@/utils/print";

export const initialiseGitRepo = (targetDir: string) => {
    printWithColour(PrintColour.BLUE, "Initialising Git repository...");

    try {
        process.chdir(targetDir);

        execSync("git init", { stdio: "inherit" });

        execSync("git add .", { stdio: "inherit" });

        execSync('git commit -m "init: csa boostrap"', { stdio: "inherit" });
    } catch (err: unknown) {
        console.error("❌ Error initializing git repository:", err);
        throw err;
    }

    printWithColour(
        PrintColour.GREEN,
        `✅ Initialised git repo at ${targetDir}/.git`,
    );
};
