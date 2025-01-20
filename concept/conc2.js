const dsQuestions = [
  {
    question: "Which of the following is a linear data structure?",
    answers: [
      { text: "Array", correct: true, explanation: "" },
      { text: "Graph", correct: false, explanation: "Key Points:\n1. Graphs are non-linear data structures, while arrays are linear." },
      { text: "Tree", correct: false, explanation: "Key Points:\n1. Trees are hierarchical and non-linear, unlike arrays." },
      { text: "Hash Table", correct: false, explanation: "Key Points:\n1. Hash tables are used for fast key-value lookups, not considered linear." }
    ]
  },
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    answers: [
      { text: "O(1)", correct: true, explanation: "" },
      { text: "O(n)", correct: false, explanation: "Key Points:\n1. Accessing an element by index in an array is a constant-time operation, O(1)." },
      { text: "O(log n)", correct: false, explanation: "Key Points:\n1. O(log n) is typically associated with binary search or balanced trees, not arrays." },
      { text: "O(n^2)", correct: false, explanation: "Key Points:\n1. This is the time complexity of algorithms like bubble sort, not array access." }
    ]
  },
  {
    question: "Which data structure follows the First In First Out (FIFO) principle?",
    answers: [
      { text: "Queue", correct: true, explanation: "" },
      { text: "Stack", correct: false, explanation: "Key Points:\n1. Stacks follow the Last In First Out (LIFO) principle, unlike queues." },
      { text: "Heap", correct: false, explanation: "Key Points:\n1. A heap is a binary tree-based structure used for priority queues, not FIFO." },
      { text: "Array", correct: false, explanation: "Key Points:\n1. While arrays can be used to implement a queue, they don’t inherently follow FIFO." }
    ]
  },
  {
    question: "In a linked list, what does each node typically contain?",
    answers: [
      { text: "Data and a reference to the next node", correct: true, explanation: "" },
      { text: "Only data", correct: false, explanation: "Key Points:\n1. A node in a linked list contains both data and a reference (or pointer) to the next node." },
      { text: "Data and a reference to the previous node", correct: false, explanation: "Key Points:\n1. Only doubly linked lists contain references to both next and previous nodes." },
      { text: "Only a reference to the next node", correct: false, explanation: "Key Points:\n1. A node must contain both data and a reference to the next node." }
    ]
  },
  {
    question: "Which data structure uses a Last In First Out (LIFO) order?",
    answers: [
      { text: "Stack", correct: true, explanation: "" },
      { text: "Queue", correct: false, explanation: "Key Points:\n1. Queues follow the First In First Out (FIFO) principle, while stacks use LIFO." },
      { text: "Array", correct: false, explanation: "Key Points:\n1. Arrays do not have an inherent LIFO or FIFO ordering." },
      { text: "Graph", correct: false, explanation: "Key Points:\n1. Graphs are used for representing networks and do not follow LIFO or FIFO." }
    ]
  },
  {
    question: "Which operation has a constant time complexity, O(1), in a stack?",
    answers: [
      { text: "Push", correct: true, explanation: "" },
      { text: "Search", correct: false, explanation: "Key Points:\n1. Searching in a stack takes linear time, O(n)." },
      { text: "Pop", correct: true, explanation: "" },
      { text: "Peek", correct: true, explanation: "Key Points:\n1. Pushing, popping, and peeking are all constant time operations in a stack." }
    ]
  },
  {
    question: "Which of these is true about a binary search tree (BST)?",
    answers: [
      { text: "The left child contains smaller values, the right child larger values", correct: true, explanation: "" },
      { text: "It’s a non-linear graph", correct: false, explanation: "Key Points:\n1. A binary search tree is a tree structure, not a graph." },
      { text: "Each node contains two or more children", correct: false, explanation: "Key Points:\n1. In a BST, each node has at most two children." },
      { text: "All nodes contain the same value", correct: false, explanation: "Key Points:\n1. In a binary search tree, nodes contain distinct values that determine their placement." }
    ]
  },
  {
    question: "Which of the following is a characteristic of a hash table?",
    answers: [
      { text: "Fast lookups using keys", correct: true, explanation: "" },
      { text: "Sorted data", correct: false, explanation: "Key Points:\n1. Hash tables do not maintain any order; they are used for fast key-value lookups." },
      { text: "Slow insertions", correct: false, explanation: "Key Points:\n1. Insertions in a hash table are typically constant time, O(1), making them fast." },
      { text: "No collisions", correct: false, explanation: "Key Points:\n1. Collisions can happen in hash tables, but they are managed using techniques like chaining." }
    ]
  },
  {
    question: "Which of the following data structures can be used to implement a stack?",
    answers: [
      { text: "Array", correct: true, explanation: "" },
      { text: "Queue", correct: false, explanation: "Key Points:\n1. A queue follows FIFO, which is opposite to the LIFO principle of a stack." },
      { text: "Graph", correct: false, explanation: "Key Points:\n1. Graphs are not used for implementing stacks." },
      { text: "Heap", correct: false, explanation: "Key Points:\n1. A heap is a tree-based structure, not used for LIFO ordering like a stack." }
    ]
  },
  {
    question: "What does 'enqueue' mean in the context of a queue?",
    answers: [
      { text: "Add an element to the back", correct: true, explanation: "" },
      { text: "Remove an element from the front", correct: false, explanation: "Key Points:\n1. Removing an element from the front is called `dequeue`, not `enqueue`." },
      { text: "Insert an element at the front", correct: false, explanation: "Key Points:\n1. In a queue, elements are inserted at the back, not the front." },
      { text: "Search for an element", correct: false, explanation: "Key Points:\n1. `Enqueue` is about adding elements to the queue, not searching." }
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
  const currentQuestion = dsQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answerButtonsElement.innerHTML = ''; // Clear previous buttons
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = answer.text;
    button.dataset.correct = answer.correct;
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  const currentQuestion = dsQuestions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers.find(answer => answer.text === selectedButton.innerText);

  if (correct === 'true') {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    scoreBarElement.style.width = `${(score / dsQuestions.length) * 100}%`;
    explanationElement.textContent = ''; // Clear explanation for correct answers
  } else {
    explanationElement.textContent = selectedAnswer.explanation; // Show explanation for incorrect answers
  }

  if (currentQuestionIndex < dsQuestions.length - 1) {
    currentQuestionIndex++;
    setTimeout(showQuestion, 1000); // Proceed to the next question after 1 second
  } else {
    setTimeout(endGame, 1000);
  }
}

function endGame() {
  questionElement.textContent = 'You completed the game!';
  answerButtonsElement.innerHTML = ''; // Clear buttons
}

startGame();
