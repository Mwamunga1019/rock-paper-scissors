let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const compS = document.querySelector('.comp-score');
const playerS = document.querySelector('.player-score');




function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
    // get random input from computer
}

// console.log(computerPlay());

// const playerSelection = 'rock';


function playRound(playerSelection, computerSelection) {
    const p = document.createElement('p');
    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both picked ${playerSelection}`;
        
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        p.innerText = 'You win! Rock crushes scissors';
       
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        p.innerText = 'You win! Paper covers rock';
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        p.innerText = 'You win! Scissors cuts paper';
        
     } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        p.innerText = 'You lose! Rock crushes scissors';
       
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        p.innerText = 'You lose! Paper covers rock';
        
     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        p.innerText = 'You lose! Scissors cuts paper';
        
    } 

    outcomeDiv.appendChild(p);

    
}

function runningScore(playerS, compS) {
    playerS.innerText = `Player Score: ${playerScore}`;
    compS.innerText = `Computer Score: ${compScore}`;
}

function checkForWinner(playerScore, compScore) {
    const h2 = document.createElement('h2');
    if (playerScore === 3) {
        
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${compScore}. Great job beating the computer ` ;
        
    }

    if (compScore === 3) {
        h2.classList.add('computer-won');
        h2.innerText = `You loose ${playerScore} to ${compScore}. Up your throw game! `;
        
    }
    
    outcomeDiv.append(h2);
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    runningScore(playerS, compS);
    checkForWinner(playerScore, compScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    runningScore(playerS, compS);
    checkForWinner(playerScore, compScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    runningScore(playerS, compS);
    checkForWinner(playerScore, compScore);
    
})


// function game() {
//     // for (let i = 0; i < 5; i++) {
//     //     const playerSelection = prompt('Type either rock, paper or scissors. The game plays for 5 rounds', 'rock').toLowerCase();
//     //     const computerSelection = computerPlay();
//     //     console.log(playRound(playerSelection, computerSelection));
//     // }

//     if (playerScore > compScore) {
//         return 'You beat the Computer. You are a genius!';
//     } else if (playerScore < compScore) {
//         return 'You got beat by the computer. Work on your throws!';
//     } else {
//         return 'You tied with the computer. Quite Shabby!';
//     }
// }

// alert(game());
