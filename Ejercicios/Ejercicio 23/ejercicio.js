const prompt = require("prompt-sync")({sigint:true});

/* Ejercicio 1
Dado un array con los datos de una encuesta realizada sobre los temas musicales
más populares —lo que se tiene en el array son objetos definidos con el nombre de
un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo. */


let temasMusicales = [
    { nombre: 'Eduardo', votos: 100 },
    { nombre: 'Alexis', votos: 80 },
    { nombre: 'Brian', votos: 40 },
    { nombre: 'Daniel', votos: 20 },
    { nombre: 'Carlos', votos: 60 }
];



/* a) Resolverlo aplicando búsqueda lineal. */ /*

function busquedaLineal (temas, nombre){

    let nombreMin = nombre.toLowerCase()

    let cantidadVotos = 0;
    for(let i=0 ; i<temas.length ; i++){
        if(temas[i].nombre.toLowerCase() == nombreMin ){
            cantidadVotos = temas[i].votos;
        }
    }
    return cantidadVotos;
}

let tema = prompt("Ingrese su genero favorito: ")

let respuesta1 = busquedaLineal (temasMusicales, tema);
console.log(respuesta1); */




/* b) Resolverlo aplicando búsqueda binaria. */


  const encuestaMusical = [
    { tema: "Cancion1", votos: 20 },
    { tema: "Cancion2", votos: 15 },
    { tema: "Cancion3", votos: 30 },
    { tema: "Cancion4", votos: 10 },
    { tema: "Cancion5", votos: 25 }
  ];
  
 
//   encuestaMusical.sort((a, b) => a.tema.localeCompare(b.tema)); // Ordenar el array por temas para aplicar búsqueda binaria
function ordenar(arreglo){
    for(let i=0 ; i<arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length -1 ; j++){
            if (arreglo[j].tema > arreglo[j+1].tema){ // Compara los saldo

                let aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

ordenar(encuestaMusical)


function buscarVotosPorTema(temasVotos, temaBuscado) {

    let inicio = 0;
    let fin = temasVotos.length - 1;

    let votoEncontrado = 0;
    let encontrado = false;
  
    while (inicio <= fin) {

        const medio = Math.floor((inicio + fin) / 2);
  
        if (temasVotos[medio].tema === temaBuscado) {
            votoEncontrado = temasVotos[medio].votos;
            encontrado = true
            break;
        } 
        else if (temasVotos[medio].tema < temaBuscado) {
            inicio = medio + 1;
        } 
        else {
            fin = medio - 1;
        }
    }
  
    if (encontrado == true) {
        console.log(`La canción "${temaBuscado}" obtuvo ${votoEncontrado} votos.`);
      } else {
        console.log(`La canción "${temaBuscado}" no se encontró en la encuesta.`);
      }
  }
  
   
  const temaBuscado = prompt("Ingrese una cancion: ");

  const votosEncontrados = buscarVotosPorTema(encuestaMusical, temaBuscado);
  console.log(votosEncontrados); 
  




