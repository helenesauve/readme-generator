// function to generate markdown for README
const licenceResult = (iconCheck) => {
  if (iconCheck === "MIT") {
    return "https://img.shields.io/badge/licence-MIT-green.svg"
  }
  if (iconCheck === "Apache") {
  return "https://img.shields.io/badge/licence-Apache-blue.svg"
  }
  return "https://img.shields.io/badge/licence-GPL-blue.svg"
}


function generateMarkdown(response) {
  return   `# ${response.title}
![GitHub licence](${licenceResult(response.licence)})

## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributing](#contributing)
- [Test](#tests) 
- [Questions](#questions)

## Installation
You'll want to use ${response.installation} to install dependencies
## Usage
${response.usage}
## Licence
${response.licence}
## Contributing
${response.contributing}
## Tests
You'll want to use ${response.test} to run tests
## Questions
[You can find my repo here](https://www.github.com/${response.github})
Any questions, you can reach out at ${response.email}
`;
}

module.exports = generateMarkdown;
