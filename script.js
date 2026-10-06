let score = 0;
let time = 30;
let gameTimer;
let gameRunning = false;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const star = document.getElementById("star");
const startButton = document.getElementById("start-button");
const gameArea = document.getElementById("game-area");
const message = document.getElementById("message");

startButton.addEventListener("click", startGame);

star.addEventListener("click", catchStar);

function startGame() {
    score = 0;
    time = 30;
    gameRunning = true;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    message.textContent = "";

    star.style.display = "block";
    startButton.disabled = true;

    moveStar();

    gameTimer = setInterval(function () {
        time--;
        timeDisplay.textContent = time;

        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

function catchStar() {
    if (!gameRunning) {
        return;
    }

    score+=1;
    scoreDisplay.textContent = score;

    moveStar();
}

function moveStar() {
    const maxX = gameArea.clientWidth - star.offsetWidth;
    const maxY = gameArea.clientHeight - star.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    star.style.left = randomX + "px";
    star.style.top = randomY + "px";
}

function endGame() {
    gameRunning = false;

    clearInterval(gameTimer);

    star.style.display = "none";
    startButton.disabled = false;

    message.textContent = "Game Over! Your score is " + score + "!";
}