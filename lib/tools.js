const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const Configstore = require("configstore");
const pkg = require("../package.json");
const conf = new Configstore(pkg.name);

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
  saveToken: (token) => {
    // TODO: check token validity (control status of api request)
    conf.set("github.token", token);
  },
  getToken: () => {
    return conf.get("github.token");
  },
  explainAuth: () => {
    console.log(chalk.italic("You need a Personal Access Token from Github."));
    console.log(
      chalk.italic(
        "This is not stricly mandatory for GitHub, but without a token"
      )
    );
    console.log(chalk.italic("I can only make 60 requests per hour."), "\n");
  },
};
