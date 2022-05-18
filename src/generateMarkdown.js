function generateMarkdown(data) {
  let employeeList = data.getEmployees();
  employeeList.forEach((employ) => {
    console.log(employ.getRole());
  });
}

module.exports = generateMarkdown;
