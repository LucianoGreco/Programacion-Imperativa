// EJERCICIO N1: Crear un array llamdo misMascotas

let misMascotas = [];

/* EJERCICIO N2: Dentro de este array crearemos un objeto para cada mascota. Cada objeto debera tener:
nombre:
raza:
edad:
sonido:
un metodo que nos retorne ese sonido 2 veces */ 

let perro = {
    nombre: "Buddy",
    raza: "Labrador",
    edad: 3,
    sonido: 'Guaf',
    hacerSonido : function(){
        return this.sonido + " " + this.sonido;
    }
}

let gato = {
    nombre: "Michi",
    raza: "persa",
    edad: 13,
    sonido: 'Miau',
    hacerSonido : function(){
        return this.sonido + " " + this.sonido;
    }
}

let loro = {
    nombre: "Lorenzo",
    raza: "loro",
    edad: 6,
    sonido: 'Quere Cacao',
    hacerSonido : function(){
        return this.sonido + " " + this.sonido;
    },
}
// loro.comidaFavorita = "semillas"; Agrega esta propiedad y valor inexsietene al objeto loro

misMascotas.push(perro); // push(paretesis)
misMascotas.push(gato);
misMascotas.push(loro);

// console.log(misMascotas);
// console.log(misMascotas[2].hacerSonido());





//  EJERCICIO N3: Deberemos crear una funcion que se llame aumentarEdad que aumente la edad de cada anumal en 1.

function aumentarEdad(array){

    for( let i = 0; i < array.length ; i++){

        array[i].edad += + 1;
    }

    return array;
}
//let arrayModificado = aumentarEdad(misMascotas)
//console.log(arrayModificado);






/* EJERCICIO N4: Ahora debemos  crear otra function, que se llame aumentarEdad2, que va hacer un trabajo mas fino:
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumnetar su edad en 2
Si la mascota tiene mas de 10 años, debera sumarle la mitad de su edad */

function aumentarEdad2(array){

    for(let i = 0; i<array.length; i++){
        
        if(array[i].edad < 6){
            array[i].edad += + 1;
        }
        else if(array[i].edad >= 6 && array[i].edad <= 10){
            array[i].edad += + 2;
        }
        else{
            array[i].edad += (array[i].edad/2);
        }
    }
    return array
}

// let arrayConSumas = aumentarEdad2(misMascotas)
// console.log(arrayConSumas)





/* EJERCICIO N5: Ahora crearemos una funcion que va a agenerar un identificador (ID) en cada objeto, 
que sera secuencial y que empezara en 1 */

function crearIndentificador(array){
    for(let i = 0; i<array.length; i++){
        array[i].identificador = i + 1;
    }

    return array
}

let arrayConId = crearIndentificador(misMascotas);
console.log(arrayConId);






/* EJERCICIO N6: Por ultimo eliminamos la propiedad 'raza', ya que para nosotros 
tidos los animalitos son iguales */

function eliminarRaza(array){
    for(let i = 0; i < array.length; i++){

        delete array[i].raza;
    }

    return array
}


let razaEliminada = eliminarRaza(misMascotas);
console.log(razaEliminada);