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
    } else if (email == "") {
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