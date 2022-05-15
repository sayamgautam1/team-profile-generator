// import engineer.

const Engineer = require("../lib/Engineer");

// run test on engineer module of github id and role
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return github id of the engineer", () => {
      const obj = new Engineer("Sa5ggm", 555, "sam@email.com", "sam123");
      const githubId = obj.getGithub();

      expect(typeof githubId).toEqual("string");
    });
    it("should return role of the employee", () => {
      const obj = new Engineer("S43fgam", 15555, "sam@email.com", "abc445");
      const employeeName = obj.getRole();

      expect(employeeName).toEqual("Engineer");
    });
  });
});
