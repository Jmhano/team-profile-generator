const Intern = require("../lib/intern.js");

test("creates an intern object", () => {
  const intern = new Intern("Dom", 3, "dom@dom.com", "nyu");

  expect(intern.name).toBe("Dom");
  expect(intern.id).toBe(3);
  expect(intern.email).toBe("dom@dom.com");
  expect(intern.school).toBe("nyu");
});

// test("get intern name as a new object", () => {
//   const intern = new Intern("Brit");
//   expect(intern.getName).toHaveProperty("name");
// });

// test("get intern id as a new object", () => {
//   const intern = new Intern("Brit");
//   expect(intern.getID).toHaveProperty("id");
// });

// test("get intern email as a new object", () => {
//   const intern = new Intern("Brit");
//   expect(intern.getEmail).toHaveProperty("email");
// });

// test("get intern role as a new object", () => {
//   const intern = new Intern("Brit");
//   expect(intern.getRole).toHaveProperty("Intern");
// });
