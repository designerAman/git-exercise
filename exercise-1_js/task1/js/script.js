const showTime = document.querySelector('#showTime');
const showDate = document.querySelector('#showDate');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliSeconds = document.querySelector('.milliSeconds');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
let hoursNumber;
let minutesNumber;
let secondsNumber;
let milliSecondsNumber;
let startInterval;

getDateTime();

setInterval(()=> {
    getDateTime();
}, 1000);

initialStopWatch();
getValues();

startBtn.addEventListener('click', () => {
    startStopWatch();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resumeBtn.disabled = true;
    resetBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(startInterval);
    resumeBtn.disabled = false;
    stopBtn.disabled = true;
});

resumeBtn.addEventListener('click', () => {
    startStopWatch();
    stopBtn.disabled = false;
    resumeBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    initialStopWatch();
    getValues();
    clearInterval(startInterval);
})

function getDateTime() {
    let currentDateTime = new Date();
    showTime.innerHTML = currentDateTime.toLocaleTimeString();
    let dateArr = currentDateTime.toDateString().split(' ');
    let date = `${dateArr[2]}-${dateArr[1]}-${dateArr[3]}`;
    showDate.innerHTML = date;
}

function initialStopWatch() {
    hours.textContent = `00`
    minutes.textContent = `00`
    seconds.textContent = `00`
    milliSeconds.textContent = `00`
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resumeBtn.disabled = true;
    resetBtn.disabled = true;
}

function getValues() {
    hoursNumber = hours.textContent;
    minutesNumber = minutes.textContent;
    secondsNumber = seconds.textContent;
    milliSecondsNumber = hours.textContent;
}

function startStopWatch() {
    startInterval = setInterval(() => {
        changeMilliSeconds();
    }, 10);
};

function changeMilliSeconds() {
    milliSecondsNumber++;

    if (String(milliSecondsNumber).length === 1) {
        milliSeconds.textContent = `0${milliSecondsNumber}`;
    } else {
        if (milliSecondsNumber > 99) {
            milliSecondsNumber = 0;
            changeSeconds();
        }
        milliSeconds.textContent = milliSecondsNumber;
    }
}

function changeSeconds() {
    secondsNumber++;

    if (String(secondsNumber).length === 1) {
        seconds.textContent = `0${secondsNumber}`;
    } else {
        if (secondsNumber > 59) {
            secondsNumber = 0;
            changeMinutes();
        }
        seconds.textContent = secondsNumber;
    }
}

function changeMinutes() {
    minutesNumber++;

    if (String(minutesNumber).length === 1) {
        minutes.textContent = `0${minutesNumber}`;
    } else {
        // if (minutesNumber < 60) {
        //     minutes.textContent = minutesNumber;
        // } else {
        //     minutes.textContent = `00`;
        //     minutesNumber = 0;
        //     changeHours();
        // }

        if (minutesNumber > 59) {
            minutesNumber = 0;
            changeMinutes();
        }
        minutes.textContent = minutesNumber;
    }
}

function changeHours() {
    hoursNumber++;

    if (String(hoursNumber).length === 1) {
        hours.textContent = `0${hoursNumber}`;
    } else {
        hours.textContent = hoursNumber;
    }
}