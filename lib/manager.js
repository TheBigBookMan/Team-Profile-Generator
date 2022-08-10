const Employee = require('./Employees');

//properties: name, id, email (FROM PARENT) + officeNumber

// methods: getName(GET), getId(GET), getEmail(GET), getRole(needs to return the employee role "manager") (FROM PARENT)


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

const man = new Manager("BEN", 123, "bsmer@adad", 2)
console.log(man)
console.log(man.getRole())