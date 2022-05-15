// import manager module
const Manager = require("../lib/Manager");

// run test on manager methods
describe("Employee", () => {
  describe("Initialization", () => {
    it("should return role of the employee", () => {
      const obj = new Manager("S43fgam", 15555, "sam@email.com", "111-4444");
      const employeeRole = obj.getRole();

      expect(employeeRole).toEqual("Manager");
    });
  });
});
