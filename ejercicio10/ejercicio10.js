/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldo, categoria) {
  //Escribe tu codigo aqui
  let aumento= sueldo
  switch (categoria) {
    case 1:
      aumento=sueldo*1.15;

    break;
    case 2:
      aumento= sueldo*1.1;
      
    break;
    case 3:
      aumento= sueldo*1.06;
      
    break;
    case 4:
      aumento= sueldo*1.03;
      
    break;
    default:
      return aumento

    }
    return aumento
}
console.log(nuevoSalario(1000, 6))
module.exports = { nuevoSalario };
