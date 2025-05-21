import { PrintColour, printWithColour } from "@/utils/print";
import fs from "fs-extra";
import * as path from "node:path";

export interface DefaultTemplateOpts {
    projectName: string;
}

export const insertDefaultTemplate = async (
    targetDir: string,
    opts: DefaultTemplateOpts,
) => {
    printWithColour(PrintColour.BLUE, "Copying default template...");

    const templateDir = path.join(__dirname, "templates", "default");
    await fs.copy(templateDir, targetDir);

    printWithColour(PrintColour.GREEN, "✅  Done!");
};

const replaceProjectName = async (projectName: string) => {};
