

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

        if (typeof(callback) !== 'function'){
            return "ERROR: el callback debe ser una función";
        }

        if (isNaN(cifraParaMemoize)){
            return "ERROR: el argumento debe ser un número";
        }

        if (valoresAnteriores[cifraParaMemoize]){
            return valoresAnteriores[cifraParaMemoize];
        }

        let resultadoMemoize = callback(cifraParaMemoize);

        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;
        return resultadoMemoize;

    }
    
}

module.exports = { memoize };