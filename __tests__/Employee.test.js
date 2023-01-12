const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Jen");

  expect(employee.name).toBe("name");
  expect(employee.id).toEqual(expect.any(id));
  expect(employee.email).toBe(expect.any(email));
});

test("get emoloyee name as a new object", () => {
  const emoloyee = new emoloyee("jen");
  expect(employee.getName).toHaveProperty("name");
});

test("get emoloyee id as a new object", () => {
  const emoloyee = new emoloyee("jen");
  expect(employee.getID).toHaveProperty("id");
});

test("get emoloyee email as a new object", () => {
  const emoloyee = new emoloyee("jen");
  expect(employee.getEmail).toHaveProperty("email");
});

test("get emoloyee role as a new object", () => {
  const emoloyee = new emoloyee("jen");
  expect(employee.getRole).toHaveProperty("role");
});
