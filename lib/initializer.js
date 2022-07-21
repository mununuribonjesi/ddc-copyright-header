const clear = require("clear");
const { getDirectories } = require("./utils");
const Fs = require("fs")
const path = require("path");
const { writeAllDirectories } = require("./filewrite");

function generateCopyRight() {
  //clear the command terminal
  clear();
  const rootDir = process.cwd();

  const allDirectories = getDirectories(rootDir);

  const configPath = path.join(rootDir, "copyrightConfig.json");

  const config = JSON.parse(Fs.readFileSync(configPath));

  const supportedFileTypes = Object.keys(config.fileTypes);

  const selectedDirectories = allDirectories.filter(item => !config.folderExcludeList.includes(item))

  if (selectedDirectories.length > 0) {

    const inputs = {
      selectedDirectorList: selectedDirectories,
      selectedFileTypeList: supportedFileTypes.map((data) => config.fileTypes[data]),
      copyRightContent: config.copyrightContent,
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

