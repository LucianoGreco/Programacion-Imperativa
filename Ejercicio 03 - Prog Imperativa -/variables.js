


const prompt = require("prompt-sync")({ sigint: true });

// 

console.log("\nEJERCICIO 2: \n");
let vehiculos = prompt("Tipo de vehiculo: ")
const AUTO = "auto";
const MOTO = "moto";
const BICI = "bicicleta";

let modelo = prompt()
let añoModelo = modelo + 1900;
let añoActual = 2023;
let anituguedad = añoActual - añoModelo;

let esVehiculo = vehiculos == AUTO;
let esMoto = vehiculos == MOTO;
let esBici = vehiculos == BICI;
console.log(`El vehiculo es auto: ${esVehiculo}, es moto ${esMoto}, es bici: ${esBici}`);
console.log("Su vehiculo tiene " + anituguedad +" años de antiguedad");





/*
Desafio extra que no entendi:

Desafío extra:
Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón
de los pantalones ¡Un horror! ¿Cómo haríamos para invertirlos?
Pensá con qué código podrías invertir el contenido de las variables de cajones.

*/