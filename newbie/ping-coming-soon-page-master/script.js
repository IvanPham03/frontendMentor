const email = document.getElementById('email');
const btn = document.getElementById('btn');

function ValidateEmail(mail) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return String(mail).match(reg);
};

btn.addEventListener('click', () => {
    if (ValidateEmail(email.value) == null) {
        email.innerHTML = "";
        document.getElementById('error').classList.add('show');
        return false
    }
    document.getElementById('error').classList.remove('show');

});