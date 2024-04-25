//Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos de 2 hasta N

/**
 * Ejercicio 53
 * Diseñar un algoritmo que lea un numero N y retorne cuantos numeros primos hay desde 2
 * hasta N
 */

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumbers(N) {
  let primeCount = 0;
  for (let i = 2; i <= N; i++) {
    if (isPrimeNumber(i)) {
      primeCount++;
    }
  }
  return `Por debajo de ${N} hay ${primeCount} numeros primos`;
}

module.exports = { getPrimeNumbers };
