//Engineer subclass that pulls from employee
const Employee = require("./Employee");
//this method of exporting modules inline shown during tutoring
module.exports=class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;



    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }


}