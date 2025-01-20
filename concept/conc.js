const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true, explanation: "" },
      { text: "let", correct: false, explanation: "Key Points:\n1. `let` is used to declare variables in modern JavaScript, but this answer is incorrect because `var` is also a valid keyword." },
      { text: "const", correct: false, explanation: "Key Points:\n1. `const` is used for declaring constants, not variables that can be reassigned." },
      { text: "int", correct: false, explanation: "Key Points:\n1. `int` is not used in JavaScript. JavaScript uses `var`, `let`, and `const` to declare variables." }
    ]
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answers: [
      { text: "Array", correct: false, explanation: "Key Points:\n1. An Array is a complex data type, not a primitive one." },
      { text: "Object", correct: false, explanation: "Key Points:\n1. An Object is also a complex data type, not a primitive type." },
      { text: "String", correct: true, explanation: "" },
      { text: "Function", correct: false, explanation: "Key Points:\n1. A Function is not considered a primitive type in JavaScript, it is an object." }
    ]
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    answers: [
      { text: "// comment", correct: true, explanation: "" },
      { text: "/* comment */", correct: false, explanation: "Key Points:\n1. The option `/* comment */` is a correct way to write a comment but the question asks for the correct way for a single-line comment." },
      { text: "# comment", correct: false, explanation: "Key Points:\n1. `#` is used for comments in Python, not in JavaScript." },
      { text: "<!-- comment -->", correct: false, explanation: "Key Points:\n1. `<!-- comment -->` is used in HTML, not JavaScript." }
    ]
  },
  {
    question: "Which of the following is NOT a valid JavaScript variable name?",
    answers: [
      { text: "myVariable", correct: false, explanation: "" },
      { text: "123Variable", correct: true, explanation: "Key Points:\n1. Variable names cannot start with a number in JavaScript." },
      { text: "_myVar", correct: false, explanation: "" },
      { text: "$variable", correct: false, explanation: "" }
    ]
  },
  {
    question: "What will the following code output? `console.log(2 + '2');`",
    answers: [
      { text: "22", correct: true, explanation: "" },
      { text: "4", correct: false, explanation: "Key Points:\n1. When a number is added to a string, JavaScript converts the number to a string and concatenates the two, resulting in '22'." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. No error occurs here; JavaScript handles the addition of a number to a string." },
      { text: "NaN", correct: false, explanation: "Key Points:\n1. `NaN` (Not a Number) occurs when you try to perform an invalid mathematical operation, not in this case." }
    ]
  },
  {
    question: "What is the output of the following code? `console.log(1 == '1');`",
    answers: [
      { text: "true", correct: true, explanation: "" },
      { text: "false", correct: false, explanation: "Key Points:\n1. The `==` operator performs type coercion, so `1` and `'1'` are considered equal." },
      { text: "Error", correct: false, explanation: "Key Points:\n1. There is no error here. The `==` operator compares the values, not types." },
      { text: "NaN", correct: false, explanation: "Key Points:\n1. `NaN` would occur with invalid operations, not in this comparison." }
    ]
  },
  {
    question: "Which method is used to find the length of a string in JavaScript?",
    answers: [
      { text: "length()", correct: false, explanation: "Key Points:\n1. The correct syntax is `.length` (no parentheses), as `length` is a property, not a method." },
      { text: "size()", correct: false, explanation: "Key Points:\n1. `size()` is not a valid method for strings in JavaScript." },
      { text: "getLength()", correct: false, explanation: "Key Points:\n1. `getLength()` is not a built-in JavaScript method for strings." },
      { text: "length", correct: true, explanation: "" }
    ]
  },
  {
    question: "Which of these is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false, explanation: "Key Points:\n1. `var` is used for declaring variables, not constants." },
      { text: "const", correct: true, explanation: "" },
      { text: "let", correct: false, explanation: "Key Points:\n1. `let` is used to declare variables that can be reassigned, not constants." },
      { text: "constant", correct: false, explanation: "Key Points:\n1. `constant` is not a valid keyword in JavaScript." }
    ]
  },
  {
    question: "What is the result of `typeof null` in JavaScript?",
    answers: [
      { text: "object", correct: true, explanation: "" },
      { text: "null", correct: false, explanation: "Key Points:\n1. `null` is a special value in JavaScript, but `typeof` returns 'object' due to a historical bug in the language." },
      { text: "undefined", correct: false, explanation: "Key Points:\n1. `null` is not the same as `undefined`. `null` is an object, while `undefined` is a type of its own." },
      { text: "error", correct: false, explanation: "Key Points:\n1. No error occurs with `typeof null`; the result is simply 'object'." }
    ]
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    answers: [
      { text: "=", correct: true, explanation: "" },
      { text: "+", correct: false, explanation: "Key Points:\n1. `+` is used for addition or string concatenation, not assignment." },
      { text: "-", correct: false, explanation: "Key Points:\n1. `-` is used for subtraction, not assignment." },
      { text: "==", correct: false, explanation: "Key Points:\n1. `==` is used for comparison, not assignment." }
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
