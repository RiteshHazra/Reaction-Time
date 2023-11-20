let playerData = {};

function startGame() {
    const nameInput = document.getElementById('student-name');
    const playerName = nameInput.value;

    // Check if the player has already played three times
    if (!playerData[playerName]) {
        playerData[playerName] = {
            scores: [],
            gamesPlayed: 0
        };
    }

    const player = playerData[playerName];

    // Check if the player has played three times
    if (player.gamesPlayed < 3) {
        player.gamesPlayed++;

        // Reset styles
        document.getElementById('red-box').style.backgroundColor = 'red';
        document.getElementById('green-box').style.display = 'none';

        // Set a timeout for the green box to appear
        setTimeout(() => showGreenBox(playerName), Math.floor(Math.random() * 5000) + 1000);
    } else {
        alert(`${playerName}, you have already played three times.`);
        nameInput.value = ''; // Clear the input field
    }
}

function showGreenBox(playerName) {
    const startTime = new Date().getTime(); // Record the start time
    document.getElementById('red-box').style.backgroundColor = 'green';
    document.getElementById('green-box').style.display = 'block';

    // Set a timeout for the reaction time
    setTimeout(() => recordReactionTime(playerName, startTime), Math.floor(Math.random() * 3000) + 1000);
}

function recordReactionTime(playerName, startTime) {
    const reactionTime = new Date().getTime() - startTime;

    // Display the reaction time
    document.getElementById('reaction-time').innerText = `Hello ${playerName}, your reaction time is ${reactionTime} milliseconds.`;

    // Save the score
    playerData[playerName].scores.push(reactionTime);

    // Display scores
    console.log(`${playerName}'s scores: ${playerData[playerName].scores}`);

    // Clear the input field
    document.getElementById('student-name').value = '';
}