"use strict";

// player objects
var p1 = {
  score: 0,
  button: document.querySelector('.p1Button'),
  display: document.querySelector('.p1Display')
};
var p2 = {
  score: 0,
  button: document.querySelector('.p2Button'),
  display: document.querySelector('.p2Display')
}; // customizing the winning score

var winningScore = 3;
var winningScoreSelect = document.querySelector('#playTo');
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
}); // scoring & game over 

var isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;

    if (player.score === winningScore) {
      isGameOver = true;

      if (!isDarkMode) {
        player.display.classList.add('winner');
      } else if (isDarkMode && player === p1) {
        player.display.classList.add('dark-mode-winner-p1');
      } else if (isDarkMode && player === p2) {
        player.display.classList.add('dark-mode-winner-p2');
      }

      resetButton.textContent = 'Play Again';
      player.button.textContent = 'You win!';
      opponent.button.textContent = 'Better luck next time!';
      player.button.classList.remove('bubbly-button');
      opponent.button.classList.remove('bubbly-button');
    }

    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
}); // reset button

var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1.button.textContent = 'Player One +1';
  p2.button.textContent = 'Player Two +1';

  for (var _i = 0, _arr = [p1, p2]; _i < _arr.length; _i++) {
    var p = _arr[_i];
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'dark-mode-winner-p1', 'dark-mode-winner-p2');
    p.button.classList.add('bubbly-button');
    resetButton.textContent = 'Reset';
  }
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


var mode = document.querySelector('.toggle-input');

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