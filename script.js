function computerPlay() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
function playRound (playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        return `It's a tie! Both chose ${playerSelection}`;
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function getPlayerChoice() {
    let keepLooping = true;
    let userInput;
    while (keepLooping) {
        userInput = prompt ("Enter your choice: Rock, Paper, or Scissors?");
        if (userInput === null) {
            alert("Game Cancelled. Refresh to play again!");
            return null;
        }
        let formattedInput = userInput.trim().toLowerCase();
        if (formattedInput === 'rock' || formattedInput == 'paper' || formattedInput === 'scissors') {
            keepLooping = false;
        } else {
            alert("Invalid choice! Please typr Rock, Paper, or Scissors");
        }
    }
    return userInput;
}
