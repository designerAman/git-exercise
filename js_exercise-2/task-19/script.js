const givenData = document.querySelector('.givenData');
const opDiv = document.querySelector('.opDiv');
const addOp = document.querySelector('.addOp');
const deleteOp = document.querySelector('.deleteOp');
const addDiv = document.querySelector('.addDiv');
const id = document.querySelector('.id');
const name = document.querySelector('.name');
const age = document.querySelector('.age');
const positionAdd = document.querySelector('.positionAdd');
const addBtn = document.querySelector('.addBtn');
const deleteDiv = document.querySelector('.deleteDiv');
const positionDel = document.querySelector('.positionDel');
const deleteBtn = document.querySelector('.deleteBtn');
const output = document.querySelector('.output');

let userArr = [{
        Name: 'ABC',
        age: 32
    },
    {
        Name: 'DEF',
        age: 34
    },
    {
        Name: 'GHI',
        age: 31
    },
    {
        Name: 'JKL',
        age: 27
    },
    {
        Name: 'MNO',
        age: 38
    },
    {
        Name: 'PQR',
        age: 26
    },
    {
        Name: 'STU',
        age: 31
    },
    {
        Name: 'VWX',
        age: 29
    },
    {
        Name: 'YZA',
        age: 29
    },
    {
        Name: 'BCD',
        age: 25
    },
    {
        Name: 'EFG',
        age: 26
    },

];

const showGivenData = () => {
    for (let user of userArr) {
        givenData.innerHTML +=
            `<tr>
            <td>${user.Name}</td>
            <td>${user.age}</td>
        </tr>`
    }
}

const addData = () => {
    if (name.value && age.value) {
        let addP = +positionAdd.value - 1;
        if (addP <= userArr.length + 1 && addP > 0) {
            opDiv.style.display = 'initial';
            addDiv.style.display = 'none';
            // let startArr = userArr.slice(0, addP);
            let midArr = {
                Name: name.value,
                age: age.value
            }

            userArr.splice(addP, 0, midArr);
            // let endArr = userArr.slice(addP);
            // userArr = startArr.concat(midArr).concat(endArr);
            name.value = '';
            age.value = '';
            positionAdd.value = '';
            showOutput();
        } else {
            alert('please enter a proper position');
        }
    } else {
        alert('please provide Name and age');
    }
}

const deleteData = () => {
    let delP = +positionDel.value - 1;
    if (delP <= userArr.length && delP > 0) {
        opDiv.style.display = 'initial';
        deleteDiv.style.display = 'none';
        userArr.splice(delP, 1);
        positionDel.value = '';
        showOutput();
    } else {
        alert('please provide valid Position');
    }
}

const showOutput = () => {
    output.innerHTML = ''
    for (let user of userArr) {
        output.innerHTML +=
            `<tr>
            <td>${user.Name}</td>
            <td>${user.age}</td>
        </tr>`
    }
}

showGivenData();

addOp.addEventListener('click', () => {
    opDiv.style.display = 'none';
    addDiv.style.display = 'initial';
});

deleteOp.addEventListener('click', () => {
    opDiv.style.display = 'none';
    deleteDiv.style.display = 'initial';
});

addBtn.addEventListener('click', () => {
    addData();
});

deleteBtn.addEventListener('click', () => {
    deleteData();

});