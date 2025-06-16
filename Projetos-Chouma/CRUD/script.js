// Recupera os elementos do HTML
const formularioPessoa = document.getElementById('formPessoa');
const campoNome = document.getElementById('nomePessoa');
const campoIdade = document.getElementById('idadePessoa');
const listaPessoas = document.getElementById('listaPessoas');
const campoIndice = document.getElementById('indicePessoa');

// Carrega as pessoas do localStorage ou inicia com array vazio
let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

// Renderiza a lista de pessoas na tela
function exibirPessoas() {
    listaPessoas.innerHTML = '';
    pessoas.forEach((pessoa, indice) => {
        const item = document.createElement('li');
        item.textContent = `${pessoa.nome} - ${pessoa.idade} anos`;
        
        // Botão editar
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.classList.add('editar');
        botaoEditar.onclick = () => carregarPessoa(indice);

        // Botão excluir
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.onclick = () => excluirPessoa(indice);

        item.appendChild(botaoEditar);
        item.appendChild(botaoExcluir);

        listaPessoas.appendChild(item);
    });
}

// Salva a lista no localStorage
function salvarLocalStorage() {
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
}

// Lida com o envio do formulário
formularioPessoa.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const idade = parseInt(campoIdade.value.trim(), 10);

    if (campoIndice.value === '') {
        // Criar nova pessoa
        pessoas.push({ nome, idade });
    } else {
        // Atualizar pessoa existente
        const indice = parseInt(campoIndice.value, 10);
        pessoas[indice] = { nome, idade };
        campoIndice.value = '';
    }

    salvarLocalStorage();
    exibirPessoas();
    formularioPessoa.reset();
});

// Carrega os dados de uma pessoa no formulário para edição
function carregarPessoa(indice) {
    const pessoa = pessoas[indice];
    campoNome.value = pessoa.nome;
    campoIdade.value = pessoa.idade;
    campoIndice.value = indice;
}

// Exclui uma pessoa da lista
function excluirPessoa(indice) {
    pessoas.splice(indice, 1);
    salvarLocalStorage();
    exibirPessoas();
}

// Exibe a lista ao carregar a página
exibirPessoas();

/*
 EXPLICAÇÃO COMPLETA DO CÓDIGO:
 - O HTML cria um formulário simples com campos nome e idade, além de uma lista para exibir as pessoas.
 - O CSS estiliza o formulário, a lista e os botões.
 - O JavaScript:
   1. Recupera dados do localStorage ou cria um array vazio.
   2. Exibe as pessoas na tela usando exibirPessoas(), criando elementos <li> e botões de editar/excluir.
   3. Salva as pessoas no localStorage após cada alteração.
   4. Adiciona ou atualiza uma pessoa ao enviar o formulário.
   5. Permite carregar os dados de uma pessoa no formulário para edição com carregarPessoa().
   6. Permite excluir uma pessoa com excluirPessoa().
   7. Atualiza automaticamente a lista ao carregar a página.
*/
