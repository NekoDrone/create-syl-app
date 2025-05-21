import { PrintColour, printWithColour } from "@/utils/print";
import fs from "fs-extra";
import * as path from "node:path";
import { PROJECT_ROOT } from "@/consts";

export interface DefaultTemplateOpts {
    projectName: string;
}

export const insertDefaultTemplate = async (
    targetDir: string,
    opts: DefaultTemplateOpts,
) => {
    printWithColour(PrintColour.BLUE, "Copying default template...");

    const { projectName } = opts;
    const templateDir = path.join(PROJECT_ROOT, "templates", "default");
    await fs.copy(templateDir, targetDir);

    printWithColour(PrintColour.GREEN, "✅  Done!", { bold: true });

    await replaceProjectName(targetDir, projectName);
};

interface ReplaceVariablesOpts {
    additionalFilePaths?: string[];
}

const replaceProjectName = async (
    targetDir: string,
    projectName: string,
    opts: ReplaceVariablesOpts = {
        additionalFilePaths: ["README.md"],
    },
) => {
    printWithColour(PrintColour.BLUE, "Inserting user-specified defaults...");

    const packageJsonPath = path.join(targetDir, "package.json");
    if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(
            fs.readFileSync(packageJsonPath, "utf8"),
        );

        packageJson.name = projectName;
        packageJson.version = "0.1.0";

        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    if (opts.additionalFilePaths) {
        const { additionalFilePaths } = opts;

        for (const file of additionalFilePaths) {
            const filePath = path.join(targetDir, file);

            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, "utf8");

                content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);

                fs.writeFileSync(filePath, content);
            }
        }
    }

    printWithColour(PrintColour.GREEN, "✅  Done!", { bold: true });
};
