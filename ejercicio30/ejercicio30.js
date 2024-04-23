/**
 *  Ejercicio 30
  *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
  *  a continuacion hasta un numero de filas introducidos por teclado. El algoritmo recibira el
  *  numero de filas por parametros.
  *  Si ponemos 4 los triangulos serán asi:
  *
  *  a) 1
  *     12
  *     123
  *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(numeroFilas) {
  //Escribe tu codigo aqui
  let triangulo=""
    for(let i=0; i<=numeroFilas; i++){
      if(i===1){
        triangulo+="1\n"
      }else if(i===2){
        triangulo+="12\n"
      }else if(i===3){
        triangulo+="123\n"
      }
  
    }
    return triangulo
    
}
trianguloConsola(3)

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(numeroFilas) {
  //Escribe tu codigo aqui
  let triangulo=""
  for(let i=0; i<=numeroFilas; i++){
      if(i===1){
        triangulo+="1\n"
      }else if(i===2){
        triangulo+="22\n"
      }else if(i===3){
        triangulo+="333\n"
      }
  
    }
    return triangulo
}


// Apartado C --------------------------------------------------------------------------
function trianguloConsolaC(numeroFilas) {
  //Escribe tu codigo aqui
  let triangulo=""
  for(let i=0; i<=numeroFilas; i++){
    if(i===1){
      triangulo+="0 \n"
    }else if(i===2){
      triangulo+="1 2 \n"
    }else if(i===3){
      triangulo+="3 4 5 \n"
    }

  }
  return triangulo
}
module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
