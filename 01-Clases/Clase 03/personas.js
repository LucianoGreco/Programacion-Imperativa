// línea de configuración de prompt.
const prompt = require("prompt-sync")({ sigint: true });

// Error - variables con el mismo nombre
let nombre = prompt("Ingrese su nombre: "); // ---- String
let edad = prompt("Ingrese su edad: ");; // ------------- Entero
let soltero = prompt("Es soltero: ");; // ------- Booleano
const DNI = prompt("Ingrese su Documento: ");; // ---- Constantes: Variables que no se cambian - Van con mayuscula

// let dni = 35623054;
// let dni = 35.623.474; - ERROR: Los esta tomando como decimales

console.log(`\nNombre: ${nombre} \nEdad: ${edad} años\nSoltero: ${soltero} \nDNI: ${DNI}`);
/*
    Nombre: Luciano
    Edad: 31 años
    Soltero: false
    DNI: 35623054
*/

