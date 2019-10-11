// P5.JS TEMPLATE
var heli = {};
var gameState;
var gameOverTimer;
var wall1, wall2, wall3, wallSpeed, wallSpeedHard;
var score;
var heliSpeed;
var highscore = localStorage.getItem("highscore");

function preload() {
    heli.img = loadImage("assets/heliBlueTransparent.png"); 
}

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);
    initialize();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    if (gameState == "start") {
        drawStartScreen();
    } else if (gameState == "gameOn") {
        gameOn();
    } else if (gameState == "gameHard") {
        gameHard();
    } else {
        gameOver();
    }
}

// EVENT FUNCTIONS
function mousePressed() {
    if (gameState == "start" && mouseX < 400) {
        gameState = "gameOn";
    }
   if (gameState == "start" && mouseX > 400) {
        gameState = "gameHard";
    }
    console.log(highscore);
}
