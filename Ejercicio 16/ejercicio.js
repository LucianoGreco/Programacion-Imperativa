//Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos

//let matriz = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
//console.table(matriz);
/*// Luego, escribe un algoritmo para sumar todos los numeros en la matriz.
function sumarMatriz(matriz){
    let sumar = 0;
    for(let i=0 ; i<matriz.length; i++){
        
        for(let j=0 ; j<matriz.length; j++){
            sumar += matriz[i][j];
        }
    }
    return sumar
}

let resultado = sumarMatriz(matriz);
console.log(resultado);
*/

/*2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:*/ 

// let matriz = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//     [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//     [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//     [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//     [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//     [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//     [91, 92, 93, 94 ,95, 96, 97, 98, 99, 100]
// ]

// console.table(matriz);

/*
function generarMatriz() {

    let matriz = [];
    let columna = 1;

    for (let i = 0; i < 10; i++) { // Repite 10 veces
        let fila = [];

        for (let j=0; j<10; j++) { // Repite 10 veces
            fila.push(columna);
            columna++;
        }
        matriz.push(fila); 
    }
    return matriz;
}

let matrizGenerada = generarMatriz();
console.table(matrizGenerada); */


/* 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. */
/*
function sumarDiagonal(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }

    return suma;
} */

// let sumaDiagonaltotal = sumarDiagonal(matriz);
// console.log(sumaDiagonaltotal);


/*
function sumarDiagonalInverso(matriz) {
    let suma = 0;

    for (let i = matriz.length -1; i >= 0; i--) {
        suma += matriz[i][i];
    }
    return suma;
}

let sumarDiagonalInversoTotal = sumarDiagonalInverso(matriz);
console.log(sumarDiagonalInversoTotal);
*/




















let array = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94 ,95, 96, 97, 98, 99, 100]
]

console.table(array);


/*
function sumarDiagonal(array){

    let suma = 0;
    for(let i=0; i < array.length; i++){
        suma += array[i][i];
    }
    
    return suma;
}

let personal = sumarDiagonal(array);
console.log(personal); */


function sumarDiagonalInvertido(array){

    let suma = 0;
    for(let i=array.length -1; i >= 0 ; i--){

        suma += array[i][i];
    }
    return suma;
}

let personalInvertido = sumarDiagonalInvertido(array);
console.log(personalInvertido);







