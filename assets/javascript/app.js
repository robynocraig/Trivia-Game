// TO DO:

// A way to loop the below or just copy for each question?
// If timer reaches the end before they have answered all questions, end game

// Variables
var rightGuesses = 0;
var wrongGuesses = 0;
var unansweredQuestions = 0;
var number = 60;
var intervalId;

$(document).ready(function() {

  // On load, game is empty

  $("#game").hide();

  // User hits start to display questions and start timer

  $("#start").on("click", "#start-button", function() {
    $(this).slideUp();
    $("#game").show();
    timerRun();
  });

  // These events happen when the Done button is cicked on

  $("#game").on("click", "#done-button", function() {

    // Question 1 logic

    function answerCheck1 () {

      if ($("input[id='answerButton1']").is(':checked')) {

        var userAnswer = $('input[id=answerButton1]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton1']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var firstQuestion = $("#question1");

    answerCheck1(firstQuestion);

    // Question 2 logic

    function answerCheck2() {

      if ($("input[id='answerButton2']").is(':checked')) {

        var userAnswer = $('input[id=answerButton2]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton2']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var secondQuestion = $("#question2");

    answerCheck2(secondQuestion);

    // Question 3 logic

    function answerCheck3() {

      if ($("input[id='answerButton3']").is(':checked')) {

        var userAnswer = $('input[id=answerButton3]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton3']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var thirdQuestion = $("#question3");

    answerCheck3(thirdQuestion);

    // Question 4 logic

    function answerCheck4() {

      if ($("input[id='answerButton4']").is(':checked')) {

        var userAnswer = $('input[id=answerButton4]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton4']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var fourthQuestion = $("#question4");

    answerCheck4(fourthQuestion);

    // Question 5 logic

    function answerCheck5() {

      if ($("input[id='answerButton5']").is(':checked')) {

        var userAnswer = $('input[id=answerButton5]:checked', '#myForm').val();

          if (userAnswer === "right") {
            rightGuesses++;
            console.log("right answers: " + rightGuesses);
          }

          else {
            wrongGuesses++;
            console.log("wrong answers: " + wrongGuesses);
          }
        }

      else if (!$("input[id='answerButton5']").is(':checked')) {
        unansweredQuestions++;
        console.log("unanswered questions: " + unansweredQuestions);
      }
    }

    var fifthQuestion = $("#question5");

    answerCheck4(fifthQuestion);

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

  //Sets timer to total time remaining to 60 seconds and counts down

  function timerRun() {
    intervalId = setInterval(countdown, 1000);
  }

  function countdown() {

    number--;

    $("#timer").text("Time Remaining: " + number + " seconds");

      if (number === 0) {

        timerStop();

        // Hide questions
        $("#game").hide();

        // Display results
        $("#results").show().prepend("Time's Up!");
        // Right answers
        $("#rightText").text("Right Answers: " + rightGuesses);
        // Wrong answers
        $("#wrongText").text("Wrong Answers: " + wrongGuesses);
        // Questions not answered
        $("#unansweredText").text("Unanswered Questions: " + unansweredQuestions);
      }

  }

  function timerStop() {
    clearInterval(intervalId);
      if (!$("input[id='answerButton1']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton2']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton3']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton4']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
      if (!$("input[id='answerButton5']").is(':checked')) {
      unansweredQuestions++;
      console.log("unanswered questions: " + unansweredQuestions);
      }
  }

});
