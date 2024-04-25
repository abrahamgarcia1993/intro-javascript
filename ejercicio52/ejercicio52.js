/**
 * Ejercicio 52
 *  Rellenar un array con una longitud 10 y
 *  numeros aleatorios entre 1 y 15.
 *  Posteriormente, hacer un algoritmo que reciba este array
 *  aleatorio y un numero introducido por parametros que nos diga
 *  si este numero esta incluido en el array o no. El algoritmo retornara
 *  true si se encuentra el numero y false si no;
 */

function generateRandomArray() {
  //Escribe tu codigo aqui
  let random=[]
  for(let i=0; i<10; i++){
    random.push(Math.floor(Math.random()*15)+1)
  }
  return random
}
let numRandom=generateRandomArray()
function findNumberInArray(array, numero) {
  //Escribe tu codigo aqui
  for(let i=0; i<array.length; i++){
    if(array[i]==numero){
      return true
    }
  }
  return false
}
console.log(findNumberInArray(numRandom, 6))

module.exports = { findNumberInArray, generateRandomArray };
