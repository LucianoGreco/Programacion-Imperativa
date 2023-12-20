/*
let objetos = {
    atributos : valores
} 
*/

let persona = {
    nombre: "Luciano",
    edad: 35,
    altura: 1.54,
    dni: 35623054,
    direccion : {
        ciudad : "San Rafael",
        direccion: "Cayetano Silva",
    },
    saludar : function(){
        //console.log("Hola, buenas tardes!");
    }
};

// console.log(persona); // Todo ele objeto
// console.log(persona.dni);  // 35623054
// console.log(persona.direccion.ciudad); // San Rafael
// console.log(persona.saludar()); // Hola, buenas tardes!




/* ARREGLO DE OBJETOS
Debes crear una funcion llamada arregloDeObjetos que reciba un numero como parametro y 
devuelva un arreglo de objetos que tenga una propiedad llamada "valor" que contenga el valor del numero
y sus anteriores

arregloDeObjetos(5) debe retornar [{valor : 1},{valor : 2},]{valor : 3},{valor : 4},{valor : 5}]
arregloDeObjetos(3) debe retornar [{valor : 1},{valor : 2},]{valor : 3}]
*//*
function arregloDeObjetos(num){
    let resultado = [];

    for(let i = 1; i <= num; i++){
        let obj = {
            valor: i,
        }
        resultado.push(obj)
    }
    return resultado
}
let arregloFinal = arregloDeObjetos(5)
console.log(arregloFinal); */


/* ARREGLO DE OBJETOS 2
Debes crear una funcion llamada arregloDeObjetoDos que reciba un numero y una palabra como parametro y devuelva 
un arreglo de objetos que tenga una propiedad llamada como la palabra pasada por parametro y el valor del numero
y sus anteriores

arregloDeObjetosDos(5, "hola") debe retornar[{hola: 1},{hola: 2},{hola: 3},{hola: 4},{hola: 5}]
arregloDeObjetosDos(3, "chau") debe retornar[{chau: 1},{chau: 2},{chau: 3}]
*//*
function arregloDeObjetos(num, palabra){

    let resultado = [];

    for(let i = 1; i <= num; i++){
        let obj = {
            [palabra]: i,
        }
        resultado.push(obj)
    }
    return resultado
}
let arregloFinal = arregloDeObjetos(5, "hola")
console.log(arregloFinal); */