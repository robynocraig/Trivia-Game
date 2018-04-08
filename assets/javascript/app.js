// TO DO:

// Timers
// Keep track of unanswered questions
// A way to loop the below or just copy for each question?

// Variables
var rightGuesses = 0;
var wrongGuesses = 0;
var unansweredQuestions = 0;

$(document).ready(function() {

  // On load, game is empty

  $("#game").hide();

  // User hits start to display questions

  $("#start").on("click", "#start-button", function() {
    $(this).slideUp();
    $("#game").show();
  });

// Sets timer to total time remaining (2 mins?) and start timer


// Click function on Done button, checking to see if the user selected the right answer or wrong answer

  $("#game").on("click", "#done-button", function() {

    // Question 1

    // Check if right answer is selected
    var userAnswer = $('input[id=rightAnswerButton]:checked', '#myForm').val();
    console.log( "Right answer selected: " +  $('input[id=rightAnswerButton]:checked', '#myForm').val() );
    console.log("userAnswer: " + userAnswer)

      // If right answer is selected, add to right guesses
      if (userAnswer === "right") {
        rightGuesses++;
        console.log("right answers: " + rightGuesses);
      }

      // If it wasn't selected, we know it's a wrong answer and the wrong guesses can be increased
      else {
        wrongGuesses++;
        console.log("wrong answers: " + wrongGuesses);
      }

    // Question 2

    // Check if right answer is selected
    var userAnswer2 = $('input[id=rightAnswerButton2]:checked', '#myForm').val();
    console.log( "Right answer selected 2: " +  $('input[id=rightAnswerButton2]:checked', '#myForm').val() );
    console.log("userAnswer2: " + userAnswer2)

        // If right answer is selected, add to right guesses
        if (userAnswer2 === "right") {
          rightGuesses++;
          console.log("right answers: " + rightGuesses);
        }

        // If it wasn't selected, we know it's a wrong answer and the wrong guesses can be increased
        else {
          wrongGuesses++;
          console.log("wrong answers: " + wrongGuesses);
        }

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


// If timer reaches the end before they have answered all questions, end game


});
