function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return 'Paper';
    } else if (choice === 1) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}

let computerSelection = getComputerChoice();
console.log(computerSelection);