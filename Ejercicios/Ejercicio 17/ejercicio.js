/* Ejercicio
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el
usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada
columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1,
columna 1, dia 2, etcétera.*/


let arreglo = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], //   0 - 13685
    [1750, 1890, 1900, 1300, 898, 1750, 2800], //   1 - 12288
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], //  2 - 15270
    [800, 1250, 1430, 2100, 1980, 1270, 950], //    3 - 9780

                                                //      51023 Total                               
]; 

/* a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada
fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la
fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. */

function gastoSemanal(arreglo, semana){

    let arreglito = []
    for(let i=0 ; i<arreglo.length ; i++){ // 4 Arrelgos
        
        let sumaFila = 0;
        for(let j=0 ; j<arreglo[i].length; j++){ // 7 Elementos 

            sumaFila += arreglo[i][j]
        }
        arreglito.push(sumaFila)
    }
    let semanita = arreglito[semana];
    return semanita;
}
//console.log(gastoSemanal(arreglo, 3));







/* b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar
el total de un día en particular, por ejemplo del día 3, acá también tengamos en
cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. */

function gastoDiario(dia){

    let sumaDias = 0;

    for(let i=0 ; i<arreglo.length ; i++){
            sumaDias += arreglo[i][dia];
    }
    return sumaDias
}

//console.log(gastoDiario(2)); 





/* c) Por último, es necesario tener el total de gastos realizados en el mes.
Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver
este último punto? */

function gastosDelMes(arreglo){

    let sumaTotal = 0;

    for(let i=0 ; i<arreglo.length ; i++){

        sumaTotal += gastoSemanal(arreglo, i)
    }
    return sumaTotal
}

//console.log(gastosDelMes(arreglo)); // 51.023





/* Opcional
/*d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más
gastos se realizaron.
Posibles matrices para comprobar los resultados.*/

function diaSemanaConMayorGasto(arreglo){

    let gastosSemanales = [] // 13685, 12288, 15270, 9780
    let nSemana = 0; // 3
    let gastoDeSemana = 0; // $15270
    let gastoDelDia = 0; // 5
    let diaConMayorGasto = 0; // 
    let mensaje = ""



    for(let i=0 ; i<arreglo.length ; i++){
        gastosSemanales.push(gastoSemanal(arreglo, i)) 

        if(gastosSemanales[i] > gastoDeSemana){
            gastoDeSemana = gastosSemanales[i]
            nSemana = i;
        } 

        for(let j=0 ; j<arreglo[i].length ; j++){

            if( arreglo[nSemana][j] > gastoDelDia){
                gastoDelDia = arreglo[nSemana][j];
                diaConMayorGasto = j;
            }
        }
    }



    switch (nSemana) {
        case 0:
            return
                "El mayor gasto se dio en la semana "+ nSemana+
                " con un total de $"+gastoDeSemana+
                " y el dia que mas se gasto fue el n°"+ diaConMayorGasto +
                " con un total de $"+ gastoDelDia;
   
            break;

        case 1:
            return mensaje =
                "El mayor gasto se dio en la semana "+ nSemana+
                " con un total de $"+gastoDeSemana+
                " y el dia que mas se gasto fue el n°"+ diaConMayorGasto +
                " con un total de $"+ gastoDelDia;
            break;

        case 2:
            return mensaje = 
                "El mayor gasto se dio en la semana "+ nSemana+
                " con un total de $"+gastoDeSemana+
                " y el dia que mas se gasto fue el n°"+ diaConMayorGasto +
                " con un total de $"+ gastoDelDia;
            break;

        case 3:
            return mensaje =
                "El mayor gasto se dio en la semana "+ nSemana+
                " con un total de $"+gastoDeSemana+
                " y el dia que mas se gasto fue el n°"+ diaConMayorGasto +
                " con un total de $"+ gastoDelDia;
            break;

        default:
            break;
    }
    
}

let mayorGasto = diaSemanaConMayorGasto(arreglo);
console.log(mayorGasto);


/*
┌─────────────┬────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│   Dias      │    0   │    1    │    2    │    3    │    4    │    5    │    6    │
├─────────┬───┼────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Semanas │ 0 │  1135  │  2500   │   900   │  1600   │  2800   │  3650   │  1100   │ 13685
│         │ 1 │  1750  │  1890   │  1900   │  1300   │   898   │  1750   │  2800   │ 12288
│         │ 2 │  1700  │  1150   │  1690   │  1900   │  1770   │ "4500"  │  2560   │ 15270
│         │ 3 │   800  │  1250   │  1430   │  2100   │  1980   │  1270   │   950   │ 9780
└─────────┴───┴────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘ 

                                                                            Total:  51023 
 */