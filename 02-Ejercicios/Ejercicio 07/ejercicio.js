const prompt = require("prompt-sync")({ sigint: true });


let numero = parseInt(prompt("Ingrese un valor: "));


// 1.
/*
function contadorDeNumeros(numero){
    for (numero ; numero <= 10; numero++) {
        console.log(numero);
    }
}
//contadorDeNumeros(numero);
*/




// 2.
/*
function saltarNumeros(numero){
    for(numero ; numero <= 20; numero +=3){
        console.log(numero);
    }
}
//saltarNumeros(numero); 
*/




// 3.
/*
function sumandoNumeros(){
    let sumatoria = 0
    for(i = 0 ; i <= 10 ; i++){
        sumatoria = i + sumatoria;
    }
    console.log(sumatoria);
}
//sumandoNumeros(numero)
*/




//4. Multiplicar un numero por todos los numero enteros menores hasta llegar a un
// Ej: 4= 4*1*2*1 = 24
/*
function calcularFactorial(numero){
    let factorial = 1;

    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
    return factorial
}


if(numero < 0){
    console.log("Ingrese un numero positivo: ");
}
else{
    let resultado = calcularFactorial(numero)
    console.log(resultado);
}
*/




//5. 
function calcularFibonacci(numero) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}


let resultado = calcularFibonacci(numero);
console.log(resultado);















/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)
*/