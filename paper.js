



function getComputerChoice(max) {
     return Math.floor(Math.random() * max);

}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[computerChoice];

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("paper beats rock, you lose the round");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("rock beats scissors, you win the round");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("scissors beats paper, you lose the round");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("paper beats rock, you win the round");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("rock beats scissors, you lose the round");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("scissors beats paper, you win the round");
        humanScore += 1;
    }
}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(3);



function playGame() {

    for (let i = 0; i < 5; i++){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(3);
        playRound(humanSelection, computerSelection);

    }
   
   if (humanScore > computerScore) {
    console.log("congrats you have won");
   }
   else if (computerScore > humanScore) {
    console.log("you have lost");
   }
   else {
    console.log("its a tie overall");
   }

}

playGame();

