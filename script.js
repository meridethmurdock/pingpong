const title = document.querySelector('.title')
const p1Button = document.querySelector('.p1Button');
const p2Button = document.querySelector('.p2Button');
const body = document.querySelector('body')
const resetButton = document.querySelector('.reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display')
const scores = document.querySelector('.score')
const winningScoreSelect = document.querySelector('#playTo');
let mode = document.querySelector('.toggle-input');



let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;



if (isGameOver === true) {
    p1Display.classList.remove('p1Button-color')
}

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            if (!isDarkMode) {
                p1Display.classList.add('winner');
            } else if (isDarkMode) {
                p1Display.classList.add('dark-mode-winner-p1')
            }
            resetButton.textContent = 'Play Again';
            p1Button.textContent = 'Player 1 wins!'
            p2Button.textContent = 'Player 2 lost!'
            p1Button.classList.remove('bubbly-button')
            p2Button.classList.remove('bubbly-button')
            p1Button.classList.remove('bubbly-button-dark-mode-p1')
            p2Button.classList.remove('bubbly-button-dark-mode-p2')

        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            if (!isDarkMode) {
                p2Display.classList.add('winner');

            } else if (isDarkMode) {
                p2Display.classList.add('dark-mode-winner-p2')
            }
            resetButton.textContent = 'Play Again';
            p2Button.textContent = 'Player 2 wins!'
            p1Button.textContent = 'Player 1 lost!'
            p1Button.classList.remove('bubbly-button')
            p2Button.classList.remove('bubbly-button')
            p1Button.classList.remove('bubbly-button-dark-mode-p1')
            p2Button.classList.remove('bubbly-button-dark-mode-p2')
        }
        p2Display.textContent = p2Score;
    }
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove('winner', 'dark-mode-winner-p1');
    p2Display.classList.remove('winner', 'dark-mode-winner-p2');
    resetButton.textContent = 'Reset';
    p1Button.textContent = 'Player One +1'
    p2Button.textContent = 'Player Two +1'
    p1Display.classList.remove('winner-dark', 'winner');
    p2Display.classList.remove('winner-dark', 'winner');
    if (isDarkMode) {
        p1Button.classList.remove('bubbly-button')
        p2Button.classList.remove('bubbly-button');
        p1Button.classList.add('bubbly-button-dark-mode-p1')
        p2Button.classList.add('bubbly-button-dark-mode-p2')
    } else {
        p1Button.classList.remove('bubbly-button-dark-mode-p1')
        p2Button.classList.remove('bubbly-button-dark-mode-p2')
        p1Button.classList.add('bubbly-button')
        p2Button.classList.add('bubbly-button')
    }
}



let isDarkMode = false;

mode.addEventListener('click', function () {
    if (isDarkMode === false) {
        body.classList.add('dark-mode-body')
        scores.classList.add('dark-mode-text')
        title.classList.add('dark-mode-text')
        title.classList.remove('title-color');
        labelSelect.classList.add('dark-mode-text')
        p1Button.classList.remove('p1Button-color')
        p1Button.classList.add('dark-mode-buttonsP1')
        p2Button.classList.remove('p2Button-color')
        p2Button.classList.add('dark-mode-buttonsP2')
        scores.classList.add('dark-mode-score');
        title.classList.add('dark-mode-title');
        resetButton.classList.remove('reset-color');
        resetButton.classList.add('dark-mode-reset');
        if (!isDarkMode && isGameOver === false) {
            p1Button.classList.remove('bubbly-button')
            p2Button.classList.remove('bubbly-button');
            p1Button.classList.add('bubbly-button-dark-mode-p1')
            p2Button.classList.add('bubbly-button-dark-mode-p2')
        }
        isDarkMode = true;

    } else {
        body.classList.remove('dark-mode-body')
        scores.classList.remove('dark-mode-text')
        title.classList.remove('dark-mode-text')
        title.classList.add('title-color');
        labelSelect.classList.remove('dark-mode-text')
        p1Button.classList.add('p1Button-color')
        p1Button.classList.remove('dark-mode-buttonsP1')
        p2Button.classList.add('p2Button-color')
        p2Button.classList.remove('dark-mode-buttonsP2')
        scores.classList.remove('dark-mode-score');
        title.classList.remove('dark-mode-title');
        resetButton.classList.add('reset-color');
        resetButton.classList.remove('dark-mode-reset');
        if (isDarkMode && isGameOver === false) {
            p1Button.classList.add('bubbly-button')
            p2Button.classList.add('bubbly-button');
            p1Button.classList.remove('bubbly-button-dark-mode-p1')
            p2Button.classList.remove('bubbly-button-dark-mode-p2')
        }
        isDarkMode = false;
    }
})




// bubbly button 

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


// for buttons in dark mode 


var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtonsDark = document.getElementsByClassName("bubbly-button-dark-mode");

for (var i = 0; i < bubblyButtonsDark.length; i++) {
    bubblyButtonsDark[i].addEventListener('click', animateButton, false);
}



var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtonsDarkP2 = document.getElementsByClassName("bubbly-button-dark-mode");

for (var i = 0; i < bubblyButtonsDarkP2.length; i++) {
    bubblyButtonsDarkP2[i].addEventListener('click', animateButton, false);
}


const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function () {
    localStorage.setItem('toggleState', toggle.checked);
});


