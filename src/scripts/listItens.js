var listElement = document.querySelector('#list ul');

const users = JSON.parse(localStorage.getItem('users')) || []; // Recupera os usuarios ja registrados no Local Storage do navegador

function renderUsers() { // Renderiza os usuarios na tela
    listElement.innerHTML = '';

    for (user of users) {
        const userElement = document.createElement('li');
        const buttonElement = document.createElement('button');

        buttonElement.setAttribute('class', 'excludeButton');

        var pos = users.indexOf(user);

        // Lista os usuarios na tag <ul> do html
        const userName = document.createTextNode("Nome: " + user.nome);
        userElement.appendChild(userName);
        userElement.appendChild(document.createElement("br"));
        const userCell = document.createTextNode("Celular: " + user.celular);
        userElement.appendChild(userCell);
        userElement.appendChild(document.createElement("br"));
        const userEmail = document.createTextNode("Email: " + user.email);
        userElement.appendChild(userEmail);
        userElement.appendChild(document.createElement("br"));
        const userCep = document.createTextNode("CEP: " + user.endereco.cep);
        userElement.appendChild(userCep);
        userElement.appendChild(document.createElement("br"));
        const userStreet = document.createTextNode("Logradouro: " + user.endereco.logradouro);
        userElement.appendChild(userStreet);
        userElement.appendChild(document.createElement("br"));
        const userNumber = document.createTextNode("Numero: " + user.endereco.numero);
        userElement.appendChild(userNumber);
        userElement.appendChild(document.createElement("br"));
        const userBairro = document.createTextNode("Bairro: " + user.endereco.bairro);
        userElement.appendChild(userBairro);
        userElement.appendChild(document.createElement("br"));
        const userCity = document.createTextNode("Cidade: " + user.endereco.cidade);
        userElement.appendChild(userCity);
        userElement.appendChild(document.createElement("br"));
        const userState = document.createTextNode("Estado: " + user.endereco.estado);
        userElement.appendChild(userState);

        listElement.appendChild(userElement);

        buttonElement.setAttribute('onclick', 'deleteUser(' + pos + ')')

        const buttonText = document.createTextNode('Excluir');
        buttonElement.appendChild(buttonText);

        listElement.appendChild(buttonElement);
    }
}

function deleteUser(pos) {
    users.splice(pos, 1);
    renderUsers();
    localStorage.setItem('users', JSON.stringify(users));
}

renderUsers();