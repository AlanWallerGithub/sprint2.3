"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const rl = readline_1.default.createInterface({ input: process.stdin,
    output: process.stdout });
function alCuadrado(cifra) {
    let resultadoCallback = 0;
    for (let i = 1; i <= cifra; i++) {
        for (let j = 1; j <= cifra; j++) {
            resultadoCallback += 1;
        }
    }
    return resultadoCallback;
}
let memoize = (callback) => {
    let valoresAnteriores = [];
    try {
        valoresAnteriores = Object.values(JSON.parse(fs_1.default.readFileSync("./valoresAnteriores.json").toString()));
    }
    catch (err) {
        // Si no existe el array, lo crearé más abajo
    }
    return function (cifraParaMemoize) {
        let contadorInicial = Date.now();
        if (typeof (callback) !== 'function') {
            return console.log("ERROR: el callback debe ser una función");
        }
        if (isNaN(cifraParaMemoize)) {
            return console.log("ERROR: el argumento debe ser un número");
        }
        if (valoresAnteriores[cifraParaMemoize]) {
            let contadorFinalConCache = Date.now();
            let tiempoTotalConCache = contadorFinalConCache - contadorInicial;
            return console.log("El resultado es " + valoresAnteriores[cifraParaMemoize] + " y ha tardado " + tiempoTotalConCache + "ms en realizarse");
        }
        let resultadoMemoize = callback(cifraParaMemoize);
        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;
        let valoresAnterioresJSON = JSON.stringify(valoresAnteriores);
        fs_1.default.writeFile('./valoresAnteriores.json', valoresAnterioresJSON, (err) => {
            if (err)
                throw err;
        });
        let contadorFinalSinCache = Date.now();
        let tiempoTotalSinCache = contadorFinalSinCache - contadorInicial;
        return console.log("El resultado es " + resultadoMemoize + " y ha tardado " + tiempoTotalSinCache + "ms en realizarse");
    };
};
const alCuadradoConMemoize = memoize(alCuadrado);
function readlineEterno() {
    rl.question("Introduzca un número o escriba 'exit' sin comillas para salir\n", (inputUsuario) => {
        if (inputUsuario.trim() == "exit") {
            console.log("¡Adiós!");
            try {
                if (fs_1.default.existsSync('./valoresAnteriores.json')) {
                    fs_1.default.unlink('./valoresAnteriores.json', (err) => {
                        if (err)
                            throw err;
                    });
                }
            }
            catch (err) {
            }
            return rl.close();
        }
        else {
            let numUsuario = Number(inputUsuario);
            alCuadradoConMemoize(numUsuario);
            readlineEterno();
        }
    });
}
readlineEterno();
