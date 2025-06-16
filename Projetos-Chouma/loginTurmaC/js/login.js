const entrar = document.getElementById('entrar');
entrar.addEventListener('click',
    function(){
        const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));
        let login;
        let senha;
        let valido = usuariosCadastrados.find(
            user => user.usuario === login && user.senha === senha
        );
    
    })

//Para fazer Login