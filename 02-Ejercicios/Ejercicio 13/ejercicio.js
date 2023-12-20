/* EJERCICIO N1: Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de
que el número de la iteración sumado con el número pasado por parámetro sea par,
mostrará en la consola: “El número X es par”.*//*

function loopDePares(numero){

    for(let i = 0; i <= 100; i++){
        
        let suma = i + numero;

        if(suma %2 === 0){
            console.log(+ i + " + "+numero+" = "+suma+": --- > Es par");
        }else{
            console.log(+ i + " + "+numero+" = "+suma);
        }
    }
}

let resultado = loopDePares(5);
console.log(resultado); */




/* EJERCICIO N2: Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetros un
número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número
del loop. Luego, modificar el código para que, en caso de que ese número sumado con el
número pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro. *//*

function loopDeImpares(numero, palabra){

    for(let i = 0; i <= 100; i++){
        
        let suma = i + numero;

        if(suma %2 !== 0){
            console.log(+ i + " + "+numero+" = "+suma+": --- > "+palabra);
        }else{
            console.log(+ i + " + "+numero+" = "+suma);
        }
    }
}

let resultado = loopDeImpares(5, "Impar");
console.log(resultado); */





/* EJERCICIO N3: Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro y
que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
● sumatoria(3) debe retornar 6 porque hace (1+2+3)
● sumatoria(8) debe retornar 36 /* /*

function sumatoria(numero){

    let sumatoria = 0;
    for(let i = numero; i >= 0; i--){
        sumatoria += i;
    }

    return sumatoria
} 

let resultado = sumatoria(5);
console.log(resultado); */






/* EJERCICIO N4: Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como
parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que
le hayas pasado. Ejemplo:
● nuevoArreglo(5) debe retornar [1,2,3,4,5]
● nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] *//*

function nuevoArreglo(numero){

    let nuevoArreglo = []

    for(let i = 1; i <= numero; i++){
        nuevoArreglo.push(i)
    }

    return nuevoArreglo;
}

let resultado = nuevoArreglo(10);
console.log(resultado); */






/* EJERCICIO N5: Similar String.split()
Deberás crear una función llamada split que reciba un string y simule el comportamiento
de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte.
Importante: no podés usar el String.split(). Ejemplo:
● split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
● split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */ /*

function split(string){

    let caracteres = []

    for(let i = 0; i <= (string.length - 1); i++){

        caracteres.push(string[i]);
    }

    return caracteres;
}

let resultado = split("Hola");
console.log(resultado); */





/* EJERCICIO N6: Manejando dos arreglos
Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo
como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento
de array 2}”. Ejemplo:
● arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a */ /*

function arrayHandler(arreglo1, arreglo2){

   //let mensajes = [];
    let mensaje = ""

    for(let i = 0 ; i <= (arreglo1.length -1) ; i++){
        //mensajes.push("Soy "+arreglo1[i]+" y yo soy "+ arreglo2[i]);
        mensaje += "Soy "+arreglo1[i]+" y yo soy "+ arreglo2[i]+"\n";
    }

    // return mensajes
    return mensaje
}

let arreglo1 = [1,2,3,4];
let arreglo2 = ["h","o","l","a"];

let resultado = arrayHandler(arreglo1, arreglo2);
console.log(resultado); */





/* EJERCICIO N7: Palíndromo
Deberás crear una función llamada palindromo que indique si una palabra es palíndroma
o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
● palindromo(“anilina”) debe retornar true
● palindromo(“Ana”) debe retornar true
● palindromo(“Enrique”) debe retornar false */

function palindromo(palabra){

    let palabraInversa = "";

    for(let i = (palabra.length-1); i >= 0; i--){
        palabraInversa += palabra[i]
    }

    if(palabra == palabraInversa){
        return true
    }
    else{
        return false
    }

}


let resultado = palindromo("ana");
console.log(resultado);