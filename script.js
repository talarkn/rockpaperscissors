function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return 'Paper';
    } else if (computerChoice === 1) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Let\'s play a game: Rock, Paper or Scissors?');
    if (!playerChoice) {
        alert('Game is cancelled.');
    } else if (playerChoice.toUpperCase() === 'ROCK' || playerChoice.toUpperCase() === 'PAPER' || playerChoice.toUpperCase() === 'SCISSORS') {
        return playerChoice;
    } else {
        alert('Invalid input, try again!');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 'It\'s a draw!';
    } else if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') ||
(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') || 
(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER')) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(computerSelection);
console.log(playerSelection);
playerSelection === undefined ? null : console.log(playRound(playerSelection, computerSelection));