// Ejercicio 14
// Construir un algoritmo que resuelva el problema
// que tienen unos surtidores de gasolina, que registran
// lo que surten en galones, pero el precio de la gasolina
// se fija en litros. El algoritmo debe calcular
// e imprimir el precio que hay que cobrarle al cliente.

// Precio gasolina = 1.333euros / litro
// 1 galon = 3,78541 litros

/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular e retornar el precio
 *  que hay q cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */

function precioEnLitros(galones) {
  //Escribe tu codigo aqui
  let precio;
  let litros;
  litros= galones* 3.78541
  precio= litros*  1.333
  return precio
}

module.exports = { precioEnLitros };
