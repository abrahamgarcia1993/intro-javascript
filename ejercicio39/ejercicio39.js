/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(a1, a2) {
  //Escribe tu codigo aqui
  if(a1.length===a2.length){
    for(let i=0; i<a1.length; i++){
      if(a1[i]!==a2[i]){
        return false
    }
  }}else{
    return false
  }
  return true
}
console.log(sonIguales([1,2,3,4],[1,2,3,4]))
module.exports = { sonIguales };
