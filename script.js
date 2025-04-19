const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Multi Language"],
      answer: 2
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: 2
    },
    {
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
      answer: 2
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Mozilla", "Microsoft", "Apple"],
      answer: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option-btn");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");  
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionButtons.forEach((btn, index) => {
      btn.innerText = q.options[index];
      btn.style.background = "#e0e0e0"; // reset background
      btn.disabled = false;
    });
    nextBtn.style.display = "none";
  }
  
  function selectOption(index) {
    const isCorrect = index === questions[currentQuestion].answer;
    if (isCorrect) {
      optionButtons[index].style.background = "lightgreen";
      score++;
    } else {
      optionButtons[index].style.background = "salmon";
      optionButtons[questions[currentQuestion].answer].style.background = "lightgreen";
    }
    optionButtons.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreEl.innerText = `You scored ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    loadQuestion();
  }
  
  loadQuestion();
  