let computerChoice = 'none'
let humanChoice = `none`
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.random()
    
    if (randomNumber <= 0.3) {
        computerChoice = "Rock"}
    else if (randomNumber <= 0.6) {
        computerChoice = "Paper"
    }

    else {
        computerChoice = "Scissors"
    }
    
    return computerChoice
};

function getHumanChoice() {
    humanChoice = prompt("Choice: Rock, Paper, or Scissors")
    return humanChoice
};

function playRound(humanChoice,computerChoice) {
if (arguments[0] == arguments[1]) {
    return `It's a tie!`}
else if (arguments[0] = `Rock` && arguments[1] != `Paper`) {
    return `Player Wins!`
}
else if (arguments[0] = `Paper` && arguments[1] != `Scissors`) {
    return `Player Wins!`
}
else if (arguments[0] = `Scissors` && arguments[1] != `Rock`) {
    return `Player Wins!`
}
else if 
};


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();