//score variables
let humanScore = 0
let computerScore = 0

//get the computer's pick
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) +1
    if(computerChoice == 1){
        return "rock"
    }else if(computerChoice ==2){
        return "paper"
    }else{
        return "scissors"
    }
}

//get Human's pick
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors: ").toLowerCase()
    if(humanChoice == "rock"){
        return "rock"
    }else if(humanChoice == "paper"){
        return "paper"
    }else if(humanChoice == "scissors"){
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice= getHumanChoice()
    computerChoice = getComputerChoice()
    console.log(`Human- ${humanChoice} : ${computerChoice} -Computer`)
    if(humanChoice == computerChoice){
        console.log("draw")
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1
    }else if(humanChoice == "paper" && computerChoice=="scissors"){
        computerScore += 1
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1
    }else{
        humanScore+= 1
    }
    checkScores()
}

function checkScores(){
    let winningScore = 3
    if(humanScore == winningScore){
        console.log("Human wins")
    }else if(computerScore == winningScore){
        console.log("Computer wins")
    }
}

function playGame(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if(humanScore>computerScore){
        console.log("human wins")
    }
    if(computerScore> humanScore){
        console.log("computer wins")
    }
}
