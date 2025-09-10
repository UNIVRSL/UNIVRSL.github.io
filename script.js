// 2023 NEC Code Book Learning Game
// Main game logic and functionality

let currentMode = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = 0;
let timerInterval = null;
let questions = [];
let selectedAnswer = null;

// DOM Elements
const mainMenu = document.getElementById('main-menu');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const modeTitle = document.getElementById('mode-title');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const questionOptions = document.getElementById('question-options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finalResults = document.getElementById('final-results');


// Initialize the game
function init() {
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Mode selection buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => startGame(btn.dataset.mode));
    });

    // Game control buttons
    nextBtn.addEventListener('click', nextQuestion);
    document.getElementById('back-to-menu').addEventListener('click', backToMenu);
    document.getElementById('play-again').addEventListener('click', playAgain);
    document.getElementById('back-to-menu-results').addEventListener('click', backToMenu);
}

// Start a game mode
function startGame(mode) {
    currentMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    timer = 0;
    selectedAnswer = null;

    // Get questions for this mode
    questions = [...gameData[mode].questions];

    // Shuffle questions for variety
    shuffleArray(questions);

    // Update UI
    modeTitle.textContent = gameData[mode].title;
    updateQuestionCounter();
    updateScore();
    updateTimer();

    // Show game screen
    showScreen(gameScreen);

    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];

    questionText.textContent = question.question;
    questionOptions.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.dataset.index = index;
        optionBtn.addEventListener('click', () => selectAnswer(index));
        questionOptions.appendChild(optionBtn);
    });

    feedback.className = 'feedback hidden';
    nextBtn.classList.add('hidden');
    selectedAnswer = null;
}

// Handle answer selection
function selectAnswer(index) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const question = questions[currentQuestionIndex];
    const optionBtns = questionOptions.querySelectorAll('.option-btn');

    // Highlight selected answer
    optionBtns[index].classList.add('selected');

    // Check if answer is correct
    const isCorrect = index === question.correct;

    if (isCorrect) {
        score++;
        optionBtns[index].classList.add('correct');
        feedback.textContent = `Correct! ${question.explanation}`;
        feedback.className = 'feedback correct';
    } else {
        optionBtns[index].classList.add('incorrect');
        optionBtns[question.correct].classList.add('correct');
        feedback.textContent = `Incorrect. ${question.explanation}`;
        feedback.className = 'feedback incorrect';
    }

    updateScore();
    nextBtn.classList.remove('hidden');
}

// Move to next question or show results
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        updateQuestionCounter();
        displayQuestion();
    } else {
        endGame();
    }
}

// End the game and show results
function endGame() {
    stopTimer();

    const percentage = Math.round((score / questions.length) * 100);

    // Display results
    finalResults.innerHTML = `
        <h3>Game Complete!</h3>
        <p>You scored ${score} out of ${questions.length} (${percentage}%)</p>
        <p>Time taken: ${formatTime(timer)}</p>
    `;

    showScreen(resultsScreen);
}

// Play the same mode again
function playAgain() {
    startGame(currentMode);
}

// Go back to main menu
function backToMenu() {
    stopTimer();
    showScreen(mainMenu);
}

// Update question counter display
function updateQuestionCounter() {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}/${currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}`;
}

// Timer functions
function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimer() {
    timerDisplay.textContent = `Time: ${formatTime(timer)}`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}



// Show a specific screen
function showScreen(screen) {
    [mainMenu, gameScreen, resultsScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
