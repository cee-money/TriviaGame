var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 5;
var intervalId;
var clockRunning = false;
var index = 0;
var correctAnswer;


var questionsAnswers = [
    {   question: "In what year was Ruth Bader Ginsburg born?",
        answers: [
            {
                answer: "1933",
                correct: true
            },
            {
                answer: "1945",
                correct: false
            },
            {
                answer: "1940",
                correct: false
            },
            {
                answer: "1938",
                correct: false
            }
        ]
    },
    {   question: "What is RBG's birthplace?",
        answers: [
            {
                answer: "Philadephia", 
                correct: false
            },
            {
                answer: "Detroit",
                correct: false
            },
            {
                answer:"Brooklyn",
                correct: true
            },
            {
                answer: "Queens",
                correct: false
            }
        ]
    },
    {   question: "From which law school did Ginsburg receive her degree?",
        answers: [ 
            {   
                answer: "Penn", 
                correct: false
            },
            {
                answer: "Columbia", 
                correct: true
            },
            {
                answer: "Yale", 
                correct: false
            },
            {
                answer: "NYU",
                correct: false
            }
        ]
    },
   {    question: "In what year did RBG assume her current office as a Supreme Court justice?",
        answers: [
            {
                answer: "1990", 
                correct: false
            },
            {
                answer: "2002", 
                correct: false
            },
            {
                answer: "1993", 
                correct: true
            },
            {
                answer: "1987",
                correct: false
            }
        ]
    },
    {   question: "Under which president was Ginburg appointed to SCOTUS?",
        answers: [
            {
                answer: "Bill Clinton", 
                correct: true
            },
            {
                answer: "George H.W. Bush", 
                correct: false
            }, 
            {
                answer:"George W. Bush", 
                correct: false
            }, 
            {
                answer: "Ronald Reagan",
                correct: false
            }       
        ]
    },
   {    question: "Which accessory does RBG match to her ruling on decision days?",
        answers: [
            {
                answer: "Earrings", 
                correct: false
            },
            {
                answer: "Lipstick", 
                correct: false
            },
            {
                answer: "Collar", 
                correct: true
            },
            {
                answer: "Gloves", 
                correct: false
            },
        ]
    }
];

console.log(questionsAnswers.length);

// Function to take place when game intially starts or is played again
function startGame() {
    $("header").hide();
    $("#start-button").hide();
    $("#main-content").show();
    nextQuestion();
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

// Function to operate clock
function countDown() {
    time--;
    $("#timer").text(time);
    if (time == 0) {
        stopClock();
        totalFailMessage();
        unanswered++;
    }
};

// Function to display next question
function nextQuestion() {
    time = 5;
    $("#timer").text(time);
    startClock();
    qaDisplay();
    index++;
    $("#answer1").on("click", checkAnswer);
    $("#answer2").on("click", checkAnswer);
    $("#answer3").on("click", checkAnswer);
    $("#answer4").on("click", checkAnswer);

};


// Function for each question and answer to write to appropriate HTML location
function qaDisplay() { 
    if (index < questionsAnswers.length) {
        $(".timer-case").show();
        $("#answer2").show();
        $("#answer3").show();
        $("#answer4").show();
        $(".answer-box").show(); 
        var currentQuestionAndAnswer = questionsAnswers[index];
        $("#question").text(currentQuestionAndAnswer.question);
        $("#answer1").text(currentQuestionAndAnswer.answers[0].answer);
            if (currentQuestionAndAnswer.answers[0].correct) {
                correctAnswer = currentQuestionAndAnswer.answers[0].answer;
            }
        $("#answer2").text(currentQuestionAndAnswer.answers[1].answer);
            if (currentQuestionAndAnswer.answers[1].correct) {
                correctAnswer = currentQuestionAndAnswer.answers[1].answer;
            }
        $("#answer3").text(currentQuestionAndAnswer.answers[2].answer);
            if (currentQuestionAndAnswer.answers[2].correct) {
                correctAnswer = currentQuestionAndAnswer.answers[2].answer;
            }
        $("#answer4").text(currentQuestionAndAnswer.answers[3].answer);
            if (currentQuestionAndAnswer.answers[3].correct) {
                correctAnswer = currentQuestionAndAnswer.answers[3].answer;
            }
    } else {
        gameOver();
    }
}


// Function to assess if answer chosen is correct or not and to display timed message accordingly
function checkAnswer() {
    stopClock();
    var userGuess = $(this).text();
    if (userGuess == correctAnswer) {
        correct++;
        successMessage();
    } else {
        incorrect++;
        partialFailMessage();
    }
}

// Functions to trigger the display of correct confirmation, incorrect message, and out of time message:
function totalFailMessage() {
    $(".timer-case").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $(".answer-box").hide();
    $("#question").text("Time's up!");
    $("#answer1").text("Correct answer was: " + correctAnswer);
    setTimeout(nextQuestion, 3000);
}
function successMessage() {
    $(".timer-case").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $(".answer-box").hide();
    $("#question").text("That's correct!");
    $("#answer1").text(correctAnswer);
    setTimeout(nextQuestion, 3000);
}
function partialFailMessage() {
    $(".timer-case").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $(".answer-box").hide();
    $("#question").text("Nope, sorry!");
    $("#answer1").text("Correct answer was: " + correctAnswer);
    setTimeout(nextQuestion, 3000);
}


// Function to show counters and game over message
function gameOver() {
    stopClock();

    $("#main-content").hide();
    $("#game-over").show();
    $("#wins").html("<h1>Total correct: " + correct + "</h1>");
    $("#losses").html("<h1>Total incorrect: " + incorrect + "</h1>");
    $("#none").html("<h1>Total not answered: " + unanswered + "</h1>");
    $("#play-again").show();
};
$("#play-again-button").on("click", resetGame);

// Function to reset the game if a player chooses to play again
function resetGame () {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    startGame();
}

window.onload = function() {
    $("#main-content").hide();
    $("#game-over").hide();
    $("#play-again").hide();
};

// CLicking start will trigger the startGame function
$("#start-button").on("click", startGame);










