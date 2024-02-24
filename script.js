'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!✌🏻';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const setTextIntoMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreComparePrint = function (string) {
  if (score > 1) {
    document.querySelector('.message').textContent = string;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    setTextIntoMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    setTextIntoMessage('No number!🙈');

    //if win
  } else if (guess === number) {
    setTextIntoMessage('Correct Number!✌🏻');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if low/high
  } else if (guess !== number) {
    guess < number
      ? scoreComparePrint('Too low!')
      : scoreComparePrint('Too high!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  setTextIntoMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
