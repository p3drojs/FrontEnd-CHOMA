const botao = document.getElementById('btnCadastrar');
const listaUsuarioCadastrados = [];

botao.addEventListener('click', function(){
    const objusuario = {
        usuario: document.getElementById('usuario').value.trim(),
        senha: document.getElementById('senha').value.trim()
    };
    listaUsuarioCadastrados.push(objusuario);
    const listaJson = JSON.stringify(listaUsuarioCadastrados);
    localStorage.setItem('usuarios', listaJson);
    listar();
}
);

function listar(){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('listaUsuariosCadastrados');
    tabela.innerHTML = "";
    listaUsuarios.forEach((objeto, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${objeto.usuario}</td>
            <td>${objeto.senha}</td>
            <td>
                <button>Editar</button>
                <button>Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

listar();