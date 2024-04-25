/**
 * Ejercicio 53
 * Usar una funcion para calcular el promedio recibiendo un array.
 */

function getAverage(array) {
  //Escribe tu codigo aqui
  let contador=0
  let suma=0
  for(let i=0;i<array.length; i++){
     suma+= array[i]
     contador++
  }
  let avg= suma/contador;
  return avg


}

module.exports = { getAverage };
