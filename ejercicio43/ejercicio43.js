/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
 */
function relojInfinito() {
  //Escribe tu codigo aqui
  let horas="0"
  let minutos="0"
  let segundos="0"
  for(let i=0; i<24; i++){
    horas++
    for(let j=0; j<60; j++){
      if(j==59){
        horas=0
      }
      minutos++
      for(let k=0; k<60; k++){
        segundos++
        if(k==59){
          minutos=0
          segundos=0
        }

      }
    }
  }
  return `${horas}:${minutos}:${segundos}`
}
console.log(relojInfinito())
module.exports = { relojInfinito };
