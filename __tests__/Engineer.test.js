const Engineer = require("../lib/engineer.js");


test("creates an engineer object", () => {
  const engineer = new Engineer("Brit", 1, "brit@brit.com", "brithub");

  expect(engineer.name).toBe("Brit");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("brit@brit.com");
  expect(engineer.github).toBe("brithub");
});

// test("get engineer name as a new object", () => {
//   const Engineer = new Engineer("Brit");
//   expect(engineer.getName).toHaveProperty("name");
// });

// test("get engineer id as a new object", () => {
//   const Engineer = new Engineer("Brit");
//   expect(engineer.getID).toHaveProperty("id");
// });

// test("get engineer email as a new object", () => {
//   const Engineer = new Engineer("Brit");
//   expect(engineer.getEmail).toHaveProperty("email");
// });

// test("get engineer role as a new object", () => {
//   const Engineer = new Engineer("Brit");
//   expect(engineer.getRole).toHaveProperty("Engineer");
// });
