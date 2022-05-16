const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const firstBtn = document.getElementById("First");
const secondBtn = document.getElementById("Second");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");
const container = document.getElementById("box");

let currentQuestion = 0;
let score = 0;

let questions = [
  {
    question: "Canada has the longest coast line in the world",
    answers: [
      { option: "True", correctAnswer: true },
      { option: "False", correctAnswer: false },
    ],
  },
  {
    question: "Bats are blind",
    answers: [
      { option: "False", correctAnswer: true },
      { option: "True", correctAnswer: false },
    ],
  },
  {
    question: "An octopus has seven hearts.",
    answers: [
      { option: "False", correctAnswer: true },
      { option: "True", correctAnswer: false },
    ],
  },
];

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

function beginQuiz() {
  currentQuestion = 0;
  totalScore.innerHTML = questions.length;
  questionText.innerHTML = questions[currentQuestion].question;
  firstBtn.innerHTML = questions[currentQuestion].answers[0].option;
  firstBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  secondBtn.innerHTML = questions[currentQuestion].answers[1].option;
  secondBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  prevBtn.classList.add("hide");
}

beginQuiz();

function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  firstBtn.classList.remove("hide");
  secondBtn.classList.remove("hide");
  score = 0;
  userScore.innerHTML = score;
  container.classList.remove(["green", "red", "congrats"]);
  beginQuiz();
}

function next() {
  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  firstBtn.innerHTML = questions[currentQuestion].answers[0].option;
  firstBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  secondBtn.innerHTML = questions[currentQuestion].answers[1].option;
  secondBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  prevBtn.classList.remove("hide");
}
function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    nextBtn.classList.remove("hide");
    prevBtn.classList.add("hide");
  }
  questionText.innerHTML = questions[currentQuestion].question;
  firstBtn.innerHTML = questions[currentQuestion].answers[0].option;
  firstBtn.onclick = () => {
    if (questions[currentQuestion].answers[0].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  secondBtn.innerHTML = questions[currentQuestion].answers[1].option;
  secondBtn.onclick = () => {
    if (questions[currentQuestion].answers[1].correctAnswer) {
      if (score < 3) {
        score++;
        container.classList.add("green");
      }
    } else container.classList.add("red");

    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  };

  nextBtn.classList.remove("hide");
}
function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  firstBtn.classList.add("hide");
  secondBtn.classList.add("hide");
  container.classList.remove(["green", "red"]);
  questionText.innerHTML = "Congratulations!!";
  container.classList.add("congrats");
}
