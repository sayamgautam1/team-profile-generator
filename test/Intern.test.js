// import intern class
const Intern = require("../lib/Intern");

// run test on intern methode of getschool() and get role
describe("Employee", () => {
  describe("Initialization", () => {
    it("should return id of the employee", () => {
      const obj = new Intern("Sa5ggm", 555, "sam@email.com", "UNIA");
      const internSchool = obj.getSchool();

      expect(typeof internSchool).toEqual("string");
    });
    it("should return role of the employee", () => {
      const obj = new Intern("S43fgam", 15555, "sam@email.com", "UNIA");
      const employeeRole = obj.getRole();

      expect(employeeRole).toEqual("Intern");
    });
  });
});
