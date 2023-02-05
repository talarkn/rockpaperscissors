let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.rps');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const final = document.querySelector('.final');
const restartBtn = document.querySelector('.restart');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.value, getComputerChoice())));
restartBtn.addEventListener('click', restart); 

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) return 'Paper';
    else if (computerChoice === 1) return 'Rock';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) { // the buttons need to be clicked to get the final result
    if (final.textContent === '') {
        if (playerSelection === computerSelection) {
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
    if (playerScore > 4) {
        final.textContent = 'You win! The odds were in your favour!';
        return;
    } else if (computerScore > 4)  { 
        final.textContent = 'The computer wins! Better luck next time.';
        return;
    }
}


function restart() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = '';
    final.textContent = '';
}
