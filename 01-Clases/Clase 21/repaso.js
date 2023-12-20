/*
let matriz = [[1,2,3],[4,5,6],[7,8,9]];

// console.table(matriz);
// console.log(matriz[2][1]); //8

// Sumar todos los elementos del array

function sumarValores(arreglo){
    let acumuladora = 0;
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo[i].length ; j++){
            acumuladora += arreglo[i][j];
        }
    }
    return acumuladora;
}
// let sumaTotal = sumarValores(matriz)
// console.log(sumaTotal);

function sumaDiagonalPrincipal(arreglo){

    let acumuladora =0;
    for(let i=0 ; i<arreglo.length ; i++){
        for(let j=0 ; j<arreglo[i].length ; j++){
            if(i == j){
                acumuladora += arreglo[i][j];
            }
        }
    }
    return acumuladora;
}

// let r1 = sumaDiagonalPrincipal(matriz)
// console.log(r1);



function sumaDiagonalInvertudo(arreglo){
    let acumuladora =0;
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=arreglo[i].length -1 ; j>=0 ; j--){
            if(i + j == arreglo.length-1){
                acumuladora += arreglo[i][j];
            }
        }
    }
    return acumuladora;
}
let r2 = sumaDiagonalInvertudo(matriz)
console.log(r2); */


let arreglo =  [13, 25 ,89, 47, 14, 3, 52];

function ordenarDeMenorAMayor(arr){

    for(let i=0 ; i<arr.length; i++){ 
        
        for(let j=0 ; j<arr.length -1 ; j++){ // -1 No no necesita ser comparado en ultimo elemento

            if(arr[j] > arr[j+1]){ // menor a mayor > / mayor a menor <

                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
  
    }
    return arreglo;
}

let arrOrdenado = ordenarDeMenorAMayor(arreglo)
console.log(arrOrdenado);