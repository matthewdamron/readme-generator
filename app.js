// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/createMarkdown')
const generateMarkdown = require('./utils/generateMarkdown');

// function to validate response
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

// TODO: Create a function to initialize app
const initPrompts = () => {
    return inquirer
        .prompt(questions)
};

// Function call to initialize app
initPrompts()
    // function to generate readme
    .then(readmeData => {
    return generateMarkdown(readmeData);
    })
    // function to create readme file
    .then(createReadme => {
        return writeFile(createReadme);
    })
    // function to display if the readme was created
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
