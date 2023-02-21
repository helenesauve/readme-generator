const questions = [
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
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    message: "What command should you use to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What do users need to know about contributing to this project?",
    name: "contributing",
  },
];

module.exports = questions;
