/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */
function crearCuadrado(lado) {
  //Escribe tu codigo aqui

  let cuadrado = '';
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
                cuadrado += '* ';
            } else {
                cuadrado += '  ';
            }
        }
        cuadrado += '\n';
    }
    return cuadrado;

}
console.log(crearCuadrado(5));

module.exports = { crearCuadrado };
