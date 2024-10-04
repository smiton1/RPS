const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener("click", ()=>playRound("rock"))
paper.addEventListener("click",()=>playRound("paper"))
scissors.addEventListener("click",()=>playRound("scissors"))

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


function playRound(humanChoice){
    computerChoice = getComputerChoice()
    console.log(`Human- ${humanChoice} : ${computerChoice} -Computer`)
    if(computerChoice == humanChoice){
        console.log("draw")
    }else if((computerChoice == "rock" && humanChoice == "scissors")||(computerChoice=="paper" &&humanChoice =="rock")||(computerChoice=="scissors" &&humanChoice=="paper")){
        computerScore +=1
        console.log("computer score: " + computerScore + " humanScore: " + humanScore)
    }else{
        humanScore+= 1
        console.log("computer score: " + computerScore + " humanScore: " + humanScore)
    }
    checkScores()
}

function checkScores(){
    if(computerScore == 5){
        console.log("computer wins!")
        humanScore= 0
        computerScore=0
    }else if(humanScore==5){
        console.log("human wins!")
        humanScore=0
        computerScore=0
    }
}
