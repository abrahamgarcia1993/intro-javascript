// Ejercicio_51
// Comprobar si un numero N positivo es primo. Se dice que un numero entero
// positivo N es un numero primo si los unicos enteros positivos que lo
// dividen son exactamente 1 y N (el mismo).

/**
 * Ejercicio 51
 * Comprobar si un numero N positivo es primo. Se diec que un numero entero
 * positivo N es un numero primo si los unicos enteros positivos que lo dividen son
 * exactamente 1 y N (el mismo)
 */

function getPrimeNumber(num) {
  //Escribe tu codigo aqui
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si el número es divisible por i, no es primo
    if (numero % i === 0) {
      return "el numero no es primo";
    }
  }
  return "el numero es primo"
}
console.log(getPrimeNumber(5))
module.exports = { getPrimeNumber };
