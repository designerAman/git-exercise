let givenArr = document.querySelector(".givenArr");
let input = document.querySelector(".input");
let resultBtn = document.querySelector(".resultBtn");
let output = document.querySelector(".output")
let personArray = [{
        id: 1,
        name: "John",
        age: 25,
        hobbies: ['reading', 'travelling', 'music']
    },
    {
        id: 2,
        name: "smith",
        age: 27,
        hobbies: ['drawing', 'travelling', 'reading']
    },
    {
        id: 3,
        name: "Bravo",
        age: 30,
        hobbies: ['cricket', 'travelling', 'music']
    },
    {
        id: 4,
        name: "Finch",
        age: 25,
        hobbies: ['reading', 'travelling', 'cricket']
    },
    {
        id: 5,
        name: "xyz",
        age: 25,
        hobbies: ['reading', 'drawing', 'music']
    },
    {
        id: 6,
        name: "abc",
        age: 25,
        hobbies: ['reading', 'travelling', 'singing']
    },
]

let hobbiesObject = {}

const showInput = () => {
    for (let item of personArray) {
        input.innerHTML += `<pre>
        [{
            Id: ${item.id},
            Name: ${item.name},
            Age: ${item.Age},
            hobjies: [${item.hobbies}]
        }]
        </pre>`;
    }
}


const listOfHobbies = () => {
    for (let person of personArray) {
        for (let hobby of person.hobbies) {
            if (hobbiesObject[hobby]) {
                hobbiesObject[hobby].push(person.name)
            } else {
                hobbiesObject[hobby] = [person.name]
            }
        }
    }

    for (let hobby in hobbiesObject) {
        output.innerHTML += `<p><b>${hobby} : [${hobbiesObject[hobby]}]</b></p>`
    }
}

showInput();

resultBtn.addEventListener('click', () => {
    listOfHobbies()
})