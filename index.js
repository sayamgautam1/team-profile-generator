// import rqquired files
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
