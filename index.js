const inquirer = require('inquirer');
const fs = require('fs');


const generateReadme = (answers) =>
`# ${answers.title}



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Table of Contents

${answers.table}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Test

${answers.test}

## Contributing

${answers.contribution}

## Questions

If you have any questions feel free to contact me here:

  Github Username: ${answers.gusername}

  Email: ${answers.email}

## License

[MIT](https://opensource.org/licenses/MIT)

You have the freedom to do as you like with this permissive software, as long as an original copy and license notice is included. I cannon be held liable for this software.

## Walk-through Video

##### Video: [Readme Generator Walk-through](https://drive.google.com/file/d/1QvjLTv_Rml1mOnN876eHSK2Oz3sm2nkT/view?usp=sharing)

## Application Image

 ![Image of Application]( https://github.com/markwilson107/Readme-Generator/blob/main/images/deployed-application.png)`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'gusername',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'editor',
      name: 'description',
      message: 'Please enter your projects description',
    },
    {
      type: 'editor',
      name: 'table',
      message: 'Please enter table of contents',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of your project',
    },
    {
        type: "list",
        name: "licence",
        message: "What licence is relevant to this project?",        
        choices: ["MIT", "Apache 2.0", "BSD3", "None"]
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing to the repo?",    
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",    
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateReadme(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme!')
    );
  });
