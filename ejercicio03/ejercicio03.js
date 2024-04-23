/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

function compareThreeNumbers(num1, num2, num3) {
//Escribe tu codigo aqui
if(num1>num2 && num1>num3){
    return num1
}else if(num2>num3 && num2!= num1){
    return num2
}else if(num3!=num1){
    return num3
}else{
    return "iguales"
}
}
compareThreeNumbers(5, 2, 3)
compareThreeNumbers(2, 2, 2)
compareThreeNumbers(1, 2, 2)
compareThreeNumbers(1, 2, 3)

module.exports = { compareThreeNumbers };
