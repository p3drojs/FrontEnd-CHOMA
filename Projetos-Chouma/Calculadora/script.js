function somar(){
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    let resultado = numero1 + numero2;

    document.getElementById('resultado').innerText = resultado;
}