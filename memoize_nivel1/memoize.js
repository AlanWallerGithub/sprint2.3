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
        if (typeof (callback) !== 'function') {
            return "ERROR: el callback debe ser una función";
        }
        if (isNaN(cifraParaMemoize)) {
            return "ERROR: el argumento debe ser un número";
        }
        if (valoresAnteriores[cifraParaMemoize]) {
            return valoresAnteriores[cifraParaMemoize];
        }
        let resultadoMemoize = callback(cifraParaMemoize);
        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;
        return resultadoMemoize;
    };
};
module.exports = { memoize };
