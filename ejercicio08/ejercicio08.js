/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

function incrementarSueldo(sueldo) {
 //Escribe tu codigo aqui
 if(sueldo<1000){
    sueldo=sueldo*1.15;
    return sueldo
 }else{
    return sueldo
 }
}
console.log(incrementarSueldo(1500))
console.log(incrementarSueldo(500))
module.exports = { incrementarSueldo };
