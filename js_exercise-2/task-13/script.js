const inputStr = document.querySelector('.inputStr');
const inputNum = document.querySelector('.inputNum');
const resultBtn = document.querySelector('.resultBtn');
const result = document.querySelector('.result');
let resultArr = [];

const chopString = () => {
    for (let i = 0; i < inputStr.value.length; i += +inputNum.value) {
        let demoStr = '';
        for (let j = i; j < (i + +inputNum.value); j++) {
            demoStr = demoStr + inputStr.value.charAt(j);
        }
        resultArr.push(demoStr);
    }
    result.innerHTML = `Chopped string = [${resultArr}]`;
    resultArr = [];
}

resultBtn.addEventListener('click', () => {
    chopString();
})