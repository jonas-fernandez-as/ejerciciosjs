const d=document

export default function conexionAlert(alertP,alertR){


 window.addEventListener("online",(e)=>{
  if((window.navigator.onLine)){
   
      
      let con= setTimeout(() => {
          d.querySelector(alertR).classList.toggle("opacity")
          setTimeout(() => {
            d.querySelector(alertR).classList.toggle("opacity")
            
          }, 3000);
        
          clearTimeout(con)
        }, 3000);
        
  }

     
 })
 

 window.addEventListener("offline",(e)=>{
    if(!(window.navigator.onLine)){
        

        let des= setTimeout(() => {
            d.querySelector(alertP).classList.toggle("opacity")
            setTimeout(() => {
                d.querySelector(alertP).classList.toggle("opacity")
                
            }, 3000);
            clearTimeout(des)
        }, 3000);
        
        
        }    
    }
  )
  
 
 
}