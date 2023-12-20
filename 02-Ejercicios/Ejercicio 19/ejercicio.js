/*let numeros = [6,5,1,2,4,3,8,7];

for (let i = 0; i < numeros.length; i++) {

    for (let j = 0; j < numeros.length; j++) {

        if (numeros[j] > numeros[j + 1]) {

            let aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    }
}    

console.log(numeros);*/

/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let participantes = [
    {
        nombre : "Luciano",
        likes : 4
    },
    {
        nombre : "Celeste",
        likes : 10
    },
    {
        nombre : "Rolando",
        likes : 7
    },
    {
        nombre : "Gladys",
        likes : 13
    },
    {
        nombre : "Yanela",
        likes : 8
    },
    {
        nombre : "Wlter",
        likes : 2
    },
    {
        nombre : "Milei",
        likes : 15
    },
    {
        nombre : "Coco",
        likes : 12
    },
    {
        nombre : "Toby",
        likes : 1
    },
    {
        nombre : "Papon",
        likes : 11
    },
    {
        nombre : "Eimi",
        likes : 9
    },
    {
        nombre : "Napolion",
        likes : 3
    },
    {
        nombre : "Pinky",
        likes : 5
    },
    {
        nombre : "Mabel",
        likes : 6
    },
    {
        nombre : "Tutuka",
        likes : 14
    },
]


for (let i=0 ; i<participantes.length ; i++) {

    for (let j=0 ; j <participantes.length -1 ; j++) {

        if (participantes[j].likes < participantes[j + 1].likes) {

            let aux = participantes[j];
            participantes[j] = participantes[j + 1];
            participantes[j + 1] = aux;
        }
    }
}    

// console.log("1° Puesto: "+ participantes[0].nombre);
// console.log("2° Puesto: "+ participantes[1].nombre);
// console.log("3° Puesto: "+ participantes[2].nombre);
// console.log("Ultimo Puesto: "+ participantes[14].nombre);


let temperatura = [
    ObjTemp = {
        dia: 1,
        mes: 1,
        tempMaxima: 9,
        tempMinima: 2,
    },
    ObjTemp = {
        dia: 2,
        mes: 1,
        tempMaxima: 7,
        tempMinima: 3,
    },
    ObjTemp = {
        dia: 3,
        mes: 1,
        tempMaxima: 6,
        tempMinima: 1,
    },
    ObjTemp = {
        dia: 4,
        mes: 1,
        tempMaxima: 8,
        tempMinima: 4,
    },
    ObjTemp = {
        dia: 5,
        mes: 1,
        tempMaxima: 10,
        tempMinima: 5,
    },
]

function temperaturita(temperatura, temp){

    if(temp === "maxima"){
        for (let i=0 ; i<temperatura.length ; i++) {
    
            for (let j=0 ; j <temperatura.length -1 ; j++) {
        
                if (temperatura[j].tempMaxima < temperatura[j + 1].tempMaxima) {
        
                    let aux = temperatura[j];
                    temperatura[j] = temperatura[j + 1];
                    temperatura[j + 1] = aux;
                }
            }
        } 
        return temperatura;
    }else if(temp === "minima"){
        for (let i=0 ; i<temperatura.length ; i++) {

            for (let j=0 ; j <temperatura.length -1 ; j++) {
        
                if (temperatura[j].tempMinima > temperatura[j + 1].tempMinima) {
        
                    let aux = temperatura[j];
                    temperatura[j] = temperatura[j + 1];
                    temperatura[j + 1] = aux;
                }
                
            }
        } 
        return temperatura;
    }
}


let ordenar = temperaturita(temperatura, "maxima");
console.log(ordenar);