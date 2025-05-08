import * as path from "node:path";
import * as fs from "node:fs/promises";
import fsExtra from "fs-extra";
import { Tsconfig } from "tsconfig-paths/lib/tsconfig-loader";

export const getTsConfig = async () => {
  const rootTsConfigPath = path.resolve(__dirname, "../../tsconfig.json")
  
  try {
    if( await fsExtra.pathExists(rootTsConfigPath)) {
      return JSON.parse(await fs.readFile(rootTsConfigPath, {encoding:"utf-8"})) as Tsconfig
    }
  } catch (error) {
    console.error(`Error reading tsconfig.json: ${error}`);
    throw new Error('Could not read the tsconfig.json from project root. Does it exist?');
  }
}

export const setupTypescript = () => {
  
}