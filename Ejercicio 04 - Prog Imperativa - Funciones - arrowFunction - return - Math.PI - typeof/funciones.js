const prompt = require("prompt-sync")({ sigint: true });

/*
# Micro Desafío 1 - Resultado : 30

    function test1(x,y){
        return y - x;
    }
    test1(10,40);


# Micro Desafío 2 -  Resultado: 20

    function test2(x,y){
        return x * 2 // Al detectar return, devuelve el valor de la expresion y termina la ejecución del bloque.
        console.log(x)
        return x /2;
    }
    test2(10); 
*/





/*
1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/

    /* function conversorDePulgadaACentimetro(pulgadas){
        return pulgadas * 2.54;
    }

    let pulgadas = prompt("Ingrese la pulgada: ");
    let conversor = conversorDePulgadaACentimetro(pulgadas);
    console.log(conversor+"cm"); */


// ARROW FUNCTION
    const conversorDePulgadaACentimetro = (pulgada) => pulgada *2.54;
    
    let pulgadas = prompt("Ingrese la pulgada: ");
    let pulgada = conversorDePulgadaACentimetro(pulgadas)
    //console.log(pulgada+"cm");





/* 
# 2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/


    /* function crearUrlConReturn(nombre){
        return `http://www.${nombre}.com.ar`
    }
    let nombre = prompt("Ingrese su nombre: ");
    let url = crearUrlConReturn(nombre);
    console.log(url); */


    /* function crearUrlSinReturn(nombre){
        console.log("http://www."+nombre+".com.ar");
    }
    let nombre = prompt("Ingrese su nombre: ");
    crearUrlSinReturn(nombre); */


// ARROW FUNCTION - Sin return

        /* const crearUrlSinReturn = (nombre) => console.log("http://www."+nombre+".com.ar");
        let nombre = prompt("Ingrese su nombre: ");
        crearUrlSinReturn(nombre); */
    

// ARROW FUNCTION - Con Returno

        const crearUrlConReturn = (nombre) =>{
            return `http://www.${nombre}.com.ar`;
        }

        let nombre = prompt("Ingrese su nombre: ");
        let url = crearUrlConReturn(nombre);
        //console.log(url); 





/*
3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
*/

    /* function colocarAdmiracion(frace){
            console.log("¡" + frace + "!");
    }

    let frace = prompt("Ingrese su frase: ");
    colocarAdmiracion(frace); */


// ARROW FUNCTION
    const colocarAdmiracion = (frace) => console.log("¡" + frace + "!");
    let frace = prompt("Ingrese su frase: ");
    //colocarAdmiracion(frace);







/*
4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
*/

    /* function calcularEdadPerros(edad){
        return edad * 7
    }

    let edadPerro = prompt("Escriba la edad de su perro: "); 
    let edadCalculada = calcularEdadPerros(edadPerro);
    console.log("Su perro tiene " + edadCalculada+ " años"); */


// ARROW FUNCTION
    const calcularEdadPerros = (edad) => {
        let años = 7;
        return edad * años;
    }

    let edad = prompt("Ingrese la edad de su perro: ")
    let años = calcularEdadPerros(edad)
    //console.log("Tu perro tiene " + años + " años"); 






/*
5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.
*/

    /* function calcularHoraLaboral(sueldo){
        let HorasMensuales = 40;
        return sueldo / HorasMensuales;
    }

    let sueldo = prompt("Igrese su sueldo: ")
    let valorHora = calcularHoraLaboral(sueldo)
    console.log(`El valor de la hora es $${valorHora}`); */



    // ARROW FUNCTION
    const calcularValorHora = (sueldo) => {
        let horasMensuales = 40;
        return sueldo / horasMensuales;
    }

    let sueldo = prompt("Ingrese su sueldo: ")
    let valorHora = calcularValorHora(sueldo)
    //console.log(`El valor de la hora es $${valorHora}`); 



/*
6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.
*/

    /*function calculadorIMC(altura, peso){
        return peso / (altura * altura);
    }

    let altura = prompt("Ecriba su altura: ");
    let peso = prompt("Ecriba su peso: ");
    let imc = calculadorIMC(altura,peso);
    console.log("Tu indice de masa corporal es de: "+imc); */


    
   const calculadorIMC = (altura, peso) => {
        return peso / (altura * altura);
    }

    let altura = prompt("Ecriba su altura: ");
    let peso = prompt("Ecriba su peso: ");

    let imc = calculadorIMC(altura,peso);
    //console.log("Tu indice de masa corporal es de: "+imc); 





 /*
 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
Investigá qué hace el método de strings .toUpperCase()
  */   

    const convertirEnMayuscula = (palabra) => {
        return palabra.toUpperCase();
    } 

    let palabra = prompt("Ingrese una palabra en minuscula: ");
    let repuesta = convertirEnMayuscula(palabra);
    //console.log(repuesta); 


/*
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.    
*/

    const obtenerTipoDeDatos = (paramentro) => {
        return typeof paramentro;
    }

    // console.log(obtenerTipoDeDatos(31));
    // console.log(obtenerTipoDeDatos(false));
    // console.log(obtenerTipoDeDatos("Luciano"));
    // console.log(obtenerTipoDeDatos([1,2,3])); 



/*
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
*/

    function calculaCircunferencia(radio) {
        return 2 * Math.PI * radio;
      }
      
      let radio = calculaCircunferencia(1); // 6.283185307179586
      //console.log(radio);