function ordenar(arreglo){

    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length -1 ; j++){
            if (arreglo[j] > arreglo[j+1]){

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}


const edades = [33, 27, 34, 30, 34, 25];
const letras = ["C","E","A","D","B","F"];

// let arregloOrdenado = ordenar(letras);
// console.log(arregloOrdenado);

const arrayCuentas = [
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
        estaHabilitada: false,
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
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

function ordenarPorSaldo(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length -1 ; j++){
            if (arreglo[j].saldo > arreglo[j+1].saldo){ // Compara los saldo

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

let ordenarSalgo = ordenarPorSaldo(arrayCuentas)
console.log("\nORDENAMIENTO POR SALDO  ----------------------------¬");
console.log(ordenarSalgo);



function ordenarEdadTitular(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length -1 ; j++){
            if (arreglo[j].edadTitular > arreglo[j+1].edadTitular){ // Compara los saldo

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

let ordenarEdad = ordenarEdadTitular(arrayCuentas)
console.log("\nORDENAMIENTO POR EDAD ----------------------------¬");
console.log(ordenarEdad);