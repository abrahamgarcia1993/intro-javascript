/**
 * Ejercicio 48
 * Crear un algoritmo que reciba un array de nombres y los devuelva ordenados
 * alfabeticamente.
 *
 * Pista: Los datos alfanumerico (strings) tambien se pueden comparar con los operadores
 * '<' y '>'
 */

function ordenarArray(array) {
  //Escribe tu codigo aqui
  let newArray=array.sort((a,b)=>b-a)
  return newArray
}

module.exports = { ordenarArray };
