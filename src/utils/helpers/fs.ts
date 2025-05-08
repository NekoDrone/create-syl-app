import fsExtra from "fs-extra";

export const filesAlreadyExistIn = async (projDir: string) => {
  try {
    if (!await fsExtra.pathExists(projDir)) {
      return false;
    }

    const contents = await fsExtra.readdir(projDir);
    return contents.length > 0;

  } catch (error) {
    console.error(`Error checking directory contents: ${error}`);
    return false; // Assume no contents on error
  }
}