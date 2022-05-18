function generateMarkdown(data) {
  let manager = data.Manager;
  generateManager(manager);
  let employeeList = data.getEmployees();
  employeeList.forEach((employ) => {
    if (employ.getRole() === "Engineer") {
      generateEngineer(employ);
    } else {
      generateIntern(employ);
    }
  });
}

// function to generate maanger card
function generateManager(data) {
  console.log(data);
}
//function to generate engineer card
function generateEngineer(data) {
  console.log(data);
}

// function to generate intern card
function generateIntern(data) {
  console.log(data);
}
module.exports = generateMarkdown;
