/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

function adivinarContrasena(intentos, contraseña) {
  //Escribe tu codigo aqui
  for(let i=0; i< intentos.length; i++){
    if(intentos[i]!==contraseña){
      console.log("Contraseña incorrecta, intentelo de nuevo")
    }else{
      return console.log("Contraseña correcta, bienvenido")
      
    }
    
  }
  if(intentos[0]!==contraseña && intentos[1]!==contraseña && intentos[2]!== contraseña){
    return console.log("Has agotado tus intentos")
  }
}
console.log(adivinarContrasena([1,1,"1"],"eureka"))
module.exports = { adivinarContrasena };
