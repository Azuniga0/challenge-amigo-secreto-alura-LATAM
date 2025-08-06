/**
 *    Funciones globales del sistema
 */
let amigosIngresados = []; //arreglo para almacenar la lista de amigos ingresados por el usuario.

/**
 * Función para capturar los datos de la entrada
 */

function agregarAmigo() {
    const amigoEntrada = document.getElementById('amigo').value; //Lee el valor ingresado en la entrada
    const compruebaNombre = compruebaSoloLetras(amigoEntrada); //Retorna true o false si se cumple la regex
    if(compruebaNombre == true) {
        amigosIngresados.push(amigoEntrada);
    }
    console.log(amigosIngresados);
    
}

/**
 * Función regex que comprueba que los caracteres leídos en la entrada de amigos sean solo letras, ñ, Ñ o con acento.
 */
let compruebaSoloLetras = function (palabra) {
    const soloLetras = /^[a-zA-ZÁ-ú\u00F1\u00D1\s]+$/;
    return soloLetras.test(palabra);
}

 