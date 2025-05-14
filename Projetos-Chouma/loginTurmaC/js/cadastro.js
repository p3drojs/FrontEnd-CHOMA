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
}
);