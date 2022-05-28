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

function addContent(div, wins, losses) {
    const ul = document.createElement('ul');
    const win = document.createElement('li');
    win.id = 'win';
    const loss = document.createElement('li');
    loss.id = 'loss';
    ul.appendChild(win);
    ul.appendChild(loss);
}

function playOnClick(e) {
    const player = this.textContent.toLowerCase();
    const computer = computerPlay();
    const outcome = playRound(player, computer);

    const ul = document.createElement('ul');
    const playerLi = document.createElement('li');
    playerLi.textContent = `You chose: ${player}`;
    const computerLi = document.createElement('li');
    computerLi.textContent = `Computer chose: ${computer}`;
    const outcomeLi = document.createElement('li');
    outcomeLi.textContent = outcome;
    ul.appendChild(playerLi);
    ul.appendChild(computerLi);
    ul.appendChild(outcomeLi);

    const scoreboard = document.querySelector('div.scoreboard');
    if (scoreboard.hasChildNodes()) {
        scoreboard.replaceChild(ul, scoreboard.firstChild);
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