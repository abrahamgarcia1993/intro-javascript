/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(n) {
  //Escribe tu codigo aqui
  let suma=0
  //compruebo el doble de numeros ya que hay pares e impares
  for(i=0; i<=(n*2); i++){
    //aqui compruebo todos los numeros menos 1 ya que es par
    if((n+i)%2==0 && i<n*2){
      suma+=(n+i);
    }

  }
  return suma
}
console.log(sumaNPrimerosNumerosPares(12));
module.exports = { sumaNPrimerosNumerosPares };
