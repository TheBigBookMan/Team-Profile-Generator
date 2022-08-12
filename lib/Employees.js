
// Parent class of Employee which takes in name, id and email properties and GETS with the getRole object
class Employee {
    constructor(name, id, email) {
        this._name = name;
        this._id = id;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    getRole() {
        return "Employee";
    }
};

// Exporting the Employee parent class to the module
module.exports = Employee;