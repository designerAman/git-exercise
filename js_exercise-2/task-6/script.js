const start = document.querySelector('.start');
const end = document.querySelector('.end');
const diff = document.querySelector('.diff');
const resultBtn = document.querySelector('.resultBtn');
const result = document.querySelector('.result');
let resultStr = []

let getString = (startLoop, endLoop, diff) => {
    console.log(startLoop, endLoop, +diff)
    if (startLoop < endLoop) {
        console.log(true)
        for (let i = +startLoop; i <= +endLoop; i += +diff) {
            resultStr.push(String.fromCharCode(i));
        }
    } else {
        console.log(false)
        for (let i = +startLoop; i >= +endLoop; i -= +diff) {
            resultStr.push(String.fromCharCode(i));
        }
    }
    result.innerHTML = `result String = [${resultStr}]`
    resultStr = [];
}

let getNumString = (startLoop, endLoop, diff) => {
    console.log(startLoop, endLoop, +diff)
    if (+startLoop < +endLoop) {
        console.log(true)
        for (let i = +startLoop; i <= +endLoop; i += +diff) {
            resultStr.push(i);
        }
    } else {
        console.log(false)
        for (let i = +startLoop; i >= +endLoop; i -= +diff) {
            resultStr.push(i);
        }
    }
    result.innerHTML = `result String = [${resultStr}]`
    resultStr = [];
}

let num_string_range = (start, end, diff) => {
    let lowerCase = /[a-z]/;
    let upperCase = /[A-Z]/;
    let number = /[0-9]/;

    if(!start.search(number) && !end.search(number)) {
        console.log(start, end, diff);
        getNumString(start, end, diff);
    } else {
        if(start.length > 1 || end.length > 1) {
            alert('character length should be of 1 character');
            return 0;
        } else {
            if (!start.search(lowerCase) && !end.search(lowerCase)) {
                getString(start.charCodeAt(), end.charCodeAt(), diff);
            } else if (!start.search(upperCase) && !end.search(upperCase)) {
                getString(start.charCodeAt(), end.charCodeAt(), diff);
            } else {
                alert('starting character and ending character should be of same type');
            }
        }
    }
}

resultBtn.addEventListener('click', () => {
    num_string_range(start.value, end.value, diff.value)
});