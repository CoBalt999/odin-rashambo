let computerChoice = 'none'
let humanChoice = `none`
let humanScore = 0
let computerScore = 0
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    humanChoice = prompt("Choose: Rock, Paper, or Scissors")
    return humanChoice
};

function playRound(humanChoice,computerChoice) {
if (humanChoice == computerChoice) {
    return `It's a tie!`
}
else if (humanChoice = `Rock` && computerChoice != `Paper`) {
    return `Player Wins!`
}
else if (humanChoice = `Paper` && computerChoice != `Scissors`) {
    return `Player Wins!`
}
else if (humanChoice = `Scissors` && computerChoice != `Rock`) {
    return `Player Wins!`
}
else if (computerChoice = `Rock` && humanChoice != `Paper`) {
    return `Computer Wins!`
}
else if (computerChoice = `Paper` && humanChoice != `Scissors`) {
    return `Computer Wins!`
}
else if (computerChoice = `Scissors` && humanChoice != `Rock`) {
    return `Computer Wins!`
}
};

playRound(humanSelection,computerSelection);