const prompt = require("prompt-sync")({ sigint: true });


function calcular(){
    // Datos
    let valor1 = parseInt(prompt("\nIngrese el primer valor: "));
    let valor2 = parseInt(prompt("Ingrese el segundo valor: "));


    // Sumar
    function sumar(numero1, numero2){
        return numero1 + numero2;
    }

    let resultadoSuma = sumar(valor1, valor2)
    console.log("\nEl resultado de la suma es: " + resultadoSuma);



    // Restar
    function restar(numero1, numero2){
        return numero1 - numero2;
    }

    let resultadoResta = restar(valor1, valor2)
    console.log("El resultado de la resta es: " + resultadoResta);



    // Multiplicar
    function multiplicar(numero1, numero2){
        return numero1 * numero2;
    }

    let resultadoMultiplicacion = multiplicar(valor1, valor2);
    console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);


    // Dividir
    function dividir(numero1, numero2){
        return numero1 / numero2;
    }

    let resultaDivision = dividir(valor1, valor2);
    console.log("El resultado de la division es: " + resultaDivision);

}

calcular();


/*
A. cd: ./prjecto/
B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
C. colocar en el archivo variables.js : const prompt = require("prompt-sync")({ sigint: true });
D. Terminal: node variables.js (o sin el .js)
E. Terminal: clear (Limpia la terminal)
*/