const questions = [
  {
    question: "What is debugging?",
    answers: [
      { text: "Finding and fixing errors in code.", correct: true },
      { text: "Writing new code.", correct: false },
      { text: "Refactoring existing code.", correct: false },
      { text: "Running the code.", correct: false }
    ]
  },
  {
    question: "Which of the following tools is commonly used for debugging?",
    answers: [
      { text: "Text editor", correct: false },
      { text: "Debugger", correct: true },
      { text: "Compiler", correct: false },
      { text: "Version control", correct: false }
    ]
  },
  {
    question: "What does a breakpoint do in debugging?",
    answers: [
      { text: "Pauses code execution at a specific line.", correct: true },
      { text: "Restarts the program.", correct: false },
      { text: "Adds new features to the code.", correct: false },
      { text: "Compiles the code.", correct: false }
    ]
  },
  {
    question: "What is the first step in debugging?",
    answers: [
      { text: "Fixing the error immediately.", correct: false },
      { text: "Reproducing the error.", correct: true },
      { text: "Testing the code.", correct: false },
      { text: "Optimizing the code.", correct: false }
    ]
  },
  {
    question: "Which type of error occurs when code syntax is incorrect?",
    answers: [
      { text: "Runtime error", correct: false },
      { text: "Logical error", correct: false },
      { text: "Syntax error", correct: true },
      { text: "Compilation error", correct: false }
    ]
  },
  {
    question: "What is a common cause of logical errors?",
    answers: [
      { text: "Incorrect syntax", correct: false },
      { text: "Using the wrong algorithm", correct: true },
      { text: "Missing semicolon", correct: false },
      { text: "Type mismatch", correct: false }
    ]
  },
  {
    question: "What does the console.log() function do?",
    answers: [
      { text: "Logs errors to the console", correct: false },
      { text: "Outputs messages to the console", correct: true },
      { text: "Stops code execution", correct: false },
      { text: "Shows a pop-up message", correct: false }
    ]
  },
  {
    question: "Which debugging technique involves stepping through code line by line?",
    answers: [
      { text: "Print debugging", correct: false },
      { text: "Interactive debugging", correct: true },
      { text: "Static analysis", correct: false },
      { text: "Dynamic analysis", correct: false }
    ]
  },
  {
    question: "What is the purpose of a stack trace?",
    answers: [
      { text: "To show the structure of data", correct: false },
      { text: "To display the sequence of function calls", correct: true },
      { text: "To log error messages", correct: false },
      { text: "To optimize performance", correct: false }
    ]
  },
  {
    question: "When should you add comments while debugging?",
    answers: [
      { text: "After fixing the code", correct: false },
      { text: "Before you start debugging", correct: false },
      { text: "While trying to understand the code", correct: true },
      { text: "Never, comments are unnecessary", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const scoreBarElement = document.getElementById('score-bar');
const explanationElement = document.getElementById('explanation'); // Reference the explanation div

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  scoreBarElement.style.width = '0%';
  explanationElement.textContent = ''; // Clear explanation
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  explanationElement.textContent = ''; // Clear explanation for each new question
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers.find(answer => answer.text === selectedButton.innerText);

  // Update score and explanation
  if (correct) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    updateScoreMeter();
    explanationElement.textContent = ''; // Clear explanation when correct answer
  } else {
    explanationElement.textContent = selectedAnswer.explanation; // Show key points explanation for the wrong answer
  }

  // Optionally: Change button colors based on correct/incorrect answers
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  // Go to next question after a short delay
  setTimeout(nextQuestion, 2000);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.style.backgroundColor = '#28a745'; // green for correct answers
  } else {
    element.style.backgroundColor = '#dc3545'; // red for wrong answers
  }
}

function clearStatusClass(element) {
  element.style.backgroundColor = '';
}

function updateScoreMeter() {
  const percentage = (score / questions.length) * 100;
  scoreBarElement.style.width = `${percentage}%`;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    explanationElement.textContent = ''; // Clear explanation when moving to the next question
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerText = `You finished the quiz. Your final score is ${score}/${questions.length}.`;
  answerButtonsElement.innerHTML = '';

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const tryAgainButton = document.createElement('button');
  tryAgainButton.classList.add('btn');
  tryAgainButton.innerText = 'Try Again';
  tryAgainButton.addEventListener('click', startGame);
  buttonContainer.appendChild(tryAgainButton);

  // Update the Back to Home button
  const homeButton = document.createElement('button');
  homeButton.classList.add('btn');
  homeButton.innerText = 'Back to Home';
  homeButton.addEventListener('click', () => {
    window.location.href = 'home.html'; // Ensure this redirects to home.html
  });
  buttonContainer.appendChild(homeButton);

  answerButtonsElement.appendChild(buttonContainer);
}

startGame();
