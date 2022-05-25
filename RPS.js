function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random()*3))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        return `draw: ${playerSelection} does not beat ${computerSelection}`;
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors')
            return `win: ${playerSelection} beats ${computerSelection}`;
        return `loss: ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock')
            return `win: ${playerSelection} beats ${computerSelection}`;
        return `loss: ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper')
            return `win: ${playerSelection} beats ${computerSelection}`;
        return `loss: ${computerSelection} beats ${playerSelection}`;
    }
}

const rps = document.querySelectorAll('button');
rps.forEach(button => button.addEventListener('click', 
    () => console.log(playRound(button.textContent.toLowerCase(), computerPlay()))));

/*
function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt(`Round ${i+1}- Choice: `).toLowerCase();
        let computer = computerPlay();
        console.log(playRound(player, computer));
    }
}


game()
*/