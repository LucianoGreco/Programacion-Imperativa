/* EJERCICIO 1 - Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
de una matriz. */ /*

let matriz = [
    [1600, 2800, 3650, 1],//    Arreglo 0
    [1300, 898, 1, 2800], //    Arreglo 1
    [1900, 1, 4500, 2560],//    Arreglo 2
    [1, 1980, 1270, 950], //    Arreglo 3
//   0    1     2    3          Elementos
];

let suma = 0; //Variable acumuladora!
// Recorre los 4 Arreglos
for(let i=0 ; i<matriz.length ; i++){
// Recorre los 4 Elementps
    for(let j=0 ; j<matriz[i].length ; j++){
        suma += matriz[i][j]
    }
}
console.log(suma); */






/* EJERCICIO 2 - Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así: */  /*

function crearMatriz(){
    let arreglo = [];

    for(let i=0 ; i<=90 ; i += 10){
        let arreglito = [];
        for(let j=1 ; j<= 10;  j++){
            if(i === 0){
                arreglito.push(j);
            }
            else{
                arreglito.push( i+j );        
            }
        }
        arreglo.push(arreglito);
    }
    return arreglo;
}

let matriz = crearMatriz();
console.log(matriz); */




/*  EJERCICIO 3 - Por último, vamos a generar dos funciones:

let matriz = [
    [1600, 2800, 3650, 1],//    Arreglo 0
    [1300, 898, 1, 2800], //    Arreglo 1
    [1900, 1, 4500, 2560],//    Arreglo 2
    [1, 1980, 1270, 950], //    Arreglo 3
//   0    1     2    3          Elementos
] */



/* a) Una va a sumar los valores en la diagonal marcada en rojo. *//*

let sumaDiagonalUno = 0; 

for(let i=0 ; i<matriz.length ; i++){
    for(let j=0 ; j<matriz[i].length ; j++){
        if(i == j){
            sumaDiagonalUno += matriz[i][j]
        }
    }
}
console.log(sumaDiagonalUno);*/





/* b) La otra va a marcar los valores de la diagonal marcada en verde. *//*

let sumaDiagonalDos = 0;

for(let fila=0 ; fila<matriz.length ; fila++){
    for(let columna=0 ; columna<matriz[fila].length ; columna++){
        if(fila+columna == matriz.length-1){
            sumaDiagonalDos += matriz[fila][columna]
        }
    }
}
console.log(sumaDiagonalDos); */ 


// let sumaDiagonalDos = 0;
// for(let fila=0 ; fila<matriz.length ; fila++){
    
//     for(let columna=matriz[fila].length -1 ; columna>=0 ; columna--){
    
//         if(fila+columna == matriz.length-1){
//             sumaDiagonalDos += matriz[fila][columna]
//         }
//     }
// }
// console.log(sumaDiagonalDos); 





//  EJERCICIO 4 - DESAFIO
/*Ejercicio
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el
usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada
columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1,
columna 1, dia 2, etcétera.

a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada
fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la
fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.*/
let arreglo = [
    [1600, 2800, 3650, 1],
    [1300, 898, 1, 2800],
    [1900, 1, 4500, 2560],
    [1, 1980, 1270, 950], 
]

let sumaDeSemanas = 0;

for(let i=0; i<arreglo[2].length ; i++){
    sumaDeSemanas += arreglo[2][i] 
}
console.log(sumaDeSemanas);


/* b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar
el total de un día en particular, por ejemplo del día 3, acá también tengamos en
cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. */
//arreglo[0][2]
let sumaDeDias = 0;

for(let i=0; i<arreglo.length; i++){
    sumaDeDias += arreglo[i][2]
}
console.log(sumaDeDias);


/*c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver
este último punto? */
let sumaDeMes = 0;

for(let i=0 ; i<arreglo.length ; i++){
    
    for(let j=0 ; j<arreglo[i].length ; j++){
        sumaDeMes =+ arreglo[i][j];
    }
}
console.log(sumaDeMes);


/*d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más
gastos se realizaron.
Posibles matrices para comprobar los resultados.
┌─────────────┬────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│   Dias      │    0   │    1    │    2    │    3    │    4    │    5    │    6    │
├─────────┬───┼────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Semanas │ 0 │  1135  │  2500   │   900   │  1600   │  2800   │  3650   │  1100   │
│         │ 1 │  1750  │  1890   │  1900   │  1300   │   898   │  1750   │  2800   │
│         │ 2 │  1700  │  1150   │  1690   │  1900   │  1770   │  4500   │  2560   │
│         │ 3 │   800  │  1250   │  1430   │  2100   │  1980   │  1270   │   950   │
└─────────┴───┴────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘ 
let fecha = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
]  */

function calcularSemana(arreglo){

    let arreglito = [];

    for(let i=0 ; i<arreglo.length; i++){

        let semanasCompleta = 0;

        for(let j=0; j<arreglo[i].length ; j++){
            semanasCompleta += arreglo[i][j]; 
        }
        arreglito.push(semanasCompleta);
    }


    let mayor = arreglito[0]
    let numeroDeSemana = 0;

    for(let i=0; i<arreglito.length; i++){ 
        if(arreglito[i] > mayor){
            numeroDeSemana[i]
            mayor = arreglito[i];
        }
    }

    let mensaje = "";

    switch (numeroDeSemana) {
        case 0:
            mensaje = "La semana que mas se gasto, fue la primera y se gasto: "+ mayor;
            break;
        case 1:
            mensaje = "La semana que mas se gasto, fue la segunda y se gasto: "+ mayor;
            break;
        case 2:
            mensaje = "La semana que mas se gasto, fue la tercera y se gasto: "+ mayor;
            break;
        case 3:
            mensaje = "La semana que mas se gasto, fue la cuarta y se gasto: "+ mayor;
            break;
        case 4:
            mensaje = "La semana que mas se gasto, fue la quinta y se gasto: "+ mayor;
            break;

        default:
            break;
    }
    return mensaje;

}

calcularSemana(arreglo)


