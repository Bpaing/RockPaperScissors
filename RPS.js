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
    if (result === 'win') {
        let player = text[0].textContent.split(' ');
        player[1] = `${parseInt(player[1]) + 1}`;
        text[0].textContent = player.join(' ');
    } else {
        let computer = text[1].textContent.split(' ');
        computer[1] = `${parseInt(computer[1]) + 1}`;
        text[1].textContent = computer.join(' ');
    }
}

function playOnClick() {
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