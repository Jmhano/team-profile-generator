function Engineer(name = "") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  
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
  
    this.getEmail = function () {
      return {
        email: this.email,
      };
    };
  
    this.getRole = function () {
      return {
        role: "Engineer",
      };
    };

this.getGithub = function () {
    return {
        github: this.github, 
    };
};
  }
  
  module.exports = Engineer;
  