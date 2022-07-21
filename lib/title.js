const chalk = require("chalk");
const figlet = require("figlet");

module.exports = {
  title: () =>
    console.log(
      `${chalk.yellow(
        figlet.textSync(" DDC_Copyright_Header ", {
          horizontalLayout: "default",
        })
      )}\n`
    ),
};
