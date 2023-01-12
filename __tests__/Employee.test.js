const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Jen");

  expect(employee.name).toBe("name");
  expect(employee.id).toEqual(expect.any(id));
  expect(employee.email).toBe(expect.any(email));
});
