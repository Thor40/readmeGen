const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'user',
            message: 'What is your name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project:',
        },
        {
            type: 'confirm',
            name: 'confirmPreReq',
            message: 'Would you like to enter prerequisite information in the "Getting Started" section?',
            default: true
        },
        {
            type: 'input',
            name: 'pre',
            message: 'Provide additional prerequisite information regarding your project functionality:',
            when: ({ confirmPreReq }) => confirmPreReq
        },
        {
            type: 'confirm',
            name: 'confirmRunT',
            message: 'Would you like to enter instruction regarding how to run a test for your project in the "Running Test" section?',
            default: true
        },
        {
            type: 'input',
            name: 'runT',
            message: 'Provide additional instruction regarding how to run a test for your project:',
            when: ({ confirmRunT }) => confirmRunT
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'confirm',
            name: 'confirmContr',
            message: 'Would you like include additional partners for your project in the "Contributers" section?',
            default: true
        },
        {
            type: 'input',
            name: 'contr',
            message: 'Provide additional contributers to your project:',
            when: ({ confirmContr }) => confirmContr
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your project link!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'confirmVer',
            message: 'Would you like include a project version?',
            default: true
        },
          {
            type: 'input',
            name: 'version',
            message: 'What Version is your project?',
            when: ({ confirmVer }) => confirmVer
          },
          {
            type: 'confirm',
            name: 'confirmAck',
            message: 'Would you like include additional acknowledgments for your project in the "Acknowledgments" section?',
            default: true
        },
        {
            type: 'input',
            name: 'ack',
            message: 'Provide additional acknowledgments to your project:',
            when: ({ confirmAck }) => confirmAck
        },
    ])
};

questionsPrompt()
    .then(readmeData => {
        const pageReadme = generateMarkdown(readmeData);

        fs.writeFile('./readme.md', pageReadme, err => {
            if (err) throw new Error (err);

            console.log('Your project ReadME has been created!')
        });
    });