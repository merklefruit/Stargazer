const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

clear();

console.log(
  chalk.yellow(figlet.textSync("Stargazer", { horizontalLayout: "full" })),
  "\n"
);

const inquirer = require("./lib/inquirer");

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();
