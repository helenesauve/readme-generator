const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require('./utils/questions')
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const init = () => {
  inquirer.prompt(questions)
  .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
}
  // function that translates licence input into badge

  init()