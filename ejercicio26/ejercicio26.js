/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray(array) {
  //Escribe tu codigo aqui
  for (let i=0; i<array.length; i++){
    console.log(`El cubo de ${array[i]} es ${array[i]**3}`)
  }
}
console.log(cuboNumerosArray([8,2,4,1,4,3]))

module.exports = { cuboNumerosArray };
