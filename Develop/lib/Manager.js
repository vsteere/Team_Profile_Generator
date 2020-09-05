// Manager subclass that extends from employee
const Employee = require("./Employee");
//this method of exporting modules inline shown during tutoring
module.exports = class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        
        
    }

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";
    }
    

}

