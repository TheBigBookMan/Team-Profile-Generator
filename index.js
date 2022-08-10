// Install packages
const inquirer = require('inquirer');
const fs = require('fs');

// NEED TO HAVE TEST JS FILES AS WELL



// APP STARTS WITH PROMPTING ABOUT THE MANAGERS INFO
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
        
    })
}


// AFTER MANAGER INFO THEN ASKED IF THEY WANT TO ADD IN ENGINEER, INTERN OR NO ONE


// SUPER IMPORTANT TO FIGURE OUT ALGORITHM FOR THE SEPCIFIC AMOUNT OF EMPLOYEES NEEDING TO BE CREATED ON THE HTML SIDE---- MIGHT HAVE TO DO WITH AN ARRAY AMOUNT THAT THEN GETS PUT INTO A FUNCTION TO CREATE IT AND THEN TEMPLATE THAT INTO THE GENERATE ````` SPOT


// NEED TO HAVE CLASSES FOR THE EMPLOYEE AND THEN EACH SUBCLASS (MANAGER, ENGINEER AND INTERN HAVE UNIQUE PROPERTIES AS WELL)


// AFTER SELECTING ADD NO MORE MEMBERS IT THEN RENDERS THE HTML AND CSS FILES OF THE EMPLOYEES
// Function that is called on initialization and starts the application
const init = () =>{
    console.log("Welcome to the team profile generator! \nUse 'npm run reset' to reset the dist/ folder.\n\nPlease build your team here!");
    promptManager();
}


init();