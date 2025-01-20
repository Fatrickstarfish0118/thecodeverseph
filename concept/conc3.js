const questions = [
  {
    question: "Which keyword is used to define a class in JavaScript?",
    answers: [
      { text: "class", correct: true, explanation: "" },
      { text: "function", correct: false, explanation: "Key Points:\n1. `function` is used to declare a function, not a class." },
      { text: "object", correct: false, explanation: "Key Points:\n1. `object` refers to instances of a class, but not class declarations." },
      { text: "constructor", correct: false, explanation: "Key Points:\n1. `constructor` is a method inside a class, not a keyword to declare the class." }
    ]
  },
  {
    question: "What is the purpose of the `constructor` in a class?",
    answers: [
      { text: "To initialize the object when it's created", correct: true, explanation: "" },
      { text: "To define the class structure", correct: false, explanation: "Key Points:\n1. The class structure is defined by the class itself, while `constructor` initializes object properties." },
      { text: "To create methods inside the class", correct: false, explanation: "Key Points:\n1. Methods are defined inside the class body but not within the `constructor` function." },
      { text: "To handle errors in class", correct: false, explanation: "Key Points:\n1. Error handling is not the responsibility of the `constructor`." }
    ]
  },
  {
    question: "What is encapsulation in Object-Oriented Programming?",
    answers: [
      { text: "Wrapping data and methods in a class", correct: true, explanation: "" },
      { text: "Inheritance of properties", correct: false, explanation: "Key Points:\n1. Encapsulation focuses on bundling data and methods, while inheritance is a different concept." },
      { text: "Accessing object properties", correct: false, explanation: "Key Points:\n1. Encapsulation protects data, not accessing it directly." },
      { text: "Defining object prototypes", correct: false, explanation: "Key Points:\n1. Object prototypes relate to inheritance and behavior sharing." }
    ]
  },
  {
    question: "What is the purpose of inheritance in OOP?",
    answers: [
      { text: "To reuse properties and methods in a new class", correct: true, explanation: "" },
      { text: "To hide class data", correct: false, explanation: "Key Points:\n1. Inheritance allows a class to inherit methods and properties from another class." },
      { text: "To create objects", correct: false, explanation: "Key Points:\n1. Objects are created from classes, but inheritance passes down traits." },
      { text: "To initialize a class", correct: false, explanation: "Key Points:\n1. Initialization is done by the constructor, not inheritance." }
    ]
  },
  {
    question: "What is polymorphism in OOP?",
    answers: [
      { text: "Ability to take many forms", correct: true, explanation: "" },
      { text: "Using multiple classes in a program", correct: false, explanation: "Key Points:\n1. Polymorphism allows objects to be treated as instances of their parent class." },
      { text: "Overloading functions", correct: false, explanation: "Key Points:\n1. Overloading is part of polymorphism but not the definition itself." },
      { text: "Defining multiple constructors", correct: false, explanation: "Key Points:\n1. Constructors initialization is not directly tied to polymorphism." }
    ]
  },
  {
    question: "Which principle of OOP ensures that derived classes inherit from base classes?",
    answers: [
      { text: "Inheritance", correct: true, explanation: "" },
      { text: "Encapsulation", correct: false, explanation: "Key Points:\n1. Encapsulation is about restricting direct access to some of the object's components." },
      { text: "Abstraction", correct: false, explanation: "Key Points:\n1. Abstraction hides complexity, while inheritance passes traits down a class hierarchy." },
      { text: "Polymorphism", correct: false, explanation: "Key Points:\n1. Polymorphism allows methods to do different things based on the object it's acting upon." }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const scoreBarElement = document.getElementById('score-bar');
const explanationElement = document.getElementById('explanation');

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  scoreBarElement.style.width = '0%';
  explanationElement.textContent = '';
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
  explanationElement.textContent = '';
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers.find(answer => answer.text === selectedButton.innerText);

  if (correct) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    updateScoreMeter();
    explanationElement.textContent = '';
  } else {
    explanationElement.textContent = selectedAnswer.explanation;
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(() => alert("You've completed the OOP game!"), 1000);
  }
}

function setStatusClass(element, correct) {
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }
}

function updateScoreMeter() {
  const scorePercentage = (score / questions.length) * 100;
  scoreBarElement.style.width = `${scorePercentage}%`;
}

startGame();
