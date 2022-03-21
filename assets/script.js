//time and score variables
var timerEl = document.querySelector("countdown-timer-view");
var secondsLeft = 100;
var scoreEl = document.querySelector("#score");
//intro section
var introductionEl = document.querySelector("#introduction");
//question section
var questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var questionCount = 0;
var yesornoEl = document.querySelector("#rightorwrong");
//input section
var inputEl = document.querySelector("#final");
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
        timerEl.textContent = "Time:${secondsLeft}s";

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timeInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
 }

//function to start game on button click
function startGame() {
    introductionEl.getElementsByClassName.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;
    countdown();
    setQuestion(questionCount);
}

// function questionCounter() {
    // for (i = 0; i < questionNumber; i++;) {
        // questionNumber++;
    // }
// }

// function getNewQuestion() {
    // if (questionNumber >= 0 && questionNumber < max_Questions) {
        // displayEl.append = questions.question;
        // btn1.append = questions.optionA;
        // btn2.append = questions.optionB;
        // btn3.append = questions.optionC;
        // btn4.append = questions.optionD;
    // } 
    // else {
        // endGame();
    // }
// };
//function endGame() {
    //something to stop timer and go to input screen
//}
