
const prompt = require("prompt-sync")({sigint:true});

/*
const edades = [11, 12, 45, 18, 25, 22, 10, 33, 18, 5];
let menor = [];
let mayorIgual = []
let igual = [];

// a. Obtener en un nuevo array las edades menores a 18.
// b. Obtener en un nuevo array las edades mayor o igual a 18.
// c. Obtener en un nuevo array las edades igual a 18.
for(let i = 0; i < edades.length; i++){

    if(edades[i] < 18){
        menor.push(edades[i]);
    }
    else{
        if(edades[i] == 18) {
            igual.push(edades[i]);
            mayorIgual.push(edades[i]);
        }
        else{
            mayorIgual.push(edades[i]);
        }
    }
}
// console.log(menor);
// console.log(mayorIgual);
// console.log(igual);




// d. Obtener el menor.
// e. Obtener el mayor.
let numMenor = edades[0];
let numMayor = edades[0];

for (let i = 0; i < edades.length; i++) {
    if (edades[i] < numMenor) {
        numMenor = edades[i];
    }
    if (edades[i] > numMayor) {
        numMayor = edades[i];
    }
}
// console.log("El número menor es:", numMenor);
// console.log("El número mayor es:", numMayor);





// f. Obtener el promedio de edades.
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    suma += edades[i]
}
let promedio = suma/edades.length
console.log("Promedio: "+promedio);



// g. Incrementar en 1 todas las edades.
for (let i = 0; i < edades.length; i++) {
    edades[i] = edades[i] + 1
}
console.log(edades); */



/*
2. Tenemos como base un array de cuentas bancarias, donde a cada una la
representamos con un objeto literal. A partir de este array trabajaremos sobre
los siguientes enunciados, resolviendo de la forma que nos parezca más
adecuada */
const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12, 
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1000.00, // 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]





/* 
    a.  Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
    b.  Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
    c.  Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30. */
function edadMenorA30(array){
    let menor = [];
    let menorIgual = [];
    let mayor = [];

    for(let i=0; i<arrayCuentas.length;i++){

        if(arrayCuentas[i].edadTitular > 30){
            mayor.push(arrayCuentas[i]);

        }
        else{
            menorIgual.push(arrayCuentas[i]);
            if(arrayCuentas[i].edadTitular < 30){
                menor.push(arrayCuentas[i]);
            }
        }
    }

    console.log(menor);
    console.log(menorIgual);
    console.log(mayor);
}
// edadMenorA30(arrayCuentas)





//  d. Obtener la cuenta con el titular de la misma más joven.
function titularMasJove(array){

    let cuentaMasJoven;

    let edadMinima = array[0].edadTitular; // Edad minima del primer array

    for(let i=0; i<array.length; i++){

        const edadActual = arrayCuentas[i].edadTitular; // guarda la edad acutal del recorrido

        if (edadActual < edadMinima) {
            // Actualizar la edad mínima
            edadMinima = edadActual;
    
            // Almacenar la cuenta actual como la cuenta más joven
            cuentaMasJoven = arrayCuentas[i];
        }
    }
    return cuentaMasJoven;

}
// let resultado = titularMasJove(arrayCuentas)
// console.log(resultado);





/*  e. Obtener un array con las cuentas habilitadas.
    f. Obtener un array con las cuentas deshabilitadas. */
function cuentasHabilitadas(array){

    let cuentasHabilitadas = [];
    let cuentasDesabilitadas = [];

    for(let i=0; i<array.length; i++){

        if(array[i].estaHabilitada == true){
            cuentasHabilitadas.push(array[i]);
        }
        else{
            cuentasDesabilitadas.push(array[i])
        } 
    }

    console.log("\nCuentas Habilitadas");
    console.log(cuentasHabilitadas);
    console.log("\nCuentas Desabilitadas");
    console.log(cuentasDesabilitadas);
}
// let habilitadas = cuentasHabilitadas(arrayCuentas);
// console.log(habilitadas);





//  g. Obtener la cuenta con el menor saldo.
function saldoMenor(array){

    let saldoMinimo =  array[0].saldo
    let saldoMasbajo;

    for(let i=0; i<array.length; i++){

        const saldoActual = arrayCuentas[i].saldo;

        if (saldoActual <  saldoMinimo) {

            saldoMinimo = saldoActual; // Lo guarda para comparar en el proximo bucle

            saldoMasbajo = arrayCuentas[i];
        }
    }
    return saldoMasbajo;
}

// let saldoMinimo = saldoMenor(arrayCuentas);
// console.log(saldoMinimo);





//  h. Obtener la cuenta con el mayor saldo. */
function saldoMayor(array){

    let saldoMaximo =  array[0].saldo
    let saldoMasAlto;

    for(let i=0; i<array.length; i++){

        const saldoActual = arrayCuentas[i].saldo;

        if (saldoActual >  saldoMaximo) {

            saldoMaximo = saldoActual; // Lo guarda para comparar en el proximo bucle

            saldoMasAlto = arrayCuentas[i];
        }
    }
    return saldoMasAlto;
}

// let saldoMaximo = saldoMayor(arrayCuentas);
// console.log(saldoMaximo);





/* 1. Desarrollar una función llamada generarID que reciba como parámetro el array
de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id
con un valor Numérico */

function generarID(array){

    for(let i=0; i<array.length; i++){
        array[i].id = i;
    }
    return array;
}

let generandoId = generarID(arrayCuentas)
//console.log(generandoId);





/* 2. Desarrollar una función llamada buscarPorId que reciba como parámetro el
array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto
literal completo), caso contrario retornar nul */
function buscarPorId(array, id){

    let cuentaEncontrada;

    for(let i=0; i<array.length; i++){
        if(array[i].id == id){
            cuentaEncontrada = array[id]
        }
    }
    return cuentaEncontrada
}

// let buscarId = buscarPorId(arrayCuentas, 4);
// console.log(buscarId);





/* 3. Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el
array de cuentas y un saldo (Number), deberá retornar un array que se cuyas
cuentas se encuentren por debajo del saldo enviado por parámetro */

function filtrarPorSaldos(array, saldo){
    let cuentaEncotrada = [];

    for(let i=0; i<array.length; i++){

        if(array[i].saldo < saldo){
            cuentaEncotrada.push(array[i])
        }
    }

    return cuentaEncotrada
}

// let saldo = parseInt(prompt("Ingrese el sueldo maximo a buscar: "))

// let cuentaSaldo = filtrarPorSaldos(arrayCuentas, saldo);
// // console.log(cuentaSaldo);





/* 4. Desarrollar una función llamada incrementarSaldo que reciba como parámetro
el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta,
en caso de encontrar, caso contrario retornar undefined
a. Reutilizando la función buscarPorId */

function incrementarSaldo(array, id, saldo){
    let arrayEncotrado = buscarPorId(array, id)
    arrayEncotrado.saldo += saldo;
    return arrayEncotrado
}
let incrementarSaldito = incrementarSaldo(arrayCuentas, 5, 2000);
console.log(incrementarSaldito);