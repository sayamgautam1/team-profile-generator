// import employee module
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return name of the employee", () => {
      const obj = new Employee("Sam", 15, "sam@email.com");
      const employeeName = obj.getName();

      expect(typeof employeeName).toEqual("string");
    });
    it("should return id of the employee", () => {
      const obj = new Employee("Sa5ggm", 555, "sam@email.com");
      const employeeId = obj.getId();

      expect(typeof employeeId).toEqual("number");
    });
    it("should return role of the employee", () => {
      const obj = new Employee("S43fgam", 15555, "sam@email.com");
      const employeeName = obj.getRole();

      expect(employeeName).toEqual("Employee");
    });
  });
});
