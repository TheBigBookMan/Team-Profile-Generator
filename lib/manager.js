const Employee = require('./Employees');

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