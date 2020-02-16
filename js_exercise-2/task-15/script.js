const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');
const valid = document.querySelector('.valid');
const invalid = document.querySelector('.invalid');

const checkEmail = () => {
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validEmail.test(input.value) == false) 
    {
        valid.style.display = 'none';
        invalid.style.display = 'initial';
        return false;
    } else {
        valid.style.display = 'initial';
        invalid.style.display = 'none';
        return false;
    }
}

submitBtn.addEventListener('click', () => {
    checkEmail();
})