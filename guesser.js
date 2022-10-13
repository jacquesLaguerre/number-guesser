/*
create a program that guesses a number from 1 to 10 
then asks us to guess that number.
if its higher say 'too high' and ask again
if it lower say 'too low' and ask again 
if it's the right number say 'congratulations and exit 

*/

import readline from 'readline-sync'

let userGuessedRight = false 



    //guess a number form 1-10
let NumberChosen = Math.ceil(Math.random() *10) //ceiling will never be 10 and floor can be 10
// console.log(NumberChosen)
while(!userGuessedRight){
let guess = readline.question("What is your guess?")
if (guess == NumberChosen)
{
    console.log('congratulations')
    userGuessedRight = true
}
if (guess > NumberChosen)
{
    console.log('too high! Try again')
    // userGuessedRight = false
}
if (guess < NumberChosen)
{
    console.log('too low! Try again')
    // userGuessedRight = false
}

// console.log(guess)
}


