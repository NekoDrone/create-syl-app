import fs from "fs-extra";

export const filesAlreadyExistIn = async (projDir: string) => {
  try {
    if (!(await fs.pathExists(projDir))) {
      return false;
    }

    const contents = await fs.readdir(projDir);
    return contents.length > 0;
  } catch (error) {
    console.error(`Error checking directory contents: ${error}`);
    return false; // Assume no contents on error
  }
};

export const isDirectoryEmpty = (
  dirPath: string,
  opts: { ignoreHidden: boolean; ignoredFiles: string[] } = {
    ignoreHidden: true,
    ignoredFiles: [],
  },
) => {
  const {ignoreHidden, ignoredFiles} = opts;
  
  if (!fs.existsSync(dirPath)) {
    return true;
  }

  let files = fs.readdirSync(dirPath);

  if (ignoreHidden) {
    files = files.filter(f => !f.startsWith('.'));
  }
  files = files.filter(f => !ignoredFiles.includes(f));
  
  return files.length === 0;;
};
