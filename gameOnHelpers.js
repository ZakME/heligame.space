function setHighscore() {
    if (score > highscore) {
        localStorage.setItem("highscore", score + 5);
    }
}

function moveHelicopter() {
    if (mouseIsPressed) {
        heli.y -= 3;
    } else {
        heli.y += 5;
    }
}

function moveHelicopterHard() {
    if (score % 150 == 0) {
        heliSpeed.x += 0.5;
        heliSpeed.y += 0.5;
    }

    if (mouseIsPressed) {
        heli.y -= heliSpeed.x;
    } else {
        heli.y += heliSpeed.y;
    }
}

function moveWalls() {
    // Speed up walls
    if (score % 100 == 0) {
        wallSpeed += 0.5;
    }

    wall1.x -= wallSpeed;
    if (wall1.x + wall1.w < 0) {
        wall1.x = width;
        wall1.y = random(50, height - 150);
    }

    wall2.x -= wallSpeed;
    if (wall2.x + wall2.w < 0) {
        wall2.x = width;
        wall2.y = random(50, height - 150);
    }

    wall3.x -= wallSpeed;
    if (wall3.x + wall3.w < 0) {
        wall3.x = width;
        wall3.y = random(50, height - 150);
    }
}

function moveWallsHard() {
    // Speed up walls
    if (score % 250 == 0) {
        wallSpeedHard += 1;
    }

    wall1.x -= wallSpeedHard;
    if (wall1.x + wall1.w < 0) {
        wall1.x = width;
        wall1.y = random(50, height - 150);
    }

    wall2.x -= wallSpeedHard;
    if (wall2.x + wall2.w < 0) {
        wall2.x = width;
        wall2.y = random(50, height - 150);
    }

    wall3.x -= wallSpeedHard;
    if (wall3.x + wall3.w < 0) {
        wall3.x = width;
        wall3.y = random(50, height - 150);
    }
}

function checkCollision() {
    // ROOF FLOOR
    if (heli.y < 50 || heli.y + 41 > height - 50) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }

    // WALLS
    if (heli.x + 79 > wall1.x && heli.x < wall1.x + wall1.w && heli.y + 40 > wall1.y && heli.y < wall1.y + wall1.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }

    if (heli.x + 79 > wall2.x && heli.x < wall2.x + wall2.w && heli.y + 40 > wall2.y && heli.y < wall2.y + wall2.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }

    if (heli.x + 79 > wall3.x && heli.x < wall3.x + wall3.w && heli.y + 40 > wall3.y && heli.y < wall3.y + wall3.h) {
        gameState = "gameOver";
        gameOverTimer = frameCount;
    }
}

function drawGameOn() {
    // DRAWING
    background(0);
    noStroke();
    fill(0, 255, 0);
    rect(0, 0, width, 50); // Ceiling
    rect(0, height - 50, width, 50); // Floor
    rect(wall1.x, wall1.y, wall1.w, wall1.h); // Wall 1
    rect(wall2.x, wall2.y, wall2.w, wall2.h); // Wall 2
    rect(wall3.x, wall3.y, wall3.w, wall3.h);
    stroke(255, 0, 0);
    line(wall1.x, wall2.x);
    line(wall2.x, wall3.x);
    line(wall3.x, wall1.x);
    image(heli.img, heli.x, heli.y); // Helicopter
    fill(255);
    text("Score: " + score, width / 2, height - 10);
}
