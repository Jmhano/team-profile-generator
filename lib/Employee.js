function Employee(name = "", id = "", email= "") {
  console.log("this is a log", name, id, email);
  this.name = name;
  this.id = id;
  this.email = email;

  this.getName = function () {
    return {
      name: this.name,
    };
  };

  this.getID = function () {
    return {
      id: this.id,
    };
  };

  // this.getEmail = function () {
  //   return {
  //     email: this.email,
  //   };
  // };

  // this.getRole = function () {
  //   return {
  //     role: this.role,
  //   };
  // };
}

module.exports = Employee;
