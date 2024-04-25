/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray(max) {
  //Escribe tu codigo aqui
  let arrayUno=[]
  for(let i=0; i<max; i++){
    arrayUno.push(Math.floor(Math.random()*10))
  }
  return arrayUno
}
/* console.log(generarArray(4)); */
function calculosArray(array) {
  //Escribe tu codigo aqui
  let suma=0
  let sumat=0
  let contador=0
  let contadorT=0
  let avg=0
  let avgT=0
  for(let i=0; i<array.length; i++){
    sumat=suma+array[i]
    contadorT++
    if(array[i]>=0){
      contador++
      suma=suma+array[i]
    }
  }
  avg= suma/contador
  avgT= sumat/contadorT
  return {avg, contador, avgT}
}
console.log(calculosArray(generarArray(18)))
module.exports = { generarArray, calculosArray };
