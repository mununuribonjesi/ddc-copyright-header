const clear = require("clear");
const { getDirectories } = require("./utils");
const Fs = require("fs")
const path = require("path");
const FILE_TYPES = require("../static/fileTypes");
const { writeAllDirectories } = require("./filewrite");
const FOLDER_EXCLUDE_LIST = require("../static/folderExcludeList");

const { type } = require("os");

// ask questions
// ask questions
function generateCopyRight() {
  //clear the command terminal
  clear();
  const rootDir = process.cwd();

  const allDirectories = getDirectories(rootDir);

  const supportedFileTypes = Object.keys(FILE_TYPES);
  const selectedDirectories = allDirectories.filter(item => !FOLDER_EXCLUDE_LIST.includes(item))

  const copyrightHeader = path.join(rootDir, "copyrightHeader.txt");

  if (selectedDirectories.length > 0) {

    const inputs = {
      selectedDirectorList: selectedDirectories,
      selectedFileTypeList: supportedFileTypes.map((data) => FILE_TYPES[data]),
      copyRightContent: Fs.readFileSync(copyrightHeader).toString(),
    };

    return writeAllDirectories(inputs);
  } else {
    return
  }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const init = {
  async initialize(rootDir) {
    return generateCopyRight(rootDir);
  },
};

module.exports = init;

