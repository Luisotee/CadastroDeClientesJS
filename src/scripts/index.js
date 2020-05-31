import * as utils from './validateCadastro';

document.getElementById('send').addEventListener("click", send);

const users = JSON.parse(localStorage.getItem('users')) || []; // Recupera os usuarios ja registrados no Local Storage do navegador

function send() {
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
        saveToLocal()
    }
}


function saveToLocal() { // Função de salvar o usuario no Local Storage
    localStorage.setItem('users', JSON.stringify(users));
}