// Start Button to begin the game X

// Start button triggers:
//     Jumbotron hides X
//     Start button hides X
//     time remaining to be displayed (30 secs) X
//     and a question with multiple choice answers (which the user clicks on) X

// If an answer is chosen before timer is at 0:
// correct
// show confirmation or victory message (timed display)
 correct++;
//  move on to next question

// incorrect
// show incorrect confirmation or message and show correct answer (timed display)
 incorrect++;
// move on to next question

// If timer hits 0:
//     show out of time message and show correct answer (timed display)
 unanswered++;
 //move on to next question

// At the end of the game (no more questions)
//     pause or reset and stop the timer
//     show total correct answers
//     show total incorrect answers
//     show total unanswered
//     ask if the play wants to start game over (reset)

// // An array of trivia questions
// var Questions = ["In what year was Ruth Bader Ginsburg born?", "What is RBG's birthplace?", "From which law school did Ginsburg receive her degree?", "In what year did RBG assume her current office as a Supreme Court justice?", "Under which president was Ginburgs appointed to SCOTUS?", "Which accessory does RBG match to her ruling on decision days?"];

// // An array of corresponding answers
// var Answers = ["1933", "1945", "1940", "1938", "Philadephia", "Detroit", "Brooklyn", "Queens", "Penn", "Columbia", "Yale", "NYU", "1990", "2002", "1993", "1987", "Bill Clinton", "George H.W. Bush", "George W. Bush", "Ronald Reagan", "Earrings", "Lipstick", "Collar", "Gavel"];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 30;
var intervalId;
var clockRunning = false;


var questionsAnswers = {
    question1: "In what year was Ruth Bader Ginsburg born?",
    answers1: {
        correct: "1933",
        incorrect1: "1945",
        incorrect2: "1940",
        incorrect3: "1938"
    },
    question2: "What is RBG's birthplace?",
    answers2: {
        incorrect1: "Philadephia", 
        incorrect2: "Detroit", 
        correct: "Brooklyn", 
        incorrect3: "Queens"
    },
    question3: "From which law school did Ginsburg receive her degree?",
    answers3: {
        incorrect1: "Penn", 
        correct: "Columbia", 
        incorrect2: "Yale", 
        incorrect3: "NYU",
    },
    question4: "In what year did RBG assume her current office as a Supreme Court justice?",
    answers4: {
        incorrect1: "1990", 
        incorrect2: "2002", 
        correct: "1993", 
        incorrect3: "1987",
    },
    question5: "Under which president was Ginburgs appointed to SCOTUS?",
    answers5: {
        correct: "Bill Clinton", 
        incorrect1: "George H.W. Bush", 
        incorrect2:"George W. Bush", 
        incorrect3: "Ronald Reagan",
    },
    question6: "Which accessory does RBG match to her ruling on decision days?",
    answers6: {
        incorrect1: "Earrings", 
        incorrect2: "Lipstick", 
        correct: "Collar", 
        incorrect3: "Gavel"
    },
}

// Function to take place when game intially starts or is played again
function startGame () {
    $("header").hide();
    $("#start-button").hide();
    $("#main-content").show();
    nextQuestion();
};

// Function to display next question
function nextQuestion () {
    startClock();
    question3Func();

};

// Functions for each question to write to appropriate HTML and change location of correct answer
function question1Func () {
    $("#question").text(questionsAnswers.question1);
    $("#answer1").text(questionsAnswers.answers1.correct);
    $("#answer2").text(questionsAnswers.answers1.incorrect1);
    $("#answer3").text(questionsAnswers.answers1.incorrect2);
    $("#answer4").text(questionsAnswers.answers1.incorrect3);
};
function question2Func () {
    $("#question").text(questionsAnswers.question2);
    $("#answer1").text(questionsAnswers.answers2.incorrect1);
    $("#answer2").text(questionsAnswers.answers2.incorrect2);
    $("#answer3").text(questionsAnswers.answers2.correct);
    $("#answer4").text(questionsAnswers.answers2.incorrect3);
};
function question3Func () {
    $("#question").text(questionsAnswers.question3);
    $("#answer1").text(questionsAnswers.answers3.incorrect1);
    $("#answer2").text(questionsAnswers.answers3.correct);
    $("#answer3").text(questionsAnswers.answers3.incorrect2);
    $("#answer4").text(questionsAnswers.answers3.incorrect3);
};
function question4Func () {
    $("#question").text(questionsAnswers.question4);
    $("#answer1").text(questionsAnswers.answers4.incorrect1);
    $("#answer2").text(questionsAnswers.answers4.incorrect2);
    $("#answer3").text(questionsAnswers.answers4.correct);
    $("#answer4").text(questionsAnswers.answers4.incorrect3);
};
function question5Func () {
    $("#question").text(questionsAnswers.question5);
    $("#answer1").text(questionsAnswers.answers5.correct);
    $("#answer2").text(questionsAnswers.answers5.incorrect1);
    $("#answer3").text(questionsAnswers.answers5.incorrect2);
    $("#answer4").text(questionsAnswers.answers5.incorrect3);
};
function question6Func () {
    $("#question").text(questionsAnswers.question6);
    $("#answer1").text(questionsAnswers.answers6.incorrect1);
    $("#answer2").text(questionsAnswers.answers6.incorrect2);
    $("#answer3").text(questionsAnswers.answers6.correct);
    $("#answer4").text(questionsAnswers.answers6.incorrect3);
};

// Function to display correct confirmation, incorrect notification and correct answer, and out of time message and correct answer
function message () {

};

// Function 
function gameOver() {

};

// Function to operate clock
function countDown () {
    time--;
    $("#timer").text(time);
    if (time == 0) {
        stopClock();
    }
};

// Starts running the countDown function on intervals of 1 second
function startClock() {
    if (clockRunning === false) { // if the clock isn't already running, do the following
      intervalId = setInterval(countDown, 1 * 1000);
      clockRunning = true;
    }
};

// Stops the clock and sets clockRunning back to false. Gets called when time == 0 in the countDown function
function stopClock() {
    clearInterval(intervalId);
    clockRunning = false;
};


window.onload = function() {
    $("#main-content").hide();
};

// CLicking start  will trigger the startGame function
$("#start-button").on("click", startGame);





