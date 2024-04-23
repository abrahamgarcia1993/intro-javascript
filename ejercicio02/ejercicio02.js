/**
 *  Ejercicio 2
 * Escriba un algoritmo que lea dos numeros que retorne el valor
 * de la operacion correcta segun el nombre de la funcion
 */
function sum(a, b) {
  //Escribe tu codigo aqui
  return a + b;
}

function substract(a, b) {
  //Escribe tu codigo aqui
  return a - b;
}

function multiply(a, b) {
  //Escribe tu codigo aqui
  return a * b;
}

function divide(a, b) {
  //Escribe tu codigo aqui
  return a / b;
}

function total(a, b) {
  //Escribe tu codigo aqui
  let suma = sum(a, b);
  let resta = substract(a, b);
  let multiplicar = multiply(a, b);
  let dividir = divide(a, b);
  return suma + resta + multiplicar + dividir;
}

substract(1, 3);
multiply(1, 3);
divide(1, 3);
total(1, 3);

module.exports = { sum, substract, multiply, divide, total };
