const timePomodoro = document.querySelector('#pomodoro-time');
const startTime = document.querySelector('#start');

let timerId;

startTime.addEventListener('click', makeTimer);

function makeTimer() {
    if (startTime.textContent == 'stop') {
        startTime.textContent = 'start';
        clearInterval(timerId);
    } else {
        startTime.textContent = 'stop';
        timerId = setInterval(() => {
            let minutes = parseInt(timePomodoro.textContent.split(":")[0]);
            let seconds = parseInt(timePomodoro.textContent.split(":")[1]);
            seconds--;
            if (seconds == -1) {
                minutes--;
                seconds = 59;
            }
            if (minutes == 0 && seconds == 0) {
                startTime.textContent = 'start';
                clearInterval(timerId);
                timePomodoro.textContent = '25:00';
                return timePomodoro;
            }
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            timePomodoro.textContent = `${minutes}:${seconds}`;
        }, 50)
    }
};