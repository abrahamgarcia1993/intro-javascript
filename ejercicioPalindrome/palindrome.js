/* 1. Comprobar si un string es palindromo.
Se dice que un string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda. */

/**
 * Ejercicio Palindrome
 * Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
 * string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */

function palindrome(palindromo) {
  //Escribe tu codigo aqui
  let newPalindromo= palindromo.split("")
  let inverso=[]
  for(let i=0; i<newPalindromo.length; i++){
    inverso.push(newPalindromo[newPalindromo.length -(i+1)])
  }
  for(let i=0; i<newPalindromo.length; i++){
    if(newPalindromo[i]!= inverso[i]){
      return false
    }
  }
  return true
}
console.log(palindrome("calac"))
console.log(palindrome("hola"))
module.exports = { palindrome };
