const path = require("path");
const fs = require("fs");
const folderExcludeList = require("../static/folderExcludeList");
const chalk = require("chalk");
const clui = require("clui");
const { addInputContentAtFirst } = require("./utils");
const Progress = clui.Progress;

function fromDir({
  mainDirectoryPath,
  selectedFileType,
  copyRightContent,
  foldersExclude = folderExcludeList,
}) {
  try {

    if (!fs.statSync(mainDirectoryPath)) {
      throw new Error("No directory found");
    }

    const files = fs.readdirSync(mainDirectoryPath);

    files.forEach((file, index) => {
      if (foldersExclude.includes(file)) {
        return;
      }
      const filename = path.join(mainDirectoryPath, file);
      const stat = fs.lstatSync(filename);
      const fileType = path.extname(file).substr(1);

      if (stat.isDirectory()) {
        fromDir({
          mainDirectoryPath: filename,
          selectedFileType,
          copyRightContent,
        }); //recurse
      } else if (selectedFileType.includes(fileType)) {
        console.log(chalk.cyanBright(`Scanning... ${filename}`));
        //passsing directoryPath and callback function

        addCopyrightHeader(copyRightContent, filename, index, files)

      } else {
        return;
      }
    });
  } catch (err) {
    throw Error(err);
  }
}

function writeAllDirectories({
  selectedDirectorList,
  selectedFileTypeList,
  copyRightContent,
}) {
  try {
    return selectedDirectorList.forEach((currentDirectory) => {
      return fromDir({
        mainDirectoryPath: currentDirectory,
        selectedFileType: selectedFileTypeList,
        copyRightContent,
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

function addCopyrightHeader(copyRightContent, filename, index, files) {

  const progressBar = new Progress(100);

  const data = fs.readFileSync(filename); //read existing contents into data

  const existingCopyRight = data.toString();

  if (copyRightContent && !existingCopyRight.includes("(C)") || !existingCopyRight.includes("Copyright (C)")) {

    const buffData = addInputContentAtFirst(copyRightContent, data);
    fs.writeFileSync(filename, buffData, { flag: "w+" });
    console.log(progressBar.update(index + 1, files.length));
    console.log(chalk.magentaBright(`${filename} is updated`));
  }
}


module.exports = {
  writeAllDirectories,
  fromDir,
};



