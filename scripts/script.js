"use strict";

const capital = document.querySelector('.capital');
const capitalQuestion = document.querySelector('.capital-question');
const input = document.getElementById('input');
const attemptsContainer = document.getElementById('attempts');
const scoreContainer = document.getElementById('score');
const resetGame = document.querySelector('.reset');
const submitGame = document.querySelector('.submit');

let capitals = ['Македонија', 'Англија', 'Шпанија', 'Белгија', 'Данска', 'Словачка', 'Португалија', 'Бразил', 'Хрватска', 'Турција', 'Словенија'];
let getCapital = getRandomCapital();
let attempts = 5;
let score = 0;
let isFinished = false;
capitalQuestion.textContent = `Кој е главен град на ${getCapital}?`;
capital.textContent = `?`;

function getRandomCapital() {
    const randomIndex = Math.floor(Math.random() * capitals.length);

    return capitals[randomIndex];
}


function reset() {
  isFinished = false;
  getCapital = getRandomCapital();
  capitalQuestion.textContent = `Кој е главен град на ${getCapital}?`;
  capital.style.removeProperty('background-color');
  attempts = 5;
  score = 0;
  attemptsContainer.textContent = `Обиди ${attempts}`;
  scoreContainer.textContent = `Поени ${score}`;
  capital.textContent = `?`;
}

function failedGame() {
    isFinished = false;
    capitalQuestion.textContent = `Обидете се повторно!`;
    capital.style.backgroundColor = 'red';
    capital.textContent = `?`;
    input.value = ``;
   

}

resetGame.addEventListener('click', reset);

submitGame.addEventListener('click', function() {
    if (isFinished) return;

    if (getCapital === 'Македонија' && input.value === 'Скопје') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
    }
    
     else if (getCapital === 'Англија' && input.value === 'Лондон') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Шпанија' && input.value === 'Мадрид') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Белгија' && input.value === 'Брисел') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Данска' && input.value === 'Копенхаген') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Словачка' && input.value === 'Братислава') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
     
     else if (getCapital === 'Португалија' && input.value === 'Лисабон') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Бразил' && input.value === 'Бразилија') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Хрватска' && input.value === 'Загреб') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Турција' && input.value === 'Анкара') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
    
     else if (getCapital === 'Словенија' && input.value === 'Љубљана') {
        isFinished = true;
        capitalQuestion.textContent = 'Браво, точен одговор!!';
        capital.style.backgroundColor = 'green';
        capital.textContent = '';
        attempts--;
        score = attempts * 10;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        scoreContainer.textContent = `Поени ${score}`;
        input.value = ``;
     }
     
     else if (attempts <= 1) {
      return failedGame();
     }

      else {
        isFinished = false;
        capital.style.backgroundColor = 'lightyellow';
        capital.textContent = `Пробај пак!`;
        attempts--;
        attemptsContainer.textContent = `Обиди ${attempts}`;
        input.value = ``;
      }

    }
)