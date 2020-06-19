const inquirer = require("inquirer");

module.exports = {
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
