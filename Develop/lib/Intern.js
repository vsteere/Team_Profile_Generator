// intern subclass that pulls from employee
const Employee = require("./Employee");
//method of exporting modules inline shown during tutoring
module.exports=class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        


    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}