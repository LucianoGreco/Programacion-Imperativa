const prompt = require("prompt-sync")({ sigint: true }); // Activacion de Prompt

/*
# 
FUNCIONES: 
    nombre descriptivo
    sumar(2,2)
    console.log(); - log() Funciones predeterminada en JavaScript
*/


/*
Clase: Marh
Funcion: random() - /Numero aleatorio
*/
// Math.random();
// console.log(Math.random()); 
// console.log(Math.random()); 
// console.log(Math.random()); 
// console.log(Math.random()); 


//# DECLARAR(crear) UNA FUNCION ------------------------------------¬
// ERROR: Funciones con el mismo nombre

    function saludar(){
        let saludoEnviado = "Hola, buenos dias! Bienvenidos: ";
        return saludoEnviado; // Retorname el resultado de la funcion
    }

    let saludoRecibido = saludar(); // Capturo la funcion para mostrar su retorno
    //console.log(saludoRecibido);






    function saludarSinRetorno(parametro){
        console.log("Hola, ¿como estas "+ parametro+"?");
    }

    let nombre = "Luciano Gabriel";
    let nombrePrompt = prompt("Igrese su nombre: ");
    
    // saludarSinRetorno(nombrePrompt);
    // saludarSinRetorno(nombre)
    // saludarSinRetorno("Luciano Gabriel Greco");




    
    function multiplicarPorDosYSumarleCinco(x){
        return 3 * x + 5
    }

    let resultado_1 = multiplicarPorDosYSumarleCinco(1);
    let resultado_2 = multiplicarPorDosYSumarleCinco(5);
    //let resultado_pepe = multiplicarPorDosYSumarleCinco(PEPE); // ERROR: Pepe no es un numero

    const PEPE = "5"; // Convierte en numero
    let resultado_pepe = multiplicarPorDosYSumarleCinco(PEPE);

    console.log(resultado_1); // 8
    console.log(resultado_2); // 20
    console.log(resultado_pepe); // 20



/*

    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)

*/