/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(n) {
  //Escribe tu codigo aqui
  let suma=0
  for(i=0; i<=n; i++){
    suma=suma+i;
    n
  }
  return suma
}
console.log(calcularSumaNumerosNaturales(5))
module.exports = { calcularSumaNumerosNaturales };
