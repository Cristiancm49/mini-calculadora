const valor1 = document.querySelector('.valor1');
const valor2 = document.querySelector('.valor2');
const respuesta = document.querySelector('.respuesta')
const btnsumar = document.querySelector('.btn-sumar')



function sumarNumeros() {
    const resultadosuma = parseInt(valor1.value) + parseInt(valor2.value);
    respuesta.innerText = resultadosuma;

}