
document.getElementById('login-submit').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value;
    console.log(emailValue);
    const userPass = document.getElementById('user-pass');
    const passValue = userPass.value;
    console.log(passValue);
    if (emailValue == 'abc@def.com' && passValue == 'secret10') {
        window.location.href = 'bank.html';
    }
})