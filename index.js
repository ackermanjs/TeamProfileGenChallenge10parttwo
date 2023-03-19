const fs = require('fs');
const inquirer = require('inquirer');
const populateDoc = require('add my file path when i get it sorted');

const Manager = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Manager = require('./lib/Intern');

let roster = [];

const createNewManager = () => {
    return (
        inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Manager's Name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the Manager's ID Number?",
            },
            {
                type: "Input",
                name: "mail",
                message: "What is the Manager's E-mail Address?",
            },
            {
                type: "input",
                name: "contact",
                message: "What is the Manager's Contact Number?",
            },
        ])
    )
}