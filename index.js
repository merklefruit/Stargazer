const { askRepo, askToken } = require("./lib/inquirer");
const {
  init,
  reset,
  printStats,
  saveToken,
  getToken,
  explainAuth,
} = require("./lib/tools");
const { watchStars } = require("./lib/watcher");

const run = async () => {
  init();

  await checkAuth();
  const repo = await askRepo();
  update(repo);

  setInterval(async function () {
    update(repo);
  }, 10000);
};

const update = async (repo) => {
  reset(repo);
  const info = await watchStars(repo);
  if (info === null) {
    process.kill(process.pid);
  }
  printStats(info);
  console.log("\n", "Press option+C to exit");
};

const checkAuth = async () => {
  const token = getToken();
  if (token) {
    console.log("Successfully authenticated!", "\n");
  } else {
    explainAuth();
    const newToken = await askToken();
    saveToken(newToken);
    return newToken;
  }
};

run();
