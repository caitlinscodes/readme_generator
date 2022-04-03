// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Give a brief description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe the installation process for this project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Describe the usage information for this program.',
      name: 'usage',
    },
    {
      //needs to be a list or choose
      type: 'list',
      message: 'Describe how to use this program',
      name: 'license',
      choices: ['MIT: describe', 'LSAT: describe', 'telekinesis'],
    },
    {
      //ask if any contributors
      type: 'confirm',
      message: 'Would you like a table of contents',
      name: 'tableofcontents',
    },
    {
      //prompt for contributor names
      type: 'input',
      message: 'Describe how to use this program',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Describe how to use this program',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Describe how to use this program',
      name: 'questions',
    },
  ])
// TODO: Create a function to write README file
  .then((response) => {
    fs.writeFile('README2.md',
      `
      # ${response.projectTitle}
      
      ## Description
      ${response.description}
      
      ## Table of Contents (figure out how to link these)
      * Installation
      * Usage
      * License
      * Contributing
      * Tests
      * Questions
      
      ## Installation
      ${response.installation}
      
      ## Usage
      ${response.usage}
      
      ## License
      ${response.license}
      
      ## Contributing
      ${response.contributors}
      
      ## Tests
      ${response.tests}
      
      ## Questions
      ${response.questions}
      ---
        `, (err) =>
        err ? console.error(err) : console.log('README file created')
      );
 });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







 