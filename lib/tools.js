const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

module.exports = {
  init: () => {
    clear();
    console.log(
      chalk.yellow(figlet.textSync("Stargazer", { horizontalLayout: "full" })),
      "\n"
    );
  },
  printStars: (stars) => {
    console.log(
      chalk.bold("Stars:"),
      " ",
      chalk.green.bold(stars),
      " ⭐️",
      "\n"
    );
  },
};
