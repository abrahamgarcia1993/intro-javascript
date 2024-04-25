/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */

function generarArrayNoRepetidos() {
  //Escribe tu codigo aqui
  let arrayUno=[]
  arrayUno.push(Math.floor(Math.random()*20)+2)

  for(let i=0; i<9; i++){
    if(arrayUno[i]!== arrayUno[i-1]){
      arrayUno.push(Math.floor(Math.random()*100)+10)
      
    }
  }
  return arrayUno
}
console.log(generarArrayNoRepetidos())
module.exports = { generarArrayNoRepetidos };
