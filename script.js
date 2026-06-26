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
