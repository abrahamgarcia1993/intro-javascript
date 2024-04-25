/**
 * Ejercicio sum7
 * Escribe una función que tome un array de numeros enteros de mas de 3 elementos
 * y retorne true si 3 elementos consecutivos suman 7
 */

function lucky_sevens(array) {
  //Escribe tu codigo aqui
  for(let i=0; i<array.length; i++){
    if((array[i]+array[i+1]+array[i+2])===7){
      return true
    }
  }
  return false
}
console.log(lucky_sevens([1,2,4]))
module.exports = { lucky_sevens };
