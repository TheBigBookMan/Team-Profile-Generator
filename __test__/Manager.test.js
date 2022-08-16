// Import the Manager subclass
const Manager = require('../lib/manager');

// Describe the functionality of the Manager subclass for tests
describe("Manager subclass", () => {
    const Ben = new Manager("Ben", 8, "bsmerd@google.com", 56);

    // Describe the functionality of the inherited properties from the Employee parent class
    describe("Manager subclass inherits some properties from the parent class of Employee", () => {
        it("Manager subclass inherits name from parent class Employee", () => {
            const managerName = Ben.name;

            expect(managerName).toBe("Ben");
        });

        it("Manager subclass inherits id from parent class Employee", () => {
            const managerId = Ben.id;

            expect(managerId).toBe(8);
        });

        it("Manager subclass inherits email from parent class Employee", () => {
            const managerEmail = Ben.email;

            expect(managerEmail).toBe("bsmerd@google.com");
        });
    });

    // Describe the properties created by the Manager subclass
    describe("Manager subclass creates its own properties", () => {
        it("Manager subclass creates the property of office number", () => {
            const managerOfficeNumber = Ben.officeNumber;

            expect(managerOfficeNumber).toBe(56);
        });

        it("Manager method of getRole will return Manager", () => {
            const managerRole = "Manager";

            expect(Ben.getRole()).toEqual(managerRole);
        });
    });
});