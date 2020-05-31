export function validateForm() {
    const name = document.querySelector(".name");
    const cell = document.getElementById("celular");
    const email = document.querySelector(".email");
    const cep = document.getElementById("cep");
    const rua = document.querySelector(".street");
    const num = document.querySelector(".number");
    const bairro = document.querySelector(".address");
    const city = document.querySelector(".city");
    const state = document.getElementById("uf");

    if (name.value == "") {
        alert('Preencha o nome!!');
        return false;
    } else if (!(cell.value.length == 15)) {
        alert('Celular incorreto!!');
        return false;
    } else if (!validateEmail(email.value)) {
        alert('E-mail invalido!!');
        return false;
    } else if (alreadyUsedEmail(email.value)) {
        alert('E-mail já utilizado!!');
        return false;
    } else if (!(cep.value.length == 9)) {
        alert('CEP invalido!!');
        return false;
    } else if (rua.value == "") {
        alert('Logradouro invalido!!');
        return false;
    } else if (!(hasNumber(num.value))) {
        alert('Numero invalido!!');
        return false;
    } else if (bairro.value == "") {
        alert('Bairro invalido!!');
        return false;
    } else if (city.value == "") {
        alert('Cidade invalida!!');
        return false;
    } else if (state.value == "") {
        return false;
    }
    const aElement = document.getElementById("aTag");
    aElement.setAttribute('href', './index.html')
    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function alreadyUsedEmail(email) {
    var isUsed = false;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(function(user) {
        var testEmail = user.email.toLowerCase();
        var originalEmail = email.toLowerCase();
        if (testEmail == originalEmail) {
            isUsed = true;
            return false;
        }
    });
    return isUsed;
}

function hasNumber(myString) {
    return /\d/.test(myString);
}