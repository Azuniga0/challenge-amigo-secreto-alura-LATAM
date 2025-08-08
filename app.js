/**
 *    Funciones globales del sistema
 */
let amigosIngresados = []; //arreglo para almacenar la lista de amigos ingresados por el usuario.
let textoMensaje = '';
let amigoEntrada = '';

/**
 * Función para capturar los datos de la entrada
 */

function agregarAmigo() {
    amigoEntrada = document.getElementById('amigo').value.trim(); //Lee el valor ingresado en la entrada
    const compruebaNombre = compruebaSoloLetras(amigoEntrada); //Retorna true o false si se cumple la regex    
    textoMensaje = document.querySelector('.mensaje'); //Se lee el apartado para el mensaje personalizado
    const listaAmigos = document.getElementById('listaAmigos'); //elemento HTML para la lista

    if(!amigoEntrada) { //Verifica que si está vacío el nombre
        alert('Por favor, inserte un nombre.');
        //configuraciones(`<b style="color: red;">¡Cuidado!</b> No has escrito un nombre.`);
        return false ;
    }
    
    if(amigosIngresados.length > 1) {        
        console.log("long >1");
        const existeNombre = amigosIngresados.includes(amigoEntrada);
        if(existeNombre == true) {
            console.log("ya existe");
            configuraciones(`<b style="color: red;">¡Cuidado!</b> El nombre <b>${amigoEntrada}</b> de tu amigo ya ha sido ingresado.`);
            return false;
        }
    }
        
    if(compruebaNombre == true) { 
        amigosIngresados.push(amigoEntrada); //Añade el nombre ingresado al final del arreglo
        configuraciones(`<b style="color: green;">¡Genial!</b> El nombre <b>${amigoEntrada}</b> de tu amigo se ha agregado con éxito.`); 
        muestraArregloAmigos();
        amigoEntrada.value = ''; // Se limpia el campo de entrada
        return true;
    } else {        
        configuraciones(`<b style="color: red;">¡Cuidado!</b> El nombre <b>${amigoEntrada}</b> de tu amigo solo puede contener letras.`); 
        return false;       
    }
 
    console.log(amigosIngresados);    
}

/**
 * Función para mostrar el arreglo de amigos con un ciclo
 */
function muestraArregloAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    for (let x = 0; x < amigosIngresados.length; x++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigosIngresados[x];
        listaHTML.appendChild(elementoLista);
    }
    return;
}

/**
 * Función para limpiar la entrada de texto del nombre, borrar mensaje después de n segundos
 */
function configuraciones(texto) {
    document.getElementById('amigo').value = ''; //Limpia la entrada de texto para el siguiente nombre
    textoMensaje.style.display = 'block'; // Pone el contenedor del mensaje visible de nuevo.
    textoMensaje.innerHTML = texto; //Muestra el mensaje personalizado

    setTimeout(function() {
        textoMensaje.style.display = 'none'; // Pone el contenedor del mensaje personalizado invisible
    }, 2000); //Tiempo en milisegundos
    return;
}

/**
 * Función regex que comprueba que los caracteres leídos en la entrada de amigos sean solo letras, ñ, Ñ o con acento.
 */
let compruebaSoloLetras = function (palabra) {
    const soloLetras = /^[a-zA-ZÁ-ú\u00F1\u00D1\s]+$/;
    return soloLetras.test(palabra);
}

 