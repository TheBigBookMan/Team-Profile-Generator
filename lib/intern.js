const Employee = require('./Employees');

//properties: name, id, email (FROM PARENT) + school

// methods: getName(GET), getId(GET), getEmail(GET), getRole(needs to return the employee role "intern") (FROM PARENT) + getSchool(GET)

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