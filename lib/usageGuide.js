const commandLineUsage = require("command-line-usage");
function usageGuide() {
  const optionDefinitions = [
    {
      name: "help",
      description: "Display this usage guide.",
      alias: "h",
      type: Boolean,
    },
  ];

  const sections = [
    {
      header: "DDC Copyright Head",
      content:
        " ddc-copyright-head is a tool for generating copyright & license header applying to the copyright-config.json file created in the root directory of your application.",
    },
    {
      header: "Synopsis",
      content: [
        "$ npx  ddc-copyright-head --generate",
        "$ npx  ddc-copyright-head --help",
      ],
    },
    {
      header: "Options",
      optionList: optionDefinitions,
    },
    {
      content:
        "Project home: {underline https://github.com/mununuribonjesi/ddc-copyright-header}",
    },
  ];

  console.log(commandLineUsage(sections));
}
module.exports = usageGuide;
