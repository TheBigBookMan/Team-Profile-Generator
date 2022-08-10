// Install packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employees' )
const Manager = require('./lib/manager' )
const Engineer = require('./lib/engineer' )
const Intern = require('./lib/intern' )

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
        // console.log(data)
        // const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum)
        newEmployeeOrNone()
    })
}



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
        type: "number",
        message: "What is your engineer's GitHub?",
        name: "engineerGithub"
    }])
    .then((data) => {
        console.log(data)
        newEmployeeOrNone()
    })
}



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
        type: "number",
        message: "What is your intern's school?",
        name: "internSchool"
    }])
    .then((data) => {
        console.log(data)
        newEmployeeOrNone()
    })
}

// AFTER THE MANAGER PROMPT THEN CALL AFUNCTION THAT IS A LIST TO CREATE ENGINEER, INTERN OR NONE AND THEN THAT ANSWER WILL PROMPT THE OTHER FUNCTIONS AND HAVE THEM CALL THAT FUNCTION AGAIN AFTER BEING COMPLETE




// SUPER IMPORTANT TO FIGURE OUT ALGORITHM FOR THE SEPCIFIC AMOUNT OF EMPLOYEES NEEDING TO BE CREATED ON THE HTML SIDE---- MIGHT HAVE TO DO WITH AN ARRAY AMOUNT THAT THEN GETS PUT INTO A FUNCTION TO CREATE IT AND THEN TEMPLATE THAT INTO THE GENERATE ````` SPOT


// NEED TO HAVE CLASSES FOR THE EMPLOYEE AND THEN EACH SUBCLASS (MANAGER, ENGINEER AND INTERN HAVE UNIQUE PROPERTIES AS WELL)


// AFTER SELECTING ADD NO MORE MEMBERS IT THEN RENDERS THE HTML AND CSS FILES OF THE EMPLOYEES

// Function that prompts the user to create another employee or leave
const newEmployeeOrNone = () => {
    return inquirer.prompt([{
        type: "list",
        message: "What type of team member would you like to add?",
        name: "employeeChoice",
        choices: ["Engineer", "Intern", "I don't want to add anymore"]
    }])
    .then((data) => {
        if(data.employeeChoice === "Engineer") {
            promptEngineer();
        } else if(data.employeeChoice === "Intern") {
            promptIntern();
        } else {
            //WILL PROBABLY NEED SOMETHING IN HERE LATER
            return;
        }
    })
}


// Function that is called on initialization and starts the application
// const init = () =>{
//     console.log("Welcome to the team profile generator! \nUse 'npm run reset' to reset the dist/ folder.\n\nPlease build your team here!");
//     promptManager();
// }

// // Calling the initialization function on start 
// init();