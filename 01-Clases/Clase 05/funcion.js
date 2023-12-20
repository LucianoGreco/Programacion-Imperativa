const prompt = require("prompt-sync")({ sigint: true });

//1. Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.


//let variableElegida = prompt("Ingrese el numero de pulgadas: ");



// # Opcion 1 - FUNCION EXPRESADA - Se ejecutan automaticamente
/*
function pugladasACentimetros(pulgadas) {
    return pulgadas * 2.54;
} 

console.log(pugladasACentimetros(variableElegida))
*/


// # Opcion 2 - ARROW FUNCTION - No se ejecutan hasta que se las llama
// Si es un solo parametro no lleva parentesis ()
// No necesita la palabra return
/*
let pasarPugladasACentimetros = pulgadas => pulgadas * 2.54; 

let resultado = pasarPugladasACentimetros(variableElegida) // Capturar el retorno
console.log(resultado); // Mostrar el dato capturado
*/

/*
// Opcion 1 -
function suma(num1, num2){
    return num1 + num2;
}

let resultadosuma = suma(2,2);
//console.log(resultadosuma);
*/

/*
// Opcion 2 -
let sumar = (num1, num2) => num1 + num2;

let resultadosumar = sumar(5,5);
//console.log(resultadosumar);
*/

/*
let esPar = num => {
    if(num % 2 ===0){
        return true;
    }
    return false
}

let numero = esPar(2);
console.log(numero); //true
*/

/*
let hacerSumaYMultiplicacion = (num1,num2, num3) => {
    let resultado = num1 + num2;
    let final = resultado * num3
    return final;
}

let resultado = hacerSumaYMultiplicacion(2,2,2);
console.log(resultado); //8
*/

function cargarNotaYSumar(){
    let nota1 = parseInt(prompt("\nIngrese la primer nota del estudiante: ")); // parseInt: transforma el string de prompt a int
    let nota2 = parseInt(prompt("Ingrese la segunfa nota del estudiante: "));
    let nota3 = parseInt(prompt("Ingrese la tercer nota del estudiante: "));

    console.log("\nLa primer nota es: " +nota1+ "\nLa segunda nota es: "+nota2+"\nLa tercer nota es: "+nota3);

    let resultadoSuma = nota1 + nota2 + nota3;

    console.log("La suma dio: "+resultadoSuma);

    return resultadoSuma;
}


function promedio(){
    let resultadoSuma = cargarNotaYSumar();
    let promedio = resultadoSuma / 3;

    return promedio;
}


let promedioTotal = promedio();
console.log("\n PROMEDIO: "+ promedioTotal);


/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)
*/