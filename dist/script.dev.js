"use strict";

var title = document.querySelector('.title');
var p1Button = document.querySelector('.p1Button');
var p2Button = document.querySelector('.p2Button');
var body = document.querySelector('body');
var resetButton = document.querySelector('.reset');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var scores = document.querySelector('.score');
var winningScoreSelect = document.querySelector('#playTo');
var mode = document.querySelector('.toggle-input');
var p1Score = 0;
var p2Score = 0;
var winningScore = 3;
var isGameOver = false; // scores 

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;

    if (p1Score === winningScore) {
      isGameOver = true;

      if (!isDarkMode) {
        p1Display.classList.add('winner');
      } else if (isDarkMode) {
        p1Display.classList.add('dark-mode-winner-p1');
      }

      resetButton.textContent = 'Play Again';
      p1Button.textContent = 'Player 1 wins!';
      p2Button.textContent = 'Player 2 lost!';
      p1Button.classList.remove('bubbly-button');
      p2Button.classList.remove('bubbly-button');
    }

    p1Display.textContent = p1Score;
  }
});
p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;

    if (p2Score === winningScore) {
      isGameOver = true;

      if (!isDarkMode) {
        p2Display.classList.add('winner');
      } else if (isDarkMode) {
        p2Display.classList.add('dark-mode-winner-p2');
      }

      resetButton.textContent = 'Play Again';
      p2Button.textContent = 'Player 2 wins!';
      p1Button.textContent = 'Player 1 lost!';
      p1Button.classList.remove('bubbly-button');
      p2Button.classList.remove('bubbly-button');
    }

    p2Display.textContent = p2Score;
  }
});
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = '0';
  p2Display.textContent = '0';
  p1Display.classList.remove('winner', 'dark-mode-winner-p1');
  p2Display.classList.remove('winner', 'dark-mode-winner-p2');
  resetButton.textContent = 'Reset';
  p1Button.textContent = 'Player One +1';
  p2Button.textContent = 'Player Two +1';
  p1Button.classList.add('bubbly-button');
  p2Button.classList.add('bubbly-button');
} // bubbly button 


var animateButton = function animateButton(e) {
  e.preventDefault; //reset animation

  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
} // dark mode 


function presetScheme() {
  var schemePreference = localStorage.getItem('theme');

  if (schemePreference === 'dark') {
    addDarkMode();
    isDarkMode = true;
    mode.checked = true;
  } else {
    isDarkMode = false;
  }

  mode.addEventListener('click', function (e) {
    toggleTheme(e);
  });
}

;
presetScheme();

function toggleTheme(e) {
  if (e.target.checked) {
    addDarkMode();
    localStorage.setItem('theme', 'dark');
  } else {
    removeDarkMode();
    localStorage.setItem('theme', 'light');
  }
}

function addDarkMode() {
  document.documentElement.classList.add('darkmode');
  isDarkMode = true;
}

function removeDarkMode() {
  document.documentElement.classList.remove('darkmode');
  isDarkMode = false;
}