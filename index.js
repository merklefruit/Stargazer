const { askRepo } = require("./lib/inquirer");
const { init, printStars } = require("./lib/tools");
const { watchStars } = require("./lib/watcher");

// Initialize CLI:
init();

const run = async () => {
  const repo = await askRepo();
  init();
  const info = await watchStars(repo);
  printStars(info.stars);
};

run();
