const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');
const diffBtn = document.querySelector('.diffBtn');
const result = document.querySelector('.result');

let d1;
let d2;
let diff;
let min;
let hours;
let days;
let weeks;
let months;
let years;

const getMinutes = (diff) => {
    return diff / (1000 * 60);
}

const getHours = (min) => {
    return min / 60;
}

const getDays = (hours) => {
    return hours / 24;
}

const getWeeks = (days) => {
    if (days % 7 === 0) {
        console.log('fgehh');
        return parseInt(days / 7);
    } else {
        console.log('21345678');
        return [parseInt(days / 7), days % 7];
        // return week;
    }
}

const getMonths = (days) => {
    if (days % 30 === 0) {
        return parseInt(days / 30);
    } else {
        return [parseInt(days / 30), days % 30];
    }
}


const getYears = (days) => {
    if (days % 365 === 0) {
        console.log(1);
        return parseInt(days / 365);
    } else if (days % 365 < 30) {
        console.log(2);
        return [parseFloat(days / 365), days % 365];
    } else {
        console.log(3);
        return [parseInt(days / 365), parseInt((days % 365) / 30), (days % 365) % 30];
    }
}

const findDiff = () => {
    d1 = new Date(date1.value);
    d2 = new Date(date2.value);
    diff = Math.abs(d1 - d2);
    min = getMinutes(diff);
    hours = getHours(min);
    days = getDays(hours);
    weeks = getWeeks(days);
    months = getMonths(days);
    years = getYears(days);

    console.log('min = ', min);
    console.log('hours = ', hours);
    console.log('days = ', days);
    console.log('weeks = ', weeks);
    console.log('months = ', months);
    console.log('years = ', years);

    showOutput();

}

const showOutput = () => {
    result.innerHTML = `
    <pre>
    ${years[0]} years ${years[1]} months ${years[2]} days
    or ${months[0]} months ${months[1]} days
    or ${weeks[0]} weeks ${weeks[1]} days
    or ${days} days
    or ${hours} hours
    or ${min} minutes
    </pre>
    `
}

diffBtn.addEventListener('click', () => {
    findDiff();
})