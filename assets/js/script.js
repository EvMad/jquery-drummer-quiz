var start = $("#startBtn");
var next = $("#nextBtn");
var tryAgain = $("#try");
var correct = $("#correct");


//hide buttons/divs on load

$(document).ready(function () {

  $(next).hide();
  $(tryAgain).hide();
  $(correct).hide();

});



$(start).on('click', function () {

  console.log("clicked Start");


  $(start).hide();

  var timerEl = $("#countdown");


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




  createQuestionEl();

});


// render question function

function createQuestionEl() {

  var qEl = $('#Q');

    //define questions array with answers

    var questions = [{
      question: "Who played drums on the original recording of Toto's 'Hold the Line'?",
      choices: ['Simon Phillips', 'Steve Gadd', 'Marvin "Smitty" Smith', 'Jeff Porcaro'],
      answer: "Jeff Porcaro",
    },
    {
      question: "Who was the very first drummer in the band Joy Division?",
      choices: ['Tony Tabac', 'Stephen Morris', 'Terry Mason', 'Steve Brotherdale'],
      answer: "Terry Mason",
    },
    {
      question: "Who played drums on John Coltrane's album 'A Love Supreme'?",
      choices: ['Max Roach', 'Tony Willams', 'Elvin Jones', 'Joe Morello'],
      answer: "Elvin Jones",
    },
    {
      question: "Which Motorhead drummer reportedly rode a hotel elevator naked, walking through the busy hotel lobby nude?",
      choices: ['Philthy Animal Taylor', 'Mikkey Dee', 'Lucas Fox', 'Pete Gill'],
      answer: "Mikkey Dee",
    },
    {
      question: "This hugely influential jazz drummer was married four times, continued to play drums after losing his hearing, and ultimately died of lung cancer:",
      choices: ['Max Roach', 'Art Blakey', 'Tony Willams', 'Gene Krupa'],
      answer: "Art Blakey",
    },
    {
      question: "This drummer has a long history of playing drums for Slayer at times when the band's more well known drummer(s) were not in the band:",
      choices: ['John Tempesta', 'Dave Lombardo', 'John Dette', 'Paul Bostaph'],
      answer: "John Dette",
    },
    {
      question: "Who played drums on Meatloaf's hit single 'I'd Do Anything for Love'?",
      choices: ['Max Weinberg', 'John "Willie" Wilcox', 'Liberty DeVitto', 'John Miceli'],
      answer: "John Miceli",
    },
    {
      question: "Who was the original drummer in George Clinton's Parliament Funkadelic?",
      choices: ['Jerome "Bigfoot" Brailey', 'Ramon "Tiki" Fulwood', 'Calvin Simon', 'Cordell "Boogie" Mosson'],
      answer: 'Ramon "Tiki" Fulwood'
    }
  ];

    // random question from array

    var currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    $(qEl).text(currentQuestion.question);

    //append answer choices to <ul>

    $('#A1').text(currentQuestion.choices[0]);
    $('#A2').text(currentQuestion.choices[1]);
    $('#A3').text(currentQuestion.choices[2]);
    $('#A4').text(currentQuestion.choices[3]);


      // function to verify answers


    //check user choice against correct answer

    // $("#answers").children().on("click", 
    
    function verifyAnswer(){

      let buttons = [ $("#btnA"), $("btnB"), $("btnC"), $("btnD") ];

      if ( buttons[0].click() === currentQuestion.answer ) {
        
        $(correct).show();

        currentQuestion.pop();
      }


      // let choiceClick = $(this);

      // if ($(choiceClick).text() === currentQuestion.answer ) {
  
      //   console.log("Clicked Correct Answer");
  
      //   $(correct).show();
  
      //   // pop completed question from array and load next question, hide correct alert
  
      //   currentQuestion.pop();
  
      //   // var newArray = questions.currentQuestion.pop();
  
      //   return;
  
      // }
  
      else if ( buttons[0].click() !== currentQuestion.answer ) {
        $(tryAgain).show();
      }

      return;
  
     

      // removed )
    };

    verifyAnswer();

  };




// write displayMessage() function for time out 
   



   







