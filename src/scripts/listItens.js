var listElement = document.querySelector('#list ul');

const users = JSON.parse(localStorage.getItem('users')) || [];

function renderUsers() {
    listElement.innerHTML = '';

    for (user of users) {
        const userElement = document.createElement('li');
        const linkElement = document.createElement('button');

        linkElement.setAttribute('class', 'excludeButton');

        var pos = users.indexOf(user);

        const userRegister = document.createTextNode("Registro: " + user.registro);
        userElement.appendChild(userRegister);
        userElement.appendChild(document.createElement("br"));
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

        //linkElement.addEventListener("click", deleteUser(pos));
        linkElement.setAttribute('onclick', 'deleteUser(' + pos + ')')
        const linktext = document.createTextNode('Excluir');
        linkElement.appendChild(linktext);

        listElement.appendChild(linkElement);
    }
}

function deleteUser(pos) {
    users.splice(pos, 1);
    renderUsers();
    localStorage.setItem('users', JSON.stringify(users));
}

renderUsers();