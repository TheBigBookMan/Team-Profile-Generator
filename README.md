# Team-Profile-Generator
## Introduction
This project utilizes the back-end programming language node.js, as well as front end languages- html, css and javascript. The user will be prompted with inputting information about their employees and the program will create a html and css file with the information. The user will be able to interact with information such as email and github accounts for easy access to contacting the employees.

## Demonstration
<!--PROVIDE LINK OF THE DEMONSTRATION HERE-->

## Installation
### NPM
A couple of questions are asking for what specific command line prompts will be used to help install the data in their repository. The user is prompted to type what they want but they can leave it empty, which will refer to the default selections of "npm i" and "npm start", which work fine.

## Functionality
### User Input
Once the application has begun, the package- inquirer- will begin prompting the using for information about the employees. These prompts are created by importing the dependency inquirer@8.2.4 version in the command line. The user will be first prompted with the manager information, and then can choose to either input information about engineers, interns or choose the finish selection. The user will be able to input as many interns and engineers as necessary. The user can select the finish selection after putting in the manager information and the files will create with only the manager information input if necessary. 
#### Manager
The information prompted for the manager are: name, ID, email and office number.
#### Engineer
The information prompted for the engineer are: name, ID, email and github name.
#### Intern
The information prompted for the intern are: name, ID, email and school they are at.

<!--PUT IN SCREENSHOT OF THE USER INPUT WITH A SELECTION OF ENGINEER AND INTERN AND THEN NONE-->
### Classes
After the user has input the information regarding employees, that information is sorted into specific sub-classes- Manager, Engineer and Intern. They are a sub-class of a parent-class titled Employees. These classes are created in separate javascript modules and require exporting and importing between to ensure flow.

### Generate CSS
There was a pre-made CSS template that will initialize with the HTML file that gets created to ensure the team profile looks good.

### Generate HTML
There was a pre-made HTML template that will initialize with the CSS file once the user has input all information. There were specific functions that needed to be created to ensure that the information from the different classes could pass through seamlessly without any bugs. the determineEmployee function had to check the getRole() method in the class objects, which would then change certain parts of the HTML render to match to that class. For example, the engineer needed a link to their github account in the class: 'employee-extra' HTML section. The generateHtml function joins the strings of the HTML template with a for loop that iterates over the employees to generate their sections, and then adds on the bottom part of the HTML template.

<!--ADD IN A SCREENSHOT OF THE CODE BLOCK THAT DETERMINES THE ENGINEER GITHUB LINK-->

### Client-Side
Within the webpage of the application, the user is able to click on the engineers github links and then be re-directed to their github webpage. The email address also is clickable and will open up the users default email, to ensure fast contact if necessary.

<!--ADD IN A SCREENSHOT OF THE CLIENTSIDE WEB PAGE WITH THE CLICKABLE EMAIL AND GITHUB-->

<!--MAYBE ADD IN THE SAMPLE FOR THE PRJET, JUST DUNNO WHAT THE SAMPLE REALLY IS-->

## GitHub Repository
<!--ADD IN LINK TO GITHUB REPOSITORY-->