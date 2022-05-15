class Employee {
  // employee class to have 3 data properties
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // employee class to have the following methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
