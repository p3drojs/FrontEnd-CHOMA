const botao = document.getElementById('btnCadastrar');
// const listaUsuarioCadastrados = [];

botao.addEventListener('click', function(){
    const listaUsuarioCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objusuario = {
        usuario: document.getElementById('usuario').value.trim(),
        senha: document.getElementById('senha').value.trim()
    };
    let indice = document.getElementById('indice').value;
    if(indice !== ""){
        listaUsuarioCadastrados[indice] = objusuario;
        document.getElementById('indice').value = "";
    }else{
        listaUsuarioCadastrados.push(objusuario);
    }
    
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
                <button onclick ="editarUsuario(${index})">Editar</button>
                <button onclick ="removerUsuario(${index})">Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

function removerUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    confirm("Voce realmente quer remover?")
    listaUsuarios.splice(index,1);
    let listaJson = JSON.stringify(listaUsuarios);
    localStorage.setItem("usuarios", listaJson);
    listar();
}

function editarUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem
    ("usuarios")) || [];
    listaUsuarios[index];
    document.usuarioEditar.getElementById('usuario').value = usuarioEditar.usuario;
    document;usuarioEditar.getElementById('senha').value = usuarioEditar.senha;
    document.getElementById('indice').value = index;


}

listar();