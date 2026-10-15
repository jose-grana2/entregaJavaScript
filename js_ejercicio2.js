let buttonContarClics = document.getElementById('contarClics');
let contadorClics = document.getElementById('contadorClics').innerHTML;

buttonContarClics.addEventListener('click', () => {
    contadorClics++
    document.getElementById('contadorClics').innerHTML = contadorClics
})