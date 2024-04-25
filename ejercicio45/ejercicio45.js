/**
 * Ejercicio 45
 * Generar un algoritmo que tras recibir por parametros un array, nos genere otro pero solamente
 * incluyendo aquellos que sean pares y mayores de 25. Si el numero en una posicion no cumpliese las
 * condiciones el algoritmo rellenara su hueco con un 0.
 */

function generarVector(array) {
  //Escribe tu codigo aqui
  let newArray=[]
  for(let i=0; i<array.length; i++){
    if(array[i]%2==0 && array[i]>25){
      newArray.push(array[i])
    }else{
      newArray.push(0)
    }
  }
  return newArray
}
console.log(generarVector([5,32,21,53,12,32]))
module.exports = { generarVector };
