import inquirer from "inquirer";
import fs from "fs";
const badges = {
  "APACHE 2.0":
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
};
const questions = [
  {
    message: "What is the Title of your project?",
    type: "input",
    name: "title",
  },
  {
    message: "What is the description of your project?",
    type: "input",
    name: "description",
  },
  {
    message: "What were the installations for your project?",
    type: "input",
    name: "installation",
  },
  {
    message: "What is the usage of your project?",
    type: "input",
    name: "usage",
  },
  {
    message: "What is the license of your project?",
    type: "list",
    choices: ["MIT", "APACHE 2.0", "None"],
    name: "license",
  },
  {
    message: "What are the contributing guidelines for your project?",
    type: "input",
    name: "contributing",
  },
  {
    message: "What is the testing guidelines for your project?",
    type: "input",
    name: "tests",
  },
  {
    message: "What is the github username for your project?",
    type: "input",
    name: "username",
  },
  {
    message: "What is your email?",
    type: "input",
    name: "email",
  },
];

inquirer
  .createPromptModule()(questions)
  .then(
    ({
      title,
      description,
      installation,
      usage,
      license,
      contributing,
      tests,
      username,
      email,
    }) => {
      let readMeElem = `${license == "None" ? "" : badges[license]}
# ${title} 

## Description
### ${description}

## Installation
### ${installation}

## Usage
### ${usage}

## License
### ${license}

## Contributing
### ${contributing}

## Tests
### ${tests}

## Questions
### [Github Profile](https://github.com/${username}) 
### You can email me at: ${email} 

# Table of Contents 
1. [Title](#title)
2. [Description](#description)
3. [Installation](#installation)
4. [Usage](#usage)
5. [License](#license)
6. [Contributing](#contributing)
7. [Tests](#tests)
8. [Questions](#questions)

    `;
      fs.writeFile("README.md", readMeElem, (err) => console.log(err));
    }
  )
  .catch((err) => console.log(err));
