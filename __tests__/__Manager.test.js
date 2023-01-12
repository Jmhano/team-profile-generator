const Manager = require("../lib/Manager.js");


test("creates a manager object", () => {
    const manager = new Manager("Jen");
  
    expect(manager.name).toBe("name");
    expect(manager.id).toEqual(expect.any(id));
    expect(manager.email).toBe(expect.any(email));
  });