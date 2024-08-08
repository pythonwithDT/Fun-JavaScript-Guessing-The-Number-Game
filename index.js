// Prompt the user for their name and age.
// Validate the user's age to ensure they can play the game.
// Ask if they want to start the game.
// Get the maximum number for the guessing range.
// Generate a random number within that range.
// Allow the user to guess the number, providing feedback on each guess.
// Track and display the number of attempts it took to guess correctly.


// const randomNum = Math.random();

let firstName = prompt('Enter your first name: ');
let lastName = prompt('Enter your last name: ');

let userAge = prompt('Enter your age: ');


userAge = (userAge);

if (userAge >= 5 && userAge <=20) {
    console.log(`Hello ${firstName} ${lastName}. Lets play a game`)
} else {
    console.log('Inavalid age')
    // exit()
}



