const email = document.getElementById('email');
const msg_error = document.getElementById('msg-error');
const img_error = document.getElementById('error');
const form = document.getElementsByTagName('form')[0];


email.addEventListener('input', event => {
    if (email.validity.valid) {
        // msg_error.textContent = '';
        img_error.classList.toggle('active', false);
        msg_error.classList.toggle('active', false);
    }
});

form.addEventListener('submit', event => {
    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    console.log('show');
    if (email.validity.valueMissing) {
        msg_error.textContent = 'Please enter email!';
    } else if (email.validity.typeMistach) {
        msg_error.textContent = 'Please provide a email valide!';
    } else if (email.validity.tooShort) {
        msg_error.textContent = `Email should be at least ${email.minLength} characters`;
    }
    img_error.classList.toggle('active', true);
    msg_error.classList.toggle('active', true);
};
