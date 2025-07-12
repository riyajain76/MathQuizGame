let num1, num2, operator, correctAnswer;
let score = 0;
let questionNumber = 1;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const qnumEl = document.getElementById("qnum");

function generateQuestion() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  const ops = ["+", "-", "*"];
  operator = ops[Math.floor(Math.random() * ops.length)];

  if (operator === "+") correctAnswer = num1 + num2;
  else if (operator === "-") correctAnswer = num1 - num2;
  else if (operator === "*") correctAnswer = num1 * num2;

  questionEl.textContent = `Q${questionNumber}: What is ${num1} ${operator} ${num2}?`;
  answerEl.value = "";
}

function checkAnswer() {
  const userAnswer = parseInt(answerEl.value);

  if (isNaN(userAnswer)) {
    alert("Please enter a number!");
    return;
  }

  if (userAnswer === correctAnswer) {
    score++;
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! The correct answer was ${correctAnswer}.`);
  }

  scoreEl.textContent = score;
  questionNumber++;
  qnumEl.textContent = questionNumber;
  generateQuestion();
}

function restartGame() {
  score = 0;
  questionNumber = 1;
  scoreEl.textContent = score;
  qnumEl.textContent = questionNumber;
  generateQuestion();
}

generateQuestion();
