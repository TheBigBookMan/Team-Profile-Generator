// Global variables
var liEmployee;
var newLi;
var employeeLi;

// Function that determines what type of employee has been listed
const determineEmployee = employee => {    
    if(employee.getRole() == "Engineer") {
        var engineerExtra = "Github";
        var engineerGithub = `<a href="https://github.com/${employee.github}" target="_blank"> ${employee.github}</a>`;
        employeeLi = generateEmployee(employee, engineerExtra, engineerGithub);
        return employeeLi;
    }else if(employee.getRole() == "Intern"){
        var internExtra = "School";
        var internSchool = employee.school;
        employeeLi = generateEmployee(employee, internExtra, internSchool);
        return employeeLi;
    }
};

// Function that creates the list template for the main generateHtml function
const generateEmployee = (employee, employeeExtra, employeeExtraVariable) => {
    liEmployee = `
                <li class="employee">
                    <div class="employee-header">
                        <h3 class="employee-name">${employee.name}</h3>
                        <h4 class="employee-role">${employee.getRole()}</h4>
                    </div>
                    <div class="employee-info">
                        <p class="employee-id details">ID: ${employee.id}</p>
                        <p class="employee-email details">Email: ${employee.email}</p>
                        <p class="employee-extra details">${employeeExtra}: ${employeeExtraVariable}</p>
                    </div>
                </li>`;
    return liEmployee;
};

// NEED TO ADD ON THE CARD THE A HREF FOR THE GITHUB LINK AND EMAIL OPEN TO DEFAULT EMAIL BROWSERs

// Function that returns a template HTML layout
const generateHtml = (employeesArr) => {
    var mainHtmlTop =  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1 class="title">My Team</h1>
    </header>
    <main>
        <div class="team-container">
            <ul class="list-employees">
                <li class="employee">
                    <div class="employee-header">
                        <h3 class="employee-name">${employeesArr[0].name}</h3>
                        <h4 class="employee-role">${employeesArr[0].getRole()}</h4>
                    </div>
                    <div class="employee-info">
                        <p class="employee-id details">ID: ${employeesArr[0].id}</p>
                        <p class="employee-email details">Email: ${employeesArr[0].email}</p>
                        <p class="employee-extra details">Office Number: ${employeesArr[0].officeNumber}</p>
                    </div>
                </li>
                `;
    // For loop to add in the <li></li> sections to the html file with information about each employee
    for(let i = 1; i < employeesArr.length; i++) {
        newLi = determineEmployee(employeesArr[i]);
        mainHtmlTop += newLi; 
    }
    var mainHtmlBottom = `
            </ul>
        </div>
    </main>
</body>
</html>
`;
    return mainHtmlTop + mainHtmlBottom;
};

// Exporting the functions to the module exports
module.exports = generateHtml;