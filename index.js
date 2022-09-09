// // TODO: Include packages needed for this application
// const generateMarkdown = require("./utils/generateMarkdown");
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// generateMarkdown("Test");

//const inquirer = require('inquirer');
import inquirer from "inquirer";

/*
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //return `# ${data.title}`;
  */
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      choices: [
        "Order a pizza",
        "Make a reservation",
        new inquirer.Separator(),
        "What is the purpose of your project?",
        {
          name: "Contact support",
          disabled: "Unavailable at this time",
        },
        "Talk to the receptionist",
      ],
    },
    {
      type: "list",
      name: "size",
      message: "What size do you need?",
      choices: ["Jumbo", "Large", "Standard", "Medium", "Small", "Micro"],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, "  "));
  });

//module.exports = generateMarkdown;
