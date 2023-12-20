const prompt = require("prompt-sync")({ sigint: true });

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 3562305400,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 1000,
      titularCuenta: "Luciano Greco",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

//console.log(banco.clientes);
//console.table(banco.clientes);
/*
┌─────────┬────────────┬────────────────────┬──────────────┬───────────────────┐
│ (index) │ nroCuenta  │    tipoDeCuenta    │ saldoEnPesos │   titularCuenta   │
├─────────┼────────────┼────────────────────┼──────────────┼───────────────────┤
│    0    │ 5486273622 │ 'Cuenta Corriente' │    27771     │  'Abigael Natte'  │
│    1    │ 1183971869 │  'Caja de Ahorro'  │     8675     │  'Ramon Connell'  │
│    2    │ 9582019689 │  'Caja de Ahorro'  │    27363     │ 'Jarret Lafuente' │
│    3    │ 1761924656 │ 'Cuenta Corriente' │    32415     │  'Ansel Ardley'   │
│    4    │ 7401971607 │   'Cuenta Unica'   │    18789     │  'Jacki Shurmer'  │
└─────────┴────────────┴────────────────────┴──────────────┴───────────────────┘ */


  // usuario = usuario.charAt(0).toUpperCase() + usuario.slice(1).toLowerCase();
  // console.log(usuario);
/*
let banco = {
  clientes : arrayCuentas,
  consultaClientes: function(titular){
    for(let i = 0; i < arrayCuentas.length; i++){
      let titularEncontrado

      if( arrayCuentas[i].titularCuenta == titular ){
        titularEncontrado = arrayCuentas[i]
        return titularEncontrado;
      }
    }
  },
  deposito : function(titular, depositoDinero){
    let titularEncontrado = banco.consultaClientes(titular)
    titularEncontrado.saldoEnPesos = titularEncontrado.saldoEnPesos + depositoDinero;
    return "\nDEPOSITO REALIZADO! Su saldo actual es de  $"+titularEncontrado.saldoEnPesos;
  },
  extraccion : function(titular, extraccionDinero){
    let titularEncontrado = banco.consultaClientes(titular)
    titularEncontrado.saldoEnPesos = titularEncontrado.saldoEnPesos - extraccionDinero;
    return "\nEXTRACCION REALIZADA! Su saldo actual es de  $"+titularEncontrado.saldoEnPesos;
  }
}


console.log("BIENVENIDO AL BANCO!\n");
let titular = prompt("NOMBRE DE CLIENTE: ");
console.log("\nQUE ACCIONES DESEA REALIZAR:  \n");
console.log("1. Depositar\n2. Extraer\n3. Informacion de cuenta");
console.log();
let accion = parseInt(prompt("Seleccione una opcion: "));

switch (accion) {
  case 1:
    let depositoDinero = parseInt(prompt("CUANTO DESEA DEPOSITAR: "));
    let deposito = banco.deposito(titular, depositoDinero);
    console.log(deposito);
  break;

  case 2:
    let extraccionDinero = parseInt(prompt("CUANTO DESEA EXTRAER: "));
    let extraccion = banco.extraccion(titular, extraccionDinero);
    console.log(extraccion);
  break;

  case 3:
    let consultaCuenta = banco.consultaClientes(titular)
    console.log(consultaCuenta);
  break;

  default:
    console.log("ERROR: Elija una opcion correcta");
    break;
}
*/





/* BONUS EXRTA 
Propiedad única
Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ] */
/*
function propiedadUnica(arr, propiedad) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {

    let nuevoObjeto = {};
    nuevoObjeto[propiedad] = arr[i][propiedad];
    resultado.push(nuevoObjeto);
  }

  return resultado;
}

let array = [
  { nombre: "Lean", edad: 27 },
  { nombre: "Eze", edad: 49 }
];


let resultadoEdad = propiedadUnica(array, "edad");
let resultadoNombre = propiedadUnica(array, "nombre");

console.log(resultadoEdad);   // Debe imprimir: [ { edad: 27 }, { edad: 49 } ]
console.log(resultadoNombre); // Debe imprimir: [ { nombre: 'Lean' }, { nombre: 'Eze' } ]
*/





/* Calculador de notas
Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada. */


alumno = {
  nombre: "Lean",
  legajo: 123456,
  notas: [6, 7, 7],
}

function promediar(alumno){

  let notas = 0;
  let promedio = 0;

  for(let i = 0 ; i < alumno.notas.length; i++){
    notas += alumno.notas[i];
  }
  promedio = notas / alumno.notas.length; 
  
  if(promedio >= 7){
    return `El alumno ${alumno.nombre} esta APROBADO`
  }
  else{
    return `El alumno ${alumno.nombre} esta DESAPROBADO`
  }
 

}


let nota = promediar(alumno);
console.log(nota);





/*
  A. cd: ./prjecto/
  B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
  C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
  D. Terminal: node variables.js (o sin el .js)
  E. Terminal: clear (Limpia la terminal)
*/