const input = document.querySelector('.input');
const outputBtn = document.querySelector('.outputBtn');
const output = document.querySelector('.output');

const getOutput =() => {
    output.innerHTML = input.value;
}

outputBtn.addEventListener('click', () => {
    getOutput();
})
