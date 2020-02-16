const givenArr = document.querySelector('.givenArr');
const input = document.querySelector('.input');
const resultBtn = document.querySelector('.resultBtn');
const result = document.querySelector('.result');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

givenArr.innerHTML = `[${arr}]`;

let returnElements = {
    startElements: [],
    endElements: []
}

resultBtn.addEventListener('click', () => {
    returnArrElements(Number(input.value));
})

function returnArrElements(num) {
    if (num <= arr.length && num > 0) {
        let count = num;
        for (i = 0; i < num; i++) {
            returnElements.startElements[i] = arr[i];
            returnElements.endElements[i] = arr[arr.length - count];
            count--;
        }
        result.innerHTML = `<h3>First ${num} elements: ${returnElements.startElements}</h3><br><h3>Last ${num} elements: ${returnElements.endElements}</h3>`;
        returnElements.startElements = [];
        returnElements.endElements = [];
    } else {
        alert('please enter number greater than 0 or less then the number of elemnts in the array')
    }

}