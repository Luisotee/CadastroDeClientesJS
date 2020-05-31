export function validateForm() {
    const name = document.querySelector(".name").value;
    const cell = document.getElementById("celular").value;
    const email = document.querySelector(".email").value;
    const cep = document.getElementById("cep").value;
    const rua = document.querySelector(".street").value;
    const num = document.querySelector(".number").value;
    const bairro = document.querySelector(".address").value;
    const city = document.querySelector(".city").value;
    const state = document.getElementById("uf").value;

    if (name == "") {
        return false;
    } else if (cell == "") {
        return false;
    } else if (!validateEmail(email)) {
        alert('E-mail invalido!!');
        return false;
    } else if (cep == "") {
        return false;
    } else if (rua == "") {
        return false;
    } else if (num == "") {
        return false;
    } else if (bairro == "") {
        return false;
    } else if (city == "") {
        return false;
    } else if (state == "") {
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}