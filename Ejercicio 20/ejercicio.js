/* 1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For.*/
function digitosDecimales(){
    for(let i=0 ; i<=9 ; i++){
        console.log(i+".0");
        console.log(i+".0");
    }
}
//let respuesta = digitosDecimales();
//console.log(respuesta);






/* 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres. */
function numerosEntreCincoYVeinteSaltandoTresEnTres(){
    for(let i=5 ; i<=20 ; i+= 3){
        console.log(i);
    }
}
// let resupuesta2 = numerosEntreCincoYVeinteSaltandoTresEnTres();
// console.log(resupuesta2);






/* 3. Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100.*/
function sumaDeNumerosEntreCeroYCien(){
    let acumulador = 0;
    for(let i=0 ; i<=100 ; i++){
        acumulador += i;
    }
    return acumulador;
}
// let respuesta3 = sumaDeNumerosEntreCeroYCien();
// console.log(respuesta3);





/* 4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase. */
function contarVocales(string){

    let acumulador = 0;

    for(let i=0 ; i<string.length ; i++){
        const caracterActual = string[i];

        if('aeiou'.includes(caracterActual)){
            acumulador++
        }
    }
    return acumulador;
}
// let resupeusta4 = contarVocales("hola");
// console.log(resupeusta4);





/* 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida. */

const lista = [1,2,3,4,5,6,7,8,9,10];

function listaInvertida(lista){

    let nuevaLista = [];
    for(let i=lista.length -1 ; i>=0 ; i--){
        nuevaLista.push(lista[i]);
    }
    return nuevaLista;
}
// let respuesta5 = listaInvertida(lista);
// console.log(respuesta5);






/* 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma : */
// function imprimirPiramide() {
//     for (let i = 1; i <= 30; i++) {
//       console.log(String(i).repeat(i));
//     }
//   }
  
// let respuesta6 = imprimirPiramide();
// console.log(respuesta6);


function imprimirPiramide() {

    for (let i=1 ; i<=30 ; i++) {

      let linea = ""; // String: Lo conatena, no lo suma-
  
      for (let j=0 ; j<i ; j++) {
        linea += i;
      }
      return linea
    }
  }
 
  let respuesta6 = imprimirPiramide();
  console.log(respuesta6);