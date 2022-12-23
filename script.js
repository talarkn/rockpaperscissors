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
    let playerChoice = prompt('Let\'s play a game: Rock, Paper or Scissors?', ' ');
    if (playerChoice === null) {
        alert('Game is cancelled.');
    } else if (playerChoice.toUpperCase() === 'ROCK' || playerChoice.toUpperCase() === 'PAPER' || playerChoice.toUpperCase() === 'SCISSORS') {
        return playerChoice;
    } else {
        alert('Invalid input, try again!');
        return ' ';
    }
}

function capitaliseWord(word) {
    let capitalWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return capitalWord;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionCapitalised = capitaliseWord(playerSelection);
    if (playerSelectionCapitalised === ' ') {
        return null;
    } else if (playerSelectionCapitalised === computerSelection) {
        console.log('It\'s a draw!');
    } else if ((playerSelectionCapitalised === 'Rock' && computerSelection === 'Scissors') ||
(playerSelectionCapitalised === 'Paper' && computerSelection === 'Rock') || 
(playerSelectionCapitalised === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        console.log(`You win! ${playerSelectionCapitalised} beats ${computerSelection}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelectionCapitalised}.`);
    }
}

function game() {
    for (let counter = 0; counter < 5; counter++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        if (playerSelection) { 
            playRound(playerSelection, computerSelection); 
            if (playerSelection === ' ') {
                counter--;
            }
        } else {    
            return 'Game is cancelled!'
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