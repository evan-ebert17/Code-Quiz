//todo list:
// global variables that basically just target HTML elemtns that we are going to reference
var headerEl = document.querySelector("h1");
var paragraphEl = document.querySelector("p");
var buttonEl = document.querySelector("button");
var h2El = document.querySelector("h2");
// var ulQuestionList = document.querySelector("ul");
var startButton = document.getElementById("startbutton");
var i = 0;

//array that stores questions
var questions = [
    `Arrays in JavaScript can be used to store _____`,
    `Commonly used Data Types DO NOT include: `,
    `Conditions in an if/else statement are denoted by: `,
    `String values must be inclosed in _______ when stored as variables`,
    `A very useful tool that can be used during development and debugging for printing to the console is: `];
//array that stores answers
var answers = [
    [`Numbers`, `Other Arrays`, `Booleans`, `All of the Above`], 
    [`Strings`, `Booleans`, `Alerts`, `Numbers`],
    [`Parenthesis`, `Curly Brackets`, `Brackets`, `Quotation Marks`],
    [`Parenthesis`, `Curly Brackets`, `Brackets`, `Quotation Marks`],
    [`JavaScript`, `if/else statements`, `console.log-ing`, `Precoding`]
];
//------------------
//general things needed;
//buttonsfor the answers
//when main menu button clicked, dynamically generate html


// var mainMenu = function generateHTML() {
//     //this loops through all the elements
//     for (let i = 0; i < questions.length; i++) {

//         var questionHeader = document.createElement('h2');
//         questionHeader.textContent = questions;
//         h2El.append(questionHeader);
//     }
// }


var index = 0;
headerEl.onload =  function generateTitle() {
    document.querySelector('h1').innerHTML = "JS Quiz"
    
};



//timer 
var countdownTimer = function timer() {
    var sec = 75;
    var timer = setInterval( function(){
        document.querySelector('h3').innerHTML = 'Timer: ' + sec;
        sec--;

        if (sec < 0) {
            clearInterval(timer);
        }

    }, 1000);
};
//that goes down by 10 every time a wrong answer gets chosen


//localstorage the Highscores to be displayed
var highScore 
// with the highscores, a way to add a name / unique value to each of the highscores
//highscores determined by time left on timer, sort low to high
//"view highscores" button
//when "startquiz" is pressed, run function that is the whole quiz
//hiding and generating the whole quiz elements (probably display="none" or .style="none" or .stlye="")
//function that generates html elements dynamically on new page load
//when a button is clicked (tenative) display little message at the bottom "wrong" or "correct"
//randomly generate the order of the questions so that you dont always have the same order or layout of the answers (tenative)
//-------------------

//

// startButton.addEventListener('click', mainMenu);
startButton.addEventListener('click', countdownTimer);
