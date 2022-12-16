function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return 'Paper';
    } else if (choice === 1) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Let\'s play a game: Rock, Paper or Scissors?');
    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
console.log(computerSelection);
console.log(playerSelection);