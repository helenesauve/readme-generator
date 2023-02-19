const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



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
    message: "What kimd of license should your project have?",
    name: "license",
    choices: ['MIT', 'Apache', 'GPL', 'BSD']
  },
  {
    type: "input",
    message: "What command should you used to install dependencies?",
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

  promptUser()
  .then((response => {
  writeToFile()
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));
  }));


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',

    `## ${response.title}
    ## Description
    ${response.description}
    # Table of Content
    ${response.content}
    # Installation
    ${response.installation}
    # Usage
    ${response.usage}
    # License
    ${response.license}
    # Contributing
    ${response.contributing}
    #Tests
    ${response.test}
    }
    `, (err) => {
        err ?
          console.log(err)
       :
          console.log("File written successfully\n");
        }
        )}


// // function to initialize program
// function init() {}

// // function call to initialize program
// init();




