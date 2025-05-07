const botao = document.getElementById('registrar');

botao.addEventListener('click',
    function (){
        const login = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }

        console.log(login);
    }
);

function imprimirObjeto(login){
    const impressao = document.getElementById('impressao');

    let pUsuario = document.createElement('p');
    pUsuario.textContent = objlogin.login;
    let pSenha = document.createElement('p');
    pSenha.textContent = objLogin.senha;

    impressao.appendChild(pUsuario);
    impressao.appendChild(pSenha);
}