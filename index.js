const inquirer = require('inquirer');
const fs = require('fs');


const generateReadme = (answers) =>
`# ${answers.title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
- [Walk-through Video](#walk-through-video)
- [Application Image](#application-image)

## Description

This readme generator makes it easy for you to create perfect readme files by just answering a few questions! Its important for your work to have good documentation so others can contribute and use it with ease. Make a good first impression and install the readme generator.

## Installation

Getting started make sure you have node.js and npm installed on your system.

1. Create a clone of this repository ``git clone https://github.com/markwilson107/Readme-Generator.git``
2. Navigate to the directory of the cloned repository in your terminal.
3. Install the required npm modules by running ``npm install`` in your terminal.
4. Use ``node index.js`` to start the readme generator.

If you have any trouble please refer to the walk-through video.

## Usage

Navigate to your project directory in your terminal application and run ``node index.js`` command. Follow the instructions and a ``README.md`` file will be created.

## Contributing

If you want to contribute please create and issue or pull-request and I will get back to you as soon as possible.

## Questions

If you have any questions feel free to contact me here:

 ##### Github: [github.com/markwilson107](https://github.com/markwilson107)

 ##### Email: [markwilson107@hotmail.com](mailto:markwilson107@hotmail.com?subject=[GitHub])

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
    // {
    //   type: 'editor',
    //   name: 'description',
    //   message: 'Please enter your projects description',
    // },
    // {
    //   type: 'editor',
    //   name: 'table',
    //   message: 'Please enter table of contents',
    // },
    // {
    //   type: 'input',
    //   name: 'installation',
    //   message: 'Please enter the installation instructions',
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'What is the usage of your project',
    // },
    // {
    //     type: "list",
    //     name: "licence",
    //     message: "What licence is relevant to this project?",        
    //     choices: ["MIT", "Apache 2.0", "BSD3", "None"]
    // },
    // {
    //     type: "input",
    //     name: "contribution",
    //     message: "What does the user need to know about contributing to the repo?",    
    // },
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
