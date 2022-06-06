const d=document,
 w=window,
 n=navigator
 
 export default function spyScroll(selector){
   let seccion1= d.querySelector(".seccion1"),
    seccion2= d.querySelector(".seccion2"),
    seccion3= d.querySelector(".seccion3"),
    seccion4= d.querySelector(".seccion4"),
    seccion5= d.querySelector(".seccion5"),
    seccion6= d.querySelector(".seccion6"),
    seccion7= d.querySelector(".seccion7"),
    seccion8= d.querySelector(".seccion8"),
    seccion9= d.querySelector(".seccion9"),
    seccion10= d.querySelector(".seccion10"),
    seccion11= d.querySelector(".seccion11"),
    seccion12= d.querySelector(".seccion12"),
    seccion13= d.querySelector(".seccion13")



   const scrolea=(entradas,observador) => {
       //console.log(entradas)
       //console.log(observador)
    entradas.forEach(entrada => {
     if (entrada.isIntersecting){
        let  enlace = entrada.target.getAttribute("n");
        d.getElementById(enlace).classList.add("scroll-spy")
         
                            
        //console.log(enlace)
      
     }
     
     else{ 
       let  enlace = entrada.target.getAttribute("n");
       d.getElementById(enlace).classList.remove("scroll-spy")
     
    }
     
    
                                    
      
       //console.log(`La entrada ${entrada} esta en el viewport`)
       });
   }

 const observador=new IntersectionObserver(scrolea, {
     root: null,
     rootMargin: '0px 0px 0px 0px',
     threshold: 0.9
 });

 observador.observe(seccion1)
 observador.observe(seccion2)
 observador.observe(seccion3)
 observador.observe(seccion4)
 observador.observe(seccion5)
 observador.observe(seccion6)
 observador.observe(seccion7)
 observador.observe(seccion8)
 observador.observe(seccion9)
 observador.observe(seccion10)
 observador.observe(seccion11)
 observador.observe(seccion12)
 observador.observe(seccion13)














 let breakpoint= w.matchMedia("(min-width:1200px)");

   const responsive=(e)=>{
      if  (e.matches){
         d.querySelector(selector).classList.add("menu-desktop");
         d.querySelector(selector).classList.remove("menu-container");
      }else{
         d.querySelector(selector).classList.remove("menu-desktop");
         d.querySelector(selector).classList.add("menu-container")

     }
     };

     breakpoint.addListener(responsive);
     responsive(breakpoint);
         
    
}



    
  