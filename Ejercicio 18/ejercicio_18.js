/* Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.
https://codesandbox.io/s/matrices-ejercicio-tgulv */

let arreglo = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
    ];


function sumaNumerosEntreDiesyMil(arreglo){

    let acumulador = 0;
    for(let i=0; i<arreglo.length; i++){

        for(let j=0; j<arreglo[i].length; j++){

            if(arreglo[i][j] >= 10 && arreglo[i][j] < 1000){
                acumulador += arreglo[i][j]
            }
        }
    }
    return acumulador;
}

console.log(sumaNumerosEntreDiesyMil(arreglo)); // 355