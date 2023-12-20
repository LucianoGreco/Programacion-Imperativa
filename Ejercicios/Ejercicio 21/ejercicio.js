/* 1. Escribir una función que reciba un array de elementos e indique si se
encuentran ordenados de menor a mayor o no. */
let arreglo = [1,2,3,4,5,6,7,8,9,10];

function estaOrdenado(arr){
    let esOrdenado = false;

    for(let i=0 ; i<arreglo.length -1 ; i++){
        if(arr[i] < arr[i+1]){
            esOrdenado = true
        }
        else{
            esOrdenado = false
            break
        }
    }
    return esOrdenado;
}
// let r1 = estaOrdenado(arreglo)
// console.log(r1);






/* 2. Escribir una función que reciba un array con nombres, y para cada nombre
imprima el mensaje Estimado (nombre) , vote por mí. */
let nombres = ["Luciano","Celeste","Rolando","Gladys"];

function mostrarMensaje(arreglo){
    for(let i=0 ; i<arreglo.length  ; i++){
        console.log("Estimado " + arreglo[i]+" ,vote por mí.");
    }
}

// let r2 = mostrarMensaje(nombres);
// console.log(r2);






/* 3. Hacer un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma: (suponiendo que
indica 6).
666666
55555
4444
333
22
1 
*/
function piramideIvertida(numero){

    let mensaje = "";

    for (let i=numero ; i>=1; i--) {

        let linea = "";
        for (let j=1 ; j<=i; j++) {
            linea += i;
        }
        
        mensaje = console.log(linea);
    }
    return mensaje;
}
// let r3 = piramideIvertida(6)
// console.log(r3);






/* 4. Teniendo 3 arrays:
Cargarlos en una matriz y, luego, hacer la suma de los valores horizontales de cada fila,
los verticales de cada columna y las 2 diagonales, e imprimirlas por consola. */

let fila1 = [4, 9, 2];
let fila2 = [3, 5, 7];
let fila3 = [8, 1, 6];

// Crear una matriz con las filas
let matriz = [fila1, fila2, fila3];


// Suma de valores horizontales (filas)
for (let i=0 ; i<matriz.length ; i++) {

    let sumaFila = 0;

    for (let j=0; j<matriz[i].length ; j++) {

        sumaFila += matriz[i][j];
    }
    console.log("Suma de la fila:", sumaFila);
}

// Suma de valores verticales (columnas)
for (let j=0; j<matriz[0].length ; j++) {

    let sumaColumna = 0;

    for (let i = 0; i < matriz.length; i++) {
        sumaColumna += matriz[i][j];
    }
    console.log("Suma de la columna:", sumaColumna);
}

// Suma de valores de la diagonal principal

let sumaDiagonalPrincipal = 0;

for (let i = 0; i < matriz.length; i++) {

    sumaDiagonalPrincipal += matriz[i][i];
}
console.log("Suma de la diagonal principal:", sumaDiagonalPrincipal);


// Suma de valores de la diagonal secundaria
let sumaDiagonalSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
    sumaDiagonalSecundaria += matriz[i][matriz.length - 1 - i];
}
console.log("Suma de la diagonal secundaria:", sumaDiagonalSecundaria);
