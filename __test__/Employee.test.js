// Import Employee parent class
const Employee = require('../lib/Employees');

// Describing the functionality of Employee parent class for test
describe('Employee parent class', () => {
    it("Return the employees name once called upon", () => {
        const Gary = new Employee('Gary', 3, 'gary@google.com');
        const employeeName = Gary.name;

        expect(employeeName).toBe('Gary');
    });

    it("Return the employees id number once called upon", () => {
        const Bob = new Employee('Bob', 1, 'bob@google.com');
        const employeeId = Bob.id;

        expect(employeeId).toBe(1);
    });

    it("Return the employees email once called upon", () => {
        const Peter = new Employee("Peter", 2, "peter@google.com");
        const employeeEmail = Peter.email;

        expect(employeeEmail).toBe('peter@google.com');
    });

    it("Return the role of Employee once getRole has been called", () => {
        const Larry = new Employee('Larry', 5, 'larry@google.com');
        const employeeRole = "Employee";

        expect(Larry.getRole()).toEqual(employeeRole);
    });
});