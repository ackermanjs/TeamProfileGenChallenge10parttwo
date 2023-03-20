const fs = require("fs");
const inquirer = require("inquirer");
const populateProfiles = require("./src/doctemplate");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let roster = [];

const createNewManager = () => {
  return inquirer
    .prompt([
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

    .then((managerAnswers) => {
      const { name, id, mail, contact } = managerAnswers;
      const manager = new Manager(name, id, mail, contact);
      roster.push(manager);
    });
};

const createNewEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What is the Employee's Position?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the Employee's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "Please assign an ID number.",
      },
      {
        type: "input",
        name: "mail",
        message: "What is the Employee's E-mail Address?",
      },
      {
        type: "input",
        name: "hub",
        message: "What is the Engineer's Github URL?",
        when: function (answers) {
          return answers.position === "Engineer";
        },
      },
      {
        type: "input",
        name: "edu",
        message: "What School did the intern attend?",
        when: function (answers) {
          return answers.position === "Intern";
        },
      },
      {
        type: "confirm",
        name: "nextStep",
        message: "Do you need to need to add additional Employees?",
        default: false,
      },
    ])
    .then((employeeAnswers) => {
      const { position, name, id, mail, hub, edu, nextStep } = employeeAnswers;

      if (position === "Engineer") {
        const engineer = new Engineer(name, id, mail, hub);
        roster.push(engineer);
      } else if (position === "Intern") {
        const intern = new Intern(name, id, mail, edu);
        roster.push(intern);
      }

      if (nextStep) {
        return createNewEmployee(roster);
      } else {
        return roster;
      }
    });
};
createNewManager()
  .then(createNewEmployee)
  .then((roster) => {
    const cardDisplay = populateProfiles(roster);
    fs.writeFile("./dist/index.html", cardDisplay, (err) => {
      if (err) throw new Error(err);
      console.log("Your Team has been created!");
    });
  });
