// Import Engineer subclass
const Engineer = require('../lib/engineer');

// Describe the functionality of the Engineer class for test
describe('Engineer subclass', () => {
    const Liam = new Engineer("Liam", 6, "liam@google.com", "LiamGithub");

    // Describe the functionality of the inherited properties from the parent class Employees
    describe('Engineer inheritance', () => {
        it("Engineer subclass inherits the property of name from employee parent class", () => {
            const engineerName = Liam.name;
            
            expect(engineerName).toBe("Liam");
        });

        it("Engineer subclass inherits the property of id from the employee parent class", () => {
            const engineerId = Liam.id;

            expect(engineerId).toBe(6);
        });

        it("Engineer subclass inherits the property of email from the employee parent class", () => {
            const engineerEmail = Liam.email;

            expect(engineerEmail).toBe("liam@google.com");
        });
    });

    // Describe the functionality of the properties created by the Engineer subclass
    describe("Engineer subclass creates its own properties", () => {
        it("Engineers github will be returned once called upon", ( ) => {
            const engineerGithub = Liam.github;

            expect(engineerGithub).toBe("LiamGithub");
        });

        it("Once getRole function is called upon in Engineer subclass, it returns the role Engineer", () => {
            const engineerRole = "Engineer";

            expect(Liam.getRole()).toEqual(engineerRole);
        });
    });
});