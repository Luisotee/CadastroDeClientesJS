# CadastroDeClientesJS
Formulario de cadastro de clientes feito para aprendizado. O programa utiliza três elementos de desenvolvimento Web, JavaScript, HTML e CSS.
No desenvolvimento foi utilizado o loader Babel para a melhor compatibilidade com navegadores mais antigos. Também foi utilizado a biblioteca JQuerry para as máscaras do formulário.

## Estrutura do código
Dentro da pasta do projeto, há uma pasta chamada "dist", nessa pasta possui o código buildado pronto para a utilização.

### HTML
O programa em si possuí apenas duas paginas, a do formulário e a de visualização das informações. O HTML da página do furmulário está na pasta raiz do projeto com o nome "index.html", já a de visualização de informações está localizada em src\views, com o nome de "list.html".

### CSS
Todos os códigos CSS estão dentro da pasta src\styles. Existem três arquivos CSS, o index.css serve excluivamente para o html de mesmo nome, assim como o list.css, o default.css é um arquivo geral para todas as páginas do projeto.

### JavaScript
Os arquivos JavaScript utilizados no desenvolvimento estão dentro da pasta src\scripts.
O arquivo "index.js" é o script para a pagina do formulário, porém o mesmo é transcompilado pelo babel para utilização.
O "listItens.js" é o script utilizado na pagina de visualização de dados, e o "validateCadastro.js" é um arquivo com a função de validação do cadastro, utilizado pelo "index.js".

## Como rodar
1. Clone o repositório.
2. Abra a pasta do repositório e vá na pasta "dist".
3. Abra o "index.html" com seu navegador de preferência.

## Comandos
### Yarn
Para começar primeiro execute o comando "yarn install".

-"yarn dev": Transcompila o seu código, nesse estado o codigo que foi transcompilado não vai ser visivel para você, e aplica o hot reload. No começo da execução ele informa um endereço onde o servidor local foi estabelecido.

-"yarn build": Transcompila o seu código para um arquivo JavaScript visível, utilizado quando for colocar no servidor. O código transcompilado vai para a pasta "public".

### NPM
Para começar primeiro execute o comando "npm install".

-"npm run dev": Transcompila o seu código, nesse estado o codigo que foi transcompilado não vai ser visivel para você, e aplica o hot reload. No começo da execução ele informa um endereço onde o servidor local foi estabelecido.

-"npm run build": Transcompila o seu código para um arquivo JavaScript visível, utilizado quando for colocar no servidor. O código transcompilado vai para a pasta "public".

## Como clonar o repositório
### Tendo a plataforma Git instalada
- Execute o comando "git clone https://github.com/Luisotee/CadastroDeClientesJS" sem aspas.

### Pelo browser
1. Encontre o botão verde escrito "Clone or Download";
2. Clique no "Download ZIP";
3. Extraia o ZIP.
