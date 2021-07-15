//todo list:
// global variables that basically just target HTML elemtns that we are going to reference
var headerEl = document.querySelector("h1");
var titleQuiz = document.getElementById("quiztitle")
var paragraphEl = document.querySelector("p");
var buttonEl = document.querySelector("#button");
var h2El = document.querySelector("h2");
// var ulQuestionList = document.querySelector("ul");
var startButton = document.getElementById("startbutton");
var startPage = document.getElementById("maindiv");
var generatedPages = document.getElementById("questionscreen");
var correctAnswer;
var questionSection = document.getElementById('questions');
var answerSection = document.getElementById('answers');
var highscoreMain = document.getElementById('highscores');
var incorrect = 10;
var qIndex = 0
var scoreholder = [];


var questions = [
    {
        question: `Arrays in JavaScript can be used to store _____`,
        choices: [`Numbers`, `Other Arrays`, `Booleans`, `All of the Above`],
        answer: `All of the Above`
    },
    {
        question: `Commonly used Data Types DO NOT include: `,
        choices: [`Strings`, `Booleans`, `Alerts`, `Numbers`],
        answer: `Alerts`
    },
    {
        question: `Conditions in an if/else statement are denoted by: `,
        choices: [ `Parenthesis`, `Curly Brackets`, `Brackets`, `Quotation Marks`],
        answer: `Parenthesis`
    },
    {
        question: `String values must be inclosed in _______ when stored as variables`,
        choices: [`Parenthesis`, `Curly Brackets`, `Brackets`,  `Quotation Marks`],
        answer: `Quotation Marks`
    },
    {
        question: `A very useful tool that can be used during development and debugging for printing to the console is: `,
        choices: [`JavaScript`, `if/else statements`,  `console.log-ing`, `Precoding`],
        answer: `console.log-ing`
    },
];

//------------------
//general things needed;
//buttonsfor the answers
//when main menu button clicked, dynamically generate html

startButton.addEventListener('click', function hideButton() {
    startButton.style.visibility = 'hidden';
})

let currentQuestion;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
var blurb = document.querySelector('.introtext');
// var blurbHeader = document.querySelector('.beginheader');

    answerSection.innerHTML = "";
    blurb.innerHTML = "";
    // blurbHeader.innerHTML = "";
    currentQuestion = questions[qIndex];
    questionSection.innerHTML = currentQuestion.question;

    for (let i = 0; i < currentQuestion.choices.length; i++) {

        const choice = currentQuestion.choices[i];

        var buttonA = document.createElement("button");
        buttonA.add
        buttonA.innerHTML = choice;
        buttonA.classList.add("choice-btn");
        buttonA.addEventListener('click', choiceSelected)
        answerSection.appendChild(buttonA);

    }

}

var sec = 75;
//timer 
var countdownTimer = function timer() {
    
    var timer = setInterval(function () {
        var timertext = document.querySelector('h3');
        timertext.innerHTML = 'Timer: ' + sec;
        sec--;
        timertext.className = "timer";

        if (sec < 0) {
            clearInterval(timer);
            timertext.style.visibility = 'hidden';
        } else if (qIndex >= questions.length) {
            clearInterval(timer);
            timertext.style.visibility = 'hidden';
        } else {
            return;
        }

    }, 1000);
};

startButton.addEventListener('click', countdownTimer);

function choiceSelected(event) {
    console.log('u picked a choice!!', event.target.innerHTML)
    if (event.target.innerHTML === currentQuestion.answer) {
        console.log('U got it right!')
    } else {
        console.log('U got it wrong!!');
        sec = sec - incorrect;
    }

    qIndex++

    if (qIndex >= questions.length) {
        endGame()
    } else {
        startQuiz()
    }
}

let buttonMake;
function endGame() {
    // clearing the screen putting new stuff on the page!
    answerSection.innerHTML = "";
    questionSection.innerHTML = "";

    var formMake = document.createElement('form');
    var inputMake = document.createElement('input');
    buttonMake = document.createElement('button');
    var scoreDisplay = document.createElement('p');
    var nameInput = document.createElement('h5');
    scoreDisplay.textContent = "High Score: " + sec + " !";
    nameInput.textContent = "Please put in your initials.";
    nameInput.style.margin = "0px 0px 5px 0px";
    buttonMake.textContent = "Submit";
    formMake.classList.add('form');
    inputMake.setAttribute("id", "inputName");
    inputMake.setAttribute("type", "text");
    console.log(inputMake);
    buttonMake.classList.add('button');

    questionSection.append(scoreDisplay);
    answerSection.append(nameInput);
    answerSection.append(formMake);
    formMake.appendChild(inputMake);
    formMake.appendChild(buttonMake);

    getScore();
}
var nameholder = [];
function getScore() {
    buttonMake.addEventListener('click', function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById("inputName");
    scoreholder.push(sec);
    nameholder.push(nameInput.value);
    console.log(nameholder)

    localStorage.setItem('initials', nameholder);
    localStorage.setItem('score', scoreholder);

    highscorePage();
});
}

function highscorePage() {
    generatedPages.innerHTML = "";
    startPage.innerHTML = "";
    var highscoreHeader = document.createElement('h1');
    var highscoreScore = document.createElement('h5');
    var highscoreButtonMake = document.createElement('button');
    highscoreButtonMake.textContent = "Return";
    highscoreHeader.textContent = 'Highscores: ';
    highscoreScore.textContent = `${localStorage.getItem('initals', nameholder)}: ${localStorage.getItem('score')}.`;
    generatedPages.append(highscoreHeader);
    highscoreHeader.appendChild(highscoreScore);
    highscoreHeader.appendChild(highscoreButtonMake);
    highscoreButtonMake.addEventListener('click', function() {
        location.reload();
    });
 };   

 var highscoreButton = document.querySelector('.highscorebutton');
 highscoreButton.addEventListener('click', function (event) {
     event.preventDefault();
     generatedPages.innerHTML = "";
     startPage.innerHTML = "";
     highscorePage();
 })