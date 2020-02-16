const input = document.querySelector(".input");
const resultBtn = document.querySelector(".resultBtn");
const output = document.querySelector(".output");

resultBtn.addEventListener('click', () => {
    let arr = input.value.split('')
    let index = arr.indexOf('@')
    let newArr = arr.map((char, i) => {
        if ((i >= 3) && (i < index - 1)) {
            return '*'
        } else {
            return char
        }
    })

    output.innerHTML = `<h2> Encoded Email : ${newArr.join('')} </h2>`
})