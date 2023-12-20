// línea de configuración de prompt.
const prompt = require("prompt-sync")({ sigint: true });

//let nombreIngresado = prompt("Hola, ingrese su nombre: ");

// let nombreIngresado = "Luciano"; Error: Ya exsite una variabla declarada let = nombre

// console.log() - Mostramos por consola escibiendo: Terminal: node archivo.js 
//console.log(`Hola ${nombreIngresado}`); // Interpolaciom - `comillas invertidas` - (cadena dentro de otra)
//console.log("Hola " + nombreIngresado); // Conatenacion


let nombre = 'Luciano'; // "String" 'String'
let edad = 31;
let casado = true;

//console.log("Estas son las variables")
//console.log(nombre);
//console.log(edad);
//console.log(casado);
//console.log(nombre, edad, casado); // No recomendado
//console.log(nombre +" "+ edad +" "+ casado);



/* 
Ejercicio Mario - Identifaicar variables de Mario Bross y crearlas
    Variables de púntos 
    Cantidad de monedas
    Numero de nivel
    Numero de mundo
    Tiempo restante para terminar el nivel
*/

let puntajeDeMario = 0;
let monedasDeMario = 0;
let numeroNivel = 1;
let mundoDeMundo = 1;
let tiempoRestante = 999;
//var cantidaDeVidas = 3; No recomendable "var"
let cantidaDeVidas = 3; 


//console.log( 0 == "0" ); /* true == miamo valor */
//console.log( 0 === "0"); /* false === mismo valor y tipo e dato */

//console.log(cantidaDeVidas === 0);

//# Descontar -1 vida:
//cantidaDeVidas = cantidaDeVidas - 1;
cantidaDeVidas = --cantidaDeVidas;


//console.log(--cantidaDeVidas); - NO ES BUENA PRACTICA
console.log("Cantidad de vidas: " + cantidaDeVidas);
console.log("La cantidad de vida es 0? : " + cantidaDeVidas === 0); // No muestra el string por la comparacion



/*
A. cd: ./prjecto/
B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
C. colocar en el archivo variables.js : const prompt = require("prompt-sync")({ sigint: true });
D. Terminal: node variables.js (o sin el .js)
E. Terminal: clear (Limpia la terminal)
*/