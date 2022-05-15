const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return name of the employee", () => {
      const obj = new Employee("Sam", 15, "sam@email.com");
      const employeeName = obj.getName();

      expect(employeeName).toEqual(String);
    });
    it("should return id of the employee", () => {
      const obj = new Employee("Sam", 15, "sam@email.com");
      const employeeName = obj.getId();

      expect(employeeName).toEqual(Number);
    });
    it("should return role of the employee", () => {
      const obj = new Employee("Sam", 15, "sam@email.com");
      const employeeName = obj.getRole();

      expect(employeeName).toEqual("Employee");
    });
  });
});
