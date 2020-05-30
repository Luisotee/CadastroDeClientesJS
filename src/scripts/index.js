import * as utils from './validateCadastro';

document.getElementById('send').addEventListener("click", send);

const users = JSON.parse(localStorage.getItem('users')) || [];

function send() {
    console.log(users);
    if (utils.validateForm()) {
        const user = {
            nome: document.querySelector(".name").value,
            celular: document.getElementById("celular").value,
            email: document.querySelector(".email").value,
            endereco: {
                cep: document.getElementById("cep").value,
                logradouro: document.querySelector(".street").value,
                numero: document.querySelector(".number").value,
                bairro: document.querySelector(".address").value,
                cidade: document.querySelector(".city").value,
                estado: document.getElementById("uf").value,
            },
        };
        users.push(user);
        console.log(users);
        saveToLocal()
    }
}


function saveToLocal() {
    localStorage.setItem('users', JSON.stringify(users));
}