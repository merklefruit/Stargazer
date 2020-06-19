const { askRepo } = require("./lib/inquirer");
const { init, reset, printStats } = require("./lib/tools");
const { watchStars } = require("./lib/watcher");

const run = async () => {
  init();
  const repo = await askRepo();
  update(repo);

  setInterval(async function () {
    update(repo);
  }, 5000);
};

const update = async (repo) => {
  reset(repo);
  const info = await watchStars(repo);
  printStats(info);
  console.log("\n", "Press option+C to exit");
};

run();
