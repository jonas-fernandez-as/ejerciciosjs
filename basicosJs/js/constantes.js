export  const PI =Math.PI;


export let usuario="Jonas"; 
//no se puede exportar por default const y y variables pero si funciones EXPRESADAS
//no sabe que va a almacenar , primero debo declararla y despues la exporto por default

let password="qwerty";
export default password

const hello= ()=> console.log("Hola")


export  function saludar(){
 console.log("Hola modulos +ES6")
}