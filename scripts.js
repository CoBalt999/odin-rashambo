let choice = 'none'
function getComputerChoice() {
    let randomNumber = Math.random()
    
    if (randomNumber <= 0.3) {
        choice = "Rock"}
    else if (randomNumber <= 0.6) {
        choice = "Paper"
    }

    else {
        choice = "Scissors"
    }
    
    return choice
};

getComputerChoice()