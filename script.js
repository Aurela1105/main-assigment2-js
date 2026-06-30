alert(
    "👋 Welcome to ROCK, PAPER, SCISSORS Game!\n\n" +
    "⚠️ IMPORTANT: This game runs entirely in the browser Console.\n" +
    "Please open your Developer Tools Console to see your feedback and instructions:\n\n" +
    "💻 Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
    "🍎 Mac: Press Cmd + Option + J\n\n" +
    "Press OK after opening the Console!"
    );
console.log("🎮 Type game() to play!");

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase().trim();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tie";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `🏆 You Win! ${capitalize(player)} beats ${capitalize(computer)}`;
    }

    return `💀 You Lose! ${capitalize(computer)} beats ${capitalize(player)}`;
}

function getPlayerChoice(roundNumber) {
    while (true) {
        let playerSelection = prompt(
`⚔️ ROUND ${roundNumber} OF 5 ⚔️

Choose your weapon:
🪨 Rock
📄 Paper
✂️ Scissors`
        );
        if (playerSelection === null) {
            return null; 
        }

        playerSelection = playerSelection.toLowerCase().trim();
        if (
            playerSelection === "rock" ||
            playerSelection === "paper" ||
            playerSelection === "scissors"
        ) {
            return playerSelection; 
        }
        console.log("\n❌ Invalid weapon! Choose Rock, Paper or Scissors.");
        console.log(`🔁 Round ${roundNumber} will be repeated.`);
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let validRoundsPlayed = 1;

    console.clear();
    console.log("🧨🤖🔥 ROCK PAPER SCISSORS - EVIL AI EDITION 🔥🤖🧨");
    console.log("══════════════════════════════════════════════");

    while (validRoundsPlayed <= 5) {
                const playerSelection = getPlayerChoice(validRoundsPlayed);
        if (playerSelection === null) {
            console.log("🚪 Mission aborted.");
            return;
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log("");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(`⚔️ ROUND ${validRoundsPlayed}`);
        console.log(`👤 You: ${capitalize(playerSelection)}`);
        console.log(`🤖 Evil AI: ${computerSelection}`);
        console.log(result);

        if (result === "Tie") {
            console.log("⚖️ It's a tie!\n🔁 Round repeated.");
            console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
            continue; 
        }

        if (result.includes("You Win")) {
            playerScore++;
            validRoundsPlayed++;
            console.log("🎉 You win this round!\n💥 The Evil AI is weakening!");
        } else {
            computerScore++;
            validRoundsPlayed++;
            console.log("😈 The Evil AI wins this round!\n\"You cannot stop me...\"");
        }

        console.log(`📊 SCORE ➡️ 👤 You: ${playerScore} | 🤖 Evil AI: ${computerScore}`);
    }
    console.log("\n════════════════════════════════════\n🏁 GAME OVER 🏁\n════════════════════════════════════");
    if (playerScore > computerScore) {
        console.log("🎉🎉🎉 VICTORY! You defeated the Evil AI! 🌍");
    } else if (computerScore > playerScore) {
        console.log("💀💀💀 DEFEAT! The Evil AI has taken over. 🤖");
    } else {
        console.log("⚖️ DRAW! Neither side won the battle.");
    }
}
