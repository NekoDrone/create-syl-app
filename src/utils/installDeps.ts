import { PrintColour, printWithColour } from "@/utils/print";
import process from "node:process";
import { execSync } from "node:child_process";

export const installDeps = (targetDir: string) => {
    printWithColour(PrintColour.BLUE, "Installing dependencies...");

    try {
        process.chdir(targetDir);

        execSync("pnpm install", { stdio: "inherit" });
    } catch (err: unknown) {
        console.error("❌ Error installing dependencies:", err);
        throw err;
    }

    printWithColour(PrintColour.GREEN, `✅ Done!`);
};
