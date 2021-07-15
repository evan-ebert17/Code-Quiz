//todo list:
// global variables that basically just target HTML elemtns that we are going to reference
var headerEl = document.querySelector("h1");
var titleQuiz = document.getElementById("quiztitle")
var paragraphEl = document.querySelector("p");
var buttonEl = document.querySelector("#button");
var h2El = document.querySelector("h2");
// var ulQuestionList = document.querySelector("ul");
var startButton = document.getElementById("startbutton");
var startPage = document.getElementById("menu");
var generatedPages = document.getElementById("questionscreen");
var correctAnswer;
var questionSection = document.getElementById('questions');
var answerSection = document.getElementById('answers');
var highscoreMain = document.getElementById('highscores');
var correct = 0
var incorrect = 0
var qIndex = 0
var scoreholder = [];
var nameholder = [];

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
        answer: `Alerts`
    },
    {
        question: `A very useful tool that can be used during development and debugging for printing to the console is: `,
        choices: [`JavaScript`, `if/else statements`,  `console.log-ing`, `Precoding`],
        answer: `Alerts`
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

    answerSection.innerHTML = ""

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
        timertext.className = ".timer";

        if(questions.answer) {
            return;
        } else {
            sec - 10;
        }

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

function choiceSelected(event) {
    console.log('u picked a choice!!', event.target.innerHTML)
    if (event.target.innerHTML === currentQuestion.answer) {
        console.log('U got it right!')


    } else {
        console.log('U got it wrong!!')

    }
    qIndex++

    if (qIndex >= questions.length) {
        endGame()

    } else {
        startQuiz()
    }

}

// let formMake;
// let inputMake;
// let scoreholder;
// let nameholder;
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

    // scoreDisplay.classList.add('score');
    // questionSection.append(scoreDisplay);
    questionSection.append(scoreDisplay);
    answerSection.append(nameInput);
    answerSection.append(formMake);
    formMake.appendChild(inputMake);
    formMake.appendChild(buttonMake);

    getScore();
}

function getScore() {
    buttonMake.addEventListener('click', function(event) {
    event.preventDefault();
    nameInput = document.getElementById("inputName");
    scoreholder.push(sec);
    nameholder.push(nameInput.value);
    console.log(nameholder)
    localStorage.setItem('initials', nameholder[0]);
    localStorage.setItem('score', scoreholder);
    highscorePage();
});
}

function highscorePage() {
    generatedPages.innerHTML = "";
    startPage.innerHTML = "";
    var highscoreHeader = document.createElement('h1');
    var highscoreScore = document.createElement('h5');
    highscoreHeader.textContent = 'Highscores: ';
    highscoreScore.textContent = `${localStorage.getItem('initals', nameholder[0])}: ${localStorage.getItem('score')}.`;
    generatedPages.append(highscoreHeader);
    highscoreHeader.appendChild(highscoreScore);
 }   

//that goes down by 10 every time a wrong answer gets chosen
//--- how to get ^ to work,
//pull down var sec when function endgame() is run
//clear the text content on page and append a text box and have it display the
//high score above it, also when the submit button is clicked,
//clear out all the text content again, and generate the high scorescreen and
//stick the initials and the time into localstorage and when the button is
//clicked display .localstorage by having the (example below)
// highscore.localStorage('highscorename', event.target.innerHTML)
// highscore.localStorage('timerscore', event.target.innerHTML)
// then print those in a seperate window, potentially an external HTML and
//whenever button is clicked go to the page and run function.

//localstorage the Highscores to be displayed

// with the highscores, a way to add a name / unique value to each of the highscores
//highscores determined by time left on timer, sort low to high
//"view highscores" button
//when "startquiz" is pressed, run function that is the whole quiz
//hiding and generating the whole quiz elements (probably display="none" or .style="hidden" or .stlye="")
//function that generates html elements dynamically on new page load
//when a button is clicked (tenative) display little message at the bottom "wrong" or "correct"
//randomly generate the order of the questions so that you dont always have the same order or layout of the answers (tenative)
//-------------------
startButton.addEventListener('click', countdownTimer);
