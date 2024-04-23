/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */

function sumOrMultiply(a,b,c) {
 //Escribe tu codigo aqui
 if(typeof a !=='number' || typeof b!=='number' || typeof c!=='number'){
    return("Has introducido uno o varios caracteres no validos")
 }else if(a<0){
    let mult= a*b*c;
    return mult
 }else{
    let suma= a+b+c;
    return suma
 }
}
console.log(sumOrMultiply(-1,3,5));
module.exports = { sumOrMultiply };
