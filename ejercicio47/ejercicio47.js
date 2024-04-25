/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
  //Escribe tu codigo aqui
  let newArray=array.sort((a,b)=>b-a)
  return newArray
}

module.exports = { ordenar };
