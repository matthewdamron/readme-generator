// TODO: Include packages needed for this application
// const fs = require('fs');
// const { cpuUsage } = require('process');
const inquirer = require('inquirer');
const writeFile = require('./utils/createMarkdown')
const generateMarkdown = require('./utils/generateMarkdown');

const validate = async (nameInput) => {
    if (nameInput) {
        return true;
    }
    else {
        return false;
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter Your Name:',
        validate: validate
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter a Project Title:',
        validate: validate
    },
    {
        type: 'input',
        name: 'projectDecription',
        message: 'Please enter a Description of your Project:',
        validate: validate
    }
];

// // TODO: Create a function to write README file
// function writeToFile(data) {
//     fs.writeToFile('./dist/README.md', data);
// }

// TODO: Create a function to initialize app
// const prompt = inquirer.createPromptModule();
// prompt(questions);    

const initPrompts = () => {
    return inquirer
        .prompt(questions)
        
        // writeToFile(generateMarkdownFile);
    // });
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

.then(answers => {
    return generateMarkdown(answers);
})
// .then(answers => {
// // console.log(answers);
// // console.log(answers.projectTitle);
// const generateMarkdown = generateMarkdown(answers);
// })
// .then()
.then(readme => {
    return writeFile(readme);

});
