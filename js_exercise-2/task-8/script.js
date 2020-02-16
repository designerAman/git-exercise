const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');
const diffBtn = document.querySelector('.diffBtn');
const result = document.querySelector('.result');
let resultDiff;

const dateDiff = ()  => {
    const d1 = new Date(date1.value);
    const d2 = new Date(date2.value);
    const diff = Math.abs(d1-d2)
    resultDiff = diff / (1000*60*60*24);
    result.innerHTML = `Date difference = ${resultDiff} days`;
}

diffBtn.addEventListener('click', () => {
    dateDiff()
})