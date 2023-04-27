const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const respuesta = document.querySelector('.respuesta')
const btnsumar = document.querySelector('.btn-sumar')
const btnrestar = document.querySelector('.btn-restar')
const btndividir = document.querySelector('.btn-dividir')
const btnmultiplicar = document.querySelector('.btn-multiplicar')

btnsumar.addEventListener("click", sumarNumeros);
btnmultiplicar.addEventListener('click', multiplicarNumeros);
btndividir.addEventListener('click', dividirNumeros);
btnrestar.addEventListener('click', restarNumeros);



function sumarNumeros() {
    const resultadosuma = parseInt(valor1.value) + parseInt(valor2.value);
    respuesta.innerText = resultadosuma;

}

function restarNumeros () {
    const resultadoResta = parseInt(valor1.value) - parseInt(valor2.value);
    respuesta.innerText = resultadoResta;
}

function multiplicarNumeros () {
    const resultadoMultiplicar = parseInt(valor1.value) * parseInt(valor2.value);
    respuesta.innerText = resultadoMultiplicar;
}

function dividirNumeros () {
    const resultadoDividir = parseInt(valor1.value) / parseInt(valor2.value);
    respuesta.innerText = resultadoDividir;
}