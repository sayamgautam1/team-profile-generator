// import required files
// generate Markdown file

const generateMarkdown = require("./src/generateMarkdown");

// class needed

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// application starts, with entering manager details

function getManagerDetails() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter the team manager name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "Enter the manager employee ID",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter the manager's email adress",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the office number",
      },
    ])
    .then((details) => {
      const { managerName, managerID, managerEmail, officeNumber } = details;
      const managerObj = new Manager(
        managerName,
        managerID,
        managerEmail,
        officeNumber
      );
      team.setManager(managerObj);
    });
}

// function to ask if engineer or intern
function getEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Would you like to hire an Engineer or Intern?",
        choices: ["Engineer", "Intern", "No Vacany"],
      },
    ])
    .then((data) => {
      if (data.employee === "Engineer") {
        getEngineerDetails();
      } else if (data.employee === "Intern") {
        getInternDetails();
      } else {
        generateMarkdown(team);
      }
    });
}

// fn to get engineer details
function getEngineerDetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "Enter the engineer employee ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email adress",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((details) => {
      const { engineerName, engineerID, engineerEmail, github } = details;
      const engineerObj = new Engineer(
        engineerName,
        engineerID,
        engineerEmail,
        github
      );
      team.setEmployee(engineerObj);
      getEmployeeInfo();
    });
}

// function to get intern details
function getInternDetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter the intern name?",
      },
      {
        type: "input",
        name: "internID",
        message: "Enter the intern employee ID",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter the intern email adress",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name?",
      },
    ])
    .then((details) => {
      const { internName, internID, internEmail, school } = details;
      const internObj = new Intern(internName, internID, internEmail, school);
      team.setEmployee(internObj);
      getEmployeeInfo();
    });
}
// working function
getManagerDetails().then((data) => {
  getEmployeeInfo();
});

class Team {
  constructor() {
    this.Manager = null;
    this.Employee = [];
  }

  setManager(details) {
    this.Manager = details;
    return this.Manager;
  }

  setEmployee(details) {
    this.Employee.push(details);
  }
  getEmployees() {
    return this.Employee;
  }
}
const team = new Team();

// getManagerDetails()
//   .then(saveManagerDetails)
//   .then(getEmployeeChoice)
//   .then((choice) => {
//     if (choise === "intern/engineer") {
//     }
//   });
