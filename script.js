alert(
    "👋 Welcome to ROCK, PAPER, SCISSORS Game!\n\n" +
    "⚠️ IMPORTANT: This game runs entirely in the browser Console.\n" +
    "Please open your Developer Tools Console to see your feedback and instructions:\n\n" +
    "💻 Windows/Linux: Press F12 or Ctrl + Shift + J\n" +
    "🍎 Mac: Press Cmd + Option + J\n\n" +
    "Press OK after opening the Console!");
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

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let validRoundsPlayed = 1;

    console.clear();

    console.log("🧨🤖🔥 ROCK PAPER SCISSORS - EVIL AI EDITION 🔥🤖🧨");
    console.log("══════════════════════════════════════════════");
    console.log("⚠️  ALERT!");
    console.log("The Evil AI has hacked the world's computers.");
    console.log("Branko has disappeared...");
    console.log("You are humanity's last hope.");
    console.log("");
    console.log("🎯 Mission:");
    console.log("✅ Win more rounds than the Evil AI.");
    console.log("✅ Complete 5 VALID rounds.");
    console.log("❌ Invalid answers repeat the same round.");
    console.log("⚖️ Ties do NOT count.");
    console.log("══════════════════════════════════════════════");

    while (validRoundsPlayed <= 5) {

        let playerSelection = prompt(
`⚔️ ROUND ${validRoundsPlayed} OF 5 ⚔️

Choose your weapon:

🪨 Rock
📄 Paper
✂️ Scissors`
        );
        if (playerSelection === null) {
            console.log("🚪 Mission aborted.");
            return;
        }
        playerSelection=playerSelection.toLowerCase();

        playerSelection = playerSelection.trim();

        if (
            playerSelection !== "rock" &&
            playerSelection !== "paper" &&
            playerSelection !== "scissors"
        ) {
            console.log("");
            console.log("❌ Invalid weapon!");
            console.log("Choose Rock, Paper or Scissors.");
            console.log(`🔁 Round ${validRoundsPlayed} will be repeated.`);
            continue;
        }

        const computerSelection = computerPlay();

        const result = playRound(
            playerSelection,
            computerSelection
        );

        console.log("");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(`⚔️ ROUND ${validRoundsPlayed}`);
        console.log(`👤 You: ${capitalize(playerSelection)}`);
        console.log(`🤖 Evil AI: ${computerSelection}`);
        console.log(result);

        if (result === "Tie") {

            console.log("⚖️ It's a tie!");
            console.log("🔁 Round repeated.");
        }

        if (result.includes("You Win")) {

            playerScore++;
            validRoundsPlayed++;

            console.log("🎉 You win this round!");
            console.log("💥 The Evil AI is weakening!");

        } else {

            computerScore++;
             validRoundsPlayed++;

            console.log("😈 The Evil AI wins this round!");
            console.log('"You cannot stop me..."');
        }

        console.log(`📊 SCORE`);
        console.log(`👤 You: ${playerScore}`);
        console.log(`🤖 Evil AI: ${computerScore}`);

    }

    console.log("");
    console.log("════════════════════════════════════");
    console.log("🏁 GAME OVER 🏁");
    console.log("════════════════════════════════════");

    console.log(`Final Score`);
    console.log(`👤 You: ${playerScore}`);
    console.log(`🤖 Evil AI: ${computerScore}`);
    console.log("");

    if (playerScore > computerScore) {

        console.log("🎉🎉🎉 VICTORY! 🎉🎉🎉");
        console.log("You defeated the Evil AI!");
        console.log("🌍 Humanity is safe.");
        console.log("🦸 Branko has been rescued.");
        console.log("🏆 You are the world's greatest coder!");

    } else if (computerScore > playerScore) {

        console.log("💀💀💀 DEFEAT 💀💀💀");
        console.log("The Evil AI has taken over.");
        console.log("🤖 All computers belong to the machines.");
        console.log("🔁 Type game() and fight again!");

    } else {

        console.log("⚖️ DRAW!");
        console.log("Neither side won the battle.");
        console.log("🔁 Type game() to settle it!");
    }

    console.log("");
    console.log("🎮 Type game() to play again.");
}
