let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.rps');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const final = document.querySelector('.final');

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

buttons.forEach(button => button.addEventListener('click', () => playRound(button.value, getComputerChoice())));

function playRound(playerSelection, computerSelection) {
    if (playerScore > 4) {
        final.textContent = 'You win! The odds were in your favour!';
        return;
    } else if (computerScore > 4)  { 
        final.textContent = 'The computer wins! Better luck next time.';
        return;
    }

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
    score.textContent = `You: ${playerScore} vs Computer: ${computerScore}`;
}



function restart() {
    playerScore = 0;
    computerScore = 0;
}
