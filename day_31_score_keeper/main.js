//==================Objects====================
const player1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const player2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

//==============Constants & Variables===============
let winningScore = 3;
let isGameOver = false;
const resetButton = document.querySelector('#resetButton');
const selectButton = document.querySelector('#playTo');

//==============Functions=========================
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = '0';
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}
//===================Event Listeners
player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
})

selectButton.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)