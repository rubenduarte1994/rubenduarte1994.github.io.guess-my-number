'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number 🍟';
    displayMessage('No number 🍳');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🍳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 💙' : 'Too low! 💙');
      score--; // same as: score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🍳');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//When guess is too high
/*} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 💙';
      score--; // same as: score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9B0B0B';
    }
    //When gess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 💙';
      score--; // same as: score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9B0B0B';
    }
  }
});
*/

// Ao clicar no botão de "AGAIN!" o jogo dá reset, voltanto tolamente ao início.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
});
