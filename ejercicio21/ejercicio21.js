/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(array) {
  //Escribe tu codigo aqui
  /* let min
  let contador=0
  for(let i=0; i<=array.length; i++){
    if(array[i]==0){
      break
    }
    if(array[i]<array[i+1]){
      min= array[i]
    }else{
      min= array[i+1]
    }
    
    contador++
  }

  return(min) */
}
let newarray =[1,5,7,9,3,5]
console.log(Math.min(...newarray))
/* console.log(maxMinAverageUntilZero([8,1,3,5])) */
module.exports = { maxMinAverageUntilZero };
