var header = document.querySelector(".header");
var container = document.querySelector(".container");
var result = document.querySelector(".result");
var time = document.querySelector('#timer');
var startButton = document.querySelector('#start-button');
var submit = document.querySelecror('#name-submit');
var nameInput = document.querySelector('#name-input');
var scoreButton = document.querySelector('#score-button');
var highscoreButton = document.querySelector('#highscore-button');

const questionsAr = [
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: {
            a: "JavaScript", 
            b: "JavaScripting", 
            c: "Script", 
            d: "Scripting",
        },
        answer: "c"
    },
    {
        question: "",
        options: {
            a: "", 
            b: "", 
            c: "", 
            d: "",
        },
        answer: ""
    },
    {
        question: "",
        options: {
            a: "", 
            b: "", 
            c: "", 
            d: "",
        },
        answer: ""
    },
    {
        question: "How do you write Hello World in an alert box?",
        options: {
            a: "'alert(Hello-World);'", 
            b: "'alertbox(Hello-World);'", 
            c: "'(Hello-World);'", 
            d: "'msgbox(Hello-World);'", 
        },
        answer: "a"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: {
            a: "JavaScript", 
            b: "terminal/bash", 
            c: "for loops", 
            d: "console.log",            
        },
        answer: "d"
    }
];


var scores = [];
var points = 0;
var index = 0;
var record = [];

function start() {
    
    var restart = container;
    while(restart.hasChildNodes()) {
        restart.removeChild(restart.firstChild);
    };

    
    var viewScore = document.createElement("p");
    viewScore.classList.add("banner", "high-score");
    viewScore.textContent = "High Scores";

    
    var time = document.createElement("p");
    time.classList.add("banner", "time");
    time.textContent = "Time Remaining: ";
    var second = document.createElement("span");
    second.setAttribute('id', "second");
    time.appendChild(second);

    
    var title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Challenge Four Quiz";

    
    var text = document.createElement("p");
    text.classList.add("text");
    text.textContent = "Please take the following coding quiz. Correct answer = 1 point; Wrong answer = -10 seconds";
    
    var startBtn = document.createElement("button");
    startBtn.classList.add("btn", "btn-start");
    startBtn.textContent = "Start Quiz";

    header.appendChild(viewScore);
    header.appendChild(time);
    container.appendChild(title);
    container.appendChild(text);
    container.appendChild(startBtn);

    
    document.querySelector(".btn-start").addEventListener("click", timer);
    document.querySelector(".high-score").addEventListener("click", viewHighScore);
}
function timer() {

    var timeRemain = 60;

    var timeInterval = setInterval(function() {

        var timeEl = document.querySelector("#second");
        timeEl.textContent = timeRemain + "s";
        timeRemain--;

        if (result.textContent.match(/wrong/gi)) {
            timeRemain -= 10; 
        }

        if (timeRemain < 0 || scores.length === questionsAr.length) {

            clearInterval(timeInterval);
            timeEl.textContent = 0;
            index += questionsAr.length;

            quiz();
        }
    }, 1000);

    quiz();
}



function recordHighScore(event) {

    event.preventDefault();
}

    loadData();

    var goBack = document.createElement("button");

function loadData() {

    var load = localStorage.getItem("high scores");

    if (!load) {
        return false;
    }

    load = JSON.parse(load);

    for (var i = 0; i < load.length; i++) {
        var highScorestext = document.createElement("li");
        highScorestext.classList.add("list", "text");
        highScorestext.textContent = load[i].name + " : " + load[i].highScore;
        container.appendChild(highScorestext);
    }
}

start();