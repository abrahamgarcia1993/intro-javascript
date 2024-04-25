/**
 * Ejercicio 49
 * Se tienen los costes de produccion de tres departamentos (dulces,bebidas y conservas)
 * correspondientes a los 12 meses del ano anterior. Construir algoritmos que proporcionen:
 *
 * a) En que mes se registro el mayor coste de produccion de dulces?
 * b) Promedio anual de los costes de produccion de bebidas
 * c) En que mes se registro el mayor coste de produccion en bebidas, y en que mes el menor coste?
 * d) Cual fue el que tuvo menor coste de produccion en diciembre?
 *
 */

const cakes = [55, 40, 78, 45, 67, 21, 30, 90, 85, 73, 58, 25];
const drinks = [45, 67, 21, 30, 55, 40, 78, 45, 80, 66, 39, 74];
const preservedFood = [78, 45, 80, 66, 39, 74, 67, 21, 30, 90, 85, 73];

function getMaxCost(pepito) {
  //Escribe tu codigo aqui
  let primer=[]
  for(let i=0; i<pepito.length; i++){
    primer.push(pepito[i])
  }
  let newArray=pepito.sort((a,b)=>b-a)

  let max=primer.find((index)=>index==newArray[0])
  let month=primer.findIndex((element)=>element===pepito[0]) 
  month+=1
  return {month, max}
}
console.log(getMaxCost(cakes))
function getMinCost(pepito) {
  //Escribe tu codigo aqui
  let primer=[]
  for(let i=0; i<pepito.length; i++){
    primer.push(pepito[i])
  }
  let newArray=pepito.sort((a,b)=>a-b)

  let min=primer.find((index)=>index==newArray[0])
  let month=primer.findIndex((element)=>element===pepito[0]) 
  month+=1
  return { min,month}
}

function getAverageCost(array) {
  //Escribe tu codigo aqui
  let suma=0;
  let contador=0;
  let avg;
  for(let i=0;i<array.length; i++){
    suma+=array[i];
    contador++
  }
  avg=suma/contador
  return avg
}

function getLastCost(array) {
  //Escribe tu codigo aqui
  for(let i=0; i<array.length; i++){
    if(array[array.length-1]){
      return array[array.length-1]
    }
  }
}
/* 
function getPriceDecember() {
  //Escribe tu codigo aqui
}
 */
function getMinPriceDecember(n1,n2,n3) {
  //Escribe tu codigo aqui
  if(n1[11]<n2[11] && n1[11]<n3[11]){
    return n1[11]
  }else if(n2[11]<n3[11]){
    return n2[11]
  }else{
    return n3[11]
  }
}

module.exports = {
  getAverageCost,
  getLastCost,
  getMaxCost,
  getMinCost,
  getMinPriceDecember,
};
