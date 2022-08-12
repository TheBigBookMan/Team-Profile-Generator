const Employee = require('./Employees');

// Subclass Intern that extends Employee with the same properties plus school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    getRole() {
        return "Intern";
    }
};

// Exporting the Intern subclass to the module
module.exports = Intern;