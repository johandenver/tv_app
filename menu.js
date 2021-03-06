console.log("Welcome to the TV App. The information here is shared from tvmaze.com.")

// Required values
const inquirer = require("inquirer")
const actors = require("./actors")
const shows = require("./shows")

// require the two other files

var menuChoices = ["An actor", "A TV Show"]

// Provides a menu which prompts the user to input details
function menuPrompt() {
    inquirer.prompt([
        {
            name: "option",
            message: "What are you searching?",
            choices: menuChoices,
            type: "list",
        },
        {
            name: "keyword",
            message: "What would you like to know more about?"
        },
    ]).then(function(response) {
        // Uses the menuChoices array to run unique functions
        var value = menuChoices.indexOf(response.option);
        if(value === 0) {
            actors(response.keyword)
        }
        else if(value === 1) {
            shows(response.keyword)        }
    })
}

menuPrompt();