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
        console.log('It\'s a draw!');
    } else if ((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') ||
(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') || 
(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER')) {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
}

function game() {
    for (let counter = 0; counter < 5; counter++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        if (playerSelection) { 
            playRound(playerSelection, computerSelection); 
        } else {
            return "Game is cancelled";
        }
    }
    if (playerScore > computerScore) {
        return 'You are the winner!';
    } else if (computerScore > playerScore) {
        return 'You lose!';
    } else {
        return 'It\'s a draw';
    }
}

console.log(game());