// Matriz [[arrelgo] , [arreglo]]


//let matriz = [ [1,2,3],[4,5,6],[7,,9] ];
//console.table(matriz);
/* 
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
│    2    │ 7 │   │ 9 │
└─────────┴───┴───┴───┘ */
//console.log(matriz[2][1]); // Undefined



//matriz[2][1] = 8;
//console.table(matriz);
/* 
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
│    2    │ 7 │ 8 │ 9 │
└─────────┴───┴───┴───┘ */
/*
let matriz = [ [1,2,3],[4,5,6],[7,8,9] ];
// indice         0       1       2

// Recorrer Matriz
for(let i=0; i<matriz.length; i++){  // 3Ciclos - 3 Elementos
    console.log(matriz[i]);
}


// Primer Columna
for(let i=0; i<matriz.length; i++){  // 3Ciclos - 3 Elementos
    console.log(matriz[i][0]); // [filas] [Columnas]
}
*/

/*
let matriz2 = [ [1,2,3],[4,5,6,7,8,9,10]];
// Primer Fila
for(let i=0; i<matriz2[0].length; i++){  // 3Ciclos - 3 Elementos
    console.log(matriz2[0][i]); // [filas] [Columnas]
}

console.table(matriz2); */

let matriz = [ [1,2,3],[4,5,6,7,8,9,10]];

for(let i=0; i<matriz.length; i++){ // Filas

    for(let j=0; j<matriz[i].length; j++){ // Columnas - matriz[i] para recorrer todos los elementos de una fila
        console.log(matriz[i][j])
    }
}

