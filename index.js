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
  return inquirer.prompt([
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
  ]);
}
getManagerDetails().then((data) => {
  //   addEmployes(data);
  console.log(data);
});
