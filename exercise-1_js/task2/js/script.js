const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const addButton = document.querySelector('.addButton');
const updateButton = document.querySelector('.updateButton');
const table = document.querySelector('.table');
const addHere = document.querySelector('.addHere');
let userArr = [];
let currentUserIdForUpdate;

checkUser();

addButton.addEventListener('click', function () {
    if (firstName.value.trim() != '' && lastName.value.trim() != '') {
        userArr.push({
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim()
        })
        firstName.value = '';
        lastName.value = '';
        showUsers();
    } else {
        alert('Please provide your firstName And lastName')
    }
});

updateButton.addEventListener('click', () => {
    updateUserDetails();
})

function checkUser() {
    if (userArr.length === 0) {
        table.style.display = 'none'
    } else {
        table.style.display = 'initial'
    }
}

function showUsers() {
    addHere.innerHTML = '';
    for (let i = 0; i < userArr.length; i++) {
        checkUser();
        userArr[i].id = i;
        addHere.innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td>${userArr[i].firstName}</td>
        <td>${userArr[i].lastName}</td>
        <td>
            <button type="button" onclick="editBtn(${userArr[i].id})" class="btn btn-primary mr-3 pr-2 edit"><i class="far fa-edit"></i></button>
            <button type="button" onclick="deleteBtn(${i})" class="btn btn-danger delete"><i class="far fa-trash-alt"></i></button>
        </td>
      </tr>`
    }
}

function editBtn(userId) {
    currentUserIdForUpdate = userId;
    firstName.value = userArr[userId - 1].firstName;
    lastName.value = userArr[userId - 1].lastName;
    addButton.style.display = 'none'
    updateButton.style.display = 'initial'
}

function updateUserDetails() {
    userArr[currentUserIdForUpdate - 1].firstName = firstName.value;
    userArr[currentUserIdForUpdate - 1].lastName = lastName.value;
    addButton.style.display = 'initial'
    updateButton.style.display = 'none'
    firstName.value = '';
    lastName.value = '';
    showUsers();
}

function deleteBtn(userId) {
    userArr.splice(userId,1);
    showUsers();
}