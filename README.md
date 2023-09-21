# FUNCIÓN MEMOIZE
---
## NIVEL 1

Los scripts de esta carpeta no pueden ejecutarse por sí solos, son solo la lógica. La ejecución se implementa en el test, usando funciones mock para emular el input de los usuarios.

## NIVEL 2

Para ejecutar ‘memoize_CLI.js’, primero navega a la carpeta ‘memoize_nivel2’ desde el terminal y escribe ‘node memoize_CLI’. La función memoize se aplica a una función que calcula números al cuadrado del que introduzcas. Si introduces uno de 4 cifras, verás que el programa te avisa de cuántos milisegundos ha tardado el cálculo. Si introduces ese mismo número otra vez, verás que tardará mucho menos, gracias a la función memoize. Este CLI crea un archivo JSON en tu ordenador para guardar los cálculos, pero al terminar la aplicación este se elimina completamente. Para salir, escribe ‘exit’ en la pantalla.

## NIVEL 3

En la carpeta ‘memoize_nivel3’, el archivo ‘memoize.html’ abre una web que calcula cuadrados de números. Te pide un input de texto en el que escribir cifras. Al pulsar el botón CALCULAR, aparecerá en pantalla el resultado y el tiempo que ha tardado.
Si en el código modificaras la llamada a la función memoize y aplicaras un callback que no fuese una función, este error se imprimiría en pantalla.
Si introduces algo en el input que no sea un número, te avisará de que eso es un error, imprimiendo en pantalla.

