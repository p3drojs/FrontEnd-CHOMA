function expressao(num){

    document.getElementById('tela').value += num;
}

function resultado(){
    try {
        let expressao = document.getElementById('tela').value;
        let resultado =  eval(expressao);
        document.getElementById('tela').value = resultado;
    } catch (error) {    
        document.getElementById('tela').value = "ERROR";
    }
}

function limpar(){
    document.getElementById('tela').value = " ";
}
