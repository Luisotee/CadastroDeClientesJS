document.getElementById('send').addEventListener("click", send);

function send() {
    const nome = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const cell = document.getElementById("celular").value;
    const cep = document.querySelector(".cep").value;
    console.log(cell);
}