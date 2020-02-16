const date = document.querySelector('.date');
const showMonthBtn = document.querySelector('.showMonthBtn');
const result = document.querySelector('.result');

const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

showMonthBtn.addEventListener('click', () => {
    console.log(date.value);
    let month = date.value.split('-')[1]

    result.innerHTML = `Month = ${monthArr[+month-1]}`
})