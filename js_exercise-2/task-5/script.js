const givenArr1 = document.querySelector('.givenArr1');
const givenArr2 = document.querySelector('.givenArr2');
const result = document.querySelector('.result');
const unionBtn = document.querySelector('.unionBtn');
const diffBtn = document.querySelector('.diffBtn');

let arr1 = [1,2,3,4,5,6];
let arr2 = [4,5,6,7,8,9,1];

givenArr1.innerHTML = `First array = [${arr1}]`;
givenArr2.innerHTML = `Second array = [${arr2}]`;

const getUnion = () => {
    let resultValue = [...new Set(arr1.concat(arr2))];
    console.log(resultValue);
    result.innerHTML = `union = ${resultValue}`;
}

const getDifference = () => {
    const copyArr1 = [...arr1];
    for(let i=0; i<arr2.length; i++) {
        if(copyArr1.indexOf(arr2[i]) !== -1) {
            copyArr1.splice(copyArr1.indexOf(arr2[i]), 1);
        }
    }

    console.log(copyArr1);
    result.innerHTML = `difference = ${copyArr1}`;
}

unionBtn.addEventListener('click', () => {
    getUnion();
});

diffBtn.addEventListener('click', () => {
    getDifference();
});