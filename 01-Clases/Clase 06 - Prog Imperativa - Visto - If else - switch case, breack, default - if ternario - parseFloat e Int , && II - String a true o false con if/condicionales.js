const prompt = require("prompt-sync")({ sigint: true });

/* 
    a. IF / ELSE IF / ELSE 
    b. IF ternario
*/


/* a. If Else
        funcion nombre(){
            SI(pasaesto){
                hace esto
            }SINO{
                hace esto
            }
        }


    b. Swich
        switch (caso) {

            es este caso:
                    hace esto
            sali;

            es este caso:
                    hace esto
            sali;

            si no es nungun caso:
                hace esto
            sali;
        }
*/


//let valor1 = parseInt(prompt("Ingrese el primer valor: "));
//let valor2 = parseInt(prompt("Ingrese el segundo valor: "));

/*
function probandoIfElse(numero1,numero2){
    console.log(""); // Salto de linea

    if(numero1 > numero2){
        console.log(numero1+" es mayor que "+numero2);
    }
    else if(numero1 == numero2){
        console.log(numero1+" es igual que "+numero2);
    }
    else
    console.log(numero1+" es menor que "+numero2);
}

probandoIfElse(valor1,valor2);
*/




//let valor = parseInt(prompt("\nIngrese el un nuemro: "));
/*
let valor = prompt("Ingrese el un dia, primer letra en mayuscula (case sensitive): "); // case sensitive

function probandoSwich(dia){
    // switch = Opcion: Switch Statement: Arma la estructura
    console.log();

    switch (dia) { 
        case "Lunes" :
            console.log("Corresponde a Lunes");
        break; 
    
        case "Martes":
            console.log("Corresponde a Martes");
        break; 

        case "Miercoles":
            console.log("Corresponde a Miercoles");
        break; // Fin de la ejecicion

        case "Jueves":
            console.log("Corresponde a Jueves");
        break; 

        case "Viernes":
            console.log("Corresponde a Viernes");
        break; 

        default:
            console.log("Corresponde a finde semana");
        break;
    }
}

probandoSwich(valor);
*/

/*
1. En un parque de diversiones nos piden un programa para verificar si los pasajeros de la montaña rusa
puede subir al juego
Crear una funcion puedeSubir() que reciba dos parametros: altura dela persona y si viene acompañada.
Debe retornar un valor booleano (TRUE, FALSE) que indique si la persona puede subirse o no, basado en 

las siguientes condiciones:
    a. Debe medir mas o igualo a 1.40m y menos de 2 metros
    b. Si mide menos de 1.40m hasta 1.20m, debera venir acompañado.
    c. Si mide menos de 1.20m no podra subir ni acompañado

*/


let acompañado = parseInt(prompt("¿Viene acompañado? 0 = NO / 1 = SI: "));
let altura = parseFloat(prompt("Ingrese su altura: "));

if(acompañado == 1){
    acompañado = true;
}
else{
    acompañado = false;
}


// Opcion 1 - If else       

function puedeSubir(altura, vieneAcompañado = false){ // <- vieneAcompañado = false - asigna un valor por defecto. Se sobreescribe con el parametro del llamado
    // se cumple esto && y esto
    // se cumple esto || o esto
    if( (altura >= 1.40 && altura < 2) || ( altura < 1.40 && altura >= 1.20 && vieneAcompañado == true) ){
        return true
    }
    else{
        return false
    }
}



// Opcion 2 - If ternario
/*
function puedeSubir(altura, vieneAcompañado = false){ // <- vieneAcompañado = false - asigna un valor por defecto. Se sobreescribe con el parametro del llamado
    return ((altura >= 1.40 && altura < 2) || ( altura < 1.40 && altura >= 1.20 && vieneAcompañado == true)) ? true : false
}
*/


// PRUEBAS
//let permido = puedeSubir(1.30, true); // true
//let permido = puedeSubir(1.30, false); // false
//let permido = puedeSubir(1.30, true); // false

let permido = puedeSubir(altura, acompañado); // true
console.log("Acceso: " + permido);










/*

    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)

*/