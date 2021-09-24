'use strict'

/*
1. timer will countdown until 0 and turn back to it starting number again.
2. when the timer below 20, it changes to yellow
3. when the timer below 10, it changes to red 
4. single start button will start it's countdown section
5. all start button will start countdown all countdown section
6. reset button will reset all countdown to 30 and stop the countdown
*/
const userSection = document.querySelector('div.userSection');
const btnA = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC = document.querySelector('#btnC');
const btnAll = document.querySelector('#btnAll');
const btnReset = document.querySelector('#btnReset');

let countA = 30,
    countB = 30,
    countC = 30,
    intervalA, intervalB, intervalC;

const startTimerA = () => {
    intervalA = setInterval(() => {
        if (countA === 0) {
            countA = 31;
            btnA.parentElement.children[1].children[0].style.color = 'greenyellow';
        }
        if (countA <= 20 && countA >= 10) btnA.parentElement.children[1].children[0].style.color = 'yellow';
        if (countA <= 10 && countA >= 0) btnA.parentElement.children[1].children[0].style.color = 'red';

        countA--;

        btnA.parentElement.children[1].children[0].textContent = countA;
    }, 1000);
};

const startTimerB = () => {
    intervalB = setInterval(() => {
        if (countB === 0) {
            countB = 31;
            btnB.parentElement.children[1].children[0].style.color = 'greenyellow';
        }
        if (countB <= 20 && countB >= 10) btnB.parentElement.children[1].children[0].style.color = 'yellow';
        if (countB <= 10 && countB >= 0) btnB.parentElement.children[1].children[0].style.color = 'red';

        countB--;

        btnB.parentElement.children[1].children[0].textContent = countB;
    }, 1000);
};

const startTimerC = () => {
    intervalC = setInterval(() => {
        if (countC === 0) {
            countC = 31;
            btnC.parentElement.children[1].children[0].style.color = 'greenyellow';
        }
        if (countC <= 20 && countC >= 10) btnC.parentElement.children[1].children[0].style.color = 'yellow';
        if (countC <= 10 && countC >= 0) btnC.parentElement.children[1].children[0].style.color = 'red';

        countC--;

        btnC.parentElement.children[1].children[0].textContent = countC;
    }, 1000);
};

const resetTimer = () => {
    countA = 30;
    countB = 30;
    countC = 30;
    btnA.parentElement.children[1].children[0].textContent = countA;
    btnB.parentElement.children[1].children[0].textContent = countB;
    btnC.parentElement.children[1].children[0].textContent = countC;
    btnA.parentElement.children[1].children[0].style.color = 'greenyellow';
    btnB.parentElement.children[1].children[0].style.color = 'greenyellow';
    btnC.parentElement.children[1].children[0].style.color = 'greenyellow';
    clearInterval(intervalA);
    clearInterval(intervalB);
    clearInterval(intervalC);
};

const startTimerAll = () => {
    resetTimer();
    startTimerA();
    startTimerB();
    startTimerC();
};

userSection.addEventListener('click', (e) => {
    if (e.target.id === 'btnA') startTimerA();
    if (e.target.id === 'btnB') startTimerB();
    if (e.target.id === 'btnC') startTimerC();
});

btnAll.addEventListener('click', startTimerAll);
btnReset.addEventListener('click', resetTimer);