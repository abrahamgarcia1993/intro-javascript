/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {
  //Escribe tu codigo aqui
  let contador=0
  let suma=0
  for(let i=0; i<array.length; i++){
    if(array[i]===-1){
      break
    } 
    suma+=array[i]
    contador++

  }
  if(contador===0){
    return 0
  }
  return suma/contador
}
console.log(mediaArrayHastaMenosUno([1,2,3,4,-1,]))
module.exports = { mediaArrayHastaMenosUno };
