"use strict";
function alCuadrado(cifra) {
    let resultadoCallback = 0;
    for (let i = 1; i <= cifra; i++) {
        for (let j = 1; j <= cifra; j++) {
            resultadoCallback += 1;
        }
    }
    return resultadoCallback;
}
const memoize = (callback) => {
    let valoresAnteriores = [];
    return function (cifraParaMemoize) {
        let contadorInicial = Date.now();
        if (typeof (callback) !== 'function') {
            return document.getElementById("mostrar").innerHTML = "ERROR: el callback debe ser una función";
        }
        if (isNaN(cifraParaMemoize)) {
            return document.getElementById("mostrar").innerHTML = "ERROR: el argumento debe ser un número";
        }
        if (valoresAnteriores[cifraParaMemoize]) {
            let contadorFinalConCache = Date.now();
            let tiempoTotalConCache = contadorFinalConCache - contadorInicial;
            return document.getElementById("mostrar").innerHTML = "El resultado es " + valoresAnteriores[cifraParaMemoize] + " y ha tardado " + tiempoTotalConCache + "ms en realizarse";
        }
        let resultadoMemoize = callback(cifraParaMemoize);
        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;
        let contadorFinalSinCache = Date.now();
        let tiempoTotalSinCache = contadorFinalSinCache - contadorInicial;
        return document.getElementById("mostrar").innerHTML = "El resultado es " + resultadoMemoize + " y ha tardado " + tiempoTotalSinCache + "ms en realizarse";
    };
};
const alCuadradoConMemoize = memoize(alCuadrado);
function calcular() {
    let numUsuarioInput = Number(document.getElementById("numeroUsuario").value);
    alCuadradoConMemoize(numUsuarioInput);
}
