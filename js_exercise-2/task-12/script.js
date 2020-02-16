const input = document.querySelector(".input");
const newStr = document.querySelector(".newStr");
const insertPosition = document.querySelector(".insertPosition");
const resultBtn = document.querySelector(".resultBtn");
const output = document.querySelector(".output");

let givenString = "abcdefghij";

input.innerHTML = `<h2> Given String :- ${givenString} </h2>`

const addNewString = (position = 1) => {
    console.log(position);
    if (position <= givenString.length + 1) {
        let startString = givenString.slice(0, position);
        let endString = givenString.slice(position);
        givenString = startString.concat(newStr.value).concat(endString);
    } else {
        alert('please provide vallid position');
    }
}

const showResult = () => {
    output.innerHTML = givenString;
}


resultBtn.addEventListener('click', () => {
    if(insertPosition.value){
        addNewString(+insertPosition.value - 1);
    } else{
        addNewString(0);
    }
    showResult();
})