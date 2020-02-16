const inputNumber = document.querySelector('.inputNumber');
const resultBtn = document.querySelector('.resultBtn');
const result = document.querySelector('.result');
let count = 0;
let resultString = ''

resultBtn.addEventListener('click', () => {
    console.log(+inputNumber.value);
    if (isNaN(inputNumber.value)) {
       alert('Please enter proper number');
       return 0;
    }

    getResult(+inputNumber.value)
})

function getResult(value) {
    for (let num of String(value)) {
        if (+num % 2 === 0) {
            count++;
            if(count >= 2) {
                resultString = resultString + '-' + num;
            } else {
                resultString += num;
            }
        } else {
            count = 0;
            resultString += num;
        }
    }
    result.innerHTML = 'restult = ' + resultString;
    resultString = '';
    count=0;
}