function computerPlay(){
    randomNum = Math.floor(Math.random()*3)+1;
    switch(randomNum){
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissors"
    }
}

function gameRound(){
    let playerSelection = prompt("Are you picking Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        return [`Draw! You both picked ${playerSelection}`, 0, 0]
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1]
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1]
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return [`You lose! ${computerSelection} beats ${playerSelection}!`, 0, 1]
    }
    else{
        return [`You win! ${playerSelection} beats ${computerSelection}!`, 1, 0]
    }
}

function game(){
    let playerScore = 0
    let compScore = 0
    for(let i = 0; i<5; i++){
        let response = gameRound()
        alert(response[0])
        playerScore += response[1]
        compScore += response[2]
        alert(`Player: ${playerScore} Computer ${compScore}`)
    }
}

game()