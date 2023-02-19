const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errFirstName = document.getElementById('error-first');
const errLastName = document.getElementById('error-last');
const errEmail = document.getElementById('error-email');
const errPassword = document.getElementById('error-password');
const btnSubmit = document.getElementById('submit');
const formSubmit = document.querySelector('form');

function ValidateEmail(mail) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return String(mail).match(reg);
};
const emptyValue = (value) => {
    return String(value) === '';
}

function validForm() {
    if (emptyValue(firstName.value)) {
        errFirstName.textContent = 'First name cannot be empty';
        firstName.classList.add('error');
    }
    if (emptyValue(lastName.value)) {
        errLastName.textContent = 'Last name cannot be empty';
        lastName.classList.add('error');
    }
    if (emptyValue(email.value)) {
        errEmail.textContent = 'Email cannot be empty';
        email.classList.add('error');
    }
    if (emptyValue(password.value)) {
        errPassword.textContent = 'Password cannot be empty';
        password.classList.add('error');
    }
    if (ValidateEmail(email.value)=== null) {
        errEmail.textContent = 'Looks like this is not an email';
        firstName.classList.add('error');
    }
}

formSubmit.addEventListener('submit', event => {
    event.preventDefault();
    validForm();
});