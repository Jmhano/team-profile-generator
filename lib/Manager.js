function Manager(name = "", id = "", email= "", officeNumber="") {
  console.log("this is a log", name, id, email, officeNumber);

    this.name = name;
    this.id = id;
    this.email = email;
    this.offceNumber = officeNumber; 
  
    // this.getName = function () {
    //   return {
    //     name: this.name,
    //   };
    // };
  
    // this.getID = function () {
    //   return {
    //     id: this.id,
    //   };
    // };
  
    // this.getEmail = function () {
    //   return {
    //     email: this.email,
    //   };
    // };
  
    // this.getRole = function () {
    //   return {
    //     role: "Manager",
    //   };
    // };
  }
  
  module.exports = Manager;
  