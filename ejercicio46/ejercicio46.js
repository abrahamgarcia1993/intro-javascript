//Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir estos números de forma descendente
/**
 * Ejercicio 46
 * Algoritmo que reciba tres numeros y los retorne en orden descendente. Los debera retornar en un objeto:
 * {1: X, 2: Y, 3: Z}
 */

function imprimirDescendente(num1, num2, num3) {
  //Escribe tu codigo aqui
  let ordenados=[num1,num2,num3]
   let newOrdenados= ordenados.sort((a,b)=>b-a)
  return {
    "1":newOrdenados[0],
    "2":newOrdenados[1],
    "3":newOrdenados[2]
  }

}
console.log(imprimirDescendente(1,7,3))
module.exports = { imprimirDescendente };
