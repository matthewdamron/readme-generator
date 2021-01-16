// TODO: Include packages needed for this application
const { promises } = require('fs');
const inquirer = require('inquirer');
// const { cpuUsage } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter Your Name:',
        // type: 'input',
        // name: 'projectTitle',
        // message: 'Please enter your Project Title:'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter a Project Title:'
    }
];

const john = {
    first: 'John',
    last: 'Snow',
    title: 'Prince',
    family: {
      brothers: {
        brother1: 'Rob Stark',
        brother2: 'Rickon Stark'
      },
      sisters: {
        sister1: 'Arya Stark',
        sister2: 'Sansa Stark'
      }
    }
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// const prompt = inquirer.createPromptModule();
// prompt(questions);    

const initPrompts = () => {
    return inquirer
        .prompt(questions)
//         // {
//         //     type: 'input',
//         //     name: 'projectTitle',
//         //     message: 'Please enter a Project Title: ',
//         //     validate: validate
//         // },
//         // {
//         //     type: questions.userName.type,
//         //     name: questions.userName.name,
//         //     message: questions.userName.message,
//         //     validate: validate
//         // }
        
    // ])
    .then(answers => {
        console.log(answers);
        // questions.push(answers);
        console.log(answers.projectTitle);
        console.log(questions);
        // console.log(john);
        // const { projectTitle } = questions;
        // console.log(projectTitle);
    });
};

// const validate = function(nameInput) {
//     if (nameInput) {
//       return true;
//     } else {
//       console.log(nameInput);
//       return false;
//     }
// }

// Function call to initialize app
initPrompts()
