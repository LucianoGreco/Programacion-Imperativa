/* Acceder a elementos especificos de un array
Modificar cada uno de sus elementos un array e imprimirlos
Agregar elementos a un array
Extraer elementos de un array
Comparar elementos de un array con los elementos de otro
*/
/*
//            i: 0,1,2,3,4
let arreglito = [1,2,3,4,5,6];

//console.log(arreglito[3]); // 4

arreglito[3] = 20
//console.log(arreglito);

arreglito.push(7); // Agregar al final
//console.log(arreglito);

let ultimoDato = arreglito[6]; // Extrae datos de una variable
console.log(ultimoDato); // 7

let ultimoelemento = arreglito.pop(); // Extrae y elimina el ultimo dato de en una variable
// console.log(ultimoelemento); // 7
// console.log(arreglito); // [ 1, 2, 3, 20, 5, 6 ]

let otroArreglito = [11,12,13,14,15,16];

if(arreglito[1] === otroArreglito[1]){
    true
}
else{
    false
}
*/



/*
¿Qué devuelven estos códigos?
En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la consola.
*/

// 1.
let numbers = [22,33,54,66,72];
//console.log(numbers[numbers.length]); // undefined

// 2.
let gurpoDeAmigo = [["Harry","Ron","Hermione"],["Spiderman","Hulk","Ironman"],["Penelope Glamour","Pierre Nodoyuna","Patan"]];
//console.log(gurpoDeAmigo[1][0]); // Spiderman

// 3.
let str = "Un string cualquiera";
let grupoDeAmigos = [[45,89,0],["Digital","House",true],["String","123","false",54,true,str]];
//console.log(grupoDeAmigos[2][ grupoDeAmigos[2].length-1 ]); // Un string cualquiera
//                array[i][ array[i].length-1 ];





/* 1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
*/
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];





/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/

function conviertMayusculas(películas){
    películas[0] = películas[0].toUpperCase();
    películas[1] = películas[1].toUpperCase();
    películas[2] = películas[2].toUpperCase();
    películas[3] = películas[3].toUpperCase();
    películas[4] = películas[4].toUpperCase();

    return películas;
}






/*
Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.
*/

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

console.log("Peliculas Animadas: "+peliculasAnimadas);
console.log("Peliculas: "+peliculas);
/*
function pasajeDeElementos(peliculas, peliculasAnimadas){
    peliculas.push(peliculasAnimadas.pop().toUpperCase()); // .push(agregar) .pop(elimna y retorna) .toUpperCase(mayuscuña)
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
}

pasajeDeElementos(peliculas, peliculasAnimadas);

//console.log("Peliculas Animadas: "+peliculasAnimadas);
console.log("\nPeliculas: "+peliculas);
*/

/* 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable
*/
let juego = peliculasAnimadas.pop();

function pasajeDeElementos(peliculas, peliculasAnimadas){
    peliculas.push(peliculasAnimadas.pop().toUpperCase()); // .push(agregar) .pop(elimna y retorna) .toUpperCase(mayuscuña)
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    //peliculas.push(peliculasAnimadas.pop().toUpperCase()); Eliminado
}

pasajeDeElementos(peliculas, peliculasAnimadas);


console.log("\nJUEGO ELIMINADO: "+juego);
console.log("\nPELICULAS: "+peliculas);





/*
5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
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
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!
*/

const asia = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euro = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia,europa){

    let comparacionesAsiaEuropa = [];
    
    comparacionesAsiaEuropa[0] = asia[0] === europa[0]
    comparacionesAsiaEuropa[1] = asia[1] === europa[1]
    comparacionesAsiaEuropa[2] = asia[2] === europa[2]
    comparacionesAsiaEuropa[3] = asia[3] === europa[3]
    comparacionesAsiaEuropa[4] = asia[4] === europa[4]
    comparacionesAsiaEuropa[5] = asia[5] === europa[5]
    comparacionesAsiaEuropa[6] = asia[6] === europa[6]
    comparacionesAsiaEuropa[7] = asia[7] === europa[7]
    comparacionesAsiaEuropa[8] = asia[8] === europa[8]

    return comparacionesAsiaEuropa = []
}

let comparaciones = compararCalificaciones(asia,euro)
console.log(comparaciones);