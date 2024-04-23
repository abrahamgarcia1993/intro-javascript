/**
 *  Ejercicio 27
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */

function tablaNumero(n) {
  //Escribe tu codigo aqui
  for(let i=1; i<=10; i++){
    console.log(i*n);
  }
}
tablaNumero(10)

module.exports = { tablaNumero };
