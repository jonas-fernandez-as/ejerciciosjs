export default function clockAlarm(clock,alarmSound,timeInit,timeStop,alarmStart,alarmStop){
    
 const d=document

 function reloj (){

  let fecha=new Date().toLocaleTimeString();
  d.querySelector(clock).innerHTML= fecha;
  }
        
 window.onload=function(){

  setInterval(() => {
   reloj() 
  }, 1000);
  }
    

 d.addEventListener("click",(e)=>{
        
  if(e.target.matches(timeInit)){
        
   d.querySelector(clock).classList.remove("display-none");
       
   d.querySelector(timeInit).disabled=true; 

 }
 

  if(e.target.matches(timeStop)){

   d.querySelector(clock).classList.add("display-none");

   d.querySelector(timeInit).disabled=false 
 }

 if(e.target.matches(alarmStart)){
   

   d.querySelector(alarmSound).play()
   
   d.querySelector(alarmStart).disabled=true;


 }

  if(e.target.matches(alarmStop)){

    d.querySelector(alarmSound).pause()
    
    d.querySelector(alarmSound).currentTime=0;
   
    d.querySelector(alarmStart).disabled=false
    
  }
  
 
  

 })
}

