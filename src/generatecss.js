// Function that returns the CSS template
const generateCss = () => {
    return `
header {
    background-color: red;
    height: 80px;
    text-align: center;
    color: #fff;
    margin-top: -25px;
}
    
.title {
    padding-top: 20px;
    text-decoration: underline;
}
    
main {
    display: flex;
    justify-content: center;
}
    
.team-container {
    height: 100%;
    width: 75%;
}
    
.list-employees {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
    
.employee {
    border: gray 2px solid;
    border-radius: 20px;
    box-shadow: 3px 3px 8px;
    width: 250px;
    list-style: none;
    margin-top: 10px;
    margin-right: 15px;
}
    
.employee-header {
    background-color: rgb(221, 163, 163);
    border-radius: 20px;
    color: white;
    text-align: center;
    height: 80px;
    padding-top: 2px;
}
    
.employee-info {
    margin-left: 5px;
    margin-right: 5px;
}
    
.details {
    border: 2px solid grey;
    box-shadow: 1px 2px 1px 1px;
    border-radius: 10px;
    height: 20px;
    padding: 5px;
    font-style: italic;
    font-weight: bold;
}
    
a:hover {
    color: lightblue;
    }
`;
};

// Export the generateCss function to module exports
module.exports = generateCss;