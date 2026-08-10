
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
    board.innerHTML = '';

    drawSnake();
    drawFood();
    updateScore();
}

function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');

        setPosition(snakeElement, segment);

        board.appendChild(snakeElement);
    });
}

function drawFood() {
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food');

        setPosition(foodElement, food);

        board.appendChild(foodElement);
    }
}

function createGameElement(tag, className) {
    const element = document.createElement(tag);

    element.className = className;

    return element;
}

function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}



// 4. CORE GAME LOGIC  ----> Shafi


// Generate food at a random position
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;

  return { x, y };
}


// Move snake
function move() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'up':
      head.y--;
      break;

    case 'down':
      head.y++;
      break;

    case 'left':
      head.x--;
      break;

    case 'right':
      head.x++;
      break;
  }

  // Add new head
  snake.unshift(head);

  // Check if snake ate food
  if (head.x === food.x && head.y === food.y) {
    food = generateFood();

    increaseSpeed();

    // Restart interval with new speed
    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    // Remove tail if food was not eaten
    snake.pop();
  }
}


// Increase game speed
function increaseSpeed() {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
}


// Check collision with wall or snake body
function checkCollision() {
  const head = snake[0];

  // Wall collision
  if (
    head.x < 1 ||
    head.x > gridSize ||
    head.y < 1 ||
    head.y > gridSize
  ) {
    resetGame();
  }

  // Snake body collision
  for (let i = 1; i < snake.length; i++) {
    if (
      head.x === snake[i].x &&
      head.y === snake[i].y
    ) {
      resetGame();
    }
  }
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

