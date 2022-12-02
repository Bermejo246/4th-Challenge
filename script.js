// set variables for DOM manipulation 

const startButton = document.getElementById('start-button')
const answerButtonsElement = document.getElementById('answer-buttons')
const welcomeElement = document.getElementById('welcome')
const formElement = document.getElementById('form')
const questionSectionElement = document.getElementById('question-section')
let questionElement = document.getElementById('question')

let answer1Element = document.getElementById('answer1')
let answer2Element = document.getElementById('answer2')
let answer3Element = document.getElementById('answer3')
let answer4Element = document.getElementById('answer4')

let scoreButton = document.getElementById('score-button')
let scoresList = document.getElementById('scoresList')
let response = document.getElementById('response')



//set score to zero

let score = 0
scoreButton.textContent = score


//set countdown and conditions for time changes

let countdownClock = document.getElementById('countdown-clock')
let secondsLeft = 60;

function countdown() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    countdownClock.innerHTML = secondsLeft + " seconds remain";
    if (secondsLeft <=0 ) {
    endPage();
    }
  }, 1000);
}


// Define questions to iterate through

let questionsList = [
    {
  question: 'We use ____ to check if our local GitHub file is up to Date.',
  answers: {
  answer1: 'Git stash',
  answer2: 'Mkdir',
  answer3: 'Git status',
  answer4: 'Git commit'},
  correct: 'Git status',
},
    {
    question: 'The condition of an if/else statement is enclosed with: ',
    answers: {
    answer1: 'Curly braces',
    answer2: 'Parentheses',
    answer3: 'Backticks',
    answer4: 'Brackets'},
    correct: 'Parentheses',
},
    {
    question: 'Using JavaScript, what can arrays store? ',
    answers: {
    answer1: 'Numbers & strings',
    answer2: 'Other arrays',
    answer3: 'Booleans',
    answer4: 'All of the above'},
    correct: 'All of the above',
} ,
{
  question: 'String values must be enclosed with _________ when being assigned to variables.',
  answers: {
  answer1: 'Semicolons',
  answer2: 'Brackets',
  answer3: 'Quotes',
  answer4: 'Commas'},
  correct: 'Quotes',
},
{
  question: 'Commonly used data types do NOT include: ',
  answers: {
  answer1: 'Alerts',
  answer2: 'Booleans',
  answer3: 'Numbers',
  answer4: 'Strings'},
  correct: 'Alerts',
} 
]

let questionCounter = 0 


// Initialize game

function startGame() {
    startButton.setAttribute('class', 'hidden');
    welcomeElement.children[0].setAttribute('class', 'hidden');
    welcomeElement.children[1].setAttribute('class', 'hidden');
    questionSectionElement.setAttribute('class', 'hidden');
    questionSectionElement.classList.remove('hidden');
    countdown();
    setNextQuestion();
}

startButton.addEventListener('click', startGame)


// Function to loop through the next question based on conditions

function setNextQuestion () {
  const currentQuestion = questionsList[questionCounter] 
 
  if (!currentQuestion) {
    secondsLeft===0;
    endPage();

  } else {
    let title = currentQuestion.question;
    questionElement.children[0].textContent = title;
    var choiceOption = currentQuestion.answers
    var choice1 = choiceOption['answer1'];
    var choice2 = choiceOption['answer2'];
    var choice3 = choiceOption['answer3'];
    var choice4 = choiceOption['answer4'];
    answer1Element.textContent = choice1;
      answer1Element.setAttribute('value', choice1);
    answer2Element.textContent = choice2;
      answer2Element.setAttribute('value', choice2);
    answer3Element.textContent = choice3;
      answer3Element.setAttribute('value', choice3);
    answer4Element.textContent = choice4;
      answer4Element.setAttribute('value', choice4);  
    }
}


// Listen for user input/clicks

answer1Element.addEventListener('click', checkAnswer)
answer2Element.addEventListener('click', checkAnswer)
answer3Element.addEventListener('click', checkAnswer)
answer4Element.addEventListener('click', checkAnswer)


// Check user choice against correct answer

function checkAnswer(event) {
  response.textContent = " "
  const currentQuestion = questionsList[questionCounter] 
  const selectedButton = event.target;
  console.log(event.target.textContent);
  const isCorrect = event.target.textContent === currentQuestion.correct; 
  if (isCorrect) { 
  score++;
  console.log(score)
  questionCounter++;
  response.textContent = 'Correct!'
  console.log(questionCounter);
  setNextQuestion();
  }
  else {
  secondsLeft -= 15;
  response.textContent = 'Try again!';
  }
}


// When time is up or questions are all answered (whichever comes first), display score and request intitials

function endPage() {
  answerButtonsElement.setAttribute('class', 'hidden')
  countdownClock.textContent = 'Time is up!';
  countdownClock.setAttribute('class', 'hidden');
  questionSectionElement.textContent = `Done! \nFinal score is ${score} out of 5.`
  formElement.setAttribute('class', ' ');
} 
submitButton = document.querySelector('#submit');
scoresList.setAttribute('class', ' ');
scoreboard = document.querySelector('.scoreboard')


/// Set and retreive scores to the local storage 
// Currently, the function logs the score and initials in local storage, but
// does not successfully render the scores to the page

function renderLastScores() {
  var initials = localStorage.getItem('initials');
  var score = localStorage.getItem('score');
  formElement.setAttribute('class', 'hidden');
  scoresList.classList.remove('hidden');

  const li1 = document.createElement('li');
  li1.textContent = `Intials: ${initials} | Score: ${score}`;
  console.log(li1);
  scoreboard.appendChild(li1)
  console.log(scoreboard);

}
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  var initials = document.querySelector('#initials').value;
  localStorage.setItem('initials', initials);
  localStorage.setItem('score', score);
  
  renderLastScores();
})

