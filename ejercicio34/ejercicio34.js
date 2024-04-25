/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber() {
  //Escribe tu codigo aqui
  let aleatorio=Math.floor(Math.random()*10)+1
  return aleatorio
}


function playGame(randomNumber, arrayNum) {
  //Escribe tu codigo aqui
  let i=0
  let contador=1
  while(arrayNum[i]!=randomNumber){
    i++
    contador++
  }
  return `Has acertado al ${contador} intento`
}
console.log(playGame(generateRandomNumber(),[1,2,3,4,5,6,7,9,10]))
module.exports = {
  generateRandomNumber,
  playGame,
};
