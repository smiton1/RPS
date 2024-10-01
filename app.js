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
    let humanChoice = prompt("Rock, Paper, Scissors: ")
    if(humanChoice == "rock"){
        return "rock"
    }else if(humanChoice == "paper"){
        return "paper"
    }else if(humanChoice == "scissors"){
        return "scissors"
    }
}