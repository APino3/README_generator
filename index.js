const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What is the table of contents of your project?",
    type: "input",
    name: "table_of_contents",
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
  .createPromptModule(questions)
  .then((answers) => {
    console.log(answers);
    let readMeElem = `
    <img src='https://img.shields.io/badge/license-${answers.license}-yellow.svg)](https://opensource.org/licenses/MIT'>
<h1> ${answers.title} </h1>
<h2> ${answers.description} </h2>
<details open ="open">
<summary> Table of Contents</summary>
<ol>
<li><a href="#installation">Installation</a></li>
<li><a href= "#usage">Usage </a></li>
<li><a href= "#contributing">Contributing </a></li>
<li><a href= "#tests">Tests </a></li>
<li><a href= "#questions">Questions </a></li>
</datails>

<h3 id='installation'>Installation</h3>
<p>${answers.installation} </p>

<h3 id='usage'>Usage</h3>
<p>${answers.usage} </p>

<h3 id='contributing'>Contributing</h3>
<p>${answers.contributing} </p>

<h3 id='tests'>Tests</h3>
<p>${answers.tests} </p>

<h3 id='questions'>Questions</h3>
<p>Reach out with questions on github at ${answers.username} or email at ${answers.email}</p>

    `;
    fs.writeFile("newReadMe.md", readMeElem, (err) => console.log(err));
  })
  .catch((err) => console.log(err));
