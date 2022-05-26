const d=document
export default function scrollbutton (button) {

   addEventListener("scroll",(e)=>{
    
    if(window.scrollY < 400){
        
        d.querySelector(button).classList.add("opacity")
        d.querySelector(button).classList.remove("visible")

    }


    if(window.scrollY > 400){
        
        d.querySelector(button).classList.remove("opacity")
        d.querySelector(button).classList.add("visible")
    }

   })

  


}