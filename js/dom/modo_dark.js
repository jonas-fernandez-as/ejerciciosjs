const d=document


export default function darkMode(darkBtn,classDark){
      
         
    let moon= "🌙", 
    sun="☀️"   

    const lightmode=()=>{
        d.querySelectorAll("[dark-mode]").forEach(el=>el.classList.remove(classDark));
        d.querySelector(darkBtn).textContent=moon;
        localStorage.setItem("theme","light")

    },

    darkmode=()=>{
        d.querySelectorAll("[dark-mode]").forEach((el)=> (el).classList.add(classDark));
        d.querySelector(darkBtn).textContent=sun;
        localStorage.setItem("theme","dark")
      }
      
    d.addEventListener("click",(e)=>{
        
       
        if(e.target.matches(darkBtn) && d.querySelector(darkBtn).textContent===moon)
        
        darkmode()
        
        else lightmode()
      })

    d.addEventListener("DOMContentLoaded",(e)=>{
        if(localStorage.getItem("theme")===null)
        localStorage.setItem("theme","light")

        if(localStorage.getItem("theme")==="light")
        lightmode();

        if(localStorage.getItem("theme")==="dark")
        darkmode();
    })

        
        
 } 
