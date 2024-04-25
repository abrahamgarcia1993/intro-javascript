// Ejercicio_50
// Hacer un algoritmo que cuente las veces que aparece una determinada
// letra en una frase que introduciremos por teclado.

/**
 * Ejercicio 50
 * Hacer un algoritmo que cuente las veces que aparece una determinada
 * letra en una frase que introduciremos por parametros.
 */

function contarLetraEnOracion(oracion, letra) {
  //Escribe tu codigo aqui
  const oracionMinus=oracion.toLowerCase()
  let contador=0;
  for(let i=0; i<oracionMinus.length;i++){
    if(oracion[i]== letra){
      contador++
    }
  }
  return `La letra ${letra} está ${contador} veces repetida`
}

module.exports = { contarLetraEnOracion };
