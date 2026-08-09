
// 1. DOM ELEMENTS & GAME CONFIGURATION ---> Songram

// HTML elements 
const board = document.getElementById('game-board'); 
const instructionText = document.getElementById('instruction-text'); 
const logo = document.getElementById('logo'); 
const score = document.getElementById('score'); 
const highScoreText = document.getElementById('highScore')

// Game configuration
const gridSize = 20;



// 2. GAME STATE


let snake = [{ x: 10, y: 10 }];
let food = generateFood();

let highScore = 0;
let direction = 'right';

let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;



// 3. RENDERING / DRAWING ----> Rabbani


// Draw complete game board
function draw() {

}


// Draw snake
function drawSnake() {

}


// Draw food
function drawFood() {
 
}


// Create HTML element for snake/food
function createGameElement(tag, className) {
  
}


// Set position of snake/food
function setPosition(element, position) {
  
}



// 4. CORE GAME LOGIC  ----> Shafi


// Generate food at a random position
function generateFood() {
 
}


// Move snake
function move() {
  
}


// Increase game speed
function increaseSpeed() {
  
}


// Check collision with wall or snake body
function checkCollision() {
  
}



// 5. GAME CONTROL & USER INPUT  ---> Shafi


// Start the game
function startGame() {
  
}


// Stop the game
function stopGame() {
  
}


// Reset the game
function resetGame() {
  
}


// Handle keyboard input
function handleKeyPress(event) {
  
}


// Keyboard event listener
document.addEventListener('keydown', handleKeyPress);



// 6. SCORE MANAGEMENT ---> Shafi


// Update current score
function updateScore() {

}


// Update high score
function updateHighScore() {

}

