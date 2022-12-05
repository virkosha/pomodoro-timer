const timer = document.querySelector('#pomodoro-time');
const btnStart = document.querySelector('.btn-big');
const btnPomodoro = document.querySelector('#pomodoro');
const btnBreak = document.querySelector('#break');
const btnReset = document.querySelector('.reset');


let timerId = null;

function format(val) {
    if (val < 10) {
        return `0${val}`;
    }
    return val;
}

btnStart.addEventListener('click', (event) => {
    if (btnStart.textContent === 'start') {
        timerId = setInterval(() => {
            let [minutes, seconds] = timer.textContent.split(":").map(Number);
            if (seconds > 0) {
                seconds--;
            } else {
                minutes--;
                seconds = 59;
            }
            if (seconds >= 0 && minutes >= 0) {
                timer.textContent = `${format(minutes)}:${format(seconds)}`;
            }
        }, 10);
        btnStart.textContent = 'stop';
    } else {
        clearInterval(timerId);
        btnStart.textContent = 'start';

    }
})



btnReset.addEventListener('click', (event) => {
    timer.textContent = '25:00';
    clearInterval(timerId);
    btnStart.textContent = 'start';

})

btnBreak.addEventListener('click', (event) => {
    timer.textContent = '05:00';
    clearInterval(timerId);
    btnBreak.classList.add('active');
    btnPomodoro.classList.remove('active');


})

btnPomodoro.addEventListener('click', (event) => {
    timer.textContent = '25:00';
    clearInterval(timerId);
    btnPomodoro.classList.add('active');
    btnBreak.classList.remove('active');
})