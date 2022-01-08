function resetGameStatus () {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 
        'You won, <span id="winner-name">PlAYER NAME</spna>"';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0;i < 3;i++){
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex]
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both');
        return;
    }
    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;
    
    resetGameStatus();
}

function switchPlayer() {
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (isNaN(selectedRow) || isNaN(selectedColumn) || !!gameData[selectedRow][selectedColumn]){
        alert('Please select an empty field');
        return;
    };

    if (selectedField.tagName !== 'LI' || gameIsOver){
        return;
    };
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    console.log(winnerId);
    winnerId && endGame(winnerId);
    
    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    // checking the rows equality
    for (let i = 0; i < 3; i++){
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][2] === gameData[i][1]) {
            return gameData[i][0];
        }
    }

    // checking the columns equality
    for (let i = 0; i < 3; i++){
        if (gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }

    // Diagonal: Top left to bottom right
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    // Diagonal: Bottom left to top right
    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
        return gameData[0][0];
    }
    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    switch (winnerId) {
        case 1:
        case 2:
            const winnerName = players[winnerId -1].name;
            gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
            break;
        default:
            gameOverElement.firstElementChild.textContent = 'It\'s a draw!'
            break;
    }
}