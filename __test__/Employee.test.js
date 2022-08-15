const Employee = require('../lib/Employees');

describe('Employee parent class', () => {
    it("Return the employees name once called upon", () => {
        const name = new Employee('Gary');
        Employee.name('Gary')
        expect(new Employee('Gary').name()).toBe(name)
    })
})