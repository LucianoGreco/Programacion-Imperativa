const prompt = require("prompt-sync")({ sigint: true });





/*  EJERCICIO N 1. 
Sumar todas las notas y dividirala entre la cantidad de notas a promediar,
PROMEDIO=(nota1+nota2+nota3)/3 */
/*
function promediar(nota1, nota2, nota3){

    let promedio;

    if(nota1 >= 0 && nota1 <=10 && nota2 >= 0 && nota2 <=10 && nota3 >= 0 && nota3 <=10){
        promedio = (nota1 + nota2 + nota3)/3;
    }
    else{
        console.log("ERROR: Nota invalidad, ingrese un numero del 1 al 10!");
    }

    return promedio;
}
let primerNota = parseInt(prompt("Ingrese la primer nota:   "));
let segundaNota = parseInt(prompt("Ingrese la segunda nota:   "));
let tercerNota = parseInt(prompt("Ingrese la tercer nota:   "));

let promedio = promediar(primerNota, segundaNota, tercerNota);
console.log(promedio);
*/





/*  EJERCICIO N 2. 
Algoritmo para convertir una catidad de pesos a dólares */
/*
let pesos = parseInt(prompt("Ingrese la cantidad de pesos que quiere convertir: $"));
let precioDolar = parseInt(prompt("Ingrese el precio del USD: $"));

function pasarDePesosADolarers(pesos, precioDolar){
    dolares = pesos / precioDolar
    return dolares
}

let valor = pasarDePesosADolarers(pesos, precioDolar);
console.log("El precio del USD es: $"+valor);
*/





/*  EJERCICIO N 3. 
Hacer un programa que calcule el salario de un empleado si se descuenta el 20% de su salario actual */
/*
let salario = parseInt(prompt("Ingrese el salario: $"))
let porcentaje = parseFloat(prompt("Ingrese el porcentaje en decimales: "))

function calcuolarSalario(salario, porcentaje){
    return salario * (1 - porcentaje)   
}

let salarioActual = calcuolarSalario(salario, porcentaje);
console.log("$"+salarioActual);
*/



/*  EJERCICIO N 4. 
Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 10.5
mostrar aprobado, de lo contrario, mostrar desaprobado */
/*
function mostrarSituacion(promedio){

    console.log(promedio);

    if(promedio >=7){
        console.log("Aprobaste");
    }
    else{
        console.log("Desaprobaste :D");
    }
}

mostrarSituacion(promedio);
/*





/*  EJERCICIO N 5. 
Igresar un numero y mostrar si es numero par o impar */
/*
let numero = parseInt( prompt("Ingrese un numero: "))

function esPar(numero){

    modulo = numero % 2;

    if(modulo == 0){
        console.log("Es Par");
    }
    else{
        console.log("Es Impar");
    }
}

// esPar(numero);
*/






/*  EJERCICIO N 6.
Elaborar un programa que simule una clave de acceso. Si el usuario es "ADMIN" y la clave es "12345" mostrar
el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar "ACCESO DENEGADO" */
/*
let usuario = prompt("Ingrese su usuario: ").toLowerCase();
let clave = prompt("Ingrese su clave: ").toLowerCase();

console.log();

function permitirAcceso(usuario, clave){

    let admin = "admin"
    let password = "12345"

    if((usuario == admin) && (clave == password)){
        console.log(" ✔ ACCESO PERMITIDO ✔ ");
    }
    else{
        console.log(" ❌ ACCESO DENEGADO ❌ " );
    }
}

permitirAcceso(usuario, clave);
*/






/*  EJERCICIO N 7. 
Elabora un programa que permita ingresar un numero entero del 1 al 12 y muestre la tabla de multiplicar
de dicho numero */
/*
let numero = parseInt(prompt("Ingrese un numero entero del 1 al 12:  "))

if(numero >= 0 & numero <= 12 ) {
    console.log();
    multiplicar(numero);
}else{
    console.log("\nERROR: Ingrese un numero entero entre 1 y 12:  ");
}

function multiplicar(numero){

    let i;
    for(i = 0 ; i <= 12; i++){

        resultado = i * numero;
        console.log(numero+" x "+ i +" = " + resultado );
    }
}
*/





/* EJERCICIO N 8.
Elabora un programa que muestre el mayor de 10 nuumero ingresados */
/*
function mostrarElMayor(){
    let maximo = 0;
    let i = 1;

    for(i ; i <= 10; i++ ){
        let numero = parseInt(prompt("Ingrese el numero "+ i +": "));
    
        if(!isNaN(numero)){ // numero es valido
            if(numero > maximo){
                maximo = numero;
            }
        }
        else{
            console.log("ERROR: Ingrese un numero valido!");
        }
    }
    console.log("El numero maximo es "+maximo);
}
mostrarElMayor()
*/





/* EJERCICIO 9.
Elabora un programa que muestra la cantidad de numero pares e impares entre 10 numeros */
/*
function mostrarPar(){
    let i = 1;

    for(i ; i <= 10; i++ ){

        modulo = i % 2;

        if(modulo == 0){
            console.log(i+" Es par");
        }
        else{
            console.log(i+" Es Impar");
        }
    }
}
mostrarPar();
/*






/* EJERCICIO 10.
Escribir un programa que, ingresando un numero, imprima los numeros desde 1 hasta ese mismo */
/*
let numeroMaximo = parseInt(prompt("Ingrese un numero maximo para contar:   "))

function mostrarNumeros(numeroMaximo){
    
    let i = 1;
    for(i ; i <= numeroMaximo ; i++){
        console.log(i);
    }
}
mostrarNumeros(numeroMaximo);
*/








/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)
*/