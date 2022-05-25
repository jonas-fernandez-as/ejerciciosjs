const d=document
export default function scrollbutton (button) {

   addEventListener("scroll",(e)=>{
    
    if(window.scrollY < 400){
        console.log(window.scrollY)
        d.querySelector(button).classList.add("opacity")
        d.querySelector(button).classList.remove("visible")

    }


    if(window.scrollY > 400){
        console.log(window.scrollY)
        d.querySelector(button).classList.remove("opacity")
        d.querySelector(button).classList.add("visible")
    }

   })

   /*addEventListener("click",(e))
   if(e.target.matches(button))*/


}