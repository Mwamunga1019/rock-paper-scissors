let playerScore = 0;
let compScore = 0;

function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
    // get random input from computer
}

// console.log(computerPlay());

// const playerSelection = 'rock';


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`You tied! You both picked ${playerSelection}`);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock crushes scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper covers rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors cut paper';
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        return 'You lose! Rock crushes scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lose! Paper covers rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return 'You lose! Scissors cut paper';
    } 
    

    
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Type either rock, paper or scissors', 'rock').toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > compScore) {
        return 'You beat the Computer. You are a genius!';
    } else if (playerScore < compScore) {
        return 'You got beat by the computer. Work on your throws!';
    } else {
        return 'You tied with the computer. Quite Shabby!';
    }
}

console.log(game());
