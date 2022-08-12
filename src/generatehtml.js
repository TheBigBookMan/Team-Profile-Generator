
// DONT FORGET TO MAKE FUNCTION THAT DETERMINES IF MANAGER, INTERN OR ENGINEER AND THEN THAT PUTS IN THAT SPECIFIC ONE INTO THE RETURN FUNCTION FOR TEMPLAYTTE---- MAYBE CREATE A TEMPLATE SECTION FOR THAT AND THEN HAVE TEMPLATE PROPERTIES THAT CHANGE AND THEN RETURN THAT FUNCTION INTO THE MAIN FUNCTION PAGE GENERATOR


// MAKE A TEMPLATE <LI> </LI> AND THEN ADD A FOR LOOP ITERATING OVER THE EMPLOYEESARRAY THAT THEN WILL USE THE OBJETS DATA IN THE TEMPLATES


// A FUNCTON THAT IF/ELSE STATEMENT FOR EACH TYPE EMPLOYEE AND THEN EACH ONE OF THOSE WILL SEND THE OBJET INFO TO A TEMPLATE <LI></LI> AND THEN THAT WILL SEND THROUGH TO THE MAIN BODY WITH FUNCTION CALL

// Function that determines what type of employee has been listed
const determineEmployee = employeesArr => {
    console.log(employeesArr)
    console.log("_________")
    for (let i = 1; i < employeesArr.length; i++) {
        if(employeesArr[i].getRole() == "Engineer") {
            var engineerExtra = "Github";
            var engineerGithub = employeesArr[i].github;
            generateEmployee(employeesArr[i], engineerExtra, engineerGithub)
            console.log("engineer")
        }else if(employeesArr[i].getRole() == "Intern"){
            var internExtra = "School";
            var internSchool = employeesArr[i].school;
            generateEmployee(employeesArr[i], internExtra, internSchool)
            console.log("Intern")
        }
    }
    
}

// Function that creates the list template for the main generateHtml function
const generateEmployee = (employee, employeeExtra, employeeExtraVariable) => {
    return `
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
                </li>`
};


// SUPER IMPORTANT TO FIGURE OUT ALGORITHM FOR THE SEPCIFIC AMOUNT OF EMPLOYEES NEEDING TO BE CREATED ON THE HTML SIDE---- MIGHT HAVE TO DO WITH AN ARRAY AMOUNT THAT THEN GETS PUT INTO A FUNCTION TO CREATE IT AND THEN TEMPLATE THAT INTO THE GENERATE ````` SPOT

// NEED TO ADD ON THE CARD THE A HREF FOR THE GITHUB LINK AND EMAIL OPEN TO DEFAULT EMAIL BROWSERs

// Function that returns a template HTML layout
const generateHtml = (employeesArr) => {
    return `
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
                `+ determineEmployee(employeesArr) + `
            </ul>
        </div>
    </main>
    <!--FIND OUT IF NEED THE SCRIPT-->
</body>
</html>
`
}

// Exporting the functions to the module exports

module.exports = generateHtml;
// module.exports = determineEmployee;