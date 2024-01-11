// CAPITAL CITY GAME //

'use strict'

let game = document.querySelector('.game');
let gameCtr = document.querySelector('.game-ctr');
let gameCorrect = document.querySelector('.game-correct');
let gameQuestion = document.querySelector('.game-question');
let input = document.querySelector('#input');
let submit = document.querySelector('.submit');
let reset = document.querySelector('.reset');
let skip = document.querySelector('.skip');
let afterSubmit = document.querySelector('.after-submit');
let attemptsCtr = document.querySelector('.attempts');
let highScoreCtr = document.querySelector('.highscore');
let isFinished = false;
let attempts = 5;
let highScore = 0;

let countries = [
   {
      countryName: 'Македонија',
      countryCapital: 'Скопје'
   }
];

let skippedCountries = [

];

let correctAnswers = [

];

let getRandom = getRandomCountry();
updateCountryText()
gameCorrect.textContent = `?`;
updateHighScore();
updateAttempts();

//------------------------------------------Ф У Н К Ц И И--------------------------------------------//

function getData() {
   fetch('countries.json') 
   .then((res) => {
       return res.json();
   })
   .then((data) => { 
      countries = data;
      console.log(countries);
   })
   .catch((err) => {
      console.error('There was an error!');
   });
}

getData();

function resetInputValue() {
   input.value = '';
}
function playGame() {
   if (isFinished) return;

   if (input.value.toUpperCase() === getRandom.countryCapital.toUpperCase()) {
      isFinished = true;
      gameCorrect.textContent = `Точен одговор!`;
      afterSubmit.textContent = `Браво, добро знаење имаш!`;
      gameCorrect.style.backgroundColor = 'green';
      attempts--;
      highScore = attempts * 12;
      updateHighScore();
      updateAttempts();
      if(isFinished) {
         
      }
      
   }

   else if(attempts <=1) {
      failedGame();
   }

   else {
      gameCorrect.textContent = `Погрешен одговор`;
      redCountryBackground();
      afterSubmit.textContent = `Обиди се повторно`;
      attempts--;
      updateAttempts();
   }
}

function pressEnterToPlay(e) {
   if (e.key === 'Enter') {
      playGame();
      resetInputValue();
   }
};

function skipFunction() {
   if (attempts >= 2) {
      getRandom = getRandomCountry();
      updateCountryText()
      attempts--;
      updateAttempts();
      resetInputValue();
   }
   else {
      failedGame();
   }
};

function failedGame() {
   isFinished = false;
   gameCorrect.textContent = 'КРАЈ!';
   redCountryBackground();
   afterSubmit.textContent = 'Жал ми е, не успеа да ја решиш.';
}

function getRandomCountry() {
   let randomCountry = Math.trunc(Math.random() * countries.length);

   return countries[randomCountry];
}

function updateAttempts() {
   return attemptsCtr.textContent = `Обиди: ${attempts}`;
}

function updateHighScore() {
   return highScoreCtr.textContent = `Скор: ${highScore}`;
}

function redCountryBackground() {
   gameCorrect.style.backgroundColor = 'red';
}
function resetGame() {
   isFinished = false;
   getRandom = getRandomCountry();
   attempts = 5;
   highScore = 0;
   updateHighScore();
   updateAttempts();
   gameCorrect.textContent = `?`;
   gameCorrect.style.backgroundColor = 'yellow';
   updateCountryText()
   resetInputValue();
   afterSubmit.textContent = '';
}

function updateCountryText() {
   gameQuestion.textContent = `Кој е главен град на ${getRandom.countryName}`;
}

//-------------------------------------------------Е В Е Н Т И----------------------------------------//

skip.addEventListener('click', skipFunction);
game.addEventListener('keydown', pressEnterToPlay);
submit.addEventListener('click', playGame);
reset.addEventListener('click', resetGame);

console.log(countries);

///////////////------------------П Р А Ш А Њ А---------------------------------------/////////////////////

// 1. КАДЕ ОДАТ ОВИЕ ЗЕМЕНИ СО FETCH МЕТОДА ПОДАТОЦИТЕ ОД JSON FORMAT,БИДЕЈЌИ КОГА ЈА ИЗЛОГИРАМ
// НИЗАТАА СО CONSOLE.LOG(COUNTRIES); НЕ МИ ГИ ДАВА И ЗОШТО КОГА ИЗБРИШАМ COUNTRIES НАДВОР ОД FETCH METODA НЕ МИ РАБОТИ 
//Т.Е. НЕ МИ ГИ ДАВА ИМИЊАТА НА ДРЖАВИТЕ, ТУКУ МОРА ДА ОСТАВАМ ТАКА ЕДЕН ОБЈЕКТ СО ИМЕ И ГЛАВЕН ГРАД НА ДРЖАВА НАДВОР ОД FETCH METHOD?/////

// 2. НЕСУМ ЗАВРШИЛ ПРЕФРЛАЊЕ ОД НИЗИ КОГА ПОГОДУВАМ ТОЧНО, НЕ ЗНАЕВ КАКО. ПРОБАВ НА ПОВЕЌЕ НАЧИНИ НО ЗАГЛАВИВ./////////