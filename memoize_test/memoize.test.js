const {memoize} = require('../memoize_nivel1/memoize');

const alCuadradoParaTest = jest.fn((cifra) => {
    let resultadoCallback = 0;
    for (let i = 1; i<=cifra;i++){
        for (let j = 1; j<=cifra; j++){
            resultadoCallback+= 1;
        }
    }
    return resultadoCallback;});



const alCuadradoConMemoize = memoize(alCuadradoParaTest);

test("La función throttle debería dar error si el callback no es una función",() =>{


    let memoizeSinFuncion = memoize(3);

    expect(memoizeSinFuncion()).toBe("ERROR: el callback debe ser una función");
    
})

test("La función que devuelve el memoize, solo acepta un número como argumento",() =>{

    expect(alCuadradoConMemoize("hola")).toBe("ERROR: el argumento debe ser un número");
    
})

test("La función con memoize debería devolver el resultado del callback",() =>{

    alCuadradoConMemoize(4);
    
    expect(alCuadradoParaTest).toHaveLastReturnedWith(16);
    
})

test("Si pasas la misma cifra dos veces, la segunda vez debería devolver directamente el resultado anterior, es decir, no debería ser un callback",() =>{

    alCuadradoConMemoize(4);

    //Aún llamando la función dos veces, el callback solo se ha llamado una vez, la primera
    
    expect(alCuadradoParaTest).toHaveReturnedTimes(1);

    //Pero igualmente la función nos ha devuelto el resultado correcto, guardado en cache

    expect(alCuadradoConMemoize(4)).toBe(16);
    
})