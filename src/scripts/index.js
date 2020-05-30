import * as funcoes from '../scripts/teste.js'

console.log(funcoes.soma(5, 4));
document.getElementById('send').addEventListener("click", send);

function send() {
    const usuario = {
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

    console.log(usuario);
}

function saveToLocal() {
    localStorage.setItem('data', JSON.stringify(usuario));
}