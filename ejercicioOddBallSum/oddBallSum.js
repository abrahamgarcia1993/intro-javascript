/**
 * Ejercicio oddBallSum
 * Escribir una funcion que tome una lista de numeros y devuelva
 * la suma de todos los elementos impares.
 */

function oddball_sum(nums) {
  //Escribe tu codigo aqui
  let suma=0
  for(let i=0; i<nums.length; i++){
    if(nums[i]%2==1){
      suma+=nums[i]
    }
  }
  return suma
}

module.exports = { oddball_sum };
