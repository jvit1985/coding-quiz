//time and score variables
var timerEl = document.querySelector("h4.time");
var secondsLeft = 100;
var scoreEl = document.querySelector("#score");
//intro section
var introductionEl = document.querySelector("#introduction");
//question section
var questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var questionCount = 0;
var yesornoEl = document.querySelector("#yesorno");
//input section
var inputEl = document.querySelector("#input");
var initialsInput = document.querySelector("#initials");
//high score section
var highscoresEl = document.querySelector("#highscores");
var highScoreListEl = document.querySelector("#high-score-list");
var highScoreList = [];
//buttons
var startBtn = document.querySelector("#start");
var answerBtn = document.querySelectorAll("button.ansBtn");
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
var submitBtn = document.querySelector("#submit");
var restartBtn = document.querySelector("#restart");
var clearScoreBtn = document.querySelector("#clearscores");
var highScoreBtn = document.querySelector("#high-score-button");

var questions = [
    {
        question: "Question 1 here",
        answers: ["1. Answer 1 here", "2. Answer 2 here", "3. Answer 3 here", "4. Answer 4 here"],
        correctAnswer: "0"
    },

    {
        question: "Question 2 here",
        answers: ["1. Answer 1 here", "2. Answer 2 here", "3. Answer 3 here", "4. Answer 4 here"],
        correctAnswer: "2"
    },

    {
        question: "Question 3 here",
        answers: ["1. Answer 1 here", "2. Answer 2 here", "3. Answer 3 here", "4. Answer 4 here"],
        correctAnswer: "3"
    },

    {
        question: "Question 4 here",
        answers: ["1. Answer 1 here", "2. Answer 2 here", "3. Answer 3 here", "4. Answer 4 here"],
        correctAnswer: "2"
    },

    {
        question: "Question 5 here",
        answers: ["1. Answer 1 here", "2. Answer 2 here", "3. Answer 3 here", "4. Answer 4 here"],
        correctAnswer: "1"
    }
];

//to start game on Start Quiz button click
startBtn.addEventListener("click", startGame);

 //function to start countdown
 function countdown() {

    var timeInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = 'Time:' + secondsLeft;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timeInterval);
            questionsEl.style.display = "none";
            inputEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
 }

//function to start game on button click
function startGame() {
    introductionEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;
    countdown();
    setQuestion(questionCount);
}

//function to display question and answers
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        answer1Btn.textContent = questions[id].answers[0];
        answer2Btn.textContent = questions[id].answers[1];
        answer3Btn.textContent = questions[id].answers[2];
        answer4Btn.textContent = questions[id].answers[3];
    }
}

//check answer and move to next question
function checkAnswer(event) {
    event.preventDefault();

    yesornoEl.style.display = "block";
    var p = document.createElement("p");
    yesornoEl.appendChild(p);

    setTimeout(function () {
        p.style.display = "none";
    }, 1000);

//check answer
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong";
    }
//increase questions index
    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

//add Score
function addScore(event) {
    event.preventDefault();

    inputEl.style.display = "none";
    highscoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    highScoreList.push({ initials: init, score: secondsLeft });

    highScoreList = highScoreList.sort((a,b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    highScoreListEl.innerHTML="";
    for (var i = 0; i < highScoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScoreList[i].initials;
        li.textContent = highScoreList[i].score;
        highScoreListEl.append(li);
    }

    storeScores();
    displayScores();
};

function storeScores() {
    localStorage.setItem("ScoreList", JSON.stringify(highScoreList));
}

function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("ScoreList"));
    if (storedScoreList !== null) {
        highScoreList = storedScoreList;
    }
}

function clearScores() {
    localStorage.clear();
    highScoreListEl.innerHTML="";
}

answerBtn.forEach(item => {
    item.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", addScore);

restartBtn.addEventListener("click", function() {
    highscoresEl.style.display = "none";
    introductionEl.style.display = "block";
    secondsLeft = 100;
    timerEl.textContent = "Time:" + secondsLeft;
});

clearScoreBtn.addEventListener("click", clearScores);

highScoreBtn.addEventListener("click", function () {
    if (highScoreListEl !== "") {
        highscoresEl.style.display = "block";
        introductionEl.style.display = "none";
        inputEl.style.display="none";
        questionsEl.style.display="none";
    }
});
