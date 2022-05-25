const d=document


export function countDown(place,date,message){
   // if(!(date instanceof Date)){console.error(`"${date}" NO es una fecha`)}
   // if(date === null || date === undefined) {`No ingresaste ningun dato`}
    
    let contador= setInterval(() => {
        
     
     let countDownDate= new Date(date).getTime()-new Date().getTime();

      let days= Math.floor(countDownDate/(1000*60*60*24)),
          
          hours= Math.floor((countDownDate %(1000*60*60*24))/(1000*60*60)),
          
          minutes= Math.floor((countDownDate% (1000*60*60))/(1000*60)),
          
          seconds= Math.floor((countDownDate% (1000*60))/1000)

 
          let $count=`Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`

          if (countDownDate< 0) {
            $count= `🎂🎂 &#128513 &#128536 &#128513 	
            &#127881; 	
            &#127881;  ${message}  	
            &#127881;	
            &#127881; &#128513 &#128536 &#128513 🎂🎂`
            clearInterval(contador)
        }
                                
          
    
          d.querySelector(place).innerHTML=`<H3>${$count} </h3> `
    }, 1000);   

}
    

  
