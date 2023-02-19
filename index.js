const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const promptUser = () =>
  inquirer.prompt([
  {
    type: "input",
    message: "What is your Github repository?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide the table of content for your project",
    name: "content",
  },
  {
    type: "list",
    message: "What kind of licence should your project have?",
    name: "licence",
    choices: ['MIT', 'Apache', 'GPL']
  },
  {
    type: "input",
    message: "What command should you use to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "test",
  },
  {
    type: "input",
    message: "What do users need to know about contributing to this project?",
    name: "contributing",
  },
  ]);

  // function that translates licence input into badge
let licenceIcon;
const licenceResult = (iconCheck) => {

  if (iconCheck === "MIT") {
    return licenceIcon = ("https://img.shields.io/badge/licence-MIT-green.svg")
  }
  else if (iconCheck === "Apache") {
  return licenceIcon = ("https://img.shields.io/badge/licence-Apache-blue.svg")
  }
  else {
    return licenceIcon = ("https://img.shields.io/badge/licence-GPL-blue.svg")
    }
}

  // function that collects answers from the response
  const writeToFile = (response) =>
  `## ${response.title}
  ![GitHub licence](${licenceResult(response.licence)})
  ${response.description}
  # Table of Content
  ${response.content}
  # Installation
  ${response.installation}
  # Usage
  ${response.usage}
  # Licence
  ${response.licence}
  # Contributing
  ${response.contributing}
  # Tests
  ${response.test}
  # Questions
  ${response.github}
  Any questions, you can reach out at ${response.email}
  `

  promptUser()
  .then((response) => writeFileAsync('README.md', writeToFile(response)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
 



// // function to initialize program
// function init() {}

// // function call to initialize program
// init();




