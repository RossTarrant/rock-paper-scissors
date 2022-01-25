function computerPlay(){
    randomNum = Math.floor(Math.random()*3)+1;
    switch(randomNum){
        case 1: return "Rock"
        case 2: return "Paper"
        case 3: return "Scissors"
    }
}

function gameRound(playerSelection){
    let computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        return [`Draw! You both picked ${playerSelection}`, 0, 0];
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1];
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1];
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1];
    }
    else{
        return [`You win! ${playerSelection} beats ${computerSelection}!`, 1, 0];
    }
}

function updatePage(txt){
    console.log(playerScore)
    console.log(compScore)
    let toDisplay = `Player: ${playerScore} Computer: ${compScore}`
    paraScore.textContent = toDisplay;
    result.appendChild(paraScore);
    if(playerScore===5){
        txt = "Player wins!!! Well done! Click an option to play again!";
        playerScore = 0;
        compScore = 0;
    }
    else if(compScore===5){
        txt = "Computer wins!!! Unlucky! Click an option to play again!";
        playerScore = 0;
        compScore = 0;
    }
    para.textContent = txt;
    result.appendChild(para);
}

function game(playerSelection){
    response = gameRound(playerSelection);
    txt = response[0];
    playerScore = playerScore + response[1];
    compScore = compScore + response[2];
    updatePage(txt);
}

let playerScore = 0;
let compScore = 0;

const result = document.querySelector('.result');
const para = document.createElement('p');
const paraScore = document.createElement('p');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () =>{
    game('Rock');
})
paperBtn.addEventListener('click', () =>{
    game('Paper');
})
scissorsBtn.addEventListener('click', () =>{
    game('Scissors');
})