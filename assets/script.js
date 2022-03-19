var timerEl = document.getElementById("countdown-timer-view");
var mainEl = document.getElementById("question-display");

var allQuestions = 
"put questions here"
var questions = message.split("?");

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            timerEl.textContent ='';
            displayQuestion();
        }
    }, 1000);
}

function displayMessage() {
    var question = 0;

    var questionInterval = setInterval(function() {
        if (questions[question] === undefined) {
            clearInterval(questionInterval);
        }
        else {
            mainEl.textContent = questions[question];
            question++;
        }
    });
}

countdown();