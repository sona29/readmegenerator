const inquirer = require('inquirer');
const fs = require('fs');

// function to generate license
const generateLicense = (license) =>
{
  if(license === 'MIT')
  {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'BSD3'){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else if (license === 'BSD2'){
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
  else{
    return 'None';
  }

}

// function to generate readme
const generateReadme = (answers) =>
{ 
return `# ${answers.title}


${generateLicense(answers.license)}

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contribution](#contribution)
- [License](#license)


## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Test

${answers.test}

## How to Contribute

${answers.contribution}

## Questions

If you have any questions feel free to contact me:

  Github Username: ${answers.gusername}

  Email: ${answers.email}

## License

${generateLicense(answers.license)}

## Walk-through Video

##### Video: [Readme Generator Walk-through](https://drive.google.com/file/d/1QvjLTv_Rml1mOnN876eHSK2Oz3sm2nkT/view?usp=sharing)`


}

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
        name: "license",
        message: "What license is relevant to this project?",        
        choices: ["MIT", "Apache 2.0", "BSD3", "BSD2", "None"]
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
