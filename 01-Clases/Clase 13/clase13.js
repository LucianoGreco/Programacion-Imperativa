const prompt = require("prompt-sync")({sigint:true});

//console.log("String de console");

/* function mostrarFrase(){
    let frase = "Strig de return";
    return frase // Buena practica
} */

// let frase = mostrarFrase();
// console.log(frase);


/*
//While
let i = 0

while( 4 < 5 ){
    // codigo
    i++
}


for(let i = 0; 4 < 5; i++){
    // codigo
}
*/




/* Modularizar funcion
Realizar el software que me permita cargar las notas (3) de un alumno y muestre su promedio */ /*


function promedio(){
    let nota1, nota2, nota3;

    nota1 = prompt("Cargue nota 1: ");
    nota2 = prompt("Cargue nota 2: ");
    nota3 = prompt("Cargue nota 3: ");

    let promedio = (nota1,nota2,nota3)/3

    return promedio;
}                                                               */ /*


function pedirNotas(){
    let nota1, nota2, nota3;

    nota1 = prompt("Cargue nota 1: ");
    nota2 = prompt("Cargue nota 2: ");
    nota3 = prompt("Cargue nota 3: ");

    let sumaDeNota = nota1+nota2+nota3;

    return sumaDeNota
}

function calcularPromedio(){
    let sumaDeNotaObtenida = pedirNotas();

    let promedio = sumaDeNotaObtenida/3

    return promedio;
} */



// Objeto Literales

//let notasEstudiante = [nota1, nota2, nota3];

let estudiante = {
    nombre : "pepe",
    edad : 15,
    nota1 : 6,
    nota2 : 10,
    nota3 : 5,
    saludar : function(){
        return "Hola soy" + this.nombre + " como estan?";
    },    
    cumpleaños : function(){
        this.edad++;
    }
}
//estudiante.nombre


function cumpleaños(parametroPasado){
   parametroPasado.edad++;

    return parametroPasado;
}


let nuevoObjetoEstuduante = cumpleaños(estudiante);
console.log(nuevoObjetoEstuduante);








