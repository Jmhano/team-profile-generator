const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Jen", "4", "admin@admin.com");

  expect(employee.name).toBe("Jen");
  expect(employee.id).toBe("4");
  expect(employee.email).toBe( "admin@admin.com");
});

// test("get emoloyee name as a new object", () => {
//   const emoloyee = new emoloyee("jen");
//   expect(employee.getName).toHaveProperty("name");
// });

// test("get emoloyee id as a new object", () => {
//   const emoloyee = new emoloyee("jen");
//   expect(employee.getID).toHaveProperty("id");
// });

// test("get emoloyee email as a new object", () => {
//   const emoloyee = new emoloyee("jen");
//   expect(employee.getEmail).toHaveProperty("email");
// });

// test("get emoloyee role as a new object", () => {
//   const emoloyee = new emoloyee("jen");
//   expect(employee.getRole).toHaveProperty("role");
// });
