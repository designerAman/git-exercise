window.onload = () => {
    alert('Start')
}

const box3 = document.querySelector('.box3');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box4 = document.querySelector('.box4');
const none = document.querySelector('.none');
let index = -1;
let changeColor;

let changeColorBox2 = setInterval(() => {
    box2.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}, 3000)

box1.addEventListener('click', () => {
    box3.style.lineHeight = '50px'
    none.style.display = 'initial';
})

window.addEventListener('keyup', (event) => {
    let arr = ["red", "blue", "green", "yellow", "royalblue"];
    if (event.which === 38 || event.which === 39) {
        clearInterval(changeColor);
        changeColor = setInterval(() => {
            if (index === arr.length - 1) {
                index = 0;
            } else {
                index++;
            }
            box4.style.backgroundColor = `${arr[index]}`
            console.log(arr[index]);
        }, 5000);
        if (index === arr.length - 1) {
            index = 0;
        } else {
            index++;
        }
        box4.style.backgroundColor = `${arr[index]}`

    } else if (event.which === 37 || event.which === 40) {
        clearInterval(changeColor);
        changeColor = setInterval(() => {
            if (index < 1) {
                index = arr.length - 1;
            } else {
                index--;
            }
            box4.style.backgroundColor = `${arr[index]}`
        }, 5000);

    }
})