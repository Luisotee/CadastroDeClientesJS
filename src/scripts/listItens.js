var listElement = document.querySelector('#list ul');

const users = JSON.parse(localStorage.getItem('users'));

function renderUsers() {
    for (user of users) {
        const userElement = document.createElement('li');
        const userText = document.createTextNode(Object.entries(user));
        //const userText = document.createTextNode("Nome: " + user.nome);
        userElement.appendChild(userText);
        listElement.appendChild(userElement);
    }
}

renderUsers();