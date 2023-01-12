const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Jen", "4", "admin@admin.com");

  expect(employee.name).toBe("Jen");
  expect(employee.id).toBe("4");
  expect(employee.email).toBe("admin@admin.com");
});

// test("get employee name as a new object", () => {
//   const employee = new Employee("jen");
//   expect(employee.getName).toHaveProperty("name");
// });

// test("get employee id as a new object", () => {
//   const employee = new Employee("jen");
//   expect(employee.getID).toHaveProperty("id");
// });

// test("get employee email as a new object", () => {
//   const employee = new employee("jen");
//   expect(employee.getEmail).toHaveProperty("email");
// });

// test("get employee role as a new object", () => {
//   const employee = new employee("jen");
//   expect(employee.getRole).toHaveProperty("role");
// });
