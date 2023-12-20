/*
const concurso = {

    participante : {
        alicia : [10, 80, 75],
        bob : [90, 20, 25]
      
    },
    etapas: [],
    ganador: "",
  
    encontrarGanador: function(a,b) {

        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
    
        for (let i = 0; i < a.length; i++) {
            
            if (a[i] > b[i]) {
                puntosPrimerParticipante++;
                this.etapas.push("A");

            } else if (a[i] < b[i]) {
                puntosSegundoParticipante++;
                this.etapas.push("B");
            }
        }

        if(puntosPrimerParticipante > puntosSegundoParticipante){
            this.ganador = "alicia"
        }
        else if(puntosPrimerParticipante < puntosSegundoParticipante){
            this.ganador = "bobo"
        }
        else{
            this.ganador = "empate"
        }
  
    },

  
    exportarResultados: function(a,b) {
        
        concurso.encontrarGanador(a,b);

        const resultados = {
            etapas: this.etapas,
            ganador: this.ganador
        };

        return JSON.stringify(resultados);
    }
  };
  

const alicia = [11, 80, 75];
const bob = [10, 80, 75];


let resultado = concurso.exportarResultados(alicia, bob);
console.log(resultado);

*/






/*
function digitalHouse(num1,num2){

    for(let i = 0; i <= 100; i++){
        if(i %num1 === 0 & i %num2 === 0){
            console.log("Digital House");
        }
        else if(i %num1 === 0){
            console.log("Digital");
        }
        else if(i %num2 === 0){
            console.log("House");
        }
        else{
            console.log(i);
        }
    }
}

digitalHouse(3, 5);
*/


/*
const array = [1,2,3,4,5];

function sumArray(array){
    let suma = 0;

    for(let i = 0; i < array.length; i++){
        suma += array[i];
        
    }
    return suma;
    

}

let resultado = sumArray(array);
console.log(resultado); */
/*
const arrayString = ["h","o","l","a"];

function joinString(arrayString){

    let palabra = "";

    for(let i = 0; i < arrayString.length; i++){
        palabra += arrayString[i]
    }

    return palabra
}

let resultado2 = joinString(arrayString);
console.log(resultado2); 
*/

