

type callbackTipoPersonalizado = (arg1: number) => number;

function alCuadrado(cifra: number){
    let resultadoCallback: number = 0;
    for (let i: number = 1; i<=cifra;i++){
        for (let j: number = 1; j<=cifra; j++){
            resultadoCallback+= 1;
        }
    }
    return resultadoCallback;
}

const memoize = (callback: callbackTipoPersonalizado) => {


    let valoresAnteriores: number[] = [];

    return function(cifraParaMemoize: number){

        let contadorInicial: number = Date.now();

        if (typeof(callback) !== 'function'){
            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML = "ERROR: el callback debe ser una función"; } 
        }

        if (isNaN(cifraParaMemoize)){

            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML = "ERROR: el argumento debe ser un número"; } 
        }

        if (valoresAnteriores[cifraParaMemoize]){

            let contadorFinalConCache: number = Date.now();
            let tiempoTotalConCache: number = contadorFinalConCache-contadorInicial;

            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML = "El resultado es "+valoresAnteriores[cifraParaMemoize]+" y ha tardado "+tiempoTotalConCache+"ms en realizarse"; } 


    
        }

        
            let resultadoMemoize = callback(cifraParaMemoize);
        

        

        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;

            let contadorFinalSinCache: number = Date.now();
            let tiempoTotalSinCache: number = contadorFinalSinCache-contadorInicial;

            let elementoHTML = document.getElementById('mostrar');
            if(elementoHTML){
                return (elementoHTML as HTMLElement).innerHTML = "El resultado es "+resultadoMemoize+" y ha tardado "+tiempoTotalSinCache+"ms en realizarse"; } 

    }
    
}

const alCuadradoConMemoize = memoize(alCuadrado);

function calcular(){

    let elementoHTML = document.getElementById('numeroUsuario');

    if(elementoHTML){
        let numUsuarioInput = Number((elementoHTML as HTMLInputElement).value);

        alCuadradoConMemoize(numUsuarioInput);
    }


    

}

