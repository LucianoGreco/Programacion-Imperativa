const prompt = require("prompt-sync")({ sigint: true });

// a. DEJAR PASAR
/*
let edad = parseInt(prompt("Ingresa la edad: ")); 
console.log();

    function dejarPasar(){
        if((edad % 2) != 0){
            console.log("¿Sabías que tu edad es impar?\n");
        }
    
        if(edad < 18) {
            console.log("ERROR, edad inválida. Por favor ingrese un número válido")
            console.log("No puede pasar al bar.")
        } else if (edad >= 18 && edad < 21){
            console.log("Puede pasar al bar, pero no puede tomar alcohol.")
            
        } else {
            console.log("felicidades por haber llegado a la mayoría de edad")
            console.log("Puede pasar al bar y tomar alcohol.")
        }
    }

dejarPasar(edad)
*/





// b. PAGAR COMBUSTIBLE
/*
console.log("Auto: 1 \nMoto: 2 \nAutobus: 3\n");
let tipoVehiculo = parseInt(prompt("Ingrese el nuermo del vehiculo: "))
let consumo = prompt("Ingrese los litros consumidos: ")
console.log(); 

function totalAPagar(vehiculo, litrosConsumidos){

    let precioLitro = 0;

    switch (vehiculo) {
        case 1:
            precioLitro = 86;
        break;
        case 2:
            precioLitro = 70;
        break;
        case 3:
            precioLitro = 55;
        break;
        default:
            console.log("ERROR: ingrese el tipo de vehiculo!");
        break;
    }

    if( litrosConsumidos > 25 ){
        return precioLitro + 50;
    }
    else{
        return precioLitro + 25;
    }
}

let pagar = totalAPagar(tipoVehiculo, consumo);
console.log("EL TOTAL A PAGAR ES: $"+pagar);
*/ 





// c. Local de sándwiches
/*
function totalAPagar(){

    function valorSandwich(){
        console.log();
        console.log();
        console.log();
        console.log("# TIPO DE SANDWICH");

        console.log("\n1. Pollo ----------------------------- $150 \n2. Carne ----------------------------- $200 \n3. Vaggie ---------------------------- $100\n");    
        let tipoDeSandwich = parseInt(prompt("SELECIONE EL N° DE LA OPCION: "))

        let valorSandwich = 0;

        switch (tipoDeSandwich) {
            case 1:
                console.log("\n------> Selecciono el de pollo");
                valorSandwich += 150;
            break;
            case 2:
                console.log("\n------> Selecciono el de carne");
                valorSandwich += 150;
            break;
            case 3:
                console.log("\n------> Selecciono el de verduras asadas");
                valorSandwich += 100;
            break;
            default:
                console.log("\n####### ERROR: No has seleccionado el tipo de sandwich");
            break;
        }

        return valorSandwich
    }

    function valorPan(){
        console.log();
        console.log();
        console.log();
        console.log("# TIPO DE PAN");

        console.log("\n1. Blanco c/orégano y parmesano ------ $50 \n2. Negro c/avena --------------------- $60 \n3. Sin gluten ------------------------ $75\n");
        let tipoDePan = parseInt(prompt("SELECIONE EL N° DE LA OPCION: "))

        let valorPan = 0;

        switch (tipoDePan) {
            case 1:
                console.log("\n------> Selecciono: Blanco c/orégano y parmesano");
                valorPan = 50;
            break;
            case 2:
                console.log("\n------> Selecciono: Negro con avena");
                valorPan+= 60;
            break;
            case 3:
                console.log("\n------> Selecciono: Sin gluten");
                valorPan+= 75;
            break;
            default:
                console.log("####### ERROR: No podemos hacer un sandwich sin pan");
            break;
        }

        return valorPan;

    }
        
    function valorAderesos(){
        console.log();
        console.log();
        console.log();
        console.log("# TIPO DE ADERESOS");

        let valorQueso = 0;
        let valorTomate = 0;
        let valorLechuga = 0;
        let valorCebolla = 0;
        let valorMayonesa = 0;
        let valorMostaza = 0;

        console.log();
        console.log("1. SI\n2. NO");
        let queso = parseInt(prompt("Desea agregarle queso + $20: "));

        switch (queso) {
            case 1:
                queso = true;
            break;
            default:
                queso = false;
            break;
        }

        if(queso == true){
            console.log("------> CON queso!\n");
            valorQueso = 20;
        }else{
            console.log("------> SIN Queso!\n");
        }


        let tomate = prompt("Desea agregarle tomate + $15: ")

        if(tomate == true){
            console.log("------> CON tomate!\n");
            valorTomate = 15;
        }else{
            console.log("------> SIN tomate!\n");
        }


        let lechuga = prompt("Desea agregarle lechuga + $10: ")

        if(lechuga == true){
            console.log("------> CON lechuga!\n");
            valorLechuga = 10;
        }else{
            console.log("------> SIN lechuga\n");
        }


        let cebolla = prompt("Desea agregarle cebolla + $15: ")

        if(cebolla == true){
            console.log("------> CON cebolla!\n");
            valorCebolla = 15;
        }else{
            console.log("------> SIN cebolla\n");
        }


        let mayonesa = prompt("Desea agregarle mayonesa + $5: ")

        if(mayonesa == true){
            console.log("------> CON mayonesa!\n");
            valorMayonesa = 5;
        }else{
            console.log("------> SIN mayonesa\n");
        }
        

        let mostaza = prompt("Desea agregarle mostaza + $5: ")

        if(mostaza == true){
            console.log("------> CON mayonesa!\n");
            valorMostaza = 5;
        }else{
            console.log("------> SIN mostaza\n");
        }

        let suma = valorQueso + valorTomate + valorLechuga + valorCebolla + valorMayonesa + valorMostaza;

        return suma;
    }

    let sandwich = valorSandwich()
    let pan = valorPan()
    let aderesos = valorAderesos();


    let suma = sandwich + pan + aderesos;
    return suma;
}

let total = totalAPagar();
console.log("\nEL TOTAL A PAGAR ES: $" + total);
console.log("\n¡SU PEDIDO ESTA LISTO.! - Muchas Gracias");
*/





// d. ¿Cuál es el número secreto?
/*
let numero = parseInt(prompt("Ingrese un numero del 1 al 10: "));

function encuentraElNuemro(numero){

    let numeroSecreto = parseInt(Math.random() * 10);

    if(numero == numeroSecreto){
        console.log("Felicidade el numero es: "+numeroSecreto);
    }
    else
        console.log("Error el numero secreto es: "+numeroSecreto);
}

encuentraElNuemro(numero);
*/




// e. Abrir paracaidas
/*
let velocidad = parseInt(prompt("Ingrese la velocidad: "));

function abrirParacaidas(velocidad){

    let altura = 0;

    if(velocidad <= 1000){

        altura = parseInt(prompt("Ingrese la altura: "));

        if((altura >= 2000) && (altura <= 3000)){
            console.log("ABRIR PARACAIDAS");
        }
        else{
            console.log("\nLa velocidad es buena, pero la altura NO");
            console.log("NO ABRIR EL PARACAIDAS");
        }
    }
    else{
        console.log("\nNo estamos en la velocidad adecuada");
    }
}

abrirParacaidas(velocidad);
*/





// f. Traductor condicional
/*
console.log("\nTRADUCTOR");
console.log("\n1. Perro\n2. Pelota\n3. Arbol\n4. Genio\n");
let palabra = prompt("INGRESE UNA PALABRA EN ESPAÑO: ").toLowerCase();


switch (palabra) {
    case "perro":
        console.log("\nTRADUCCION: dog");
    break;
    case "pelota":
        console.log("\nTRADUCCION: ball");
    break;
    case "arbol":
        console.log("\nTRADUCCION: tree");
    break;
    case "genio":
        console.log("\nTRADUCCION: genius");
    break;

    default:
        console.log("\nERROR: La palabra ingresada es incorrecta");
    break;
}
*/





/* h. Valoración de películas 
console.log("VALORA LA PELICULA INDICANDO: \n");
console.log("1. Muy mala\n2. Mala\n3. Mediocre\n4. Buena\n5. Muy Buena\n");
let valoracion = prompt("VALORACION: ").toLowerCase(); // Transforam todo a minusculas

    
switch (valoracion) {
    case "muy mala":
        console.log("\nLamentamos que alla sido: Muy mala\n"); 
        console.log("Muchas Gracias por valorar la pelicula, agradecemos su vicita");
    break;
    case "mala":
        console.log("\nLamentamos que alla sido: Mala\n");    
        console.log("Muchas Gracias por valorar la pelicula, agradecemos su vicita");     
    break;
    case "mediocre":
        console.log("\nLamentamos que alla sido: Mediocre\n");
        console.log("Muchas Gracias por valorar la pelicula, agradecemos su vicita");
    break;
    case "muena":
        console.log("\nNos alegra que alla sido: Buena\n");      
        console.log("Muchas Gracias por valorar la pelicula, agradecemos su vicita");
    break;
    case "muy buena":
        console.log("\nNos alegra que alla sido: Muy Buena\n");
        console.log("Muchas Gracias por valorar la pelicula, agradecemos su vicita");    
    break;

    default:
        console.log("ERROR: Ingresaste un valor inválido");
    break;
}
*/





/*
    A. cd: ./prjecto/
    B. Terminal: npm i prompt-sync (El acceso requiere de la intalacion de prompt-sync, package-look.json)
    C. Activacion de Prompt : const prompt = require("prompt-sync")({ sigint: true });
    D. Terminal: node variables.js (o sin el .js)
    E. Terminal: clear (Limpia la terminal)
*/