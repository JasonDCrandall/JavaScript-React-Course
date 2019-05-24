const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors') {
        return "Error: Please enter either 'rock', 'paper', or 'scissors'.";
    } else {
        return userInput;
    }
}

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer wins!';
        } else if (computerChoice === 'scissors') {
            return 'The user wins!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'The user wins!';
        } else if (computerChoice === 'scissors') {
            return 'The computer wins!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer wins!';
        } else if (computerChoice === 'paper') {
            return 'The user wins!';
        }
    }
    return 'error';
}

let userChoice = getUserChoice('paper');
let computerChoice = getComputerChoice();

const result = determineWinner(userChoice, computerChoice);
console.log(`The user entered ${userChoice}, and the computer entered ${computerChoice}. ${result}`);
