/**
 * Ejercicio 36
 * Crear dos arrays de numeros enteros de longitud 10 rellenos con
 * numeros aleatorios del 1 al 20. El algoritmo nos retonara ambos arrays
 * creados con numeros al azar y un tercer array que contenga en cada indice
 * la multiplicacion de los indices en esa posicion de los dos arrays anteriores.
 *
 * Es decir si nos generase arrays aleatorios de [2,3,4] y [4,5,6], el algoritmo retornaria
 * [2,3,4], [4,5,6] y [8,15,24]
 */

function multiplicarElementosArray() {
  //Escribe tu codigo aqui
  
  let arrayUno=[]
  let arrayDos=[]
  let resultado=[]
  for(let i=0; i<10; i++){
    arrayUno.push(Math.floor(Math.random()*20)+2)
    arrayDos.push(Math.floor(Math.random()*20)+2)
    resultado.push(arrayUno[i]*arrayDos[i])
  }
  return  {arrayUno, arrayDos, resultado} ;
}
console.log(multiplicarElementosArray())

module.exports = { multiplicarElementosArray };
