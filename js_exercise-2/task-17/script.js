const rowNum = document.querySelector('.rowNum');
const colNum = document.querySelector('.colNum');
const createBtn = document.querySelector('.createBtn');
const result = document.querySelector('.result');
let tableHtml = ''

const createTable = () => {
    let row = +rowNum.value;
    let col = +colNum.value;
    tableHtml = '<table> <tbody> '
    for(let i=0; i<row; i++) {
        tableHtml += `<tr>`
        for(let j=0; j<col; j++) {
            tableHtml += `<td>row-${i+1} col-${j+1}</td>`
        }
        tableHtml += `</tr>`
    }
    tableHtml += `</tbody> </table>`
    console.log(tableHtml);
}

const showTable = () => {
    result.innerHTML = tableHtml;
    tableHtml = '';
}

createBtn.addEventListener('click', () => {
    createTable();
    showTable();
})