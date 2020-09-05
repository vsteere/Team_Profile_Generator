const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let members = [];

//main function to create the team profile
function createTeam() {
    
    inquirer.prompt([
        { type: "list", name: "chooseRole", message: "Choose type of employee", choices: ["manager", "intern", "engineer", "none"] }

    ])


        .then(response => {
        switch (response.chooseRole) {
            case "manager":
                addManager()
                break

            case "intern":
                addIntern()
                break

            case "engineer":
                addEngineer()
                break
//this is the ending option that will run the function to create the directory and html file
            default: build()

        }

    })


}
//function for manager subclass
function addManager() {
    inquirer.prompt([
        {
            type: "input", name: "managerName", message: "Enter Manager's Name"

        },
        {

            type: "input", name: "managerId", message: "Enter ID"

        },

        {
            type: "input", name: "managerEmail", message: "Enter Manager's Email Address"

        },

        {
            type: "input", name: "managerNumber", message: "Enter Manager's Office Number"

        }


    ])

        .then(response => {
            let manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerNumber)
            members.push(manager);
            //this is a check to see if the data is pushing to array as intended
            console.log(members);
            createTeam()



        }
        )
}
//function for intern subclass
function addIntern() {
    inquirer.prompt([
        {
            type: "input", name: "internName", message: "Enter Intern's Name"

        },
        {

            type: "input", name: "internId", message: "Enter ID"

        },

        {
            type: "input", name: "internEmail", message: "Enter Intern's Email Address"

        },

        {
            type: "input", name: "internSchool", message: "Enter Intern's University"

        }


    ])

        .then(response => {
            let intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
            members.push(intern);
            createTeam();



        }
        )
}
//function for engineer subclass
function addEngineer() {
    inquirer.prompt([
        {
            type: "input", name: "engineerName", message: "Enter Engineer's Name"

        },
        {

            type: "input", name: "engineerId", message: "Enter ID"

        },

        {
            type: "input", name: "engineerEmail", message: "Enter Engineer's Email Address"

        },

        {
            type: "input", name: "engineerGithub", message: "Enter Engineer's Github Username"

        }


    ])

        .then(response => {
            let engineer = new Engneer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            members.push(engineer);
            createTeam();



        }
        )
}
//function to build the directory and file
function build() {
    //conditional statement that checks if the output directory has been created
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)

    }
    //validation of dir and path variables
console.log(OUTPUT_DIR, outputPath)
//this writes the html file
fs.writeFileSync(outputPath, render(members), "utf-8")

}

createTeam();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
