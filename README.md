# ReadmeGenerator

A downloadable README generator that creates a well formatted readme file in just a few seconds. This app will run in in your local browser, using only javascript and basic readme formatting.



## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that  explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Technologies Used
1. Git - used to clone down the original code prior to making modifications
2. Github - used to create this repository, modify and eventually commit each change made, and ultimately deploy the fully edited webpage
3. Javascript - used to execute code within local terminal

## Code Snippet
```

inquirer
  .prompt([
        {
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
            name: 'License',
            message: `${questions[4]}`,
            choices: ['MIT', "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
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
        }
    ])
    .then((answers) => {
        const htmlPageContent = generateREADME(answers);
    
        fs.writeFile('README.md', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README file!')
        );
      }
    );
```