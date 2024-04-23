/**
 *  Ejercicio 32
 * El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
 * capaz de leer el numero de unidades consumidas de cada alimento ordenado y
 * calcular la cuenta total. Vamos a suponer que los precios son fijos, es decir,
 * que son constantes.
 *
 * Bocadillo de jamon: 1,5e
 * Refresco 1,05e
 * Cerveza: 0,75e
 * Pan: 2e
 *
 * Debera retornar un string que diga lo siguiente: `El precio total es de X`
 */

function menuRestaurante(bocadillo, refresco, cerveza, pan) {
  //Escribe tu codigo aqui
  let cuenta=0;
  cuenta = ((bocadillo*1.5)+(refresco*1.05)+(cerveza*0.75)+(pan*2))
  return `El precio total es de ${cuenta}`
}
console.log(menuRestaurante(2,8,4,2))
module.exports = { menuRestaurante };
