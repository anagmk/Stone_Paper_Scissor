// Utility function to change text content
function chnageOption(element, newText) {
    element.innerText = newText;
}

// Button references
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissor_btn = document.getElementById('scissor');

// Player & computer display elements
const choice = document.getElementById('player_choice');
const computer_choice = document.getElementById('computer_choice');

// Score elements
const playerScoreEl = document.getElementById('player_score');
const computerScoreEl = document.getElementById('computer_score');

let playerScore = 0;
let computerScore = 0;

// Choices array
const options = ["🪨", "📄", "✂️"];
let shuffleInterval;

// Start shuffling computer's choice
function startShufflingText() {
    shuffleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * options.length);
        computer_choice.textContent = options[randomIndex];
    }, 10);
}

// Stop shuffle and show final result
function stopShufflingAndShowResult(playerMove) {
    clearInterval(shuffleInterval);
    const finalChoice = options[Math.floor(Math.random() * options.length)];
    computer_choice.textContent = finalChoice;

    // Delay alert slightly so UI updates BEFORE it shows
    setTimeout(() => {
        const result = getWinner(playerMove, finalChoice);
        updateScore(result);
        alert(result);
    }, 10);
}

// Decide winner
function getWinner(player, computer) {
    if (player === computer) {
        return "It's a Tie!";
    } else if (
        (player === "🪨" && computer === "✂️") ||
        (player === "📄" && computer === "🪨") ||
        (player === "✂️" && computer === "📄")
    ) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

// Update score display
function updateScore(result) {
    if (result === "Player Wins!") {
        playerScore++;
        playerScoreEl.innerText = playerScore;
    } else if (result === "Computer Wins!") {
        computerScore++;
        computerScoreEl.innerText = computerScore;
    }
}

// Button click listeners
rock_btn.addEventListener("click", function () {
    chnageOption(choice, '🪨');
    startShufflingText();
    setTimeout(() => stopShufflingAndShowResult('🪨'), 1500);
});

paper_btn.addEventListener("click", function () {
    chnageOption(choice, '📄');
    startShufflingText();
    setTimeout(() => stopShufflingAndShowResult('📄'), 1500);
});

scissor_btn.addEventListener("click", function () {
    chnageOption(choice, '✂️');
    startShufflingText();
    setTimeout(() => stopShufflingAndShowResult('✂️'), 1500);
});
