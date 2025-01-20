const questions = [
  {
    question: "Which keyword is used to define a conditional statement in JavaScript?",
    answers: [
      { text: "if", correct: true, explanation: "" },
      { text: "for", correct: false, explanation: "Key Points:\n1. `for` is used to create loops, not conditional statements." },
      { text: "function", correct: false, explanation: "Key Points:\n1. `function` is used to define functions, not for conditional statements." },
      { text: "switch", correct: false, explanation: "Key Points:\n1. `switch` is a type of conditional statement, but the question asks for a basic one." }
    ]
  },
  {
    question: "What will this code print? `let x = 5; if (x > 3) { console.log('Yes'); }`",
    answers: [
      { text: "Yes", correct: true, explanation: "" },
      { text: "No", correct: false, explanation: "Key Points:\n1. The condition `x > 3` is true, so the code prints 'Yes'." },
      { text: "undefined", correct: false, explanation: "Key Points:\n1. The code does not print `undefined`. It prints 'Yes'." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. No error occurs, the code is correct and prints 'Yes'." }
    ]
  },
  {
    question: "Which of these is the correct syntax for a `while` loop in JavaScript?",
    answers: [
      { text: "while (condition) { code }", correct: true, explanation: "" },
      { text: "while { condition } { code }", correct: false, explanation: "Key Points:\n1. The correct syntax requires parentheses around the condition." },
      { text: "if (condition) { code } while", correct: false, explanation: "Key Points:\n1. This syntax is incorrect. `if` and `while` are separate constructs." },
      { text: "while (code) { condition }", correct: false, explanation: "Key Points:\n1. The condition should be checked inside the parentheses, not the code." }
    ]
  },
  {
    question: "Which of the following is the correct way to use a `switch` statement?",
    answers: [
      { text: "switch (expression) { case x: code; break; }", correct: true, explanation: "" },
      { text: "switch case (expression) { x: code }", correct: false, explanation: "Key Points:\n1. The correct syntax requires `switch` to be followed by the expression in parentheses." },
      { text: "switch (expression) { case: x code; }", correct: false, explanation: "Key Points:\n1. A colon (`:`) is missing after `case x` and `break` is necessary." },
      { text: "case switch (expression) { x: code }", correct: false, explanation: "Key Points:\n1. This syntax is incorrect. The `switch` comes first, not `case`." }
    ]
  },
  {
    question: "What will be printed by this code? `let x = 10; if (x < 5) { console.log('Less'); } else { console.log('More'); }`",
    answers: [
      { text: "More", correct: true, explanation: "" },
      { text: "Less", correct: false, explanation: "Key Points:\n1. Since `x` is not less than 5, the `else` part executes, printing 'More'." },
      { text: "undefined", correct: false, explanation: "Key Points:\n1. The condition is evaluated, and 'More' is printed." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. There is no error in the code, it correctly prints 'More'." }
    ]
  },
  {
    question: "Which loop is best used when you know the number of iterations beforehand?",
    answers: [
      { text: "for", correct: true, explanation: "" },
      { text: "while", correct: false, explanation: "Key Points:\n1. The `while` loop is typically used when the number of iterations is not known." },
      { text: "do while", correct: false, explanation: "Key Points:\n1. `do while` executes at least once and is also not ideal for known iteration counts." },
      { text: "switch", correct: false, explanation: "Key Points:\n1. `switch` is not a loop, it's used for conditional branching." }
    ]
  },
  {
    question: "What does the following code print? `let x = 0; while (x < 3) { console.log(x); x++; }`",
    answers: [
      { text: "0, 1, 2", correct: true, explanation: "" },
      { text: "1, 2, 3", correct: false, explanation: "Key Points:\n1. The loop starts at 0 and increments until it reaches 3, printing 0, 1, and 2." },
      { text: "0, 1, 2, 3", correct: false, explanation: "Key Points:\n1. The loop stops before reaching 3 because the condition is `x < 3`." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. There is no error in the code; it correctly prints `0, 1, 2`." }
    ]
  },
  {
    question: "Which of these is an example of a `for` loop?",
    answers: [
      { text: "for (let i = 0; i < 5; i++) { console.log(i); }", correct: true, explanation: "" },
      { text: "for { let i = 0; i < 5; i++ } { console.log(i); }", correct: false, explanation: "Key Points:\n1. The correct syntax requires parentheses around the loop condition." },
      { text: "while (i < 5) { console.log(i); i++; }", correct: false, explanation: "Key Points:\n1. This is a `while` loop, not a `for` loop." },
      { text: "if (i < 5) { console.log(i); i++; }", correct: false, explanation: "Key Points:\n1. This is an `if` statement, not a loop." }
    ]
  },
  {
    question: "What is the output of the following code? `let i = 5; if (i == 5) { console.log('Five'); } else { console.log('Not Five'); }`",
    answers: [
      { text: "Five", correct: true, explanation: "" },
      { text: "Not Five", correct: false, explanation: "Key Points:\n1. The condition `i == 5` is true, so the code prints 'Five'." },
      { text: "undefined", correct: false, explanation: "Key Points:\n1. The code does not print `undefined`. It prints 'Five'." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. There is no error in the code. It correctly prints 'Five'." }
    ]
  },
  {
    question: "Which statement correctly defines a `switch` statement in JavaScript?",
    answers: [
      { text: "switch (expression) { case value: code; break; }", correct: true, explanation: "" },
      { text: "switch { expression: value }", correct: false, explanation: "Key Points:\n1. The correct syntax includes parentheses around the expression and `case` with values." },
      { text: "if (expression) { case value: code }", correct: false, explanation: "Key Points:\n1. `if` and `switch` are separate constructs, so this syntax is incorrect." },
      { text: "case switch (expression) { value: code }", correct: false, explanation: "Key Points:\n1. The `switch` keyword comes first, followed by the expression in parentheses." }
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
