let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function game() {
    for (let counter = 0; counter < 5; counter++) {
        playerSelection === undefined ? Break : console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    if (playerScore > computerScore) {
        return 'You are a winner!';
    } else if (computerScore > playerScore) {
        return 'You lose!';
    } else {
        return 'It\'s a draw';
    }
}
