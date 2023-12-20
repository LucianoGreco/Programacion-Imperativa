let numero = 15; // guarda un solo dato

let arreglo = []; // Coleccion de elementos
//arreglo.push(6) // [....., 6 ]

let persona = { 
    nombre : "Luciano",
    edad: 24,
    estatura : 1.60,
    genero : 'Masculino',
    pertenencias : ["Lllave","Celular","Perrito"],
    direccion : {
        ciudad : "San Rafael",
        direccion: "Cayetano Silva 1116",
        telefono: "2604331727"
    },
    saludar : function(){
        return "Hola como estas soy "+this.nombre; // this para acceder dentro del mismo objeto
    }
}


let persona2 ={
    nombre : "Celeste",
    edad: 31
}

let persona3 ={
    nombre : "Papon",
    edad: 2
}

arreglo.push(persona,persona2,persona3) // [....., 6 ]



// Ejercicio

function buscandoDentroDelArray(arreglo, nombreParametro){

    let objeto = {}

    for(let i = 0; i < arreglo.length ; i++){
        if(arreglo[i].nombre === nombreParametro){
            objeto = arreglo[i]
        }
    }

    return objeto
}

function cambiarEdad(arreglo, edad, edadNueva){
    for(let i = 0 ; i< arreglo.length; i++){
        if(arreglo[i].edad === edad){
            arreglo[i].edad = edadNueva; 
        }
    }
}



let objetoEncontrado = buscandoDentroDelArray(arreglo, "Luciano")
console.log(objetoEncontrado);