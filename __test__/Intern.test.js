// Import the Intern subclass
const Intern = require('../lib/intern');

// Describe the functionality of the subclass Intern for tests
describe("Intern subclass", () => {
    const Sally = new Intern("Sally", 9, "sally@google.com", "Unley High School");

    // Describe the functionality of the properties inherited from the Employee parent class
    describe("Intern subclass inherits some properties from parent class of Employee", () => {
        it("Intern subclass inherits the property of name from parent class Employee", () => {
            const internName = Sally.name;

            expect(internName).toBe("Sally");
        });

        it("Intern subclass inherits the property of id from parent class Employee", () => {
            const internId = Sally.id;

            expect(internId).toBe(9);
        });

        it("Intern subclass inherits the property of email from parent class Employee", () => {
            const internEmail = Sally.email;

            expect(internEmail).toBe("sally@google.com");
        });
    });

    // Describe the functionality of the properties created by the Intern subclass
    describe("Intern subclass creates its own properties", () => {
        it("Intern subclass returns the school name for intern", () => {
            const internSchool = Sally.school;

            expect(internSchool).toBe("Unley High School");
        });

        it("Intern subclass calls getRole and returns the role of Intern", () => {
            const internRole = "Intern";
            
            expect(Sally.getRole()).toEqual(internRole);
        });
    });
});