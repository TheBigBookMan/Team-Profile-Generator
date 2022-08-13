// Install packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employees' );
const Manager = require('./lib/manager' );
const Engineer = require('./lib/engineer' );
const Intern = require('./lib/intern' );
const generateHtml = require('./src/generatehtml');
const generateCss = require('./src/generatecss');

//DELETE THIS ONLY USING TEMP
// const generateEmployee = require('./src/generatehtml')

// Global variables
var employeesArr = [];
var manager;
var engineer;
var intern;


// NEED TO HAVE TEST JS FILES AS WELL

// CAN TRY DO THE VALIDATION BUT MAYBE LEAVE THAT FOR LATER IF HAVE TIME

// Function that prompts the user about manager information
const promptManager = () => {
    return inquirer.prompt([{
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    }, {
        type: "number",
        message: "What is the team manager's id?",
        name: "managerId"
    }, {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    }, {
        type: "number",
        message: "What is the team manager's office number?",
        name: "managerOfficeNum"
    }])
    .then((data) => {
        manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum)
        employeesArr.push(manager)
        newEmployeeOrNone(data)
    })
};

// Function that prompts the user for engineer information
const promptEngineer = () => {
    return inquirer.prompt([{
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    }, {
        type: "number",
        message: "What is your engineer's id?",
        name: "engineerId"
    }, {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
    }, {
        type: "input",
        message: "What is your engineer's GitHub?",
        name: "engineerGithub"
    }])
    .then((data) => {
        // console.log(data)
        engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        employeesArr.push(engineer)
        newEmployeeOrNone(data)
    })
};

// Function that prompts the user for intern information
const promptIntern = () => {
    return inquirer.prompt([{
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    }, {
        type: "number",
        message: "What is your intern's id?",
        name: "internId"
    }, {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    }, {
        type: "input",
        message: "What is your intern's school?",
        name: "internSchool"
    }])
    .then((data) => {
        intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        employeesArr.push(intern)
        newEmployeeOrNone(data)
    })
};

// IF CAN GET GENERATE HTML WITHOUT NEEDING THE DATA PARAMETER THEN TAKE OUT ALL THE PARAMTERS AND ARGUEMENTS THAT ARE DATA

// Function that writes the html and css files by calling the generateHtml template content and generateCss template content
const createFiles = () => {
    // console.log(employeesArr)
    fs.writeFile("./dist/style.css", generateCss(), (err) => err ? console.log(err) : console.log("CSS file created successfully!"));

    fs.writeFile("./dist/index.html", generateHtml(employeesArr), (err) => err ? console.log(err) : console.log("HTML file created successfully!"));

    // fs.writeFile("./dist/index.html", generateEmployee(employeesArr[1], "Github", employeesArr[1].github), (err) => err ? console.log(err) : console.log("HTML file created successfully!"));
};

// Function that prompts the user to create another employee or leave
const newEmployeeOrNone = (data) => {
    return inquirer.prompt([{
        type: "list",
        message: "What type of team member would you like to add?",
        name: "employeeChoice",
        choices: ["Engineer", "Intern", "I don't want to add anymore"]
    }])
    .then((response) => {
        if(response.employeeChoice === "Engineer") {
            promptEngineer();
        } else if(response.employeeChoice === "Intern") {
            promptIntern();
        } else {
            
            // determineEmployee(employeesArr)
            createFiles();
            return;
        };
    })};

// Function that is called on initialization and starts the application
const init = () =>{
    console.log("Welcome to the team profile generator! \nUse 'npm run reset' to reset the dist/ folder.\n\nPlease build your team here!");
    promptManager();
};

// // Calling the initialization function on start 
init();