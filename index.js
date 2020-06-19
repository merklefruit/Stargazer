const { askRepo, askFrequency } = require("./lib/inquirer");
const { init, reset, printStats } = require("./lib/tools");
const { watchStars } = require("./lib/watcher");

const run = async () => {
  init();
  const repo = await askRepo();
  const frequency = await askFrequency();
  update(repo);

  setInterval(async function () {
    update(repo);
  }, frequency * 1000);
};

const update = async (repo) => {
  reset(repo);
  const info = await watchStars(repo);
  if (info !== null) {
    printStats(info);
    console.log("\n", "Press option+C to exit");
  } else {
    process.kill(process.pid);
  }
};

run();
