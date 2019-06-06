// Start Button to begin the game

// Start button triggers:
//     Jumbotron hides
//     Start button hides
//     time remaining to be displayed (30 secs)
//     and a question with multip choice answers (which the user clicks on)

// If an answer is chosen before timer is at 0:
//     correct
//         show confirmation or victory message (timed display)
//         move on to next question
//     incorrect
//         show incorrect confirmation or message and show correct answer (timed display)
//         move on to next question

// If timer hits 0:
//     show out of time message and show correct answer (timed display)

// At the end of the game (no more questions)
//     pause or reset and stop the timer
//     show total correct answers
//     show total incorrect answers
//     show total unanswered
//     ask if the play wants to start game over (reset)


$("#start-button").on("click", function () {
    // alert("I've been clicked!");
    $("header").hide();
    $("#start-button").hide();
  });
