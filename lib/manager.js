const Employee = require('./Employees');

//properties: name, id, email (FROM PARENT) + officeNumber

// methods: getName(GET), getId(GET), getEmail(GET), getRole(needs to return the employee role "manager") (FROM PARENT)

// Subclass Manager that extends Employee with the same properties plus github
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this._officeNumber = officeNumber;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

// Exporting the Manager subclass to the module
module.exports = Manager;