const Manager = require("../lib/manager.js");

test("creates a manager object", () => {
  const manager = new Manager("Dalia", 2, "dalia@dalia.com", 1);

  expect(manager.name).toBe("Dalia");
  expect(manager.id).toBe(2);
  expect(manager.email).toBe("dalia@dalia.com");
  expect(manager.offceNumber).toBe(1);
});

// test("get manager name as a new object", () => {
//   const manager = new Manager("Dalia");
//   expect(manager.getName).toHaveProperty("name");
// });

// test("get manager id as a new object", () => {
//   const manager = new Manager("Dalia");
//   expect(manager.getID).toHaveProperty("id");
// });

// test("get manager email as a new object", () => {
//   const manager = new Manager("Dalia");
//   expect(manager.getEmail).toHaveProperty("email");
// });

// test("get manager role as a new object", () => {
//   const manager = new Manager("Dalia");
//   expect(manager.getRole).toHaveProperty("role");
// });
