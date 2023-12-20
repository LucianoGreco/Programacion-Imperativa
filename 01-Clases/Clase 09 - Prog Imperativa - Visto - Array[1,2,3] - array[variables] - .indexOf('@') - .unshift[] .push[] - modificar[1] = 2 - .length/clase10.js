const prompt = require("prompt-sync")({sigint : true});


let miNombre = "Luciano"; 
let otroArray = [1,2,3];

let array = [miNombre, 31, true, otroArray];


// console.log(array); // [ "Luciano", 31, true, [1,2,3] ]
// console.log(array[3][2]); // busqieda por indice [0,1,2...] -----> 3


let arrayCorreosPendientes = [
    'correo.electronico.indice-04.@hotmail.com',
    'correo.electronico.indice-05.yahoo.com',
    'correo.electronico.indice-06.@gmail.com',
    'correo.electronico.indice-07.hotmail.com',
    'correo.electronico.indice-08.@yahoo.com',
    'correo.electronico.indice-09.@gmail.com',
    'correo.electronico.indice-10.@ghotmail.com',
    'correo.electronico.indice-11.@yahoo.com',
    'correo.electronico.indice-12.gmail.com',
];

let arrayCorreosAdminitdos = [
    'correo_electronico_indice-1_@hotmail.com',
    'correo_electronico_indice-2_@hotmail.com',
    'correo_electronico_indice-3_@hotmail.com',
];

let arrayCorreosDescartados = [];


function verificarCorreo(arreglo){ // Funcion para reccorer un array
    // indice = 0 -> Todos los array inician en el idice cero 0
    // length -> Cantidad de elementos que tiene
    for(let indice = 0 ; indice<arreglo.length ; indice++){ 
        
        if(arreglo[indice].indexOf("@") != -1){
            arrayCorreosAdminitdos.push(arreglo[indice])
        }
        else{
            arrayCorreosDescartados.push(arreglo[indice])
        }
    }
}


// verificarCorreo(arrayCorreosPendientes);

// console.log("--- Array de correos pendientes: ---");
// console.log(arrayCorreosPendientes);
// console.log("\n");

// console.log("--- Array de correos admitidos: ---");
// console.log(arrayCorreosAdminitdos);
// console.log("\n");

// console.log("--- Array de correos descartados: ---");
// console.log(arrayCorreosDescartados);
// console.log("\n");


/*
ARRAY Y COLECCIONES:
Vamos a afianzar nuestro conocimiento de arrays explorando distintas accciones sobre ellos. 
Veremos si se comportan como esperamos u ocurren resultados inesperados

En primer lugar, practiquemos las acciones mas comunes y necesarias:

    a. Acceder a elementos especifico de un array -------------------------- miArray[1]
    b. Modificar cada uno de sus elementos e imprimirlos ------------------- miArray[1] = 2
    c. Agregar elementos a un array ---------------------------------------- miArray.push[3] Agrega al final / .unshift[3] agrega al inicio
    d. Extraer elemnetos de un array --------------------------------------- let segundoElement = miArray[2] 2 = indice del elemento
    e. Comprarar elementos de un array con los elementos de otro ----------- 
*/



/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)

*/