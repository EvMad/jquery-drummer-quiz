var start = $("#startBtn");

var questions = [
            {
              question: "Who played drums on the original recording of Toto's 'Hold the Line'?",
              choices: [ 'Simon Phillips', 'Steve Gadd', 'Marvin "Smitty" Smith', 'Jeff Porcaro' ],
              correct: 3,
            },
            {
              question: "Who was the very first drummer in the band Joy Division?",
              choices: [ 'Tony Tabac', 'Stephen Morris', 'Terry Mason', 'Steve Brotherdale' ],
              correct: 2,
            },
            {
              question: "Who played drums on John Coltrane's album 'A Love Supreme'?",
              choices: [ 'Max Roach', 'Tony Willams', 'Elvin Jones', 'Joe Morello' ],
              correct: 2,
            },
            {
              question: "Which Motorhead drummer reportedly rode a hotel elevator naked, walking through the busy hotel lobby without clothes on?",
              choices: [ 'Philthy Animal Taylor', 'Mikkey Dee', 'Lucas Fox', 'Pete Gill' ],
              correct: 1,
            },
            {
              question: "This hugely influential jazz drummer was married four times, known to use heroin, continued to play drums after losing his hearing, and ultimately died of lung cancer:",
              choices: [ 'Max Roach', 'Art Blakey', 'Tony Willams', 'Gene Krupa' ],
              correct: 1
            },
            {
              question: "This drummer has a long history of playing drums for Slayer at times when the band's more well known drummer(s) were not in the band:",
              choices: [ 'John Tempesta', 'Dave Lombardo', 'John Dette', 'Paul Bostaph' ],
              correct: 2,
            },
            {
              question: "Who played drums on Meatloaf's hit single 'I'd Do Anything for Love'?",
              choices: [ 'Max Weinberg', 'John "Willie" Wilcox', 'Liberty DeVitto', 'John Miceli' ],
              correct: 3,
            },
            {
              question: "Who was the original drummer in George Clinton's Parliament Funkadelic?",
              choices: [ 'Jerome "Bigfoot" Brailey', 'Ramon "Tiki" Fulwood', 'Calvin Simon', 'Cordell "Boogie" Mosson' ],
              correct: 1,
            }
];

// on click next question function

//hide next button on load

$(document).ready(function() {

  $("#nextBtn").hide();
  $("#try").hide();

});



//
var next = $("#nextBtn");
var tryAgain = $("#try");



$(next).on('click', function(e)
  {e.preventDefault();})

  // render question function

  function createQuestionEl() {
    var qEl = $('<h2>', {id: '#Q'});

    var currentChoices = $('<li>', {id: [ '#A1', '#A2', '#A3', '#A4' ] });

    //write if/else statements for choosing correct answer button

    $(start).on('click', function() {

      console.log("clicked Start");

      $(start).hide();

      // random question from array

      var currentQuestion = questions[Math.floor(Math.random() * questions.length)];

      $(qEl).text(currentQuestion);
      $(currentChoices).text(currentQuestion.choices);

      //random question text appears

      // $(qEl).children('span').text(Math.random(questions.question));
      $(next).hide();  //redundant?

      

      // if else for correct answer
        // if($(choices).on('click') == (questions.correct))
        

        //then alert user to hit next button for new question
        // {$(next).show();}

        // else

        // {($(tryAgain).show())};



    });



  };

  


// Timer Countdown

var timerEl = $("#countdown");


$(document).click(function() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.text(timeLeft + ' seconds remaining');
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.text(timeLeft + ' second remaining');
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.text('');
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  });