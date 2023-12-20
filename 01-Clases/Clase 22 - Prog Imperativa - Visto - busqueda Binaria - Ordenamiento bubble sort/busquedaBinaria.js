const prompt = require("prompt-sync")({sigint:true});


/* EJERCICIO 1 - Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
● ¿Cuál es la posición del número 1?
● ¿Cuál es la posición del número 5?
● ¿Cuál es la posición del número 6?
● ¿Cuál es la posición del número 9?
● ¿Cuál es la posición del número 11?

codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6,
y nos indique por consola la posición del mismo. */ 


let busquedaBinaria = (arreglo, valor) => {
    let inicio = 0;
    let final = arreglo.length -1 ;

    let valorEncontrado = 0;
    let encontrado = false;

    while(inicio <= final){

        let mitad = Math.floor((inicio + final) / 2); // Se cocoloca en el white para no colocarlo en cada condicional

        if(arreglo[mitad] === valor){
            valorEncontrado = mitad
            encontrado = true;
            break
        }
        else if(arreglo[mitad] > valor){
            final = mitad - 1;
        }
        else{
            inicio = mitad + 1;
        }
    }

    if(encontrado == true){
        return "El numero "+valor+" ha sido encontrado en la posicion "+valorEncontrado;
    }
    else{
        return "El numero no ha sido encontrado";
    }
}


// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let valor = parseInt(prompt("Ingrese un valor: "));

// let respuesta = busquedaBinaria(list, valor);
// console.log(respuesta); 



/* EJERCICIO 2 - Dada la siguiente lista:
let list = [12,3,5,7,1,22,47,100];

Ordenar primero la lista, de menor a mayor, utilizando bubble sort y Luego aplicar búsqueda binaria:

● ¿Cuál es la posición del número 12?
● ¿Cuál es la posición del número 5?
● ¿Cuál es la posición del número 22?
● ¿Cuál es la posición del número 100? */




function ordenar(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length -1 ; j++){
            if (arreglo[j] > arreglo[j+1]){ // Compara los saldo

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = aux;
            }
        }
    }
    console.log("\nNUEVO ARREGLO: "+arreglo);
    return arreglo;
}

let list = [12,3,5,7,1,22,47,100];
let valor = parseInt(prompt("Ingrese un valor: "));

ordenar(list);
let respuesta2 = busquedaBinaria(list, valor);
console.log(respuesta2); 