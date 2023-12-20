// While


function usandoWhile(){
    let i = 0; // -------------- variable contadora

    while( i <= 10 ){ // ------- condicion
        console.log(i);
        i++; // ---------------- incremento / ctrl + c detenes la ejecucion
    }
}
//usandoWhile();


function usandoDoWhile(){
    let i = 15;
    do{
        console.log(i);
        i++;
    } while(i <= 10);
    
}
//usandoDoWhile();

function usandoElForAs(){
    for(let i = 0 ; i <= 10 ; i++ ){
        console.log(i);
    }
    
}

//usandoElForAs();


function mostrarCuenta(){
    for(let i = 0 ; i <= 10 ; i++){
        let otroNumero = 10 - i;
        console.log(i + " - " + otroNumero);
    }
}

mostrarCuenta();