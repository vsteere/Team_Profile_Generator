// Manager subclass that extends from employee
const Employee = require("./Employee");

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

