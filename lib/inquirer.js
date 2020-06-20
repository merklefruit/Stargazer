const inquirer = require("inquirer");

module.exports = {
  askToken: () => {
    const questions = [
      {
        name: "token",
        type: "input",
        message: "Enter your GitHub Personal Access Token:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter an access token.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
  askRepo: () => {
    const questions = [
      {
        name: "user",
        type: "input",
        message: "Enter the repository author:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter the repository author.";
          }
        },
      },
      {
        name: "repo",
        type: "input",
        message: "Enter the repository name:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please the name of the repository.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
