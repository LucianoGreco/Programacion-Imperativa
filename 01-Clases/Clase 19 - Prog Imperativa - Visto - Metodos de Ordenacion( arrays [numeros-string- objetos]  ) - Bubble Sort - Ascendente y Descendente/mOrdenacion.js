// METODOS DE ORDENACION - Bubble Sort

// METODO 1
//let arreglo = [4,2,6,1,5,3]; // Orden numerico
//let arreglo = ["Denis","Brian","Fabian","Ana","Eduardo","Carlos"]; // Orgen alfabetico por caracteres

// METODO 1 
/*
for(let i=0 ; i<arreglo.length ; i++){ //           [ 1, 5, 13, 34, 47, 98 ] - Ordenado
    
    // recorrer el arreglo completa
    for(let j=0 ; j<arreglo.length -1 ; j++){ //    [ 5, 13, 1, 47, 34, 98 ]

        // comparar cada elemento con el siguiente
        if(arreglo[j] > arreglo[j+1]){ // Los numeros o letras iguales no entran en el condicional

            // intercambiar los valores
            let aux = arreglo[j];
            arreglo[j] = arreglo[j+1];
            arreglo[j+1] = aux;
        }
    }
}
console.log(arreglo); */


// METODO 2 
/*
function bubbleSort(arreglo){
    let changePosition = true;

    while(changePosition){
        changePosition = false;

        for(let i=0 ; i<arreglo.length -1 ; i++){
            if(arreglo[i] > arreglo[i+1]){
                [arreglo[i], arreglo[i+1] = arreglo[i+1], arreglo[i]];
                changePosition = true;
            }
        }
    }
    return arreglo;
}

let resultado = bubbleSort(arreglo);
console.log(resultado); */



let arreglo = [
    {
        nombre : "Denis",
        legajo: 4
    },
    {
        nombre : "Brian",
        legajo: 2
    },
    {
        nombre : "Fabian",
        legajo: 6
    },
    {
        nombre : "Ana",
        legajo: 1
    },
    {
        nombre : "Eduardo",
        legajo: 5
    },
    {
        nombre : "Carlos",
        legajo: 3
    },
]

// Ordenar por un campo especifico

for(let i=0 ; i<arreglo.length ; i++){ 
    
    for(let j=0 ; j<arreglo.length -1 ; j++){ 

        if(arreglo[j].legajo > arreglo[j+1].legajo){ // ASCEDNDENTE > / DESCENDENTE <

            let aux = arreglo[j]; // NO (arreglo[j].lengajo) para podoer mover todo el objeto
            arreglo[j] = arreglo[j+1];
            arreglo[j+1] = aux;
        }
    }
}


for(let i=0 ; i<arreglo.length ; i++){
    console.log(arreglo[i]); 
}