function alCuadrado(cifra: number){
    let resultadoCallback: number = 0;
    for (let i: number = 1; i<=cifra;i++){
        for (let j: number = 1; j<=cifra; j++){
            resultadoCallback+= 1;
        }
    }
    return resultadoCallback;
}

const memoize: object = (callback: object) => {


    let valoresAnteriores: number[] = [];

    return function(cifraParaMemoize: number){

        let contadorInicial: number = Date.now();

        if (typeof(callback) !== 'function'){
            return document.getElementById("mostrar").innerHTML ="ERROR: el callback debe ser una función";
        }

        if (isNaN(cifraParaMemoize)){
            return document.getElementById("mostrar").innerHTML = "ERROR: el argumento debe ser un número";
        }

        if (valoresAnteriores[cifraParaMemoize]){

            let contadorFinalConCache: number = Date.now();
            let tiempoTotalConCache: number = contadorFinalConCache-contadorInicial;

            return document.getElementById("mostrar").innerHTML = "El resultado es "+valoresAnteriores[cifraParaMemoize]+" y ha tardado "+tiempoTotalConCache+"ms en realizarse"


    
        }

        let resultadoMemoize: number = callback(cifraParaMemoize);

        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;

            let contadorFinalSinCache: number = Date.now();
            let tiempoTotalSinCache: number = contadorFinalSinCache-contadorInicial;
            return document.getElementById("mostrar").innerHTML = "El resultado es "+resultadoMemoize+" y ha tardado "+tiempoTotalSinCache+"ms en realizarse"

    }
    
}

const alCuadradoConMemoize: object = memoize(alCuadrado);

function calcular(){

    let numUsuarioInput: number = Number(document.getElementById("numeroUsuario").value);

    alCuadradoConMemoize(numUsuarioInput);

}

