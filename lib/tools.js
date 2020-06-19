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
  reset: (repo) => {
    clear();
    console.log(
      chalk.yellow(figlet.textSync("Stargazer", { horizontalLayout: "full" })),
      "\n"
    );
    console.log(
      chalk.cyan.italic("Currently Monitoring: "),
      chalk.bold(`${repo.user}/${repo.repo}:`),
      "\n"
    );
  },
  printStats: (info) => {
    console.log(
      chalk.bold(" Stars:    "),
      chalk.green.bold(info.stars),
      "⭐️",
      "\n \n",
      chalk.bold("Watchers: "),
      chalk.blue.bold(info.watchers),
      "👁",
      "\n \n",
      chalk.bold("Forks:    "),
      chalk.red.bold(info.forks),
      "🍴",
      "\n"
    );
  },
};
