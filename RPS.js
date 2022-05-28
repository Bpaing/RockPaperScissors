function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random()*3))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'win';
        } 
        return 'loss';
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'win';
        }
        return 'loss';
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'win';
        }
        return 'loss';
    }
}

function updateScore(result) {
    if (result === 'draw') { return; }
    const score = document.querySelector('ul.score');
    const text = score.children;
    const player = text[0].textContent.split(' ');
    const computer = text[1].textContent.split(' ');
    const playerScore = parseInt(player[1]);
    const computerScore = parseInt(computer[1]);

    if (playerScore == 5 || computerScore == 5) {
        return 'game over';
    }

    if (result === 'win') {
        player[1] = `${playerScore + 1}`;
        text[0].textContent = player.join(' ');
    } else {
        computer[1] = `${computerScore + 1}`;
        text[1].textContent = computer.join(' ');
    }
}

function isGameOver() {
    const score = document.querySelector('ul.score');
    const playerScore = parseInt(score.children[0].textContent.split(' ')[1]);
    const computerScore = parseInt(score.children[1].textContent.split(' ')[1]);

    if (playerScore == 5 || computerScore == 5) 
        return true;
    return false;
}

function playOnClick() {
    console.log(isGameOver())
    if (isGameOver()) { return; }

    const player = this.textContent.toLowerCase();
    const computer = computerPlay();
    const outcome = playRound(player, computer);
    updateScore(outcome);
    const ul = document.createElement('ul');
    ul.className = 'result';
    const playerLi = document.createElement('li');
    playerLi.textContent = `You chose: ${player}`;
    const computerLi = document.createElement('li');
    computerLi.textContent = `Computer chose: ${computer}`;
    const outcomeLi = document.createElement('li');
    switch(outcome) {
        case 'win':
            outcomeLi.textContent = `${outcome}: ${player} beats ${computer}`;
            break;
        case 'loss':
            outcomeLi.textContent = `${outcome}: ${computer} beats ${player}`;
            break;
        default:
            outcomeLi.textContent = outcome;
    }
    ul.appendChild(playerLi);
    ul.appendChild(computerLi);
    ul.appendChild(outcomeLi);

    const scoreboard = document.querySelector('div.scoreboard');
    if (scoreboard.hasChildNodes()) {
        scoreboard.replaceChild(ul, scoreboard.lastChild);
    } else {
        scoreboard.appendChild(ul);
    }
}

const rps = document.querySelectorAll('button');
rps.forEach(button => button.addEventListener('click', playOnClick));

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