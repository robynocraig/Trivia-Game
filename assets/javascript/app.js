// TO DO:

// Set timer at beginning of game
// Keep track of unanswered questions
// A way to loop the below or just copy for each question?
// If timer reaches the end before they have answered all questions, end game

// Variables
var rightGuesses = 0;
var wrongGuesses = 0;
var unansweredQuestions = 0;
var number = 120000;
var intervalId;

//Sets timer to total time remaining 2 minutes and counts down

function timerRun() {
  intervalId = setInterval(countdown, 1000);
}

function countdown() {

  number--;

  $("#timer").html("Time Remaining: " + number + " seconds");

}

function timerStop() {
  clearInterval(intervalId);
}

$(document).ready(function() {

  // On load, game is empty

  $("#game").hide();

  // User hits start to display questions and start timer

  $("#start").on("click", "#start-button", function() {
    $(this).slideUp();
    $("#game").show();
    timerRun();
    console.log("Timer: " + timerRun())
  });

  // These events happen when the Done button is cicked on

  $("#game").on("click", "#done-button", function() {

    // Question 1

    // Check if right answer is selected

    function answerCheck () {

      if ($("input[id='answerButton']").is(':checked')) {

        var userAnswer = $('input[id=answerButton]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var firstQuestion = $("#question1");
    var secondQuestion = $("#question2");

    answerCheck(firstQuestion);
    answerCheck(secondQuestion);

    // Question 2

    // Check if right answer is selected
    // var userAnswer2 = $('input[id=rightAnswerButton2]:checked', '#myForm').val();
    // console.log( "Right answer selected 2: " +  $('input[id=rightAnswerButton2]:checked', '#myForm').val() );
    // console.log("userAnswer2: " + userAnswer2)
    //
    //     // If right answer is selected, add to right guesses
    //     if (userAnswer2 === "right") {
    //       rightGuesses++;
    //       console.log("right answers: " + rightGuesses);
    //     }
    //
    //     // If it wasn't selected, we know it's a wrong answer and the wrong guesses can be increased
    //     else {
    //       wrongGuesses++;
    //       console.log("wrong answers: " + wrongGuesses);
    //     }

    // Hide questions
    $("#game").hide();

    // Display results
    $("#results").show();
      // Right answers
      $("#rightText").text("Right Answers: " + rightGuesses);
      // Wrong answers
      $("#wrongText").text("Wrong Answers: " + wrongGuesses);
      // Questions not answered
      $("#unansweredText").text("Unanswered Questions: " + unansweredQuestions);

  });

});
