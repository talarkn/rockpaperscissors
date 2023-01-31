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

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result');
    if (playerSelection === ' ') {
        return null;
    } else if (playerSelection === computerSelection) {
        result.textContent = 'It\'s a draw!';
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
(playerSelection === 'Paper' && computerSelection === 'Rock') || 
(playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.value, getComputerChoice())));

// function game() {
//     for (let counter = 0; counter < 5; counter++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = getPlayerChoice();
//         if (playerSelection) { 
//             playRound(playerSelection, computerSelection); 
//             if (playerSelection === ' ') {
//                 counter--;
//             }
//         } else {    
//             return 'Game is cancelled!'
//         }
//     }
//     if (playerScore > computerScore) {
//         return 'You win! The odds were in your favour!';
//     } else if (computerScore > playerScore) {
//         return 'The computer wins! Better luck next time.';
//     } else {
//         return 'It\'s a draw. Not bad!';
//     }
// }

// console.log(game());