/**
 *  Ejercicio 30
  *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
  *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
  *  numero de filas por parametros.
  *  Si ponemos 4 los triangulos serán asi:
  *
  *  a) 1
  *     12
  *     123
  *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola() {
  //Escribe tu codigo aqui
  let resultado = '';
    for (let i = 1; i <= numeroFilas; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += j;
        }
        resultado += '\n';
    }
    return resultado;
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB() {
  //Escribe tu codigo aqui
}

// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC() {
  //Escribe tu codigo aqui
}
console.log(trianguloConsola(4))
module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
