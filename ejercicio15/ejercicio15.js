/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.
 */
function parImparNulo(a) {
  //Escribe tu codigo aqui
  if(a===0){
    return"Introduce otro numero"
 }else if(a%2===0){
    return "El numero es par"
 }else{
    return "El numero es impar"
 }
}

module.exports = { parImparNulo };
