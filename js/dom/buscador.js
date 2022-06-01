const d = document,
      w=window,
      n= navigator

export default function(input,objetos) {
   let $search= d.querySelector(input)
       
       d.addEventListener("keyup",(e)=>{
         if (e.target.matches(input)){
         
         let   contenido=$search.value.toLowerCase()
         d.querySelectorAll(objetos).forEach((element) => element.textContent.toLowerCase().includes(contenido)
         ?element.classList.remove("opacity1")
         :element.classList.add("opacity1"))
         }
  
});
}
