#!/usr/bin/env node

// computer will generated a random number

//user input for guessing number
// compare user input to computer generate number



import inquirer from "inquirer"
const randomnumber = Math.floor(Math.random() * 6 + 1 )
const answers = await inquirer.prompt([
    { name:"userguessdnumber",
    type: "number",
    message: "please guess a number between 1-6 "

}
])
if (answers.userguessdnumber===randomnumber){
    console.log("congratulations!you guess right number")
}else {
    console.log("you guessed wrong number")
}