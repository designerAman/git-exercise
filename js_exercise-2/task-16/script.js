const input = document.querySelector('.input');
const resultBtn = document.querySelector('.resultBtn');
const result = document.querySelector('.result');
let resultNum = ''

const convertToThousandsSeparator = () => {
    let inputNumber = +input.value;
    let num = inputNumber.toString().split('');
    num.reverse();

    for(let i=0;i<num.length; i++) {
        if((i)%3==0) {
            resultNum += ','
        }
        resultNum += num[i];
    }
    num = resultNum.split('');
    num.reverse();
    resultNum = '';
    for(let i=0; i<num.length-1; i++) {
        resultNum += num[i];
    }

    result.innerHTML = resultNum;
    resultNum = '';

}

resultBtn.addEventListener('click', () => {
    convertToThousandsSeparator();
})