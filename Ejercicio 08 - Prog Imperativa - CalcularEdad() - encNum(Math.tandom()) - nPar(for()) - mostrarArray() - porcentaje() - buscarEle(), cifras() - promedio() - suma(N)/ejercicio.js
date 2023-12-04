const prompt = require("prompt-sync")({ sigint: true });

/* 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frasedebés utilizar el método prompt() 
y para escribir en la consola debés utilizar el método console.log(). */
/*
let frase = prompt("Ingrese una frase: ")

function mostrarFrace(frace){
    console.log("\n"+frace);
}

mostrarFrace(frase);
*/





/* 2) Escribí un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre 
y un signo de exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".*/
/*
let nombre = prompt("Ingresa tu nombre: ")

function saludar(nombre){
    console.log("\nHola "+ nombre +"!");
}

saludar(nombre);
*/





/* 3) Escribí un programa que le pida al usuario ingresar un número,luego le pida un segundo número, 
e imprima en la consola lasuma de los dos números que ingresó el usuario. */
/*
let primerNumero = parseInt(prompt("Ingrese el primer numero: "));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero: "));


function sumar(numeroUno, numeroDos){
    let suma =  numeroUno + numeroDos;
    return "\nLa suma es: "+ suma;
}

let resultado = sumar(primerNumero, segundoNumero);
console.log(resultado);
*/





/* 4) Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola 
con la frase "Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir 
en la consola: “Tienes 20 años”.*/ 
/*
let añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento: "));

function calcularEdad(añoNacimiento){

    let AñoAcutal = 2023 
    edad = AñoAcutal - añoNacimiento; 
    
    return edad;
}

let edadActual = calcularEdad(añoNacimiento);
console.log("Tienes "+edadActual+" años");
*/





/* 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario 
que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!" */
/*
let numeroIgresado = parseInt(prompt("Ingresa un numero del 1 al 10: "))

if(numeroIgresado >= 0 && numeroIgresado <= 10){
    adivinaElNumero(numeroIgresado)
}
else{
    console.log("ERROR: Ingrese un numero valido entre el 1 y 10!");
}

function adivinaElNumero(numeroIgresado){

    let numero = parseInt(Math.random() * 10);

    if(numero == numeroIgresado){
        console.log("\nFelicitaciones, ese era!");
    }
    else{
        console.log("\nLo siento, intenta nuevamente!");
        console.log("El numero era:  "+numero);
    }

}
*/





/* 6) Escribí un programa que imprima los números pares del 0 al 100.*/
/*
function numerosPares(){

    for(let i = 0 ; i <= 100 ; i++){
        modulo = i % 2;

        if(modulo == 0){
            console.log(i);
        }
    }
}

numerosPares();
*/





/* 7) Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en la consola*/
/*
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

function mostrarArreglo(){
    for(let i = 0 ; i < nombres.length ; i++){
        console.log(nombres[i]);
    }
}

mostrarArreglo();
*/





/* 8) Construí un pseudocódigo que permita ingresar un número, si el número es mayor de 500, 
se debe calcular y mostrar en pantalla el 18% de este. */
/*
let numero = parseInt(prompt("Ingresa un numero mayor a 500: "));
let porcentajeIngresado = parseInt(prompt("Ingrese el procentaje: %"));

function cacularPorcentaje(numero, porcentajeIngresado){

    let procentaje = porcentajeIngresado / 100;

    if(numero >= 500){
        let porcentual = numero * procentaje;
        console.log("\nEl "+porcentajeIngresado+"% de "+numero+" es:   "+porcentual);
    }else{
        console.log("ERROR: Ingrese un numero valido!");
    } 
}

cacularPorcentaje(numero, porcentajeIngresado)
*/





/* 9) Escribí una función llamada elemento que recibe un arreglo como parámetro. 
La función debe devolver el valor que se encuentra en la tercera posición. 
Si el arreglo no tiene al menos 3 elementos deberá retornar -1. */
/*
const nombres = ["Luciano", "Celeste", "Papon", "Pincky", "Mabel", "Milei"];
let posicion = parseInt(prompt("Ingrese la posicion del array: "))

function encontrarElemento(arreglo, posicion){

    let indice = posicion - 1;

    if(arreglo.length >= 3){
        return arreglo[indice];
    }
    else{
        return -1;
    }
}

let elementoEncontrado = encontrarElemento(nombres, posicion);
console.log("\nEl elemento seleccionado es: "+elementoEncontrado);
*/





/* 10) Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra 
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo contrario, 
que muestre lo mínimo que le falta para ser un número de 3 cifras. 
Considerar que el usuario ingresa números de hasta dos cifras. */
/*
let numero = parseInt(prompt("Ingrese un numero de dos cifras: "))

if(numero >= 10){
    let tresCifras = 100 - numero;
    console.log("\nLe falta "+tresCifras+" para llegar a las 3 cifras");
}
else{
    let dosCifras = 10 - numero;
    console.log("\nLe falta "+dosCifras+" para llegar a las 2 cifras");
}
*/




/* 11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar. */
/*
let notas = parseInt(prompt("Ingrese la cantidad de notas: "));
let notaUno = parseInt(prompt("Ingrese la priner nota: "));
let notaDos = parseInt(prompt("Ingrese la segunda de nota: "));
let notaTres = parseInt(prompt("Ingrese la tercer nota: "));

function promediar(notas, notaUno, notaDos, notaTres){
    let promedio = (notaUno+notaDos+notaTres) /notas;  
    return promedio;
}

let promedio = promediar(notas, notaUno, notaDos, notaTres);
console.log("El promedio de las "+notas+" notas es: "+promedio);
*/





/* 12) Hacer un programa que calcule la suma de los N primeros números naturales, 
dónde N es el número límite ingresado por teclado */
/*
let numeroMaximo = parseInt(prompt("Ingrese el número límite: "));

if (isNaN(numeroMaximo) || numeroMaximo <= 0) {
    console.log("Por favor, ingrese un número válido y mayor que cero.");
} else {
    let suma = 0;
    for (let i = 1; i <= numeroMaximo; i++) {
        suma += i;
    }

    console.log("\nLa suma de los primeros " + numeroMaximo + " números naturales es: " + suma);
}
*/




/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)
*/