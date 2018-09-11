$( document ).ready(function() {

//Hide divs on homepage before a game begins
    $("#hide").ready(function(){
        $(".button-submit").hide();
        $("#timer").hide();
        $("#correctAnswers").hide();
        $("#incorrectAnswers").hide();
        $(".button-reset").hide();
    });

//$("#timer").hide();
  //$("#correctAnswer").hide();
  //$("#incorrectAnswer").hide();
  //$("#submit").hide();
  //$("$reset").hide();

// 1. Start a new game

//set correct and incorrect variables to 0
var correctAnswer = 0;
var incorrectAnswer = 0;

// When a new round begins on start button click, update the score as game moves along 
function newRound(){
    updateScore();
    
    $("#questionsDisplay").hide();
    $("#timer").hide();
    $(".button-submit").hide();
    $("#correctAnswers").show();
    $("#incorrectAnswers").show();
}

$(".button-start").on("click", function() {
    $(".button-start").hide();
    showQuestionsArray();
    $("#timer").show();
    timer();


});

// Set time for players -- counter starts at 120 seconds   
function timer() {
    var number = 120;
    seconds = setInterval (function() {
    $("#timer").html('<h2> Seconds Remaining: ' + number-- + '</h2>');
        if (number === -2) {
            //$("#timer").html("<h2> Time's Up! </h2>");
            clearInterval(seconds);
            newRound();
        }
    }, 1000);
    
};

// 2. Build the Questions
// Build question array with questions, answers, and the correct answer from the object
    var questions = [{
    question: "What are the two main components of the engine cooling system in most cars?",
    answer: [
            "Air intake and turbocharger", 
            "Battery and fan", 
            "Radiator and water pump"
            ],
        correctAnswer: "Radiator and water pump"
    }, {
        question: "What happens if your car leaks or burns off all of its oil?",
        answer: [
            "It will start an oil fire", 
            "The engine will seize", 
            "It will cause oil poisoning"
            ],
        correctAnswer: "The engine will seize"
    }, {
        question: "A turbocharger is:",
        answer: [
            "A set of gears that makes the wheels turn faster", 
            "A turbine that compresses the air traveling into the engine", 
            "An injector that delivers fuel to the engine faster"
            ],
        correctAnswer: "A turbine that compresses the air traveling into the engine"
    }, {
        question: "When a car's engine is running, power to operate the radio, CD player, headlights and windshield wipers comes from the:",
        answer: [
            "Alternator", 
            "Battery", 
            "Spark plugs"
            ],
        correctAnswer: "Alternator"
    }, {
        question: "What are the three functions of engine oil?",
        answer: [
            "Cooling, cleaning, making more money for Jiffy Lube",
            "Lubrication, getting rid of exhaust smell, making gas more powerful",
            "Lubrication, cooling, cleaning"
            ],
        correctAnswer: "Lubrication, cooling, cleaning"
    }, {
        question: "In a car engine's cylinder, valves let fuel in and exhaust out. What moves these valves?",
        answer: [
            "Timing belt", 
            "Distributor", 
            "Camshaft"
            ],
        correctAnswer: "Camshaft"
    }, {
        question: "What are the four common ways to arrange an engine’s cylinders?",
        answer: [
            "V-6, V-8, HEMI, flat", 
            "Inline, V, flat, and rotary", 
            "Inline, flat, rotary, V8"
            ],
        correctAnswer: "Inline, V, flat, and rotary"
    }, {
        question: "A crankshaft's job in an engine is to:",
        answer: [
            "Change linear motion into rotational motion", 
            "Deliver fuel to the cylinders", 
            "Keep cylinder heads in place"
            ],
        correctAnswer: "Change linear motion into rotational motion"
    }, {
        question: "A car uses a four-stroke engine. The four strokes are:",
        answer: [
            "Intake, compression, combustion and exhaust", 
            "Injection, rotation, combustion and exhaust",
            "Injection, alternator, battery and exhaust"
            ],
        correctAnswer: "Intake, compression, combustion and exhaust"
    }, {
        question: "Which of these could be a cause of engine knock?",
        answer: [
            "Being low on oil",
            "Driving too fast", 
            "The wrong spark plugs"
            ],
        correctAnswer: "The wrong spark plugs",
    }];

//Show the questions array including questions and answers in the DOM
    function showQuestionsArray() {
    // for loop to show each question and update display
        for (var i = 0; i < questions.length; i++) {
            $("#questionsDisplay").append("<h3>" + questions[i].question + "</h3");
        // for loop to show each answer in display as well as the radio input
            for (var a = 0; a < questions[i].answer.length; a++) {
                $("#questionsDisplay").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].answer[a] + '"> '+ questions[i].answer[a] + '  ' );
    
            }
        }
        $(".button-submit").show();
    
        $(".button-submit").on("click", function() {
            updateScore();
            clearInterval(seconds);
            
            
            $("#timer").hide();
            $(".button-submit").hide();
            $("#questionsDisplay").hide();
    
            $("#correctAnswers").show();
            $("#incorrectAnswers").show();
    
        });
    };
    
// 3. Update the players score based on guesses  
// Update the score as the player guesses, then show the final score on the next screen   
    function updateScore () { 
    // for loop to check the users answer against the correct answer in the array
        for (var i = 0; i < questions.length; i++) {
            var userAnswer = $("input[name = 'question-" + i +"']:checked");
            if (userAnswer.val() == questions[i].correctAnswer) {
                correctAnswer++; 
    
                } else {
                    incorrectAnswer++;
                    
            }
        }
        $("#correctAnswers").append(correctAnswer);
        $("#incorrectAnswers").append(incorrectAnswer);
        $(".button-reset").show(); 
    };
    

// 6. Reset button on page to start game over
// function gameReset(){
    
// }

// $(".button-reset").on("click", function() {
//     $(".button-start").show();
//     showQuestionsArray();
//     $("#timer").show();
//     timer();
    


// });

});