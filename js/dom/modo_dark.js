const d=document
 

export default function darkMode(lightBtn,darkBtn){

    d.addEventListener("click",(e)=>{
        if(e.target.matches(`${lightBtn} *`)){
          
            d.querySelector("body").style.setProperty("background-color","#FFF");
            d.querySelector(lightBtn).classList.toggle("opacity");
            d.querySelector(darkBtn).classList.remove("opacity")

            d.querySelectorAll("[dark-mode]").forEach((el)=> (el).style.setProperty("color","#000"));
            
        }

        if(e.target.matches(`${darkBtn} *`)){
            
            d.querySelector("body").style.setProperty("background-color","#222");
            d.querySelector(darkBtn).classList.toggle("opacity");
            d.querySelector(lightBtn).classList.remove("opacity")
           
           
                
                              
                d.querySelectorAll("[dark-mode]").forEach((el)=> (el).style.setProperty("color","#f7df1e"));
                     
                
                               
                           
                
            } 
         
        })


        
        
    } 
