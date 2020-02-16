const givenData = document.querySelector('.givenData');
const idBtn = document.querySelector('.idBtn');
const nameBtn = document.querySelector('.nameBtn');
const ageBtn = document.querySelector('.ageBtn');
const outputData = document.querySelector('.outputData');

let userArr = [
    {
        id: 1,
        Name: 'Rohit Sharma',
        age: 32
    },
    {
        id: 2,
        Name: 'Shikhar Dhawan',
        age: 34
    },
    {
        id: 3,
        Name: 'Virat Kohli',
        age: 31
    },
    {
        id: 4,
        Name: 'K.L. Rahul',
        age: 27
    },
    {
        id: 5,
        Name: 'M.S. Dhoni',
        age: 38
    },
    {
        id: 6,
        Name: 'Hardik Pandya',
        age: 26
    },
    {
        id: 7,
        Name: 'Ravindra Jadeja',
        age: 31
    },
    {
        id: 8,
        Name: 'Mohammad Shami',
        age: 29
    },
    {
        id: 9,
        Name: 'Yuzvendra Chahal',
        age: 29
    },
    {
        id: 10,
        Name: 'Kuldeep Yadav',
        age: 25
    },
    {
        id: 11,
        Name: 'Jasprit Bumrah',
        age: 26
    },

];

const showGivenData = () => {
    for( let user of userArr) {
        givenData.innerHTML += 
        `<tr>
            <td>${user.id}</td>
            <td>${user.Name}</td>
            <td>${user.age}</td>
        </tr>`
    }
}

const sortById = () => {
    for(let i=1; i<userArr.length; i++) {
        for(let j=0; j<i; j++) {
            if(userArr[j].id > userArr[i].id)  {
                let temp = userArr[i];
                for(let k=i; k>j; k--) {
                    userArr[k] = userArr[k-1];
                }
                userArr[j] = temp;
                j=i;
            } else {
                continue;
            }
        }
    }
}

const sortByName = () => {
    for(let i=1; i<userArr.length; i++) {
        for(let j=0; j<i; j++) {
            if(userArr[j].Name > userArr[i].Name)  {
                let temp = userArr[i];
                for(let k=i; k>j; k--) {
                    userArr[k] = userArr[k-1];
                }
                userArr[j] = temp;
                j=i;
            } else {
                continue;
            }
        }
    }
    userArr.reverse();
}

const sortByAge = () => {
    for(let i=1; i<userArr.length; i++) {
        for(let j=0; j<i; j++) {
            if(userArr[j].age > userArr[i].age)  {
                let temp = userArr[i];
                for(let k=i; k>j; k--) {
                    userArr[k] = userArr[k-1];
                }
                userArr[j] = temp;
                j=i;
            } else {
                continue;
            }
        }
    }
}

const showOutput = () => {
    outputData.innerHTML = '';
    for( let user of userArr) {
        outputData.innerHTML += 
        `<tr>
            <td>${user.id}</td>
            <td>${user.Name}</td>
            <td>${user.age}</td>
        </tr>`
    }
}

showGivenData();

idBtn.addEventListener('click', () => {
    sortById();
    showOutput();
});

nameBtn.addEventListener('click', () => {
    sortByName();
    showOutput();
});

ageBtn.addEventListener('click', () => {
    sortByAge();
    showOutput();
});