const playButton = document.querySelector("#play")
const buttons = document.querySelector("#buttons")
const gameText = document.querySelector("#gameText")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const gameTitle=document.querySelector("#gameTitle")
gameTitle.style.display ="none"
gameText.style.display="none"
rock.style.display = "none"
scissors.style.display="none"
paper.style.display="none"

playButton.addEventListener("click",()=>{
    gameTitle.textContent = "Lets Play!"
    playButton.style.display = "none"
    gameTitle.style.display="flex"
    gameText.style.display= "flex"
    rock.style.display= "inline-flex"
    paper.style.display="inline-flex"
    scissors.style.display = "inline-flex"
})

rock.addEventListener("click", ()=>playRound("rock"))
paper.addEventListener("click",()=>playRound("paper"))
scissors.addEventListener("click",()=>playRound("scissors"))

let humanScore = 0
let computerScore = 0

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
    if(computerChoice == humanChoice){
        gameText.textContent= `Human- ${humanChoice} : ${computerChoice} -Computer`
        console.log("draw")
    }else if((computerChoice == "rock" && humanChoice == "scissors")||(computerChoice=="paper" &&humanChoice =="rock")||(computerChoice=="scissors" &&humanChoice=="paper")){
        gameText.textContent= `Human- ${humanChoice} : ${computerChoice} -Computer`
        computerScore +=1
        console.log("computer score: " + computerScore + " humanScore: " + humanScore)
    }else{
        gameText.textContent= `Human- ${humanChoice} : ${computerChoice} -Computer`
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
        gameTitle.textContent="Computer Won! Play Again?"
        gameText.style.display="none"
        rock.style.display= "none"
        paper.style.display="none"
        scissors.style.display = "none"
        playButton.style.display ="block"
        
    }else if(humanScore==5){
        console.log("human wins!")
        humanScore=0
        computerScore=0
        gameTitle.textContent="Player Won! Play Again?"
        gameText.style.display="none"
        rock.style.display= "none"
        paper.style.display="none"
        scissors.style.display = "none"
        playButton.style.display="block"
        
    }

}
