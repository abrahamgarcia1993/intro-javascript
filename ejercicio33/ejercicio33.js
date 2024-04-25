/**
 *  Ejercicio 33
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */

function arrayIndex(array) {
  //Escribe tu codigo aqui
  for(let i=0; i<array.length; i++){
    console.log(`El indice es ${i} y su valor es ${array[i]}`)
  }
}
arrayIndex([1,2,3,4,5,6,7,8,9,10])
module.exports = { arrayIndex };
