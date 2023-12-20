const prompt = require("prompt-sync")({ sigint: true });

/* ¿QUE DEVUELVEN ESTOS CODIGOS?
En este ejercicios deberas pensar que devuelven estos codigos sin probarlos en la consila */
/*
    a.  let numbers = [22,33,54,66,72]

            console.log(numbers[numbers.length]); // 5 Elementos (indice 5) = undefined 


    b.  let grupoDeAmigos = ["Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Iroman", "Penelope Glamour", "Pierre Nodyuna", "Patan"]

            console.log(grupoDeAmigos[5]); // Indice 5 = Iroman


    c.  let str = "un string cualquiera";
        let arrayAleatorio=["Digital", "House", "true", "string", "123", "false", "54", str] // 8 Elementos

                console.log(arrayAleatorio[arrayAleatorio.length - 1]); //  8 Elementos - 1 (7 indice) = "un string cualquiera"
*/






/* 1. Crear la estructura adecuada para guardar las siguientes películas: 
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de las películas
una vez creada la estructura correspondiente. */
/*
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

console.log("\nLISTA DE PELICULAS: ");
console.log(peliculas);
// console.log(peliculas[2]); // rocky
*/
/*
    let peliculas = [];

    for (let i = 0; i < 5; i++) {
        let nombrePelicula = prompt(`Ingrese el nombre de la película ${i + 1}: `);
        peliculas.push(nombrePelicula);
    }

    console.log("Lista de películas:\n");
    for (let i = 0; i < peliculas.length; i++) {
        console.log(`${i + 1}. ${peliculas[i]}`);
    }
*/





/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase(). */
/*
function convertirEnMayusculas(peliculas){
    let peliculasEnMayuscula = peliculas.map(peliculas => peliculas.toUpperCase());
    return peliculasEnMayuscula;
}

let peliculasEnMayuscula = convertirEnMayusculas(peliculas);
console.log("\nLISTA DE PELICULAS EN MAYUSCULA: ");
console.log(peliculasEnMayuscula);
*/




/* 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas. */
/*
let películaAanimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function agregarPeliculas(peliculas, peliculasMayusculas) {

    peliculas.push(...peliculasMayusculas);
    peliculas = convertirEnMayusculas(peliculas)
  
    return peliculas;
  }
  
const agregadoPeliculas = agregarPeliculas(peliculas, películaAanimadas);
console.log("\nLISTA DE PELICULAS CON PELICULAS AGREGADAS:");
console.log(agregadoPeliculas);
*/



/* 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable. */
/*
function eliminarElemento(peliculas){

    let peliculaEliminada = peliculas.pop();
    
    peliculaEliminada = peliculaEliminada.toUpperCase();
    
        console.log("\nPELICULA ELIMINADA: "+peliculaEliminada+"\n");
    
        peliculas = convertirEnMayusculas(peliculas);
        return peliculas;
}
    
    let peliElimniada = eliminarElemento(peliculas);
    console.log("\nLISTA DE PELICULAS ACTUALIZADA: ");
    console.log(peliElimniada);
*/



/* 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento. */

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
/*const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asiaScores, euroScores) {

    console.log("\nCLASIFICACIONES:");
    console.log(asiaScores);
    console.log(euroScores);

    console.log("\nCOMPARACION DE CALIFICACIONES: ");

    if (asiaScores.length !== euroScores.length) { // Misma cantidad de calificaicones
        return "Las calificaciones son diferentes";
    }
    
    for (let i = 0; i < asiaScores.length; i++) {

        if (asiaScores[i] !== euroScores[i]) {
            return "Las calificaciones son diferentes";
        }
    }
    
    return "Las calificaciones son iguales";
}

const comparacionCalificaciones = compararCalificaciones(asiaScores, euroScores);
console.log(comparacionCalificaciones);
*/




/* 6. Array inverso
En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.

    1. Creá la función imprimirInverso que tome un array como argumento y que
    imprima en la consola cada elemento en orden inverso (no tenés que invertir el
    array). */
/*
function imprimirInverso(asiaScores){

    let inicio = asiaScores.length - 1;

    for( i= inicio ; i > 0 ; i--){
        console.log(asiaScores[i]);
    }
}

imprimirInverso(asiaScores); */


/* 2. Creá la función inversor que tome un array como argumento y devuelva uno nuevo invertido.*/
/*
function arrayInverso(asiaScores){

    let i = asiaScores.length - 1;
    let nuevoArray = [];

    for( i  ; i >= 0 ; i--){
        nuevoArray.push(asiaScores[i]);
    }
    return nuevoArray;
}

let arrayInvertido = arrayInverso(asiaScores);
console.log(arrayInvertido);
*/


/*
sumaArray()
En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114
*/
/*
let numeros = [5,20,100]

function sumarArray(numeros){

    let suma = 0;

    for(let i = 0 ; i < numeros.length; i++){
        suma += numeros[i];
    }

    return suma
}

let suma = sumarArray(numeros)
console.log(suma);

let suma1 = sumarArray([1,2,3]) // 6
let suma2 = sumarArray([10, 3, 10]) // 23
let suma3 = sumarArray([-5,100, 19]) // 114
console.log(suma1);
console.log(suma2);
console.log(suma3);
*/





/* Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau". */
/*
let array1 = ["h","o","l","a"];
let array2 = ["c","h","a","u"];

function join(array){
    let concatenar = "";

    for(let i = 0 ; i < array.length; i++){
        concatenar += array[i];
    }

    return concatenar
}

console.log("\n"+join(array1));

let concatenado = join(array2)
console.log("\n"+concatenado);
*/




/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)

*/