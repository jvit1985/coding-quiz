var timerEl = document.getElementById("countdown-timer-view");
var displayEl = document.getElementById("display-question");
var mainQuestionEl = document.getElementById("initial-rules");
var btn = document.getElementById("button1");

displayEl.textContent="Coding Quiz Challenge";
mainQuestionEl.textContent="Answer the questions as quickly as possible before the timer expires, but keep in mind wrong answers will deduct 10 seconds from your time/score."

var questions = [
    {
        question: "Question 1 here",
        optionA: "Answer 1 here",
        optionB: "Answer 2 here",
        optionC: "Correct Answer Here",
        optionD: "Answer 4 here",
        correctionOption: "optionC"
    },

    {
        question: "Question 2 here",
        optionA: "Correct Answer Here",
        optionB: "Answer 2 here",
        optionC: "Answer 3 here",
        optionD: "Answer 4 here",
        correctOption: "optionA"
    },

    {
        question: "Question 3 here",
        optionA: "Answer 1 here",
        optionB: "Answer 2 here",
        optionC: "Answer 3 here",
        optionD: "Correct Answer Here",
        correctOption: "optionD"
    },

    {
        question: "Question 4 here",
        optionA: "Answer 1 here",
        optionB: "Answer 2 here",
        optionC: "Correct Answer Here",
        optionD: "Answer 4 here",
        correctOption: "optionC"
    },

    {
        question: "Question 5 here",
        optionA: "Answer 1 here",
        optionB: "Correct Answer Here",
        optionC: "Answer 3 here",
        optionD: "Answer 4 here",
        correctOption: "optionB"
    }
];

btn.addEventListener("click", startGame); 

function startGame() {

    function countdown() {
        var timeLeft = 100;

        var timeInterval = setInterval(function() {
            if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
            }
            else {
            clearInterval(timeInterval);
            timerEl.textContent = 0;
            }
        }, 1000);
    };
    countdown();
};

