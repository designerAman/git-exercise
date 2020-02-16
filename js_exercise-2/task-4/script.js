const given = document.querySelector('.given');
const result = document.querySelector('.result');
const shuffle = document.querySelector('.shuffle');

let arr = [1, 3, 2, 4, 6, 4, 7, 3];
let shuffledArr = [];

given.innerHTML = `Given array = [${arr}]`; 

shuffle.addEventListener('click', () => {
    for (let i = 0; i < arr.length; i++) {
        let random = getRandom();
        if (shuffledArr[random]) {
            continue;
        } else {
            shuffledArr[random] = arr[i];
        }
    }

    result.innerHTML = `Shuffled array = [${shuffledArr}]`
    shuffledArr = [];
})

function getRandom() {
    let random = Math.floor(Math.random() * arr.length);
    if(shuffledArr[random]) {
        return getRandom();
    } else {
        return random;
    }

}