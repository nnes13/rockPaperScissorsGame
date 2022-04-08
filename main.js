//randomly return either rock, paper or scissors.
function computerPlay () {
if(Math.random() < 0.33) {
    return 'rock';
    }
else if(Math.random() > 0.66) {
        return 'paper';
    }
else {
    return 'scissors';
    };
}

//play a game of rock paper scissors. 
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return `You picked ${playerSelection} and the Computer picked ${computerSelection}, you lose!`; 
    }
    else if (playerSelection === computerSelection) {
        return `You picked ${playerSelection} and the Computer picked ${computerSelection}, it's a tie!`;
    }
    else return `You picked ${playerSelection} and the Computer picked ${computerSelection}, you win!`;
}

function game() {
    for (let i = 0; i < 3; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt('Enter either rock, paper or scissors');
        console.log(playRound(playerSelection, computerSelection));        
    }
}

game();
