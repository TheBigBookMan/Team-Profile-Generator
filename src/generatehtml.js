
// DONT FORGET TO MAKE FUNCTION THAT DETERMINES IF MANAGER, INTERN OR ENGINEER AND THEN THAT PUTS IN THAT SPECIFIC ONE INTO THE RETURN FUNCTION FOR TEMPLAYTTE---- MAYBE CREATE A TEMPLATE SECTION FOR THAT AND THEN HAVE TEMPLATE PROPERTIES THAT CHANGE AND THEN RETURN THAT FUNCTION INTO THE MAIN FUNCTION PAGE GENERATOR

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
            </ul>
        </div>
    </main>
    <!--FIND OUT IF NEED THE SCRIPT-->
</body>
</html>
`
}

// Exporting the generateHtml function to the module exports
module.exports = generateHtml;