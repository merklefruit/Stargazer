const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const ansi = require("ansi-escapes");

const Configstore = require("configstore");
const pkg = require("../package.json");
const conf = new Configstore(pkg.name);

module.exports = {
  init: () => {
    clear();
    process.stdout.write(ansi.cursorShow);
    console.log(
      chalk.yellow(figlet.textSync("Stargazer", { horizontalLayout: "full" })),
      "\n"
    );
  },
  reset: (repo) => {
    process.stdout.write(ansi.cursorTo(0, 7));
    console.log(
      chalk.italic("Currently watching: "),
      chalk.bold(`${repo.user}/${repo.repo}`)
    );
  },
  printStats: (info) => {
    process.stdout.write(ansi.cursorHide);
    process.stdout.write(ansi.cursorTo(0, 8) + ansi.eraseDown);
    console.log(
      "\n",
      chalk.bold("Stars:    "),
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
    process.stdout.write(ansi.cursorShow);
  },
  saveToken: (token) => {
    // TODO: check token validity (control status of api request)
    conf.set("token", token.token);
  },
  getToken: () => {
    return conf.get("token");
  },
  explainAuth: () => {
    console.log(chalk.italic("You need a Personal Access Token from Github."));
    console.log(chalk.italic("Here's how to get one:"), "\n");
    console.log(
      chalk.italic.bold("1. Visit https://github.com/settings/tokens/new")
    );
    console.log(chalk.italic.bold('2. Login and select "repo" as scope'));
    console.log(chalk.italic.bold("3. Click on Generate Token"), "\n");
  },
};
