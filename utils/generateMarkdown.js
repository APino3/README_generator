const inquirer = require('inquirer');

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
    type: 'list',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask for opening hours',
      {
        name: 'Contact support',
        disabled: 'Unavailable at this time',
      },
      'Talk to the receptionist',
    ],
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    filter(val) {
      return val.toLowerCase();
    },
  },
])
.then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
}

module.exports = generateMarkdown;
