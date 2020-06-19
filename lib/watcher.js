const axios = require("axios");

module.exports = {
  watchStars: async (repo) => {
    const result = await axios.get(
      `http://api.github.com/repos/${repo.user}/${repo.repo}`
    );
    const info = {
      stars: result.data.stargazers_count,
      watchers: result.data.subscribers_count,
      forks: result.data.forks,
    };
    return info;
  },
};
