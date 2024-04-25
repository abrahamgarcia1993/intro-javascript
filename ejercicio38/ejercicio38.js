/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray(array) {
  //Escribe tu codigo aqui
  let newArray=[]
  for(let i=1; i<=array.length; i++){
    newArray.push(array[array.length-i])
  }
  return newArray
}
console.log(invertArray([5,1,3,2,8]))
module.exports = { invertArray };
