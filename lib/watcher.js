const axios = require("axios");
const { getToken } = require("./tools");

module.exports = {
  watchStars: async (repo) => {
    try {
      const token = await getToken();
      const res = await axios.get(
        `http://api.github.com/repos/${repo.user}/${repo.repo}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      const info = {
        stars: res.data.stargazers_count,
        watchers: res.data.subscribers_count,
        forks: res.data.forks,
      };
      return info;
    } catch (error) {
      console.log(error.response.data.message);
      return null;
    }
  },
};
