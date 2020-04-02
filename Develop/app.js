// Require the inquirer package for prompting the user
const inquirer = require('inquirer');

// Require manager, intern and engineer classes to create employee objects for each employee desired
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Require fs to write to a file
const fs = require('fs');

// Require render function to create html from employees
const render = require('./lib/htmlRenderer');

// Create an empty array for the team members to be stored in
const teamArray = [];

// Prompt the user to create one manager and ask if they want to add more team members
function runPrompts(){
    inquirer
        .prompt([
            // Ask for the manager's name
            {
                type: "input",
                message: "What is the name of the manager?",
                name: "name"
            },
            // Ask for the manager's ID
            {
                type: "input",
                message: "What is the ID of the manager?",
                name: "id"
            },
            // Ask for the manager's email address
            {
                type: "input",
                message: "What is the email of the manager?",
                name: "email"
            },
            // Ask for the manager's room number
            {
                type: "input",
                message: "What is the office number of the manager?",
                name: "officeNumber"
            },
            // Ask if the user would like to add another team member, and if so, the team member's roll
            {
                type: "rawlist",
                message: "Do you want to add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        // Then, run a anonymous function with the retrun object destructured
        .then(function({name, id, email, officeNumber, choice}) {
            // Create a manager with the returned inputs
            const manager = new Manager(name, id, email, officeNumber)
            // Push the manager to the teamArray
            teamArray.push(manager);
            // If the new team member response is engineer, run the newEngineerPrompt function
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            // If the new team member response is intern, run the newInternPrompt function
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            // If the new team member response is done, run the createHtmlFromArray function
            else {
                createHtmlFromArray()
            }
        })
}

// Prompt the user to create one engineer and ask if they want to add more team members
function newEngineerPrompt(){
    inquirer
        .prompt([
            // Ask for the engineer's name
            {
                type: "input",
                message: "What is the name of this engineer?",
                name: "name"
            },
            // Ask for the engineer's ID
            {
                type: "input",
                message: "What is the ID of the this engineer?",
                name: "id"
            },
            // Ask for the engineer's email address
            {
                type: "input",
                message: "What is the email of this engineer?",
                name: "email"
            },
            // Ask for the engineer's github account
            {
                type: "input",
                message: "What is the github of this engineer?",
                name: "github"
            },
            // Ask if the user would like to add another team member, and if so, the team member's roll
            {
                type: "rawlist",
                message: "Do you want to add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(function({name, id, email, github, choice}) {
            // Create an engineer with the returned inputs
            const engineer = new Engineer(name, id, email, github)
            // Push the engineer to the teamArray
            teamArray.push(engineer);
            // If the new team member response is engineer, run the newEngineerPrompt function
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            // If the new team member response is intern, run the newInternPrompt function
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            // If the new team member response is done, run the createHtmlFromArray function
            else {
                createHtmlFromArray()
            }
        })
}

// Prompt the user to create one intern and ask if they want to add more team members
function newInternPrompt(){
    inquirer
        .prompt([
            // Ask for the intern's name
            {
                type: "input",
                message: "What is the name of this intern?",
                name: "name"
            },
            // Ask for the intern's ID
            {
                type: "input",
                message: "What is the ID of this intern?",
                name: "id"
            },
            // Ask for the intern's email address
            {
                type: "input",
                message: "What is the email of this intern?",
                name: "email"
            },
            // Ask for the intern's school
            {
                type: "input",
                message: "What is the school of this intern?",
                name: "school"
            },
            // Ask if the user would like to add another team member, and if so, the team member's roll
            {
                type: "rawlist",
                message: "Do you want to add another team member?",
                name: "choice",
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(function({name, id, email, school, choice}) {
            // Create a intern with the returned inputs
            const intern = new Intern(name, id, email, school)
            // Push the intern to the teamArray
            teamArray.push(intern);
            // If the new team member response is engineer, run the newEngineerPrompt function
            if (choice === 'Engineer'){
                newEngineerPrompt();
            }
            // If the new team member response is intern, run the newInternPrompt function
            else if (choice === 'Intern'){
                newInternPrompt();
            }
            // If the new team member response is done, run the createHtmlFromArray function
            else {
                createHtmlFromArray()
            }
        })
}

// Create a function to create html out of our team data and write it to a file
function createHtmlFromArray(){
    // Create a variable for htmlData and assign it to what render(teamArray) returns
    let htmlData = render(teamArray);

    // Write htmlData to output.html in the output directory
    fs.writeFile("./output/output.html", htmlData, function(err) {

    // If there is an error, console log it
    if (err) {
        return console.log(err);
    }

    // Otherwise, console log that the file has been written
    console.log("Your html file is available in the output directory.");

    });
}

// Run the runPrompts function
runPrompts();