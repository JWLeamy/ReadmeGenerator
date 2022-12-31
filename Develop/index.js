// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = ["What is your github username?", "What is your email adress?", "What is your project's name?", "Please write a short description of your project.", "What kind of liscense should your project have?", "What command should be run to install dependencies", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];

function answer() {
    return [{
        type: 'input',
        name: 'Github',
        message: questions[0],
        default: 'Github'
    }, {
        type: 'input',
        name: 'Email',
        message: questions[1],
        default: 'Email',
    },{
        type: 'input',
        name: 'ProjectName',
        message: questions[2],
        default: 'ProjectName'
    }, {
        type: 'input',
        name: 'Description',
        message: questions[3],
        default: 'Description'
    }, {
        type: 'list',
        name: 'Liscense',
        message: `${questions[4]}`,
        choices: ['MIT', "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }, {
        type: 'input',
        name: 'Dependencies',
        message: questions[5],
        default: 'Dependencies'
    }, {
        type: 'input',
        name: 'Tests',
        message: questions[6],
        default: 'Tests'
    }, {
        type: 'input',
        name: 'UserInfo',
        message: questions[7],
        default: 'UserInfo'
    }, {
        type: 'input',
        name: 'UserContributions',
        message: questions[8],
        default: 'UserContributions'
    }];
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), function (err) {
        console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// Not sure of the above instreuction, but this is how I would approach the problem.
inquirer.prompt(answer()).then(answers => {
    fs.writeToFile("./ReadmeGenerator/README.md", answers)
    })

