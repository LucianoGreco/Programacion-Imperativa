/*
let compañero1 = {
    nombre : "Luciano",
    apellido: "Greco",
    bimestre: 2
}

let compañero2 = {
    nombre : "Celeste",
    apellido: "Sosa",
    bimestre: 3
}

let compañero3 = {
    nombre : "Yanela",
    apellido: "Luna",
    bimestre: 4
}

let arreglito = [];

arreglito.push(compañero1,compañero2,compañero3); // Agrega los objetos al arreglo

function aumentarBimestre(array){
    for(let i = 0; i < array.length; i++){
        array[i].bimestre += 1 
    }
    return array;
}





//--------- https://codesandbox.io/p/sandbox/romantic-wiles-hzcjwj?file=%2Fsrc%2Findex.js%3A1%2C1-91%2C1

function mayor2(a, b) {
  let respuesta = 0;
  if (a > b) {
    respuesta = a;
  } else {
    respuesta = b;
  }
  return respuesta;
}
let mayor = mayor2(17, 35);
console.log(mayor);

function mayor3(a, b, c) {
  return mayor2(mayor2(a, b), c);
}
let num3 = mayor3(15, 78, 35);
console.log(num3);





function mayor4(a, b, c, d) {
  return mayor2(mayor3(a, b, c), d);
  // return mayor2(mayor2(a,b), mayor2(a,b));
}
let num4 = mayor4(15, 78, 35, 89);
console.log(num4);





//Math: Objeto - .max(): Funcion
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 

let arreglo = [13, -15, 6, 75, 19];

function mayorEnArray(array) {
  let mayor = [0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}
//
function mayorArrayConMath(array) {
  let mayor = [0];
  for (let i = 0; i < array.length; i++) {
    mayor = Math.max(array[i], mayor);
  }
  return mayor;
}



console.log(Math.max(5, 5));

function probar(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(probar(5, 5));

function esPar(num) {
    let respuesta;
    if (num % 2 === 0) {
      respuesta = true;
    } else {
      return false;
    }
    return respuesta;
  }
  
  let resp = esPar(10);
  console.log(resp); */







  /* DESAFIO CON NUMEROS PRIMOS: */
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    // Verificar si el número es divisible por algún número desde 2 hasta la mitad del número
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false; // Si es divisible, no es primo
      }
    }
  
    return true; // Si no es divisible por ningún número, es primo
  }
  
  // Ejemplo de uso:
  let miNumero = 13;
  if (esPrimo(miNumero)) {
    console.log(miNumero + " es un número primo.");
  } else {
    console.log(miNumero + " no es un número primo.");
  }

/* Ejercitacion de algoritmos
1. Escriba una funcion que reciba dos parametrso: un array y un indice. La funcion debera de mostrar por cosola 
el valor del elemento segun el indice indicado. Por ejemplo, dada la siguiente array y indice la funcion
imprimira "6" 
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];let indice = 1
Visiten este sandbox para escribir su codigo
https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js */
  

/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */ /*
let array = [
	3,
	6,
	67,
	6,
	23,
	11,
	100,
	8,
	93,
	0,
	17,
	24,
	7,
	1,
	33,
	45,
	28,
	33,
	23,
	12,
	99,
	100
];

/**
 * Y el siguiente indice:
 */ /*

let indice = 13;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea. 
/*
function valorDelIndice(array, indice){
  let valorEncontrado = array[indice]
  return valorEncontrado;
}

// Invoca tu función debajo de esta linea.
let resultado = valorDelIndice(array, indice)
console.log(resultado);

*/




/*
Escribir un programa que muestre en pantalla los numeros del 1 al 100, sustituyendo los multiplos de 3 
por la palabra "fizz", los multiplos de 5 por "buzz" y los multiplos de ambos, es decir, lo multiplos de 3
y 5 - o de 15 - por la palabra "fizzbuzz". 
visiten ente sandbox https://codexsandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar el ejercicio
ahi. Recuerde desplegar la consola para ver sus resultados. y utilicen la funcion console.log para mostrar
datos en la misma.
Pista: Si se te complica mucho identificar si un numero es multiplo de 3 o 5 piensa esto.
¿Sabes identificar si un numero es multiplico de 2, es decir es par?
¡Misma Logica!
*//*
function multiplos(){

  for(let i=0; i<=100; i++){
    if(i %3 == 0 && i %5 == 0){
      console.log("fizzbuzz");
    }
    else if(i %3 === 0){
      console.log("fizz");
    }
    else if(i %5 === 0){
      console.log("buzz");
    }
    else{
      console.log(i);
    }
  }
}
let resultadoMultiplos = multiplos();
console.log(resultadoMultiplos); */