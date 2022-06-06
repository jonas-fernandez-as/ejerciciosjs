const d=document,
 w=window,
 n=navigator

 export default function formValidator(form){
  let formulary=d.querySelector(form)   
  
  d.addEventListener("keyup",(e)=>{
   let name= formulary.nombre.value,
    mail=formulary.email.value,
    affair=formulary.asunto.value,
    comment=formulary.comentarios.value

        //console.info(mail)
        //console.info(((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,250}$/).test(comment))===true)
      
  
  if(name===""&&((/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}/).test(name))===false) {
   d.querySelector(".validator-nombre").classList.add("opacity")

  }
  if(((/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}/).test(name))===false){
   
    d.querySelector(".validator-nombre").classList.remove("opacity")
   
   
  }
  if(((/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,15}/).test(name))===true){
   d.querySelector(".validator-nombre").classList.add("opacity")

  
  
  
  }
 
  if(mail===""&&((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(mail))===false ){
    d.querySelector(".validator-email").classList.add("opacity")

  }
  if(((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(mail))===false){

    d.querySelector(".validator-email").classList.remove("opacity")

  }
  if(((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(mail))===true){
    d.querySelector(".validator-email").classList.add("opacity")

  }



  

  if(affair==="" && ((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,50}$/).test(affair))===false ){
    d.querySelector(".validator-asunto").classList.add("opacity")

  }
  if(((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,50}$/).test(affair))===false){
    d.querySelector(".validator-asunto").classList.remove("opacity")

  }
  if(((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,50}$/).test(affair))===true){
    d.querySelector(".validator-asunto").classList.add("opacity")

  }





  if(comment==="" && ((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,50}$/).test(comment))===false ){
    d.querySelector(".validator-comentarios").classList.add("opacity")

  }
  if(((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,250}$/).test(comment))===false){
    d.querySelector(".validator-comentarios").classList.remove("opacity")

  }
  if(((/^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ0-9 ]{2,250}$/).test(comment))===true){
    d.querySelector(".validator-comentarios").classList.add("opacity")

  }


  })
}
