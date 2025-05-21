import { PrintColour, printWithColour } from "@/utils/print";
import fs from "fs-extra";
import * as path from "node:path";
import { PROJECT_ROOT } from "@/consts";
import * as inquirer from "@inquirer/prompts";

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

                content = content.replace(/\{\{PROJECT_NAME}}/g, projectName);

                fs.writeFileSync(filePath, content);
            }
        }
    }

    printWithColour(PrintColour.GREEN, "✅  Done!", { bold: true });
};

export const configureEnvVariables = async (targetDir: string) => {
    printWithColour(
        PrintColour.BLUE,
        "🔧 Configuring environment variables...",
    );

    const examplePath = path.join(targetDir, ".env.example");
    const envPath = path.join(targetDir, ".env");

    await fs.copy(examplePath, envPath);

    try {
        const envFileContents = fs.readFileSync(envPath, "utf-8");

        const lines = envFileContents.split("\n");

        for (let line of lines) {
            if (line.trim() === "" || line.trim().startsWith("#")) continue;

            const match = line.match(/^([A-Za-z0-9_]+)=(.*)$/);
            if (match) {
                const [, name, defaultValue] = match;
                const question = {
                    message: name,
                    default: defaultValue || undefined,
                };
                const answer = await inquirer.input(question);
                line = `${name}=${answer}`;
            }
        }

        const newEnvContent = lines.join("\n");
        fs.writeFileSync(envPath, newEnvContent);

        printWithColour(
            PrintColour.GREEN,
            "✅  Environment variables configured!",
            { bold: true },
        );
    } catch (e) {
        printWithColour(
            PrintColour.RED,
            "❌  Error configuring environment variables",
            { bold: true },
        );
        throw e;
    }
};
