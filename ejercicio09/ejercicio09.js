/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia(n1,n2,n3,n4,n5) {
  //Escribe tu codigo aqui
  let media=(n1+n2+n3+n4+n5)/5
  if(typeof n1!=="number"|| typeof n2!=="number"||typeof n3!=="number"||typeof n4!=="number"||typeof n5!=="number"){
    return "Debes introducir solo numeros. Intentalo de nuevo"
  }else if(media<5){
    return`${media} suspenso`
  }else{
    return `${media} aprobado`
  }
}
console.log(notaMedia(1,2,3,4,5))
console.log(notaMedia(1,5,5,8,10))
console.log(notaMedia(1,5,5,8,"a"))
module.exports = { notaMedia };
