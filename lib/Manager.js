// import employee class
const Employee = require("./Employee");

// create manager class

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

//export manager class

module.exports = Manager;
