function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both');
        return;
    }
    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (!!gameData[selectedRow][selectedColumn]){
        alert('Please select an empty field');
        return;
    };

    if (selectedField.tagName !== 'LI'){
        return;
    };
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    switchPlayer()
}