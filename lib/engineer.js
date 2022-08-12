const Employee = require('./Employees')

// Subclass Engineer that extends Employee with the same properties plus github
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
    }

    get github() {
        return this._github;
    }

    getRole() {
        return "Engineer";
    }
};

// Exporting the Engineer subclass to the module
module.exports = Engineer;