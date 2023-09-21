import readline from 'readline';
import fs from 'fs';
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout});

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

    try {
        valoresAnteriores = Object.values(JSON.parse(fs.readFileSync("./valoresAnteriores.json")));
    }
    catch (err) {
        // Si no existe el array, lo crearé más abajo
    }

    return function(cifraParaMemoize: number){

        let contadorInicial: number = Date.now();

        if (typeof(callback) !== 'function'){
            return console.log("ERROR: el callback debe ser una función");
        }

        if (isNaN(cifraParaMemoize)){
            return console.log("ERROR: el argumento debe ser un número");
        }

        if (valoresAnteriores[cifraParaMemoize]){

            let contadorFinalConCache: number = Date.now();
            let tiempoTotalConCache: number = contadorFinalConCache-contadorInicial;

            return console.log("El resultado es "+valoresAnteriores[cifraParaMemoize]+" y ha tardado "+tiempoTotalConCache+"ms en realizarse");


    
        }

        let resultadoMemoize: number = callback(cifraParaMemoize);

        valoresAnteriores[cifraParaMemoize] = resultadoMemoize;

        let valoresAnterioresJSON: string = JSON.stringify(valoresAnteriores);
        fs.writeFile('./valoresAnteriores.json', valoresAnterioresJSON, (err) => {
            if (err)
                throw err;
        });

            let contadorFinalSinCache: number = Date.now();
            let tiempoTotalSinCache: number = contadorFinalSinCache-contadorInicial;
            return console.log("El resultado es "+resultadoMemoize+" y ha tardado "+tiempoTotalSinCache+"ms en realizarse");

    }
    
}

const alCuadradoConMemoize: object = memoize(alCuadrado);

function readlineEterno() {
    rl.question("Introduzca un número o escriba 'exit' sin comillas para salir\n", (inputUsuario: string) => {
        if (inputUsuario.trim() == "exit") {
            console.log("¡Adiós!");
            fs.unlink('./valoresAnteriores.json', (err) => {
                if (err)
                    throw err;
            });
            return rl.close();
        }
        else {
            let numUsuario: number = Number(inputUsuario);
            alCuadradoConMemoize(numUsuario);
            readlineEterno();
        }
    });
}
readlineEterno();

