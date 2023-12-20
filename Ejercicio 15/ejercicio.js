/* 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox
https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
utilicen la función console.log para mostrar datos en la misma. */
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
//let resultadoMultiplos = multiplos();
//console.log(resultadoMultiplos); 




/* 2) Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
Visiten este sandbox para escribir su código.
https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js */

let indice = 13;

function valorDelIndice(array, indice){
    let valorEncontrado = array[indice]
    return valorEncontrado;
  }

//let resultado = valorDelIndice(array, indice)
//console.log(resultado);




/* 3) Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—.
https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js */

function diasDelMes(numeroMes){

    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    return diasPorMes[numeroMes - 1]
}

// let cantidadDeDiasPorMes = diasDelMes(6);
// console.log(cantidadDeDiasPorMes);



/* 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.
https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js */

function invertirNumeroSinMetodos(numero) {
    const cadenaNumero = numero.toString();
    const longitud = cadenaNumero.length;
    let arrayInvertido = [];
  
    // Recorrer la cadena desde el final hasta el principio
    for (let i = longitud - 1; i >= 0; i--) {
      arrayInvertido.push(cadenaNumero[i]);
    }
  
    // Unir el array invertido en una cadena y convertirlo de nuevo a número
    const numeroInvertido = parseInt(arrayInvertido.join(''), 10);
  
    return numeroInvertido;
  }
  
  // Ejemplo de uso:
  const numeroOriginal = 32443;

//   const resultado = invertirNumeroSinMetodos(numeroOriginal);
//   console.log(`El número invertido de ${numeroOriginal} es ${resultado}.`);









/* 5) Escribir una función que reciba una array y solo imprima los valores que
se repiten. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6,23,33,100'. let array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
https://codesandbox.io/s/impresora-repitientes-qtz0e?file=/src/index.js */


let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]; //  [ 6, 33, 23, 100 ]

// function numerosRepetidos(array) {
//     let numerosRepetidos = [];

//     for (let i = 0; i < array.length; i++) {
//         // Verificar si el número actual se repite en el array
//         //array.indexOf(array[i]) !== i && 
//         if (!numerosRepetidos.includes(array[i])) {
//             numerosRepetidos.push(array[i]);
//         }
//     }
//     return numerosRepetidos;
// }

// let numRepetidos = numerosRepetidos(array);
// console.log(numRepetidos)
















