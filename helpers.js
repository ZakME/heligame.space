function initialize() {
    heli.x = 100;
    heli.y = height / 2;
    gameState = "start"; // or gameOn or gameOver
    heliSpeed = {
        x: 3,
        y: 5
    };
    wall1 = {
        x: 500,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall2 = {
        x: 800,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wall3 = {
        x: 1100,
        y: random(50, height - 150),
        w: 50,
        h: 100
    };
    wallSpeed = 3;
    wallSpeedHard = 9;
    score = 0;
}

function drawStartScreen() {
    background(0);
    noStroke();
    fill(0, 255, 0);
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); // Floor
    image(heli.img, heli.x, heli.y); // Helicopter
    fill(255);
    textSize(30);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("CLICK HERE FOR HARD", 610, 260);
    fill(0, 255, 40);
    textSize(28);
    text("CLICK HERE FOR EASY", 190, 260);
    fill(255);
    textSize(30);
    text("Helicopter Flying!", width / 2, 80);
    text("Choose A Difficulty:", width / 2, 130);
}

function gameOn() {
    setHighscore();
    score++;
    moveHelicopter();
    moveWalls();
    checkCollision();
    drawGameOn();
}

function gameHard() {
    setHighscore();
    score += 5;
    moveHelicopterHard();
    moveWallsHard();
    checkCollision();
    drawGameOn();
}

function gameOver() {
    if (frameCount - gameOverTimer < 120) {
        fill(255);
        text("GAME OVER", width / 2, height / 2);
        text("Highscores:\n1: " + localStorage.getItem("highscore"), width / 2, 100);
    } else {
        initialize();
    }
}
