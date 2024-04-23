/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer(n) {
  //Escribe tu codigo aqui
  for(let i=n-1; i<=n; i--){
    if(i<0){
      return console.log("¡¡Ring!!")
    }else{
      console.log(i)
    }
  }
}
timer(15)

module.exports = { timer };
