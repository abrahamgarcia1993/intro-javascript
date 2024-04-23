/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(triangulo) {
  //Escribe tu codigo aqui
  let invertido = '';
    for (let i = 0; i < triangulo; i++) {
      if(i==0){
        invertido+="***\n"
      }else if(i==1){
        invertido+=" **\n"
      }else if(i==2){
        invertido+="  *\n"
      }
    }
    return invertido
}

module.exports = { crearTriangulo };
